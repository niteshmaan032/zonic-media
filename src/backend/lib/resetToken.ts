import { createHmac, randomBytes } from "crypto";
import { RESET_TOKEN_BYTES } from "./adminAuth";

function getResetSecret() {
  const secret = process.env.RESET_PASSWORD_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "RESET_PASSWORD_SECRET must be configured with at least 32 characters.",
    );
  }

  return secret;
}

export function createRawResetToken() {
  return randomBytes(RESET_TOKEN_BYTES).toString("hex");
}

export function hashResetToken(token: string) {
  return createHmac("sha256", getResetSecret()).update(token).digest("hex");
}
