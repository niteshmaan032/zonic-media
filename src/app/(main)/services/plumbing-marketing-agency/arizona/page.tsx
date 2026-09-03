import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.arizona;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "plumbing marketing agency arizona",
    "plumbing companies in arizona",
    "plumbing companies phoenix az",
    "commercial plumbing phoenix arizona",
    "plumbing marketing near me",
    "marketing for plumbing company online",
    "plumber marketing company",
    "plumbing seo phoenix",
  ],
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function ArizonaPlumbingPage() {
  return <StatePage state={state} />;
}
