import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.florida;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency florida",
    "hvac company in florida",
    "hvac marketing company tampa fl",
    "hvac companies in florida",
    "hvac marketing companies near me",
    "marketing for hvac companies",
    "hvac digital marketing agency",
    "hvac seo florida",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function FloridaHvacPage() {
  return <StatePage state={state} />;
}
