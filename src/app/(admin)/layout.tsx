// The public site loads a trimmed Bootstrap (src/app/style/bootstrap.trimmed.css).
// The admin dashboard uses many more Bootstrap/react-bootstrap components, so it
// loads the full stylesheet here, after the root layout CSS and before any admin CSS.
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function AdminRouteGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
