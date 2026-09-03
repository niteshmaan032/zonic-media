/**
 * Code-level title/meta overrides for blog posts. Blog copy lives in MongoDB,
 * so these take precedence over the CMS metaTitle/metaDescription in
 * blog/[slug]/generateMetadata. Remove an entry once the same copy is saved
 * in the CMS.
 *
 * Sept 2026 full-site pass: every published post gets a keyword-first title
 * built from live Google/Bing autocomplete data (pulled 2026-09-03), under
 * 60 characters, and a description under 160. Long titles render absolute
 * (no " | Zonic Media" suffix) via generateMetadata.
 */
export type BlogSeoOverride = {
  title: string;
  description: string;
};

export const BLOG_SEO_OVERRIDES: Record<string, BlogSeoOverride> = {
  "how-google-decides-who-ranks-locally-the-3-core-factors-explained": {
    title: "How Google Ranks Local Businesses: The 3 Core Factors",
    description:
      "How Google decides which local businesses rank: proximity, relevance and prominence explained, which of the three you can move, and what to fix first in 2026.",
  },
  "gbp-reinstatement-for-roofing-contractors-the-complete-2026-guide": {
    title: "Roofing Contractor Google Business Profile Suspended? Fix",
    description:
      "Google Business Profile suspended for your roofing company? Why roofers get suspended, how to appeal with the right evidence, and how to get reinstated in 2026.",
  },
  "how-many-photos-should-your-google-business-profile-have": {
    title: "How Many Photos Should a Google Business Profile Have?",
    description:
      "How many photos your Google Business Profile should have, the right photo size, which photo types Google rewards.",
  },
  "google-maps-statistics-local-search-2026": {
    title: "Google Maps Statistics 2026: Local Search Data & Trends",
    description:
      "Google Maps and local search statistics for 2026: how many searches lead to a visit or call, Map Pack click share, review influence.",
  },
  "how-pest-control-companies-can-recover-a-suspended-google-business-profile": {
    title: "Pest Control Google Business Profile Suspended? The Fix",
    description:
      "Google Business Profile suspended for your pest control company? The common triggers for pest control listings, the evidence Google wants.",
  },
  "why-hvac-companies-get-their-google-profiles-suspended-and-how-to-fix": {
    title: "HVAC Google Business Profile Suspended? Causes & Fixes",
    description:
      "Why HVAC companies get their Google Business Profile suspended, from service-area setups to keyword-stuffed names, and the step-by-step fix to get reinstated.",
  },
  "how-to-choose-the-right-primary-category-on-google-business-profile": {
    title: "How to Choose the Right Google Business Profile Category",
    description:
      "How to choose the right primary category on Google Business Profile, how categories change your rankings, and the secondary categories worth adding in 2026.",
  },
  "google-maps-ranking-factors-2026": {
    title: "Google Maps Ranking Factors 2026: What Matters Most",
    description:
      "Google Maps ranking factors for 2026: proximity, categories, reviews, photos, citations and website signals, ranked by impact, with what to fix first.",
  },
  "why-your-website-gets-traffic-but-no-leads-local-business-fix": {
    title: "Website Traffic but No Leads? The Local Business Fix",
    description:
      "Why your website gets traffic but no leads: the intent, speed, trust and form problems behind it, and the fixes that turn local visitors into calls.",
  },
  "local-seo-plumbers-emergency-calls": {
    title: "Local SEO for Plumbers: How to Get More Emergency Calls",
    description:
      "Local SEO for plumbers that produces emergency calls: Map Pack signals, 24-hour profile setup, emergency pages and reviews that win the phone call.",
  },
  "how-to-turn-google-map-pack-views-into-phone-calls": {
    title: "How to Turn Google Map Pack Views Into Phone Calls",
    description:
      "Your Google Business Profile gets views but few calls? The profile, review, photo and hours fixes that turn Map Pack impressions into phone calls.",
  },
  "google-business-profile-suspended-for-your-dental-practice": {
    title: "Dental Practice Google Business Profile Suspended? Fix",
    description:
      "Google Business Profile suspended for your dental practice? Why dentists get suspended, what to check before appealing, and how to get the listing reinstated.",
  },
  "how-to-contact-google-support-gbp-suspension-help": {
    title: "How to Contact Google Support for a GBP Suspension",
    description:
      "How to contact Google Business Profile support for a suspension: the appeal form, the support channels that still work in 2026.",
  },
  "local-seo-vs-traditional-seo": {
    title: "Local SEO vs Traditional SEO: What Is the Difference?",
    description:
      "Local SEO vs traditional SEO explained: how Map Pack rankings differ from organic rankings, which signals each uses, and which one your business needs.",
  },
  "why-your-business-disappeared-from-google-maps": {
    title: "Business Disappeared From Google Maps? Why & How to Fix It",
    description:
      "Why your business disappeared from Google Maps: suspensions, duplicates, unverified edits and filters explained, plus the steps to get the listing back.",
  },
  "why-you-should-never-create-a-new-gbp-while-your-appeal-is-pending": {
    title: "Never Create a New Google Business Profile During an Appeal",
    description:
      "Why creating a new Google Business Profile while your appeal is pending gets both listings suspended, and what to do while you wait for Google's decision.",
  },
  "what-is-local-seo-the-plain-english-guide-for-small-business-owne": {
    title: "What Is Local SEO? Plain-English Guide for Small Business",
    description:
      "What local SEO is, how the Google Map Pack works, what local SEO costs for a small business, and the first five things to do, explained in plain English.",
  },
  "hvac-local-seo-how-to-stay-booked-during-every-season": {
    title: "HVAC Local SEO: How to Stay Booked in Every Season",
    description:
      "HVAC local SEO that keeps the schedule full year round: seasonal content timing, Google Business Profile updates, reviews and maintenance-plan pages.",
  },
  "local-seo-statistics-for-2026-data-every-business-owner-should-kn": {
    title: "Local SEO Statistics 2026: Data Every Business Owner Needs",
    description:
      "Local SEO statistics for 2026: near-me search growth, Map Pack click share, review influence, mobile behavior and AI Overview impact on local businesses.",
  },
  "google-business-profile-optimization-checklist-30-steps-for-2026": {
    title: "Google Business Profile Optimization Checklist: 30 Steps",
    description:
      "A 30-step Google Business Profile optimization checklist for 2026: categories, services, photos, posts, reviews, Q&A.",
  },
  "gbp-reinstatement-denied-next-steps": {
    title: "Google Business Profile Reinstatement Denied? Next Steps",
    description:
      "Google Business Profile reinstatement denied? Why Google rejects appeals, what to fix before the next one.",
  },
  "how-to-use-the-google-business-profile-video-verification-to-get-reins": {
    title: "Google Business Profile Video Verification: How to Pass It",
    description:
      "How Google Business Profile video verification works in 2026, what the video must show, why videos get rejected, and how to use it to get a listing reinstated.",
  },
  "local-seo-for-roofing-companies-how-to-get-more-jobs-from-google": {
    title: "Local SEO for Roofing Companies: Get More Jobs From Google",
    description:
      "Local SEO for roofing companies: the Map Pack signals, city pages, reviews and storm-season content that turn Google searches into roofing estimates.",
  },
  "reapply-gbp-reinstatement-after-failed-appeal": {
    title: "Reapply After a Failed Google Business Profile Appeal?",
    description:
      "Can you reapply after a failed Google Business Profile reinstatement appeal? What Google allows, how long to wait, and how to make the next appeal succeed.",
  },
  "how-to-rank-in-the-google-maps-pack-in-2026-the-complete-guide": {
    title: "How to Rank in the Google Map Pack in 2026: Complete Guide",
    description:
      "How to rank in the Google Map Pack in 2026: categories, reviews, photos, citations, website signals.",
  },
  "how-long-does-google-business-profile-reinstatement-take-in-2026": {
    title: "How Long Does Google Business Profile Reinstatement Take?",
    description:
      "How long Google Business Profile reinstatement takes in 2026 by suspension type: typical timelines, what causes delays, and when to escalate.",
  },
  "how-to-get-more-local-business-leads-from-google-in-2026": {
    title: "How to Get More Local Business Leads From Google in 2026",
    description:
      "How to get more local business leads from Google in 2026: Map Pack, Local Services Ads, AI Overviews and website fixes, ranked by cost and speed.",
  },
  "the-exact-step-by-step-gbp-reinstatement-process-google-doesnt-publish": {
    title: "Google Business Profile Reinstatement Process: Step by Step",
    description:
      "The step-by-step Google Business Profile reinstatement process: finding the violation, gathering evidence, filing the appeal, and what happens after you submit.",
  },
  "does-keyword-stuffing-in-your-business-name-really-get-you-suspended": {
    title: "Keywords in Your GBP Business Name: Suspension Risk in 2026",
    description:
      "Does keyword stuffing in your Google Business Profile name get you suspended? What Google enforces in 2026, what gets flagged, and how to rename safely.",
  },
  "how-duplicate-google-listings-trigger-suspensions-and-how-to-resolve-them": {
    title: "Duplicate Google Business Listings: Suspension Risk & Fixes",
    description:
      "How duplicate Google Business Profile listings trigger suspensions, how to find duplicates you did not create, and how to merge or remove them safely.",
  },
  "can-a-virtual-office-address-get-your-google-business-profile-suspended": {
    title: "Virtual Office Address & Google Business Profile Suspension",
    description:
      "Can a virtual office address get your Google Business Profile suspended? When Google suspends for it, when it does not, and which address to use instead.",
  },
  "why-google-suspended-your-profile-after-you-made-an-edit-and-what-to-do": {
    title: "Google Business Profile Suspended After an Edit: Why & Fixes",
    description:
      "Google Business Profile suspended after changing your name, address or category? Why edits trigger suspensions and what to do in the first 24 hours.",
  },
  "why-service-area-businesses-get-suspended-more-often-than-storefronts": {
    title: "Why Service-Area Businesses Get Suspended More on Google",
    description:
      "Why service-area businesses get their Google Business Profile suspended more often than storefronts, the address and setup mistakes behind it, and the fix.",
  },
  "the-9-most-common-reasons-your-google-business-profile-gets-suspended": {
    title: "9 Reasons Your Google Business Profile Gets Suspended",
    description:
      "The 9 most common reasons a Google Business Profile gets suspended in 2026, from address problems to keyword-stuffed names, and how to fix each one.",
  },
  "what-is-deceptive-content-how-to-fix-your-suspended-gmb-profile": {
    title: "Suspended for Deceptive Content? Google Business Profile Fix",
    description:
      "Google Business Profile suspended for deceptive content? What triggers it, what Google will not tell you, and the appeal steps that get profiles reinstated.",
  },
  "how-competitor-flags-can-get-your-gbp-suspended-and-how-to-fight-back": {
    title: "Competitor Flags Got Your Google Business Profile Suspended?",
    description:
      "How competitor flags and false reports get a Google Business Profile suspended, how to prove the report was false, and how to protect the listing afterward.",
  },
  "google-business-profile-hard-suspension-fix": {
    title: "Google Business Profile Hard Suspension: What It Is & Fix",
    description:
      "What a hard suspension on Google Business Profile means, how it differs from a soft suspension, and the evidence-based appeal that gets the listing back.",
  },
  "why-google-suspends-business-profiles-without-warning-in-2026": {
    title: "Google Business Profile Suspended Without Warning: 9 Causes",
    description:
      "Google Business Profile suspended without warning or for no reason? The 9 silent triggers behind unannounced GBP suspensions and what to check first.",
  },
  "soft-suspension-vs-hard-suspension-what-every-business-owner-needs-to": {
    title: "Soft vs Hard Suspension on Google Business Profile Explained",
    description:
      "Soft suspension vs hard suspension on Google Business Profile: how to tell which one you have, what each means for your listing, and the fix for each.",
  },
};
