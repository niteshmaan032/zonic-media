import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.illinois;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency illinois",
    "plumbing companies in illinois",
    "plumbing company chicago il",
    "plumbing company chicago suburbs",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "plumber marketing company",
    "plumbing seo chicago",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function IllinoisPlumbingPage() {
  return <StatePage state={state} />;
}
