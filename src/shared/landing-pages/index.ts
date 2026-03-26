import roofing from "./roofing.json";
import dental from "./dental.json";

export const landingPages = {
  roofing,
  dental,
};

export type LandingPageSlug = keyof typeof landingPages;
