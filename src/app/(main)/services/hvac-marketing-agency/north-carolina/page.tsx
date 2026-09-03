import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT["north-carolina"];

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency north carolina",
    "hvac companies in nc",
    "hvac company charlotte nc",
    "commercial hvac charlotte nc",
    "hvac marketing companies near me",
    "marketing for hvac companies",
    "hvac digital marketing agency",
    "hvac seo raleigh",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function NorthCarolinaHvacPage() {
  return <StatePage state={state} />;
}
