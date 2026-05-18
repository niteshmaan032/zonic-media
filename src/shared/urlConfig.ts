const PRODUCTION_DOMAIN = "zonicll.com";

function firstConfiguredEnv(keys: string[]) {
  for (const key of keys) {
    const value = process.env[key]?.trim();

    if (value) {
      return value;
    }
  }

  return "";
}

export function normalizeBaseUrl(url: string) {
  return url.trim().replace(/\/+$/, "");
}

function requireConfiguredUrl(url: string, envNames: string) {
  if (url) {
    return normalizeBaseUrl(url);
  }

  throw new Error(`${envNames} must be configured.`);
}

export function getAppUrl() {
  return requireConfiguredUrl(
    firstConfiguredEnv([
      "APP_URL",
      "SITE_URL",
      "NEXTAUTH_URL",
      "NEXT_PUBLIC_APP_URL",
    ]),
    "APP_URL, SITE_URL, NEXTAUTH_URL, or NEXT_PUBLIC_APP_URL",
  );
}

export function getSiteUrl() {
  return requireConfiguredUrl(
    firstConfiguredEnv(["SITE_URL", "APP_URL", "NEXT_PUBLIC_APP_URL"]),
    "SITE_URL, APP_URL, or NEXT_PUBLIC_APP_URL",
  );
}

export function getApiUrl() {
  const apiUrl = firstConfiguredEnv(["NEXT_PUBLIC_API_URL", "API_URL"]);
  return apiUrl ? normalizeBaseUrl(apiUrl) : getAppUrl();
}

export function getAdminCookieDomain() {
  const configuredDomain = process.env.ADMIN_COOKIE_DOMAIN?.trim();

  if (configuredDomain) {
    return configuredDomain.replace(/^\.+/, "");
  }

  const appUrl = firstConfiguredEnv([
    "APP_URL",
    "SITE_URL",
    "NEXTAUTH_URL",
    "NEXT_PUBLIC_APP_URL",
  ]);

  if (process.env.NODE_ENV !== "production" || !appUrl) {
    return undefined;
  }

  try {
    const hostname = new URL(appUrl).hostname;

    if (hostname === PRODUCTION_DOMAIN || hostname === `www.${PRODUCTION_DOMAIN}`) {
      return PRODUCTION_DOMAIN;
    }
  } catch {
    return undefined;
  }

  return undefined;
}
