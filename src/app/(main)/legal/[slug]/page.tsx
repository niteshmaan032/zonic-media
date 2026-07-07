import Footer from "@/app/components/Footer";
import "@/app/style/conditions.css";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Col } from "react-bootstrap";
import {
  conditionPages,
  getConditionPageBySlug,
  type ConditionBlock,
} from "@/shared/conditions";
import { SITE_CONTACT } from "@/shared/siteConfig";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Unique meta descriptions per legal page (the shared intro paragraph was
// producing duplicate descriptions across /legal/* in SEO crawls).
const LEGAL_META_DESCRIPTIONS: Record<string, string> = {
  "privacy-policy":
    "Learn how Zonic Media LLC collects, uses, stores, and protects your personal information. Read our Privacy Policy to understand your data rights and security practices.",
  "terms-conditions":
    "Review Zonic Media LLC's Terms & Conditions to understand the rules, responsibilities, service terms, disclaimers, and conditions for using our website and services.",
  "refund-policy":
    "Read Zonic Media LLC's Refund Policy to understand when refunds apply to our services, including our No Fix, No Charge commitment on GBP reinstatement fees.",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getConditionPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Legal Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: pageData.title,
    description:
      LEGAL_META_DESCRIPTIONS[slug] ??
      pageData.intro[0] ??
      "Read Zonic Media legal terms, privacy policy, and refund policy information.",
    alternates: {
      canonical: `/legal/${slug}`,
    },
  };
}

function renderBlock(block: ConditionBlock, index: number) {
  switch (block.type) {
    case "subheading":
      return (
        <p className="conditions-block-subhead" key={index}>
          {block.text}
        </p>
      );
    case "paragraph":
      return (
        <p className="conditions-descrp" key={index}>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="condition-content-sub-list" key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "policyLink":
      return (
        <p className="conditions-descrp" key={index}>
          {block.text}{" "}
          <Link href={block.href}>{block.linkLabel}</Link>
        </p>
      );
    case "contact":
      return (
        <div key={index}>
          {block.address ? (
            <p className="conditions-descrp">
              <Link href={SITE_CONTACT.mapHref}>{block.address}</Link>
            </p>
          ) : null}
          {block.phone ? (
            <p className="conditions-descrp">
              Phone: <Link href={SITE_CONTACT.phoneHref}>{block.phone}</Link>
            </p>
          ) : null}
          {block.email ? (
            <p className="conditions-descrp">
              Email: <Link href={`mailto:${block.email}`}>{block.email}</Link>
            </p>
          ) : null}
          {block.website ? (
            <p className="conditions-descrp">
              Website:{" "}
              <Link
                href={block.websiteHref ?? `https://${block.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {block.website}
              </Link>
            </p>
          ) : null}
        </div>
      );
    default:
      return null;
  }
}

export async function generateStaticParams() {
  return conditionPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getConditionPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <div className="conditions-head-wrapper">
        <h1 className="conditions-heading">{pageData.title}</h1>
      </div>

      <div className="conditions-content-wrapper">
        <Col xs={12} lg={7}>
          {pageData.intro.map((paragraph, index) => {
            const isEffectiveDate = paragraph.startsWith("Effective Date");
            return (
              <p
                className={`conditions-descrp ${
                  isEffectiveDate ? "conditions-effective-date" : ""
                } ${
                  slug === "refund-policy" && index < 3
                    ? "conditions-descrp--strong"
                    : ""
                }`
                  .replace(/\s+/g, " ")
                  .trim()}
                key={paragraph}
              >
                {paragraph}
              </p>
            );
          })}

          <div className="conditions-content-list-wrapper">
            <ul className="conditions-main-list">
              {pageData.sections.map((section) => (
                <li className="conditions-main-list-cont" key={section.heading}>
                  <h2 className="conditions-sub-head">{section.heading}</h2>
                  {section.blocks.map((block, index) => renderBlock(block, index))}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </div>

      <Footer />
    </>
  );
}
