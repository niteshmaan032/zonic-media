import Link from "next/link";
import Footer from "@/app/components/Footer";
import "@/app/style/notFound.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Zonic Media",
  description:
    "The page you're looking for doesn't exist. Return to Zonic Media's homepage or contact us for help.",
};

export default function NotFoundPage() {
  return (
    <>
      <main className="not-found-page">
        <div className="not-found-inner">
          <span className="not-found-code">404</span>
          <h1 className="not-found-heading">Page Not Found</h1>
          <p className="not-found-body">
            The page you&apos;re looking for has moved, been removed, or never
            existed. Let&apos;s get you back on track.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="nf-btn-primary">
              Back to Home
            </Link>
            <Link href="/contact-us" className="nf-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
