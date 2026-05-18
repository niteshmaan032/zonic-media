import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {
  BLOG_STATUSES,
  FEATURED_IMAGE_MAX_BYTES,
  FEATURED_IMAGE_TYPES,
  createBlogSchema,
  ensureBlogIndexes,
  getBlogsCollection,
  toSafeBlog,
  type BlogDocument,
  type BlogStatus,
} from "@/backend/lib/blogs";
import {
  deleteCloudinaryAsset,
  uploadBufferToCloudinary,
  uploadDataUriToCloudinary,
} from "@/backend/lib/cloudinary";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
} from "@/backend/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_IMAGE_FOLDER = "zonic/blogs/content";
const FEATURED_IMAGE_FOLDER = "zonic/blogs/featured";
const tiptapDataImageRegex =
  /<img\b[^>]*\bsrc=(["'])(data:image\/(?:png|jpe?g|webp|gif);base64,[^"']+)\1[^>]*>/gi;
const remainingDataImageRegex = /\bsrc=(["'])data:image\//i;

async function requireAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return getAdminFromAuthToken(token);
}

function getStringField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

async function uploadTiptapImages(
  html: string,
  rollbackIds: string[],
): Promise<{ html: string; contentImagePublicIds: string[] }> {
  const dataUris = Array.from(html.matchAll(tiptapDataImageRegex), (match) => {
    return match[2];
  });
  const uniqueDataUris = Array.from(new Set(dataUris));
  const contentImagePublicIds: string[] = [];
  let processedHtml = html;

  for (const dataUri of uniqueDataUris) {
    const upload = await uploadDataUriToCloudinary(dataUri, {
      folder: CONTENT_IMAGE_FOLDER,
    });
    rollbackIds.push(upload.public_id);
    contentImagePublicIds.push(upload.public_id);
    processedHtml = processedHtml.split(dataUri).join(upload.secure_url);
  }

  if (remainingDataImageRegex.test(processedHtml)) {
    throw new Error("Unsupported inline image format.");
  }

  return { html: processedHtml, contentImagePublicIds };
}

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const statusParam = request.nextUrl.searchParams.get("status") ?? "all";
    const pageParam = Number(request.nextUrl.searchParams.get("page") ?? "1");
    const limitParam = Number(request.nextUrl.searchParams.get("limit") ?? "10");
    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const limit =
      Number.isFinite(limitParam) && limitParam > 0
        ? Math.min(limitParam, 50)
        : 10;
    const filter =
      BLOG_STATUSES.includes(statusParam as BlogStatus) &&
      statusParam !== "all"
        ? { status: statusParam as BlogStatus }
        : {};

    await ensureBlogIndexes();
    const blogs = await getBlogsCollection();
    const [total, rows] = await Promise.all([
      blogs.countDocuments(filter),
      blogs
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
    ]);

    return NextResponse.json({
      success: true,
      blogs: rows.map(toSafeBlog),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Failed to fetch admin blogs.", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch blogs." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const uploadedPublicIds: string[] = [];

  try {
    const admin = await requireAdmin(request);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const parsed = createBlogSchema.safeParse({
      serviceTitle: getStringField(formData, "serviceTitle"),
      blogTitle: getStringField(formData, "blogTitle"),
      publishDate: getStringField(formData, "publishDate"),
      authorName: getStringField(formData, "authorName"),
      descriptionHtml: getStringField(formData, "descriptionHtml"),
      status: getStringField(formData, "status"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid blog data.",
        },
        { status: 400 },
      );
    }

    const featuredImage = formData.get("featuredImage");

    if (!(featuredImage instanceof File) || featuredImage.size === 0) {
      return NextResponse.json(
        { success: false, message: "Featured image is required." },
        { status: 400 },
      );
    }

    if (
      !FEATURED_IMAGE_TYPES.includes(
        featuredImage.type as (typeof FEATURED_IMAGE_TYPES)[number],
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Featured image must be a JPG or PNG file.",
        },
        { status: 400 },
      );
    }

    if (featuredImage.size > FEATURED_IMAGE_MAX_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: "Featured image must be 500 KB or smaller.",
        },
        { status: 400 },
      );
    }

    const featuredImageBuffer = Buffer.from(await featuredImage.arrayBuffer());
    const featuredUpload = await uploadBufferToCloudinary(featuredImageBuffer, {
      folder: FEATURED_IMAGE_FOLDER,
    });
    uploadedPublicIds.push(featuredUpload.public_id);

    const { html: descriptionHtml, contentImagePublicIds } =
      await uploadTiptapImages(parsed.data.descriptionHtml, uploadedPublicIds);
    const now = new Date();
    const blog: BlogDocument = {
      _id: new ObjectId(),
      serviceTitle: parsed.data.serviceTitle,
      blogTitle: parsed.data.blogTitle,
      publishDate: parsed.data.publishDate,
      authorName: parsed.data.authorName,
      featuredImageUrl: featuredUpload.secure_url,
      featuredImagePublicId: featuredUpload.public_id,
      contentImagePublicIds,
      descriptionHtml,
      status: parsed.data.status,
      createdAt: now,
      updatedAt: now,
      publishedAt: parsed.data.status === "published" ? now : null,
    };

    await ensureBlogIndexes();
    const blogs = await getBlogsCollection();
    await blogs.insertOne(blog);

    return NextResponse.json(
      {
        success: true,
        message:
          parsed.data.status === "published"
            ? "Blog published successfully."
            : "Blog saved as draft.",
        blog: toSafeBlog(blog),
      },
      { status: 201 },
    );
  } catch (error) {
    await Promise.allSettled(
      uploadedPublicIds.map((publicId) => deleteCloudinaryAsset(publicId)),
    );

    console.error("Failed to create admin blog.", error);
    return NextResponse.json(
      { success: false, message: "Unable to save blog." },
      { status: 500 },
    );
  }
}
