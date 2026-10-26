/* Google Ads page redesign: FAQs and process steps. Copy re-researched and
   rewritten 24 Oct 2026 (content-optimization brief): fresh wording, no
   live-page sentences, no CPC, budget or ROI estimates. The only figure
   is the 0% ad-spend markup. Owner, 25 Oct 2026: never state the
   management fee or its model; visitors see it in the pricing section.
   FAQs feed the FAQPage JSON-LD. */

export const ADS_FAQS: { question: string; answer: string }[] = [
  {
    question: "What does a Google Ads management agency do?",
    answer:
      "We plan, build and run your campaigns: keyword research, ad writing, bids, negative keywords, landing pages and conversion tracking. We review search terms and test ads every week, and you get a monthly report on the calls and forms your ads produced.",
  },
  {
    question: "How quickly can Google Ads bring in leads?",
    answer:
      "Ads can show as soon as Google approves them, so a new campaign can produce calls quickly. The first weeks are for learning: cutting irrelevant searches, adjusting bids and testing ads. Results steady as conversion data builds.",
  },
  {
    question: "What budget should I set for Google Ads?",
    answer:
      "It depends on search demand in your area, how competitive those searches are and how many new leads you can handle. We recommend a starting budget after the free audit. You pay Google directly, with 0% ad-spend markup.",
  },
  {
    question: "How do you know which ads bring in calls?",
    answer:
      "Every campaign gets call tracking, form tracking and conversion tags before it goes live. Each lead is tied to the keyword and ad that produced it, and booked jobs are sent back to Google so bidding favours the searches that turn into customers.",
  },
  {
    question: "How are Local Services Ads different from search ads?",
    answer:
      "Local Services Ads charge per lead, appear above regular results and are open only to eligible service categories after Google screening. Search ads charge per click and can target any keyword. Many local businesses run both, and we manage them together.",
  },
  {
    question: "Will I own my Google Ads account?",
    answer:
      "Yes. The account is created in your name, or stays in your name if you already have one, and we work in it through manager access. Campaigns, data and history remain yours if you ever stop working with us.",
  },
  {
    question: "Do I need a landing page for Google Ads?",
    answer:
      "A dedicated page usually converts better than a homepage, because it repeats the ad's promise and puts the call button up front. Google also rates landing page experience in Quality Score. Our web design team can build these pages.",
  },
  {
    question: "Can you fix a Google Ads account someone else set up?",
    answer:
      "Yes. We start with a full audit, keep the campaigns and history that work, and rebuild what doesn't: structure, keywords, ads and tracking. Nothing is deleted without a reason, so you keep the data Google's bidding relies on.",
  },
];

export const ADS_STEPS: {
  tag: string;
  title: string;
  desc: string;
  chips?: string[];
}[] = [
  {
    tag: "Audit",
    title: "Account and Competitor Review",
    desc: "We go through your account, your competitors' ads and your current spend, so the plan builds on what already works.",
  },
  {
    tag: "Research",
    title: "A Keyword Map Built on Intent",
    desc: "We list the searches buyers really type and filter out research and job-seeker traffic before any money is spent.",
  },
  {
    tag: "Setup",
    title: "Ads, Assets and Tracking Setup",
    desc: "Focused ad groups, ads written for each search and every useful asset turned on: call buttons, sitelinks and locations.",
    chips: ["Ad copy", "Assets", "Tracking"],
  },
  {
    tag: "Weekly",
    title: "Weekly Tuning and Testing",
    desc: "Search-term reviews, bid changes and fresh ad tests every week to cut wasted spend and lift lead volume.",
    chips: ["Bids", "Negatives", "Ad tests"],
  },
  {
    tag: "Monthly",
    title: "Scale What Brings Leads",
    desc: "Calls and forms tied to each keyword, then budget shifted toward the campaigns that bring in customers.",
    chips: ["Calls", "Forms", "Budget"],
  },
];
