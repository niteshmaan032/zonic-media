import { IndustryTemplate } from "@/components/rd/industry/IndustryTemplate";
import { CONTENT } from "@/components/rd/industry/content/gutter-marketing-agency";
import { IndustrySchema, draftMetadata } from "@/components/rd/industry/route";

export const metadata = draftMetadata(CONTENT);

export default function Page() {
  return (
    <>
      <IndustrySchema c={CONTENT} />
      <IndustryTemplate c={CONTENT} />
    </>
  );
}
