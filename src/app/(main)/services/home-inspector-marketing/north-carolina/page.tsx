import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT["north-carolina"];

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "home inspector marketing north carolina",
    "home inspector charlotte nc",
    "home inspector raleigh nc",
    "home inspections in nc",
    "nc licensed home inspectors",
    "home inspectors wilmington nc",
    "home inspector marketing",
    "home inspector seo",
  ],
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function NorthCarolinaStatePage() {
  return <StatePage state={state} />;
}
