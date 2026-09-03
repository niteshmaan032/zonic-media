import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.california;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "home inspector marketing california",
    "home inspectors los angeles",
    "home inspection san diego",
    "bay area home inspectors",
    "home inspectors in sacramento",
    "certified home inspector california",
    "home inspector marketing",
    "home inspector seo",
  ],
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function CaliforniaStatePage() {
  return <StatePage state={state} />;
}
