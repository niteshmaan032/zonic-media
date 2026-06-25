import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.georgia;

export const metadata: Metadata = {
  title: state.metaTitle,
  description: state.metaDescription,
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function GeorgiaStatePage() {
  return <StatePage state={state} />;
}
