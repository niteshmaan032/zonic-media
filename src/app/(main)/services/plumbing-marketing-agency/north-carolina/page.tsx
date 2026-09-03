import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT["north-carolina"];

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency north carolina",
    "plumbing company charlotte nc",
    "plumbing services charlotte north carolina",
    "commercial plumbing charlotte nc",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "plumber marketing company",
    "plumbing seo raleigh",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function NorthCarolinaPlumbingPage() {
  return <StatePage state={state} />;
}
