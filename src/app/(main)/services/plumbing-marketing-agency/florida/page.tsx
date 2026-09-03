import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.florida;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency florida",
    "plumbing services in florida",
    "plumbing companies orlando florida",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "marketing for plumbing contractors",
    "plumber marketing company",
    "plumbing seo tampa",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function FloridaPlumbingPage() {
  return <StatePage state={state} />;
}
