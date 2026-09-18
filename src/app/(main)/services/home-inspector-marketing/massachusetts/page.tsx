import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT["massachusetts"];

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: state.keywords,
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function MassachusettsStatePage() {
  return <StatePage state={state} />;
}
