import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.georgia;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency georgia",
    "plumbing companies in atlanta ga",
    "plumbing services atlanta georgia",
    "commercial plumbers in georgia",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "plumber marketing company",
    "plumbing seo atlanta",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function GeorgiaPlumbingPage() {
  return <StatePage state={state} />;
}
