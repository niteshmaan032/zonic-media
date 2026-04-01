import dental from "./dental.json";

export const landingPages = {
  dental,
};

export type LandingPageSlug = keyof typeof landingPages;
