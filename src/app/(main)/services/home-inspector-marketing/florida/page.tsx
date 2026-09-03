import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.florida;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "home inspector marketing florida",
    "home inspector in florida",
    "home inspection companies in florida",
    "home inspector tampa fl",
    "home inspector in orlando fl",
    "central florida home inspectors",
    "home inspector marketing",
    "home inspector seo",
  ],
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function FloridaStatePage() {
  return <StatePage state={state} />;
}
