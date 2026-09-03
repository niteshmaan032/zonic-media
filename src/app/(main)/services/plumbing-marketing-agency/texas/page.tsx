import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.texas;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency texas",
    "plumbing company in texas",
    "plumbing companies austin tx",
    "plumbing companies houston commercial",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "plumber marketing company",
    "plumbing seo houston",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function TexasPlumbingPage() {
  return <StatePage state={state} />;
}
