type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

const buckets = new Map<string, RateLimitEntry>();

export function checkRateLimit({ key, limit, windowMs }: RateLimitOptions) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);

  return { allowed: true, retryAfterSeconds: 0 };
}

// This in-memory limiter protects a single Node.js process. Use Redis or
// Upstash for production deployments that run multiple instances.
export function rateLimitResponse(retryAfterSeconds: number) {
  return {
    success: false,
    message: "Too many requests. Please try again shortly.",
    retryAfterSeconds,
  };
}
