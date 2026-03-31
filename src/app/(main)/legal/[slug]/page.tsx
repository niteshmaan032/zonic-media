import Footer from "@/app/components/Footer";
import "@/app/style/conditions.css";
import Link from "next/link";
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
          <p className="conditions-descrp">
            <Link href={SITE_CONTACT.mapHref}>{block.address}</Link>
          </p>
          <p className="conditions-descrp">
            Phone: <Link href={SITE_CONTACT.phoneHref}>{block.phone}</Link>
          </p>
          <p className="conditions-descrp">
            Email: <Link href={SITE_CONTACT.emailHref}>{block.email}</Link>
          </p>
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
          {pageData.intro.map((paragraph) => (
            <p className="conditions-descrp" key={paragraph}>
              {paragraph}
            </p>
          ))}

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
