import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.georgia;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "home inspector marketing georgia",
    "home inspectors in georgia",
    "home inspectors atlanta ga",
    "home inspections alpharetta ga",
    "home inspectors savannah ga",
    "georgia home inspection services",
    "home inspector marketing",
    "home inspector seo",
  ],
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function GeorgiaStatePage() {
  return <StatePage state={state} />;
}
