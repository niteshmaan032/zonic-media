import Navbar from "@/app/components/Navbar";
import StickyCallBar from "@/app/components/StickyCallBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <StickyCallBar />
    </>
  );
}
