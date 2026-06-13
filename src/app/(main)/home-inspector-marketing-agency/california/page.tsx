import type { Metadata } from "next";
import StatePage from "../StatePage";
import { STATE_CONTENT } from "../stateContent";

const state = STATE_CONTENT.california;

export const metadata: Metadata = {
  title: state.metaTitle,
  description: state.metaDescription,
  alternates: {
    canonical: `/home-inspector-marketing-agency/${state.slug}`,
  },
};

export default function CaliforniaStatePage() {
  return <StatePage state={state} />;
}
