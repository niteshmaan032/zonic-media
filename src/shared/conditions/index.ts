import terms from "./terms.json";
import policy from "./policy.json";

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
      type: "contact";
      address: string;
      phone: string;
      email: string;
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
];

export function getConditionPageBySlug(slug: string) {
  return conditionPages.find((page) => page.slug === slug);
}
