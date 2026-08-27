/**
 * Title/meta rewrites from the Aug 2026 SEO action plan (Tab 3).
 * Blog copy lives in MongoDB, so these code-level overrides take precedence
 * over the CMS metaTitle/metaDescription for the specific posts the plan
 * rewrote. Remove an entry once the same copy is saved in the CMS.
 */
export type BlogSeoOverride = {
  title: string;
  description: string;
};

export const BLOG_SEO_OVERRIDES: Record<string, BlogSeoOverride> = {
  "what-is-deceptive-content-how-to-fix-your-suspended-gmb-profile": {
    title: '"Deceptive Content" GBP Suspension — What It Means & Fixes',
    description:
      "Google suspended your profile for deceptive content? Here is exactly what triggers it, what Google will not tell you, and the appeal steps that work.",
  },
  "soft-suspension-vs-hard-suspension-what-every-business-owner-needs-to": {
    title: "Soft vs Hard GBP Suspension — How to Tell Which You Have",
    description:
      "One is fixable in days, the other needs a full appeal. Here is how to identify which suspension you are dealing with, and what to do for each.",
  },
  "can-a-virtual-office-address-get-your-google-business-profile-suspended": {
    title: "Virtual Office Addresses & GBP Suspension — The Real Rules",
    description:
      "Coworking space, virtual office or registered agent address? Here is when Google suspends for it, when it does not, and what to use instead.",
  },
  "does-keyword-stuffing-in-your-business-name-really-get-you-suspended": {
    title: "Keywords in Your GBP Business Name — Suspension Risk in 2026",
    description:
      "Competitors do it and rank. Here is what Google actually enforces, what gets flagged, and how to rename safely without losing reviews.",
  },
  "why-google-suspends-business-profiles-without-warning-in-2026": {
    title: "Suspended With No Warning? 9 Triggers Google Won't Publish",
    description:
      "No email, no notice, profile gone. These are the silent triggers behind unannounced GBP suspensions — and what to check first.",
  },
  "why-google-suspended-your-profile-after-you-made-an-edit-and-what-to-do": {
    title: "Edited Your GBP and Got Suspended? Here Is Why",
    description:
      "Changing your name, address or category can trigger an instant suspension. What to do in the first 24 hours, and what makes it worse.",
  },
  "how-long-does-google-business-profile-reinstatement-take-in-2026": {
    title: "GBP Reinstatement Timeline — What to Expect Week by Week",
    description:
      "Typical timelines by suspension type, what causes delays, and when to escalate. Plus what not to do while you wait.",
  },
};
