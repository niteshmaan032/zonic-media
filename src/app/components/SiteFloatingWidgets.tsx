"use client";

import { usePathname } from "next/navigation";
import FloatingPhone from "@/app/components/FloatingPhone";
// Old floating chatbot hidden — using GHL chat widget instead (see layout.tsx). Kept for easy restore.
// import ChatBot from "@/app/components/ChatBot";

export default function SiteFloatingWidgets() {
  const pathname = usePathname();

  if (pathname.startsWith("/admindashboard")) {
    return null;
  }

  return (
    <>
      <FloatingPhone />
      {/* Old floating chatbot hidden — using GHL chat widget instead (see layout.tsx). Kept for easy restore. */}
      {/* <ChatBot /> */}
    </>
  );
}
