import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.california;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency california",
    "plumbing companies in california",
    "plumbing services los angeles commercial",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "marketing for plumbing contractors",
    "plumber marketing company",
    "plumbing seo california",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function CaliforniaPlumbingPage() {
  return <StatePage state={state} />;
}
