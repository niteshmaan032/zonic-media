import Link from "next/link";

/*
 * Contextual related-service links rendered above the global footer on
 * service pages. Added Aug 2026 to fix orphaned/one-link pages flagged in
 * GSC ("Discovered - currently not indexed") and Semrush (issues 207/213):
 * each vertical's Local SEO / marketing-agency / website-design pages now
 * link to each other, plus a constant strip of core service pages.
 * Server-rendered plain links — crawlable without JS.
 */

type RelLink = { href: string; label: string };

const CORE_LINKS: RelLink[] = [
  { href: "/local-seo-google-business-optimization", label: "Google Business Profile Optimization" },
  { href: "/services/gmb-reinstatement-help", label: "GMB Reinstatement" },
  { href: "/services/local-seo-for-home-services", label: "Local SEO for Home Services" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services", label: "All Services" },
];

/** First matching keyword in the current path picks the vertical trio. */
const VERTICALS: { match: string[]; links: RelLink[] }[] = [
  { match: ["roofing"], links: [
    { href: "/services/industry/local-seo-for-roofing-companies", label: "Local SEO for Roofing Companies" },
    { href: "/services/roofing-marketing-agency", label: "Roofing Marketing Agency" },
    { href: "/services/roofing-website-design", label: "Roofing Website Design" },
  ]},
  { match: ["hvac"], links: [
    { href: "/services/industry/local-seo-services-for-hvac", label: "Local SEO for HVAC" },
    { href: "/services/hvac-marketing-agency", label: "HVAC Marketing Agency" },
    { href: "/services/hvac-website-design", label: "HVAC Website Design" },
  ]},
  { match: ["plumb"], links: [
    { href: "/services/industry/seo-services-for-plumber", label: "SEO for Plumbers" },
    { href: "/services/plumbing-marketing-agency", label: "Plumbing Marketing Agency" },
    { href: "/services/plumbing-website-design", label: "Plumbing Website Design" },
  ]},
  { match: ["dental", "dentist"], links: [
    { href: "/services/industry/dental-seo-services", label: "Dental SEO Services" },
    { href: "/services/dental-marketing-agency", label: "Dental Marketing Agency" },
    { href: "/services/dental-website-design", label: "Dental Website Design" },
  ]},
  { match: ["pest"], links: [
    { href: "/services/industry/seo-services-for-pest-control", label: "SEO for Pest Control" },
    { href: "/services/pest-control-marketing-agency", label: "Pest Control Marketing Agency" },
    { href: "/services/pest-control-website-design", label: "Pest Control Website Design" },
  ]},
  { match: ["electric"], links: [
    { href: "/services/industry/local-seo-for-electricians", label: "Local SEO for Electricians" },
    { href: "/services/electrician-marketing-agency", label: "Electrician Marketing Agency" },
    { href: "/services/electrical-website-design", label: "Electrical Website Design" },
  ]},
  { match: ["landscap"], links: [
    { href: "/services/industry/local-seo-for-landscaping-companies", label: "Local SEO for Landscaping" },
    { href: "/services/landscaping-marketing-agency", label: "Landscaping Marketing Agency" },
    { href: "/services/landscaping-website-design", label: "Landscaping Website Design" },
  ]},
  { match: ["tree-service"], links: [
    { href: "/services/industry/local-seo-for-tree-service-companies", label: "Local SEO for Tree Services" },
    { href: "/services/tree-service-marketing-agency", label: "Tree Service Marketing Agency" },
    { href: "/services/tree-service-website-design", label: "Tree Service Website Design" },
  ]},
  { match: ["garage-door"], links: [
    { href: "/services/industry/local-seo-for-garage-door-companies", label: "Local SEO for Garage Door Companies" },
    { href: "/services/garage-door-marketing-agency", label: "Garage Door Marketing Agency" },
    { href: "/services/garage-door-website-design", label: "Garage Door Website Design" },
  ]},
  { match: ["gutter"], links: [
    { href: "/services/industry/local-seo-for-gutter-companies", label: "Local SEO for Gutter Companies" },
    { href: "/services/gutter-marketing-agency", label: "Gutter Marketing Agency" },
    { href: "/services/gutter-company-website-design", label: "Gutter Company Website Design" },
  ]},
  { match: ["solar"], links: [
    { href: "/services/industry/local-seo-for-solar-companies", label: "Local SEO for Solar Companies" },
    { href: "/services/solar-marketing-agency", label: "Solar Marketing Agency" },
    { href: "/services/solar-website-design", label: "Solar Website Design" },
  ]},
  { match: ["floor"], links: [
    { href: "/services/industry/local-seo-for-flooring-companies", label: "Local SEO for Flooring Companies" },
    { href: "/services/flooring-marketing-agency", label: "Flooring Marketing Agency" },
    { href: "/services/flooring-website-design", label: "Flooring Website Design" },
  ]},
  { match: ["paint"], links: [
    { href: "/services/industry/local-seo-for-painting-contractors", label: "Local SEO for Painting Contractors" },
    { href: "/services/painting-contractor-marketing-agency", label: "Painting Contractor Marketing Agency" },
    { href: "/services/painting-contractor-website-design", label: "Painting Contractor Website Design" },
  ]},
  { match: ["pool"], links: [
    { href: "/services/industry/local-seo-for-pool-service-companies", label: "Local SEO for Pool Services" },
    { href: "/services/pool-service-marketing-agency", label: "Pool Service Marketing Agency" },
    { href: "/services/pool-service-website-design", label: "Pool Service Website Design" },
  ]},
  { match: ["commercial-cleaning"], links: [
    { href: "/services/industry/local-seo-for-commercial-cleaning", label: "Local SEO for Commercial Cleaning" },
    { href: "/services/cleaning-company-marketing-agency", label: "Cleaning Company Marketing Agency" },
    { href: "/services/commercial-cleaning-website-design", label: "Commercial Cleaning Website Design" },
  ]},
  { match: ["residential-cleaning"], links: [
    { href: "/services/industry/local-seo-services-for-residential-cleaning", label: "Local SEO for Residential Cleaning" },
    { href: "/services/cleaning-company-marketing-agency", label: "Cleaning Company Marketing Agency" },
    { href: "/services/residential-cleaning-website-design", label: "Residential Cleaning Website Design" },
  ]},
  { match: ["appliance"], links: [
    { href: "/services/industry/local-seo-for-appliance-repair", label: "Local SEO for Appliance Repair" },
    { href: "/services/appliance-repair-marketing-agency", label: "Appliance Repair Marketing Agency" },
    { href: "/services/appliance-repair-website-design", label: "Appliance Repair Website Design" },
  ]},
  { match: ["towing"], links: [
    { href: "/services/industry/seo-services-for-car-towing", label: "SEO for Car Towing" },
    { href: "/services/towing-marketing-agency", label: "Towing Marketing Agency" },
    { href: "/services/towing-company-website-design", label: "Towing Company Website Design" },
  ]},
  { match: ["kitchen"], links: [
    { href: "/services/industry/local-seo-for-kitchen-remodelers", label: "Local SEO for Kitchen Remodelers" },
    { href: "/services/kitchen-remodeling-marketing-agency", label: "Kitchen Remodeling Marketing Agency" },
    { href: "/services/kitchen-remodeling-website-design", label: "Kitchen Remodeling Website Design" },
  ]},
  { match: ["bathroom"], links: [
    { href: "/services/industry/local-seo-for-bathroom-remodelers", label: "Local SEO for Bathroom Remodelers" },
    { href: "/services/bathroom-remodeling-marketing-agency", label: "Bathroom Remodeling Marketing Agency" },
    { href: "/services/bathroom-remodeling-website-design", label: "Bathroom Remodeling Website Design" },
  ]},
  { match: ["window"], links: [
    { href: "/services/industry/local-seo-for-window-and-door-companies", label: "Local SEO for Window & Door Companies" },
    { href: "/services/window-and-door-marketing-agency", label: "Window & Door Marketing Agency" },
    { href: "/services/window-and-door-website-design", label: "Window & Door Website Design" },
  ]},
  { match: ["law-firm", "law-firms"], links: [
    { href: "/services/industry/local-seo-for-law-firms", label: "Local SEO for Law Firms" },
    { href: "/services/law-firm-marketing-agency", label: "Law Firm Marketing Agency" },
    { href: "/services/law-firm-website-design", label: "Law Firm Website Design" },
  ]},
  { match: ["real-estate"], links: [
    { href: "/services/industry/real-estate-seo-services", label: "Real Estate SEO Services" },
    { href: "/services/real-estate-marketing-agency", label: "Real Estate Marketing Agency" },
    { href: "/services/real-estate-agent-website-design", label: "Real Estate Website Design" },
    { href: "/services/google-business-profile-services-real-estate-agents", label: "GBP for Real Estate Agents" },
  ]},
  { match: ["chiropract"], links: [
    { href: "/services/industry/chiropractor-local-seo-services", label: "Chiropractor Local SEO" },
    { href: "/services/chiropractic-marketing-agency", label: "Chiropractic Marketing Agency" },
    { href: "/services/chiropractor-website-design", label: "Chiropractor Website Design" },
  ]},
  { match: ["pediatric"], links: [
    { href: "/services/industry/pediatricians", label: "Local SEO for Pediatricians" },
    { href: "/services/pediatric-marketing-agency", label: "Pediatric Marketing Agency" },
    { href: "/services/pediatrician-website-design", label: "Pediatrician Website Design" },
  ]},
  { match: ["general-contractor"], links: [
    { href: "/services/industry/local-seo-for-general-contractors", label: "Local SEO for General Contractors" },
    { href: "/services/general-contractor-marketing-agency", label: "General Contractor Marketing Agency" },
    { href: "/services/general-contractor-website-design", label: "General Contractor Website Design" },
  ]},
  { match: ["home-inspector"], links: [
    { href: "/services/home-inspector-marketing", label: "Home Inspector Marketing" },
    { href: "/services/home-inspector-marketing/california", label: "Home Inspector Marketing — California" },
    { href: "/services/home-inspector-marketing/florida", label: "Home Inspector Marketing — Florida" },
    { href: "/services/home-inspector-marketing/texas", label: "Home Inspector Marketing — Texas" },
  ]},
  { match: ["philadelphia", "delaware"], links: [
    { href: "/services/philadelphia/local-seo", label: "Local SEO Philadelphia" },
    { href: "/services/philadelphia/sem", label: "SEM Philadelphia" },
    { href: "/services/philadelphia/ppc", label: "PPC Philadelphia" },
    { href: "/services/philadelphia/digital-marketing", label: "Digital Marketing Philadelphia" },
    { href: "/services/delaware/digital-marketing", label: "Digital Marketing Delaware" },
  ]},
];

export default function RelatedServices({ current }: { current: string }) {
  const vertical = VERTICALS.find((v) =>
    v.match.some((m) => current.includes(m)),
  );
  const links = [...(vertical ? vertical.links : []), ...CORE_LINKS].filter(
    (link) => link.href !== current,
  );

  return (
    <section className="relsvc" aria-labelledby="relsvc-heading">
      <style>{`
        .relsvc { background: #10141a; border-top: 1px solid #1f2630; padding: 40px 0; }
        .relsvc-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .relsvc h2 { color: #f4f4f2; font-size: 1.15rem; margin: 0 0 16px; }
        .relsvc ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 12px; }
        .relsvc a { display: inline-block; color: #c4ccd4; font-size: 0.85rem; text-decoration: none; border: 1px solid #2a3340; border-radius: 999px; padding: 7px 14px; }
        .relsvc a:hover { color: #fff; border-color: #d9b45b; }
      `}</style>
      <div className="relsvc-inner">
        <h2 id="relsvc-heading">Related Services</h2>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
