import { ObjectId, type Collection } from "mongodb";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { z } from "zod";
import { getMongoDb } from "./mongodb";

export const BLOG_COLLECTION = "blogs";
export const BLOG_STATUSES = ["draft", "published"] as const;
export const FEATURED_IMAGE_MAX_BYTES = 500 * 1024;
export const FEATURED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;
export const FEATURED_IMAGE_REQUIRED_WIDTH = 1200;
export const FEATURED_IMAGE_REQUIRED_HEIGHT = 675;
export const PUBLIC_BLOG_CACHE_TAG = "public-blogs";
export const PUBLIC_BLOG_REVALIDATE_SECONDS = 300;

export type BlogStatus = (typeof BLOG_STATUSES)[number];

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogDocument = {
  _id: ObjectId;
  serviceTitle: string;
  blogTitle: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  featuredImagePublicId: string;
  contentImagePublicIds: string[];
  descriptionHtml: string;
  faqs?: FaqItem[];
  status: BlogStatus;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
};

export type SafeBlog = {
  id: string;
  serviceTitle: string;
  blogTitle: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  contentImagePublicIds: string[];
  descriptionHtml: string;
  faqs: FaqItem[];
  status: BlogStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type PublicBlog = {
  id: string;
  serviceTitle: string;
  blogTitle: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  descriptionHtml: string;
  faqs: FaqItem[];
  excerpt: string;
  publishedAt: string | null;
};

declare global {
  var zonicBlogIndexesPromise: Promise<void> | undefined;
}

const validDateSchema = z.string().refine((value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00`);
  return !Number.isNaN(date.getTime());
}, "Enter a valid date.");

const slugSchema = z
  .string()
  .trim()
  .min(1, "Blog URL is required.")
  .max(200, "Blog URL must be at most 200 characters.")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Blog URL must use only lowercase letters, numbers, and hyphens (e.g. my-blog-post).",
  );

const faqItemSchema = z.object({
  question: z
    .string()
    .trim()
    .min(1, "FAQ question is required.")
    .max(300, "FAQ question must be at most 300 characters."),
  answer: z
    .string()
    .trim()
    .min(1, "FAQ answer is required.")
    .max(2000, "FAQ answer must be at most 2000 characters."),
});

export const faqsSchema = z
  .array(faqItemSchema)
  .max(30, "You can add at most 30 FAQs.")
  .default([]);

export const createBlogSchema = z.object({
  serviceTitle: z.string().trim().min(1, "Service title is required.").max(160),
  blogTitle: z.string().trim().min(1, "Blog title is required.").max(220),
  slug: slugSchema,
  metaTitle: z
    .string()
    .trim()
    .max(160, "Meta title must be at most 160 characters.")
    .optional()
    .default(""),
  metaDescription: z
    .string()
    .trim()
    .max(320, "Meta description must be at most 320 characters.")
    .optional()
    .default(""),
  publishDate: validDateSchema,
  authorName: z.string().trim().min(1, "Author name is required.").max(120),
  descriptionHtml: z
    .string()
    .trim()
    .min(1, "Blog description is required.")
    .refine(
      (html) =>
        html.replace(/data:image\/[^;]+;base64,[^"'`]*/g, "").length <=
        250_000,
      "Blog description is too long. Please reduce the amount of text content.",
    ),
  faqs: faqsSchema,
  status: z.enum(BLOG_STATUSES),
});

export const updateBlogSchema = createBlogSchema;

export async function getBlogsCollection(): Promise<Collection<BlogDocument>> {
  const db = await getMongoDb();
  return db.collection<BlogDocument>(BLOG_COLLECTION);
}

export async function ensureBlogIndexes() {
  globalThis.zonicBlogIndexesPromise ??= (async () => {
    const blogs = await getBlogsCollection();
    await Promise.all([
      blogs.createIndex({ createdAt: -1 }),
      blogs.createIndex({ updatedAt: -1 }),
      blogs.createIndex({ serviceTitle: 1 }),
      blogs.createIndex({ status: 1, createdAt: -1 }),
      blogs.createIndex({ status: 1, publishDate: -1, createdAt: -1 }),
      blogs.createIndex({ status: 1, slug: 1 }),
      blogs.createIndex({ slug: 1 }, { sparse: true, unique: true }),
    ]);
  })().catch((error) => {
    globalThis.zonicBlogIndexesPromise = undefined;
    throw error;
  });

  return globalThis.zonicBlogIndexesPromise;
}

type ImageDimensions = {
  width: number;
  height: number;
};

