import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.california;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency california",
    "hvac marketing agency los angeles",
    "hvac companies in california",
    "hvac marketing companies near me",
    "marketing for hvac companies",
    "hvac digital marketing agency",
    "hvac local marketing services",
    "hvac seo california",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function CaliforniaHvacPage() {
  return <StatePage state={state} />;
}
