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

const validDateSchema = z.string().refine((value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00`);
  return !Number.isNaN(date.getTime());
}, "Enter a valid date.");

export const createBlogSchema = z.object({
  serviceTitle: z.string().trim().min(1, "Service title is required.").max(160),
  blogTitle: z.string().trim().min(1, "Blog title is required.").max(220),
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
  ]);
}

export function toSafeBlog(blog: BlogDocument): SafeBlog {
  return {
    id: blog._id.toHexString(),
    serviceTitle: blog.serviceTitle,
    blogTitle: blog.blogTitle,
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
