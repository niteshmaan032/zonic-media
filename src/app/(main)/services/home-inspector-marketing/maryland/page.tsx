import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT["maryland"];

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: state.keywords,
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function MarylandStatePage() {
  return <StatePage state={state} />;
}
