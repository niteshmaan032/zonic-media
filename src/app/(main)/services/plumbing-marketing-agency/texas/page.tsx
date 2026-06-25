import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.texas;

export const metadata: Metadata = {
  title: state.metaTitle,
  description: state.metaDescription,
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function TexasPlumbingPage() {
  return <StatePage state={state} />;
}
