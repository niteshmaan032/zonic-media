"use client";

import { usePathname } from "next/navigation";
import FloatingPhone from "@/app/components/FloatingPhone";
import ChatBot from "@/app/components/ChatBot";

export default function SiteFloatingWidgets() {
  const pathname = usePathname();

  if (pathname.startsWith("/admindashboard")) {
    return null;
  }

  return (
    <>
      <FloatingPhone />
      <ChatBot />
    </>
  );
}
