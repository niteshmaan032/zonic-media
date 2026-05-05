import type { Metadata } from "next";
import NewServicContent from "./NewServicContent";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Web Design, SEO & Growth | Zonic Media",
  description:
    "Zonic Media delivers premium web design, local SEO, Google Ads, and GBP optimization — engineered as one connected growth system to turn your digital presence into measurable revenue.",
};

export default function Page() {
  return <NewServicContent />;
}
