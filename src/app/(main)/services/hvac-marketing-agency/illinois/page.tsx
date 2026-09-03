import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.illinois;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency illinois",
    "hvac companies in illinois",
    "hvac company bloomington il",
    "hvac marketing companies near me",
    "marketing for hvac companies",
    "hvac digital marketing agency",
    "hvac local marketing services",
    "hvac seo chicago",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function IllinoisHvacPage() {
  return <StatePage state={state} />;
}
