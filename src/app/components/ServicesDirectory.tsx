import Link from "next/link";

/*
 * Complete crawlable directory of every live service page, rendered on the
 * /services hub. Added Aug 2026 to fix GSC/Semrush orphaned-page findings:
 * the hub previously linked only 7 of ~110 service URLs, leaving the rest
 * with zero or one internal link (many were "Discovered - currently not
 * indexed" in GSC). Server-rendered plain links — no JS required to crawl.
 */

type DirGroup = { heading: string; links: { href: string; label: string }[] };

const GROUPS: DirGroup[] = [
  {
    heading: "Google Business Profile",
    links: [
      { href: "/services/gmb-reinstatement-help", label: "GMB Reinstatement Service" },
      { href: "/services/gmb-verification-help", label: "GMB Verification Help" },
      { href: "/local-seo-google-business-optimization", label: "GBP Optimization & Map Pack Ranking" },
      { href: "/services/google-business-profile-services-real-estate-agents", label: "GBP for Real Estate Agents" },
    ],
  },
  {
    heading: "Core Services",
    links: [
      { href: "/services/seo-services", label: "SEO Services" },
      { href: "/services/ai-seo-services", label: "AI SEO (AEO & GEO)" },
      { href: "/services/web-design", label: "Web Design & Development" },
      { href: "/services/google-ads", label: "Google Ads Management" },
      { href: "/services/local-seo-for-home-services", label: "Local SEO for Home Services" },
      { href: "/services/local-seo-for-small-business", label: "Local SEO for Small Business" },
      { href: "/services/local-seo-packages", label: "Local SEO Packages" },
      { href: "/services/launchpad", label: "Launchpad Website Package" },
      { href: "/services/white-label-services", label: "White Label Services" },
      { href: "/services/travel-and-tourism-marketing-agency", label: "Travel & Tourism Marketing" },
      { href: "/services/non-profit-marketing-agency", label: "Non-Profit Marketing" },
    ],
  },
  {
    heading: "Local SEO by Industry",
    links: [
      { href: "/services/industry/local-seo-for-roofing-companies", label: "Roofing Companies" },
      { href: "/services/industry/local-seo-services-for-hvac", label: "HVAC Companies" },
      { href: "/services/industry/seo-services-for-plumber", label: "Plumbers" },
      { href: "/services/industry/local-seo-for-electricians", label: "Electricians" },
      { href: "/services/industry/seo-services-for-pest-control", label: "Pest Control" },
      { href: "/services/industry/dental-seo-services", label: "Dentists" },
      { href: "/services/industry/chiropractor-local-seo-services", label: "Chiropractors" },
      { href: "/services/industry/pediatricians", label: "Pediatricians" },
      { href: "/services/industry/real-estate-seo-services", label: "Real Estate Agents" },
      { href: "/services/industry/local-seo-for-law-firms", label: "Law Firms" },
      { href: "/services/industry/seo-services-for-car-towing", label: "Car Towing" },
      { href: "/services/industry/local-seo-for-appliance-repair", label: "Appliance Repair" },
      { href: "/services/industry/local-seo-for-garage-door-companies", label: "Garage Door Companies" },
      { href: "/services/industry/local-seo-for-gutter-companies", label: "Gutter Companies" },
      { href: "/services/industry/local-seo-for-window-and-door-companies", label: "Window & Door Companies" },
      { href: "/services/industry/local-seo-for-general-contractors", label: "General Contractors" },
      { href: "/services/industry/local-seo-for-kitchen-remodelers", label: "Kitchen Remodelers" },
      { href: "/services/industry/local-seo-for-bathroom-remodelers", label: "Bathroom Remodelers" },
      { href: "/services/industry/local-seo-for-flooring-companies", label: "Flooring Companies" },
      { href: "/services/industry/local-seo-for-painting-contractors", label: "Painting Contractors" },
      { href: "/services/industry/local-seo-for-landscaping-companies", label: "Landscaping Companies" },
      { href: "/services/industry/local-seo-for-tree-service-companies", label: "Tree Services" },
      { href: "/services/industry/local-seo-for-pool-service-companies", label: "Pool Services" },
      { href: "/services/industry/local-seo-for-solar-companies", label: "Solar Companies" },
      { href: "/services/industry/local-seo-for-commercial-cleaning", label: "Commercial Cleaning" },
      { href: "/services/industry/local-seo-services-for-residential-cleaning", label: "Residential Cleaning" },
    ],
  },
  {
    heading: "Marketing Agency by Trade",
    links: [
      { href: "/services/roofing-marketing-agency", label: "Roofing" },
      { href: "/services/hvac-marketing-agency", label: "HVAC" },
      { href: "/services/plumbing-marketing-agency", label: "Plumbing" },
      { href: "/services/electrician-marketing-agency", label: "Electricians" },
      { href: "/services/pest-control-marketing-agency", label: "Pest Control" },
      { href: "/services/dental-marketing-agency", label: "Dental" },
      { href: "/services/chiropractic-marketing-agency", label: "Chiropractic" },
      { href: "/services/pediatric-marketing-agency", label: "Pediatric" },
      { href: "/services/real-estate-marketing-agency", label: "Real Estate" },
      { href: "/services/law-firm-marketing-agency", label: "Law Firms" },
      { href: "/services/towing-marketing-agency", label: "Towing" },
      { href: "/services/auto-repair-marketing-agency", label: "Auto Repair" },
      { href: "/services/appliance-repair-marketing-agency", label: "Appliance Repair" },
      { href: "/services/garage-door-marketing-agency", label: "Garage Door" },
      { href: "/services/gutter-marketing-agency", label: "Gutters" },
      { href: "/services/window-and-door-marketing-agency", label: "Window & Door" },
      { href: "/services/general-contractor-marketing-agency", label: "General Contractors" },
      { href: "/services/kitchen-remodeling-marketing-agency", label: "Kitchen Remodeling" },
      { href: "/services/bathroom-remodeling-marketing-agency", label: "Bathroom Remodeling" },
      { href: "/services/flooring-marketing-agency", label: "Flooring" },
      { href: "/services/painting-contractor-marketing-agency", label: "Painting" },
      { href: "/services/landscaping-marketing-agency", label: "Landscaping" },
      { href: "/services/tree-service-marketing-agency", label: "Tree Service" },
      { href: "/services/pool-service-marketing-agency", label: "Pool Service" },
      { href: "/services/cleaning-company-marketing-agency", label: "Cleaning Companies" },
      { href: "/services/moving-company-marketing-agency", label: "Moving Companies" },
      { href: "/services/septic-marketing-agency", label: "Septic" },
      { href: "/services/solar-marketing-agency", label: "Solar" },
      { href: "/services/home-inspector-marketing", label: "Home Inspectors" },
    ],
  },
  {
    heading: "Website Design by Trade",
    links: [
      { href: "/services/roofing-website-design", label: "Roofing" },
      { href: "/services/hvac-website-design", label: "HVAC" },
      { href: "/services/plumbing-website-design", label: "Plumbing" },
      { href: "/services/electrical-website-design", label: "Electrical" },
      { href: "/services/pest-control-website-design", label: "Pest Control" },
      { href: "/services/dental-website-design", label: "Dental" },
      { href: "/services/chiropractor-website-design", label: "Chiropractic" },
      { href: "/services/pediatrician-website-design", label: "Pediatric" },
      { href: "/services/real-estate-agent-website-design", label: "Real Estate" },
      { href: "/services/law-firm-website-design", label: "Law Firms" },
      { href: "/services/towing-company-website-design", label: "Towing" },
      { href: "/services/appliance-repair-website-design", label: "Appliance Repair" },
      { href: "/services/garage-door-website-design", label: "Garage Door" },
      { href: "/services/gutter-company-website-design", label: "Gutters" },
      { href: "/services/window-and-door-website-design", label: "Window & Door" },
      { href: "/services/general-contractor-website-design", label: "General Contractors" },
      { href: "/services/kitchen-remodeling-website-design", label: "Kitchen Remodeling" },
      { href: "/services/bathroom-remodeling-website-design", label: "Bathroom Remodeling" },
      { href: "/services/flooring-website-design", label: "Flooring" },
      { href: "/services/painting-contractor-website-design", label: "Painting" },
      { href: "/services/landscaping-website-design", label: "Landscaping" },
      { href: "/services/tree-service-website-design", label: "Tree Service" },
      { href: "/services/pool-service-website-design", label: "Pool Service" },
      { href: "/services/commercial-cleaning-website-design", label: "Commercial Cleaning" },
      { href: "/services/residential-cleaning-website-design", label: "Residential Cleaning" },
      { href: "/services/solar-website-design", label: "Solar" },
    ],
  },
  {
    heading: "By Location",
    links: [
      { href: "/services/philadelphia/local-seo", label: "Philadelphia SEO Company" },
      { href: "/services/philadelphia/sem", label: "SEM — Philadelphia" },
      { href: "/services/philadelphia/ppc", label: "PPC — Philadelphia" },
      { href: "/services/philadelphia/digital-marketing", label: "Digital Marketing — Philadelphia" },
      { href: "/services/delaware/digital-marketing", label: "Digital Marketing — Delaware" },
      { href: "/services/delaware/seo", label: "SEO Company — Delaware" },
      { href: "/services/delaware/web-design", label: "Web Design — Delaware" },
      { href: "/services/wilmington/digital-marketing", label: "Digital Marketing — Wilmington DE" },
      { href: "/services/nyc/digital-marketing", label: "Digital Marketing — NYC" },
      { href: "/services/nyc/local-seo", label: "Local SEO — NYC" },
      { href: "/services/hvac-marketing-agency/arizona", label: "HVAC Marketing — Arizona" },
      { href: "/services/hvac-marketing-agency/california", label: "HVAC Marketing — California" },
      { href: "/services/hvac-marketing-agency/florida", label: "HVAC Marketing — Florida" },
      { href: "/services/hvac-marketing-agency/georgia", label: "HVAC Marketing — Georgia" },
      { href: "/services/hvac-marketing-agency/illinois", label: "HVAC Marketing — Illinois" },
      { href: "/services/hvac-marketing-agency/north-carolina", label: "HVAC Marketing — North Carolina" },
      { href: "/services/hvac-marketing-agency/texas", label: "HVAC Marketing — Texas" },
      { href: "/services/plumbing-marketing-agency/arizona", label: "Plumbing Marketing — Arizona" },
      { href: "/services/plumbing-marketing-agency/california", label: "Plumbing Marketing — California" },
      { href: "/services/plumbing-marketing-agency/florida", label: "Plumbing Marketing — Florida" },
      { href: "/services/plumbing-marketing-agency/georgia", label: "Plumbing Marketing — Georgia" },
      { href: "/services/plumbing-marketing-agency/illinois", label: "Plumbing Marketing — Illinois" },
      { href: "/services/plumbing-marketing-agency/north-carolina", label: "Plumbing Marketing — North Carolina" },
      { href: "/services/plumbing-marketing-agency/texas", label: "Plumbing Marketing — Texas" },
      { href: "/services/home-inspector-marketing/california", label: "Home Inspector Marketing — California" },
      { href: "/services/home-inspector-marketing/florida", label: "Home Inspector Marketing — Florida" },
      { href: "/services/home-inspector-marketing/georgia", label: "Home Inspector Marketing — Georgia" },
      { href: "/services/home-inspector-marketing/north-carolina", label: "Home Inspector Marketing — North Carolina" },
      { href: "/services/home-inspector-marketing/texas", label: "Home Inspector Marketing — Texas" },
    ],
  },
];