function getPngDimensions(bytes: Uint8Array): ImageDimensions | null {
  const pngSignature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

  if (
    bytes.length < 24 ||
    !pngSignature.every((value, index) => bytes[index] === value)
  ) {
    return null;
  }

  return {
    width:
      (bytes[16] << 24) |
      (bytes[17] << 16) |
      (bytes[18] << 8) |
      bytes[19],
    height:
      (bytes[20] << 24) |
      (bytes[21] << 16) |
      (bytes[22] << 8) |
      bytes[23],
  };
}

function getJpegDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    return null;
  }

  let offset = 2;
  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce,
    0xcf,
  ]);

  while (offset < bytes.length) {
    while (bytes[offset] === 0xff) {
      offset += 1;
    }

    const marker = bytes[offset];
    offset += 1;

    if (marker === 0xda || marker === 0xd9 || offset + 1 >= bytes.length) {
      break;
    }

    const segmentLength = (bytes[offset] << 8) + bytes[offset + 1];

    if (segmentLength < 2 || offset + segmentLength > bytes.length) {
      break;
    }

    if (startOfFrameMarkers.has(marker)) {
      return {
        height: (bytes[offset + 3] << 8) + bytes[offset + 4],
        width: (bytes[offset + 5] << 8) + bytes[offset + 6],
      };
    }

    offset += segmentLength;
  }

  return null;
}

function getWebpDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (
    bytes.length < 30 ||
    bytes[0] !== 0x52 ||
    bytes[1] !== 0x49 ||
    bytes[2] !== 0x46 ||
    bytes[3] !== 0x46 ||
    bytes[8] !== 0x57 ||
    bytes[9] !== 0x45 ||
    bytes[10] !== 0x42 ||
    bytes[11] !== 0x50
  ) {
    return null;
  }

  const chunk = String.fromCharCode(
    bytes[12],
    bytes[13],
    bytes[14],
    bytes[15],
  );

  if (chunk === "VP8X") {
    return {
      width: 1 + (bytes[24] | (bytes[25] << 8) | (bytes[26] << 16)),
      height: 1 + (bytes[27] | (bytes[28] << 8) | (bytes[29] << 16)),
    };
  }

  if (chunk === "VP8L") {
    if (bytes[20] !== 0x2f) {
      return null;
    }
    const b0 = bytes[21];
    const b1 = bytes[22];
    const b2 = bytes[23];
    const b3 = bytes[24];
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height:
        1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }

  if (chunk === "VP8 ") {
    if (bytes[23] !== 0x9d || bytes[24] !== 0x01 || bytes[25] !== 0x2a) {
      return null;
    }
    return {
      width: ((bytes[27] & 0x3f) << 8) | bytes[26],
      height: ((bytes[29] & 0x3f) << 8) | bytes[28],
    };
  }

  return null;
}

function getImageDimensions(
  bytes: Uint8Array,
  mimeType: string,
): ImageDimensions | null {
  if (mimeType === "image/png") {
    return getPngDimensions(bytes);
  }

  if (mimeType === "image/jpeg") {
    return getJpegDimensions(bytes);
  }

  if (mimeType === "image/webp") {
    return getWebpDimensions(bytes);
  }

  return null;
}

export function getFeaturedImageDimensionError(
  bytes: Uint8Array,
  mimeType: string,
) {
  const dimensions = getImageDimensions(bytes, mimeType);

  if (!dimensions) {
    return `Unable to read featured image dimensions. Upload a ${FEATURED_IMAGE_REQUIRED_WIDTH} x ${FEATURED_IMAGE_REQUIRED_HEIGHT} px JPG, PNG or WebP image.`;
  }

  if (
    dimensions.width !== FEATURED_IMAGE_REQUIRED_WIDTH ||
    dimensions.height !== FEATURED_IMAGE_REQUIRED_HEIGHT
  ) {
    return `Featured image must be exactly ${FEATURED_IMAGE_REQUIRED_WIDTH} x ${FEATURED_IMAGE_REQUIRED_HEIGHT} px. Uploaded image is ${dimensions.width} x ${dimensions.height} px.`;
  }

  return null;
}

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toSafeBlog(blog: BlogDocument): SafeBlog {
  return {
    id: blog._id.toHexString(),
    serviceTitle: blog.serviceTitle,
    blogTitle: blog.blogTitle,
    slug: blog.slug,
    metaTitle: blog.metaTitle,
    metaDescription: blog.metaDescription,
    publishDate: blog.publishDate,
    authorName: blog.authorName,
    featuredImageUrl: blog.featuredImageUrl,
    contentImagePublicIds: blog.contentImagePublicIds ?? [],
    descriptionHtml: blog.descriptionHtml,
    faqs: blog.faqs ?? [],
    status: blog.status,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
    publishedAt: blog.publishedAt?.toISOString() ?? null,
  };
}

