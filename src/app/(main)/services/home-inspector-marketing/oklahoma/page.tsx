import { LocationTemplate } from "@/components/rd/industry/LocationTemplate";
import { CONTENT } from "@/components/rd/industry/content/home-inspector-marketing/oklahoma";
import { LocationSchema, draftMetadata } from "@/components/rd/industry/route";

export const metadata = draftMetadata(CONTENT);

export default function Page() {
  return (
    <>
      <LocationSchema c={CONTENT} />
      <LocationTemplate c={CONTENT} />
    </>
  );
}
