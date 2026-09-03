import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.texas;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency texas",
    "hvac company in texas",
    "commercial hvac companies in texas",
    "hvac marketing companies near me",
    "marketing for hvac companies",
    "hvac digital marketing agency",
    "hvac local marketing services",
    "hvac seo houston",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function TexasHvacPage() {
  return <StatePage state={state} />;
}