export function stripBlogHtml(html: string) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeBlogHtml(html: string) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<\/?(?:object|embed|link|meta|base|form|input|button)\b[^>]*>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(?:href|src)\s*=\s*(["'])\s*javascript:[^"']*\1/gi, "")
    .replace(/<a\b[^>]*>/gi, (tag) => {
      const hrefMatch = tag.match(/\shref\s*=\s*(["'])(.*?)\1/i);
      const href = hrefMatch?.[2] ?? "";
      if (/^(tel:|mailto:|sms:)/i.test(href)) {
        return tag
          .replace(/\s+target\s*=\s*(["'])[^"']*\1/gi, "")
          .replace(/\s+rel\s*=\s*(["'])[^"']*\1/gi, "");
      }
      return tag;
    });
}

function toPublicBlog(blog: BlogDocument): PublicBlog {
  const plainText = stripBlogHtml(blog.descriptionHtml);

  return {
    id: blog._id.toHexString(),
    serviceTitle: blog.serviceTitle,
    blogTitle: blog.blogTitle,
    slug: blog.slug ?? toSlug(blog.blogTitle),
    metaTitle: blog.metaTitle,
    metaDescription: blog.metaDescription,
    publishDate: blog.publishDate,
    authorName: blog.authorName,
    featuredImageUrl: blog.featuredImageUrl,
    descriptionHtml: sanitizeBlogHtml(blog.descriptionHtml),
    faqs: blog.faqs ?? [],
    excerpt:
      plainText.length > 150 ? `${plainText.slice(0, 147).trim()}...` : plainText,
    publishedAt: blog.publishedAt?.toISOString() ?? null,
  };
}

async function getPublishedBlogsUncached(limit?: number) {
  await ensureBlogIndexes();
  const blogs = await getBlogsCollection();
  const query = blogs
    .find({ status: "published" })
    .sort({ publishDate: -1, createdAt: -1 });

  if (limit && limit > 0) {
    query.limit(limit);
  }

  const rows = await query.toArray();
  return rows.map(toPublicBlog);
}

async function getPublishedBlogBySlugUncached(
  slug: string,
): Promise<PublicBlog | null> {
  await ensureBlogIndexes();
  const blogs = await getBlogsCollection();

  // Try stored slug first (new blogs)
  let blog = await blogs.findOne({ slug, status: "published" });

  // Fallback: for older blogs without a stored slug, derive from title
  if (!blog) {
    const all = await blogs
      .find({
        status: "published",
        $or: [{ slug: { $exists: false } }, { slug: "" }],
      })
      .toArray();
    blog =
      all.find((b) => !b.slug && toSlug(b.blogTitle) === slug) ?? null;
  }

  return blog ? toPublicBlog(blog) : null;
}

const getCachedPublishedBlogs = unstable_cache(
  getPublishedBlogsUncached,
  ["published-blogs"],
  {
    revalidate: PUBLIC_BLOG_REVALIDATE_SECONDS,
    tags: [PUBLIC_BLOG_CACHE_TAG],
  },
);

const getCachedPublishedBlogBySlug = unstable_cache(
  getPublishedBlogBySlugUncached,
  ["published-blog-by-slug"],
  {
    revalidate: PUBLIC_BLOG_REVALIDATE_SECONDS,
    tags: [PUBLIC_BLOG_CACHE_TAG],
  },
);

export async function getPublishedBlogs(limit?: number) {
  return getCachedPublishedBlogs(limit);
}

export async function getPublishedBlogBySlug(slug: string) {
  return getCachedPublishedBlogBySlug(slug);
}

export function revalidatePublicBlogCache(slug?: string) {
  revalidateTag(PUBLIC_BLOG_CACHE_TAG, { expire: 0 });
  revalidatePath("/");
  revalidatePath("/blog");

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
}

export async function isSlugTaken(
  slug: string,
  excludeId?: string,
): Promise<boolean> {
  const blogs = await getBlogsCollection();
  const filter =
    excludeId && ObjectId.isValid(excludeId)
      ? { slug, _id: { $ne: new ObjectId(excludeId) } }
      : { slug };
  const count = await blogs.countDocuments(filter);
  return count > 0;
}
