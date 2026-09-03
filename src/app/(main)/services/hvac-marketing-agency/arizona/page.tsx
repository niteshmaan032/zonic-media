import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.arizona;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "hvac marketing agency arizona",
    "hvac marketing companies near me",
    "hvac companies phoenix az",
    "hvac companies mesa az",
    "marketing for hvac companies",
    "hvac local marketing services",
    "hvac digital marketing agency",
    "hvac seo phoenix",
  ],
  alternates: {
    canonical: `/services/hvac-marketing-agency/${state.slug}`,
  },
};

export default function ArizonaHvacPage() {
  return <StatePage state={state} />;
}
