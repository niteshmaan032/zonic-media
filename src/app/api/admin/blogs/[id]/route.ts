import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {
  FEATURED_IMAGE_MAX_BYTES,
  FEATURED_IMAGE_TYPES,
  ensureBlogIndexes,
  getBlogsCollection,
  isSlugTaken,
  revalidatePublicBlogCache,
  toSafeBlog,
  updateBlogSchema,
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
  if (!token) return null;
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
  const dataUris = Array.from(html.matchAll(tiptapDataImageRegex), (m) => m[2]);
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const admin = await requireAdmin(request);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID." },
        { status: 400 },
      );
    }

    await ensureBlogIndexes();
    const blogs = await getBlogsCollection();
    const blog = await blogs.findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, blog: toSafeBlog(blog) });
  } catch (error) {
    console.error("Failed to fetch blog.", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch blog." },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const rollbackIds: string[] = [];

  try {
    const admin = await requireAdmin(request);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID." },
        { status: 400 },
      );
    }

    await ensureBlogIndexes();
    const blogs = await getBlogsCollection();
    const existing = await blogs.findOne({ _id: new ObjectId(id) });

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 },
      );
    }

    const formData = await request.formData();
    const parsed = updateBlogSchema.safeParse({
      serviceTitle: getStringField(formData, "serviceTitle"),
      blogTitle: getStringField(formData, "blogTitle"),
      slug: getStringField(formData, "slug"),
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

    if (await isSlugTaken(parsed.data.slug, id)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This Blog URL is already in use. Please choose a different one.",
        },
        { status: 409 },
      );
    }

    // Handle featured image: replace only if a new file is provided
    let featuredImageUrl = existing.featuredImageUrl;
    let featuredImagePublicId = existing.featuredImagePublicId;
    let oldFeaturedPublicId: string | null = null;
    const newFeaturedImage = formData.get("featuredImage");

    if (newFeaturedImage instanceof File && newFeaturedImage.size > 0) {
      if (
        !FEATURED_IMAGE_TYPES.includes(
          newFeaturedImage.type as (typeof FEATURED_IMAGE_TYPES)[number],
        )
      ) {
        return NextResponse.json(
          { success: false, message: "Featured image must be a JPG or PNG file." },
          { status: 400 },
        );
      }

      if (newFeaturedImage.size > FEATURED_IMAGE_MAX_BYTES) {
        return NextResponse.json(
          { success: false, message: "Featured image must be 500 KB or smaller." },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await newFeaturedImage.arrayBuffer());
      const upload = await uploadBufferToCloudinary(buffer, {
        folder: FEATURED_IMAGE_FOLDER,
      });
      rollbackIds.push(upload.public_id);
      oldFeaturedPublicId = existing.featuredImagePublicId;
      featuredImageUrl = upload.secure_url;
      featuredImagePublicId = upload.public_id;
    }

    // Handle inline images: upload new data URIs, diff removed Cloudinary images
    const oldContentIds = existing.contentImagePublicIds ?? [];
    const { html: descriptionHtml, contentImagePublicIds: newContentIds } =
      await uploadTiptapImages(parsed.data.descriptionHtml, rollbackIds);

    // Old content images still referenced in the new HTML are kept; the rest are removed
    const keptContentIds = oldContentIds.filter((pid) =>
      descriptionHtml.includes(pid),
    );
    const removedContentIds = oldContentIds.filter(
      (pid) => !descriptionHtml.includes(pid),
    );
    const contentImagePublicIds = [...keptContentIds, ...newContentIds];

    // Preserve publishedAt: set it only when first publishing, never clear it on downgrade
    const now = new Date();
    const publishedAt =
      parsed.data.status === "published" && !existing.publishedAt
        ? now
        : existing.publishedAt;

    await blogs.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          serviceTitle: parsed.data.serviceTitle,
          blogTitle: parsed.data.blogTitle,
          slug: parsed.data.slug,
          publishDate: parsed.data.publishDate,
          authorName: parsed.data.authorName,
          featuredImageUrl,
          featuredImagePublicId,
          contentImagePublicIds,
          descriptionHtml,
          status: parsed.data.status,
          updatedAt: now,
          publishedAt,
        },
      },
    );

    // Clean up replaced/removed Cloudinary assets after successful DB update
    const toDelete = removedContentIds;
    if (oldFeaturedPublicId) toDelete.push(oldFeaturedPublicId);
    await Promise.allSettled(toDelete.map((pid) => deleteCloudinaryAsset(pid)));

    const updated = await blogs.findOne({ _id: new ObjectId(id) });
    revalidatePublicBlogCache(existing.slug ?? parsed.data.slug);
    if (existing.slug && existing.slug !== parsed.data.slug) {
      revalidatePublicBlogCache(parsed.data.slug);
    }

    return NextResponse.json({
      success: true,
      message:
        parsed.data.status === "published"
          ? "Blog updated and published."
          : "Blog updated and saved as draft.",
      blog: updated ? toSafeBlog(updated) : null,
    });
  } catch (error) {
    await Promise.allSettled(rollbackIds.map((pid) => deleteCloudinaryAsset(pid)));
    console.error("Failed to update blog.", error);
    return NextResponse.json(
      { success: false, message: "Unable to update blog." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const admin = await requireAdmin(request);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID." },
        { status: 400 },
      );
    }

    await ensureBlogIndexes();
    const blogs = await getBlogsCollection();
    const blog = await blogs.findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 },
      );
    }

    // Delete from MongoDB first; orphaned Cloudinary assets are acceptable
    await blogs.deleteOne({ _id: new ObjectId(id) });

    if (blog.status === "published") {
      revalidatePublicBlogCache(blog.slug);
    }

    const publicIds = [
      blog.featuredImagePublicId,
      ...(blog.contentImagePublicIds ?? []),
    ].filter(Boolean);

    await Promise.allSettled(publicIds.map((pid) => deleteCloudinaryAsset(pid)));

    return NextResponse.json({ success: true, message: "Blog deleted." });
  } catch (error) {
    console.error("Failed to delete blog.", error);
    return NextResponse.json(
      { success: false, message: "Unable to delete blog." },
      { status: 500 },
    );
  }
}
