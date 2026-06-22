import terms from "./terms.json";
import policy from "./policy.json";
import refund from "./refund.json";

export type ConditionBlock =
  | {
      type: "paragraph" | "subheading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "policyLink";
      text: string;
      linkLabel: string;
      href: string;
    }
  | {
      type: "contact";
      address?: string;
      phone?: string;
      email?: string;
      website?: string;
      websiteHref?: string;
    };

export type ConditionSection = {
  heading: string;
  blocks: ConditionBlock[];
};

export type ConditionPage = {
  slug: string;
  title: string;
  intro: string[];
  sections: ConditionSection[];
};

export const conditionPages: ConditionPage[] = [
  terms as ConditionPage,
  policy as ConditionPage,
  refund as ConditionPage,
];

export function getConditionPageBySlug(slug: string) {
  return conditionPages.find((page) => page.slug === slug);
}