export default function ServicesDirectory() {
  return (
    <section className="svdir" aria-labelledby="svdir-heading">
      <style>{`
        .svdir { background: #0e1116; padding: 64px 0; }
        .svdir-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .svdir h2 { color: #f4f4f2; font-size: 1.75rem; margin: 0 0 8px; }
        .svdir-sub { color: #9aa3ad; margin: 0 0 36px; max-width: 640px; }
        .svdir-groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; }
        .svdir-group h3 { color: #d9b45b; font-size: 0.95rem; letter-spacing: 0.06em; text-transform: uppercase; margin: 0 0 12px; }
        .svdir-group ul { list-style: none; margin: 0; padding: 0; }
        .svdir-group li { margin: 0 0 8px; }
        .svdir-group a { color: #c4ccd4; font-size: 0.9rem; text-decoration: none; }
        .svdir-group a:hover { color: #ffffff; text-decoration: underline; }
      `}</style>
      <div className="svdir-inner">
        <h2 id="svdir-heading">Every Zonic Media Service</h2>
        <p className="svdir-sub">
          Browse the full range of local SEO, Google Business Profile, web
          design, and marketing services — by service type, trade, and
          location.
        </p>
        <div className="svdir-groups">
          {GROUPS.map((group) => (
            <div className="svdir-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
