import Footer from "@/app/components/Footer";
import LeadContactForm from "@/app/components/LeadContactForm";
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
      pageData.intro[0] ??
      "Read Zonic Media legal terms, privacy policy, and refund policy information.",
    alternates: {
      canonical: `/legal/${slug}`,
    },
  };
}

function renderBlock(block: ConditionBlock, index: number) {
  switch (block.type) {
    case "paragraph":
    case "subheading":
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
          {pageData.intro.map((paragraph, index) => (
            <p
              className={`conditions-descrp ${
                slug === "refund-policy" && index < 3
                  ? "conditions-descrp--strong"
                  : ""
              }`.trim()}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}

          <div className="conditions-content-list-wrapper">
            <ul className="conditions-main-list">
              {pageData.sections.map((section) => (
                <li className="conditions-main-list-cont" key={section.heading}>
                  <h2 className="conditions-sub-head">{section.heading}</h2>
                  {section.blocks.map((block, index) => renderBlock(block, index))}
                  {slug === "privacy-policy" &&
                  section.heading === "Opt-Out & Data Removal" ? (
                    <div className="conditions-form-wrapper">
                      <LeadContactForm
                        leadFormTitle="Get in touch"
                        leadCallText={
                          <>
                            grow you business with zonic media
                            <br />{" "}
                            <a
                              href={SITE_CONTACT.phoneHref}
                              className="lead-call-link"
                            >
                              Call Now:{SITE_CONTACT.phoneDisplay}
                            </a>
                          </>
                        }
                      />
                    </div>
                  ) : null}
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
