import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

let configured = false;

function ensureCloudinaryConfigured() {
  if (configured) {
    return;
  }

  if (!process.env.CLOUDINARY_URL) {
    throw new Error("CLOUDINARY_URL is not configured.");
  }

  cloudinary.config({ secure: true });
  configured = true;
}

export async function uploadBufferToCloudinary(
  buffer: Buffer,
  options: { folder: string },
) {
  ensureCloudinaryConfigured();

  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed."));
          return;
        }

        resolve(result);
      },
    );

    stream.end(buffer);
  });
}

export async function uploadDataUriToCloudinary(
  dataUri: string,
  options: { folder: string },
) {
  ensureCloudinaryConfigured();

  return cloudinary.uploader.upload(dataUri, {
    folder: options.folder,
    resource_type: "image",
  });
}

export async function deleteCloudinaryAsset(publicId: string) {
  ensureCloudinaryConfigured();

  await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
}

export function extractPublicIdFromCloudinaryUrl(url: string): string | null {
  const uploadIdx = url.indexOf("/upload/");
  if (uploadIdx === -1) return null;
  let path = url.slice(uploadIdx + "/upload/".length);
  path = path.replace(/^v\d+\//, "");
  path = path.replace(/\.\w+$/, "");
  return path || null;
}
