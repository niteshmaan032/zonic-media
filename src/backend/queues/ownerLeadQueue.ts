import type { LeadPayload } from "@/backend/controllers/leadsController";
import { getApiUrl, normalizeBaseUrl } from "@/shared/urlConfig";

type QueueResult = {
  queued: boolean;
};

export const enqueueOwnerLeadEmail = async (
  payload: LeadPayload,
): Promise<QueueResult> => {
  const qstashUrl = process.env.QSTASH_URL;
  const qstashToken = process.env.QSTASH_TOKEN;
  const queueSecret = process.env.QSTASH_QUEUE_SECRET;
  const delaySeconds = Number(process.env.OWNER_LEAD_DELAY_SECONDS ?? "120");

  if (!qstashUrl || !qstashToken || !queueSecret) {
    return { queued: false };
  }

  const legacyAppBaseUrl = process.env.APP_BASE_URL?.trim();
  const appBaseUrl = legacyAppBaseUrl
    ? normalizeBaseUrl(legacyAppBaseUrl)
    : getApiUrl();
  const targetUrl = `${normalizeBaseUrl(appBaseUrl)}/api/internal/owner-lead`;
  const publishUrl = `${normalizeBaseUrl(qstashUrl)}/v2/publish/${encodeURIComponent(targetUrl)}`;

  const response = await fetch(publishUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${qstashToken}`,
      "Content-Type": "application/json",
      "Upstash-Delay": `${Math.max(1, delaySeconds)}s`,
      "Upstash-Forward-x-queue-secret": queueSecret,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to enqueue owner lead email. Status: ${response.status}`);
  }

  return { queued: true };
};
