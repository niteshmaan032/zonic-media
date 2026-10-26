import { RdHeader } from "@/components/rd/header/RdHeader";

/* Site header for every (main) page: the redesigned header, sitewide since
   the 26 Oct 2026 go-live (it was /home2-only behind HeaderSwitch). */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RdHeader />
      {children}
    </>
  );
}
