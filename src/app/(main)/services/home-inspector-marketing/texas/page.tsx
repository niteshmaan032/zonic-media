import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.texas;

export const metadata: Metadata = {
  title: { absolute: state.metaTitle },
  description: state.metaDescription,
  keywords: [
    "home inspector marketing texas",
    "home inspector in texas",
    "home inspector houston texas",
    "home inspector austin tx",
    "home inspector san antonio",
    "texas licensed home inspectors",
    "home inspector marketing",
    "home inspector seo",
  ],
  alternates: {
    canonical: `/services/home-inspector-marketing/${state.slug}`,
  },
};

export default function TexasStatePage() {
  return <StatePage state={state} />;
}
