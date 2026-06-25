import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.california;

export const metadata: Metadata = {
  title: state.metaTitle,
  description: state.metaDescription,
  alternates: {
    canonical: `/services/plumbing-marketing-agency/${state.slug}`,
  },
};

export default function CaliforniaPlumbingPage() {
  return <StatePage state={state} />;
}
