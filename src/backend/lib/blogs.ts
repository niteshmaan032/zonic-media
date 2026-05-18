import { ObjectId, type Collection } from "mongodb";
import { z } from "zod";
import { getMongoDb } from "./mongodb";

export const BLOG_COLLECTION = "blogs";
export const BLOG_STATUSES = ["draft", "published"] as const;
export const FEATURED_IMAGE_MAX_BYTES = 500 * 1024;
export const FEATURED_IMAGE_TYPES = ["image/jpeg", "image/png"] as const;

export type BlogStatus = (typeof BLOG_STATUSES)[number];

export type BlogDocument = {
  _id: ObjectId;
  serviceTitle: string;
  blogTitle: string;
  slug?: string;
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  featuredImagePublicId: string;
  contentImagePublicIds: string[];
  descriptionHtml: string;
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
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  contentImagePublicIds: string[];
  descriptionHtml: string;
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
  publishDate: string;
  authorName: string;
  featuredImageUrl: string;
  descriptionHtml: string;
  excerpt: string;
  publishedAt: string | null;
};

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

export const createBlogSchema = z.object({
  serviceTitle: z.string().trim().min(1, "Service title is required.").max(160),
  blogTitle: z.string().trim().min(1, "Blog title is required.").max(220),
  slug: slugSchema,
  publishDate: validDateSchema,
  authorName: z.string().trim().min(1, "Author name is required.").max(120),
  descriptionHtml: z
    .string()
    .trim()
    .min(1, "Blog description is required.")
    .max(250_000),
  status: z.enum(BLOG_STATUSES),
});

export const updateBlogSchema = createBlogSchema;

export async function getBlogsCollection(): Promise<Collection<BlogDocument>> {
  const db = await getMongoDb();
  return db.collection<BlogDocument>(BLOG_COLLECTION);
}

export async function ensureBlogIndexes() {
  const blogs = await getBlogsCollection();
  await Promise.all([
    blogs.createIndex({ createdAt: -1 }),
    blogs.createIndex({ status: 1, createdAt: -1 }),
    blogs.createIndex({ status: 1, publishDate: -1 }),
    blogs.createIndex({ slug: 1 }, { sparse: true, unique: true }),
  ]);
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
    publishDate: blog.publishDate,
    authorName: blog.authorName,
    featuredImageUrl: blog.featuredImageUrl,
    contentImagePublicIds: blog.contentImagePublicIds ?? [],
    descriptionHtml: blog.descriptionHtml,
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
    .replace(/\s(?:href|src)\s*=\s*(["'])\s*javascript:[^"']*\1/gi, "");
}

function toPublicBlog(blog: BlogDocument): PublicBlog {
  const plainText = stripBlogHtml(blog.descriptionHtml);

  return {
    id: blog._id.toHexString(),
    serviceTitle: blog.serviceTitle,
    blogTitle: blog.blogTitle,
    slug: blog.slug ?? toSlug(blog.blogTitle),
    publishDate: blog.publishDate,
    authorName: blog.authorName,
    featuredImageUrl: blog.featuredImageUrl,
    descriptionHtml: sanitizeBlogHtml(blog.descriptionHtml),
    excerpt:
      plainText.length > 150 ? `${plainText.slice(0, 147).trim()}...` : plainText,
    publishedAt: blog.publishedAt?.toISOString() ?? null,
  };
}

export async function getPublishedBlogs(limit?: number) {
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

export async function getPublishedBlogBySlug(
  slug: string,
): Promise<PublicBlog | null> {
  await ensureBlogIndexes();
  const blogs = await getBlogsCollection();

  // Try stored slug first (new blogs)
  let blog = await blogs.findOne({ slug, status: "published" });

  // Fallback: for older blogs without a stored slug, derive from title
  if (!blog) {
    const all = await blogs.find({ status: "published" }).toArray();
    blog =
      all.find((b) => !b.slug && toSlug(b.blogTitle) === slug) ?? null;
  }

  return blog ? toPublicBlog(blog) : null;
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
