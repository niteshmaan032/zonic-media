import type { ReactNode } from "react";
import {
  FaBroom,
  FaCannabis,
  FaStore,
  FaTooth,
  FaUserDoctor,
} from "react-icons/fa6";
import {
  MdGavel,
  MdOutlineBathtub,
  MdOutlineCarCrash,
  MdOutlineCarRepair,
  MdOutlineChildCare,
  MdOutlineCleaningServices,
  MdOutlineCountertops,
  MdOutlineElectricalServices,
  MdOutlineEngineering,
  MdOutlineForest,
  MdOutlineFormatPaint,
  MdOutlineGarage,
  MdOutlineGrass,
  MdOutlineHomeWork,
  MdOutlineHvac,
  MdOutlineKitchen,
  MdOutlineLayers,
  MdOutlineLocalShipping,
  MdOutlinePestControl,
  MdOutlinePlumbing,
  MdOutlinePool,
  MdOutlinePropaneTank,
  MdOutlineRealEstateAgent,
  MdOutlineSensorDoor,
  MdOutlineSolarPower,
  MdOutlineVolunteerActivism,
  MdOutlineWaterDrop,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

/* ---------------------------------------------------------------------------
   SITE NAVIGATION LINKS (moved 26 Oct 2026 from the retired
   src/app/components/Navbar.tsx when RdHeader went sitewide). The header's
   GBP links and the Local SEO / Web Design / Industries mega-menus read from
   here; edit links in this file only.
--------------------------------------------------------------------------- */

export const gmbServiceLinks = [
  {
    id: "gmb-reinstatement-help",
    label: "GMB Reinstatement",
    link: "/services/gbp-reinstatement-service",
  },
  {
    id: "gmb-verification-help",
    label: "GMB Verification Help",
    link: "/services/gmb-verification-help",
  },
  {
    id: "gmb-optimization",
    label: "GMB Optimization",
    link: "/local-seo-google-business-optimization",
  },
  {
    id: "gmb-rank-checker",
    label: "GMB Rank Checker",
    link: "/google-maps-business-ranking-tool-online",
  },
];

// Niche dropdowns (Local SEO / Web Design / Industries) all share this category
// taxonomy so the same trade sits under the same heading in every menu.
const NICHE_GROUP_ORDER = [
  "Core SEO Services",
  "Repair & Installation",
  "Remodeling & Construction",
  "Outdoor & Property Care",
  "Cleaning Services",
  "Health & Medical",
  "Professional Services",
  "Cannabis & Retail",
  "Auto & Transport",
] as const;

type NicheGroup = (typeof NICHE_GROUP_ORDER)[number];

type NicheLink = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
  group: NicheGroup;
};

function groupNicheLinks(links: NicheLink[]) {
  return NICHE_GROUP_ORDER.map((group) => ({
    group,
    items: links.filter((link) => link.group === group),
  })).filter((section) => section.items.length > 0);
}

const seoServiceLinks: NicheLink[] = [
  // Core SEO Services (Aug 2026 SEO-plan pages)
  {
    id: "seo-services",
    title: "SEO Services",
    description:
      "The full stack — technical, local, content and links, reported in calls.",
    link: "/services/seo-services",
    icon: <RiSearchLine />,
    group: "Core SEO Services",
  },
  {
    id: "ai-seo-services",
    title: "AI SEO (AEO & GEO)",
    description:
      "Get cited in ChatGPT, AI Overviews, AI Mode and Perplexity — not just ranked.",
    link: "/services/ai-seo-services",
    icon: <RiSearchLine />,
    group: "Core SEO Services",
  },
  {
    id: "local-seo-for-small-business",
    title: "Local SEO for Small Business",
    description:
      "Map pack rankings and reviews for storefronts, practices and studios.",
    link: "/services/local-seo-for-small-business",
    icon: <FaStore />,
    group: "Core SEO Services",
  },
  {
    id: "local-seo-packages",
    title: "Local SEO Packages",
    description:
      "Three flat-scope plans with deliverables you can read before you pay.",
    link: "/services/local-seo-packages",
    icon: <RiLineChartLine />,
    group: "Core SEO Services",
  },
  // Repair & Installation
  {
    id: "local-seo-services-for-hvac",
    title: "Local SEO for HVAC",
    description:
      "Map pack rankings and local visibility tuned to HVAC seasonal demand peaks.",
    link: "/services/industry/local-seo-services-for-hvac",
    icon: <MdOutlineHvac />,
    group: "Repair & Installation",
  },
  {
    id: "seo-services-for-plumber",
    title: "SEO for Plumbers",
    description:
      "Rank for 'plumber near me' searches and win urgent service calls on Google Maps.",
    link: "/services/industry/seo-services-for-plumber",
    icon: <MdOutlinePlumbing />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-electricians",
    title: "SEO for Electricians",
    description:
      "Win 'electrician near me' searches and more urgent service calls.",
    link: "/services/industry/local-seo-for-electricians",
    icon: <MdOutlineElectricalServices />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-roofing-companies",
    title: "Local SEO for Roofing Companies",
    description:
      "Show up when homeowners search for roof repair, replacement, or inspections nearby.",
    link: "/services/industry/local-seo-for-roofing-companies",
    icon: <MdRoofing />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-garage-door-companies",
    title: "Local SEO for Garage Door Companies",
    description:
      "Rank for garage door repair and installation searches on Google Maps.",
    link: "/services/industry/local-seo-for-garage-door-companies",
    icon: <MdOutlineGarage />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-appliance-repair",
    title: "Local SEO for Appliance Repair",
    description:
      "Get found for same-day refrigerator, washer, and dryer repair searches.",
    link: "/services/industry/local-seo-for-appliance-repair",
    icon: <MdOutlineKitchen />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-gutter-companies",
    title: "Local SEO for Gutter Companies",
    description:
      "Rank for seamless gutter, gutter guard, and cleaning searches.",
    link: "/services/industry/local-seo-for-gutter-companies",
    icon: <MdOutlineWaterDrop />,
    group: "Repair & Installation",
  },
  {
    id: "local-seo-for-solar-companies",
    title: "Local SEO for Solar Companies",
    description:
      "Turn 'solar installer near me' searches into booked consultations.",
    link: "/services/industry/local-seo-for-solar-companies",
    icon: <MdOutlineSolarPower />,
    group: "Repair & Installation",
  },

  // Remodeling & Construction
  {
    id: "local-seo-for-bathroom-remodelers",
    title: "Local SEO for Bathroom Remodelers",
    description:
      "Rank for bathroom remodel searches and book more in-home estimates.",
    link: "/services/industry/local-seo-for-bathroom-remodelers",
    icon: <MdOutlineBathtub />,
    group: "Remodeling & Construction",
  },
  {
    id: "local-seo-for-kitchen-remodelers",
    title: "Local SEO for Kitchen Remodelers",
    description:
      "Win 'kitchen remodeler near me' searches and fill your estimate calendar.",
    link: "/services/industry/local-seo-for-kitchen-remodelers",
    icon: <MdOutlineCountertops />,
    group: "Remodeling & Construction",
  },
  {
    id: "local-seo-for-general-contractors",
    title: "Local SEO for General Contractors",
    description:
      "Rank in the map pack for remodels, additions, and build projects.",
    link: "/services/industry/local-seo-for-general-contractors",
    icon: <MdOutlineEngineering />,
    group: "Remodeling & Construction",
  },
  {
    id: "local-seo-for-flooring-companies",
    title: "Local SEO for Flooring Companies",
    description:
      "Get found for hardwood, tile, and vinyl flooring installs nearby.",
    link: "/services/industry/local-seo-for-flooring-companies",
    icon: <MdOutlineLayers />,
    group: "Remodeling & Construction",
  },
  {
    id: "local-seo-for-window-and-door-companies",
    title: "Local SEO for Window & Door Companies",
    description:
      "Turn 'window replacement near me' searches into booked estimates.",
    link: "/services/industry/local-seo-for-window-and-door-companies",
    icon: <MdOutlineSensorDoor />,
    group: "Remodeling & Construction",
  },
  {
    id: "local-seo-for-painting-contractors",
    title: "Local SEO for Painting Contractors",
    description:
      "Rank for interior and exterior painting searches in your service area.",
    link: "/services/industry/local-seo-for-painting-contractors",
    icon: <MdOutlineFormatPaint />,
    group: "Remodeling & Construction",
  },

  // Outdoor & Property Care
  {
    id: "local-seo-for-landscaping-companies",
    title: "Local SEO for Landscaping Companies",
    description:
      "Rank for landscaping, lawn care, and hardscaping searches nearby.",
    link: "/services/industry/local-seo-for-landscaping-companies",
    icon: <MdOutlineGrass />,
    group: "Outdoor & Property Care",
  },
  {
    id: "local-seo-for-tree-service-companies",
    title: "Local SEO for Tree Service Companies",
    description:
      "Get found for tree removal, trimming, and emergency tree searches.",
    link: "/services/industry/local-seo-for-tree-service-companies",
    icon: <MdOutlineForest />,
    group: "Outdoor & Property Care",
  },
  {
    id: "local-seo-for-pool-service-companies",
    title: "Local SEO for Pool Service Companies",
    description:
      "Win pool cleaning, repair, and maintenance searches in your area.",
    link: "/services/industry/local-seo-for-pool-service-companies",
    icon: <MdOutlinePool />,
    group: "Outdoor & Property Care",
  },
  {
    id: "seo-services-for-pest-control",
    title: "SEO for Pest Control",
    description:
      "Rank in the local pack when nearby homeowners need immediate pest help.",
    link: "/services/industry/seo-services-for-pest-control",
    icon: <MdOutlinePestControl />,
    group: "Outdoor & Property Care",
  },

  // Cleaning Services
  {
    id: "local-seo-for-commercial-cleaning",
    title: "Local SEO for Commercial Cleaning",
    description:
      "Janitorial SEO that brings steady commercial cleaning contracts.",
    link: "/services/industry/local-seo-for-commercial-cleaning",
    icon: <MdOutlineCleaningServices />,
    group: "Cleaning Services",
  },
  {
    id: "local-seo-services-for-residential-cleaning",
    title: "Residential Cleaning SEO",
    description:
      "House cleaning leads from local search, Maps, and review visibility.",
    link: "/services/industry/local-seo-services-for-residential-cleaning",
    icon: <FaBroom />,
    group: "Cleaning Services",
  },

  // Health & Medical
  {
    id: "dental-seo-services",
    title: "Dental SEO Services",
    description:
      "More calls from patients ready to book with local search and Maps visibility.",
    link: "/services/industry/dental-seo-services",
    icon: <FaTooth />,
    group: "Health & Medical",
  },
  {
    id: "chiropractor-local-seo-services",
    title: "Chiropractor Local SEO",
    description:
      "Local SEO and marketing built for chiropractic clinics and practices.",
    link: "/services/industry/chiropractor-local-seo-services",
    icon: <FaUserDoctor />,
    group: "Health & Medical",
  },
  {
    id: "pediatricians-seo",
    title: "Pediatrician SEO & Marketing",
    description:
      "Local search visibility that helps parents find and choose your pediatric practice.",
    link: "/services/industry/pediatricians",
    icon: <MdOutlineChildCare />,
    group: "Health & Medical",
  },

  // Professional Services
  {
    id: "local-seo-for-law-firms",
    title: "Local SEO for Law Firms",
    description:
      "Qualified case inquiries from local search and attorney-focused SEO.",
    link: "/services/industry/local-seo-for-law-firms",
    icon: <MdGavel />,
    group: "Professional Services",
  },
  {
    id: "real-estate-seo-services",
    title: "Real Estate SEO Services",
    description:
      "Search visibility for realtors, teams, and brokerages in their local markets.",
    link: "/services/industry/real-estate-seo-services",
    icon: <MdOutlineRealEstateAgent />,
    group: "Professional Services",
  },

  // Cannabis & Retail
  {
    id: "local-seo-for-cannabis-dispensaries",
    title: "Local SEO for Dispensaries",
    description:
      "Rank for 'dispensary near me' and turn Maps searches into menu visits and orders.",
    link: "/services/industry/local-seo-for-cannabis-dispensaries",
    icon: <FaCannabis />,
    group: "Cannabis & Retail",
  },

  // Auto & Transport
  {
    id: "seo-services-for-car-towing",
    title: "SEO for Car Towing",
    description:
      "Google Maps visibility for emergency towing and roadside assistance searches.",
    link: "/services/industry/seo-services-for-car-towing",
    icon: <MdOutlineLocalShipping />,
    group: "Auto & Transport",
  },
];

const webDesignLinks: NicheLink[] = [
  // Repair & Installation
  {
    id: "hvac-website-design",
    title: "HVAC Website Design",
    description:
      "Fast, mobile-first HVAC sites that turn emergency searches into booked service calls.",
    link: "/services/hvac-website-design",
    icon: <MdOutlineHvac />,
    group: "Repair & Installation",
  },
  {
    id: "plumbing-website-design",
    title: "Plumbing Website Design",
    description:
      "Plumbing websites built around urgent calls, service areas, and instant booking.",
    link: "/services/plumbing-website-design",
    icon: <MdOutlinePlumbing />,
    group: "Repair & Installation",
  },
  {
    id: "electrical-website-design",
    title: "Electrician Website Design",
    description:
      "Electrical contractor sites that convert panel, rewire, and repair searches.",
    link: "/services/electrical-website-design",
    icon: <MdOutlineElectricalServices />,
    group: "Repair & Installation",
  },
  {
    id: "roofing-website-design",
    title: "Roofing Website Design",
    description:
      "Roofing websites with storm-damage funnels and free-inspection lead capture.",
    link: "/services/roofing-website-design",
    icon: <MdRoofing />,
    group: "Repair & Installation",
  },
  {
    id: "garage-door-website-design",
    title: "Garage Door Website Design",
    description:
      "Garage door repair sites built for same-day calls and quick quote requests.",
    link: "/services/garage-door-website-design",
    icon: <MdOutlineGarage />,
    group: "Repair & Installation",
  },
  {
    id: "appliance-repair-website-design",
    title: "Appliance Repair Website Design",
    description:
      "Appliance repair websites that book same-day fridge, washer, and dryer jobs.",
    link: "/services/appliance-repair-website-design",
    icon: <MdOutlineKitchen />,
    group: "Repair & Installation",
  },
  {
    id: "gutter-company-website-design",
    title: "Gutter Company Website Design",
    description:
      "Gutter sites built for seamless gutter, guard, and cleaning estimate requests.",
    link: "/services/gutter-company-website-design",
    icon: <MdOutlineWaterDrop />,
    group: "Repair & Installation",
  },
  {
    id: "solar-website-design",
    title: "Solar Website Design",
    description:
      "Solar websites that turn savings estimates and quotes into booked consultations.",
    link: "/services/solar-website-design",
    icon: <MdOutlineSolarPower />,
    group: "Repair & Installation",
  },

  // Remodeling & Construction
  {
    id: "bathroom-remodeling-website-design",
    title: "Bathroom Remodeling Website Design",
    description:
      "Bath remodel sites with galleries and financing built to book in-home estimates.",
    link: "/services/bathroom-remodeling-website-design",
    icon: <MdOutlineBathtub />,
    group: "Remodeling & Construction",
  },
  {
    id: "kitchen-remodeling-website-design",
    title: "Kitchen Remodeling Website Design",
    description:
      "Kitchen remodeling websites that showcase your work and fill the design calendar.",
    link: "/services/kitchen-remodeling-website-design",
    icon: <MdOutlineCountertops />,
    group: "Remodeling & Construction",
  },
  {
    id: "general-contractor-website-design",
    title: "General Contractor Website Design",
    description:
      "Contractor sites that present remodels, additions, and builds to serious buyers.",
    link: "/services/general-contractor-website-design",
    icon: <MdOutlineEngineering />,
    group: "Remodeling & Construction",
  },
  {
    id: "flooring-website-design",
    title: "Flooring Website Design",
    description:
      "Flooring websites that drive showroom visits and in-home measure requests.",
    link: "/services/flooring-website-design",
    icon: <MdOutlineLayers />,
    group: "Remodeling & Construction",
  },
  {
    id: "window-and-door-website-design",
    title: "Window & Door Website Design",
    description:
      "Window and door sites built to convert replacement searches into estimates.",
    link: "/services/window-and-door-website-design",
    icon: <MdOutlineSensorDoor />,
    group: "Remodeling & Construction",
  },
  {
    id: "painting-contractor-website-design",
    title: "Painting Contractor Website Design",
    description:
      "Painting contractor websites with portfolios and instant quote requests.",
    link: "/services/painting-contractor-website-design",
    icon: <MdOutlineFormatPaint />,
    group: "Remodeling & Construction",
  },

  // Outdoor & Property Care
  {
    id: "landscaping-website-design",
    title: "Landscaping Website Design",
    description:
      "Landscaping and lawn care sites that sell design, install, and maintenance work.",
    link: "/services/landscaping-website-design",
    icon: <MdOutlineGrass />,
    group: "Outdoor & Property Care",
  },
  {
    id: "tree-service-website-design",
    title: "Tree Service Website Design",
    description:
      "Tree service websites built for removal, trimming, and storm emergency calls.",
    link: "/services/tree-service-website-design",
    icon: <MdOutlineForest />,
    group: "Outdoor & Property Care",
  },
  {
    id: "pool-service-website-design",
    title: "Pool Service Website Design",
    description:
      "Pool service sites that win recurring maintenance accounts and repair work.",
    link: "/services/pool-service-website-design",
    icon: <MdOutlinePool />,
    group: "Outdoor & Property Care",
  },
  {
    id: "pest-control-website-design",
    title: "Pest Control Website Design",
    description:
      "Pest control websites built for urgent treatments and recurring service plans.",
    link: "/services/pest-control-website-design",
    icon: <MdOutlinePestControl />,
    group: "Outdoor & Property Care",
  },

  // Cleaning Services
  {
    id: "commercial-cleaning-website-design",
    title: "Commercial Cleaning Website Design",
    description:
      "Janitorial websites that build trust and win commercial cleaning contracts.",
    link: "/services/commercial-cleaning-website-design",
    icon: <MdOutlineCleaningServices />,
    group: "Cleaning Services",
  },
  {
    id: "residential-cleaning-website-design",
    title: "House Cleaning Website Design",
    description:
      "House cleaning sites with instant quotes and booking for recurring cleans.",
    link: "/services/residential-cleaning-website-design",
    icon: <FaBroom />,
    group: "Cleaning Services",
  },

  // Health & Medical
  {
    id: "dental-website-design",
    title: "Dental Website Design",
    description:
      "Dental practice websites that build trust and fill your new-patient schedule.",
    link: "/services/dental-website-design",
    icon: <FaTooth />,
    group: "Health & Medical",
  },
  {
    id: "chiropractor-website-design",
    title: "Chiropractor Website Design",
    description:
      "Chiropractic websites that convert local searches into booked appointments.",
    link: "/services/chiropractor-website-design",
    icon: <FaUserDoctor />,
    group: "Health & Medical",
  },
  {
    id: "pediatrician-website-design",
    title: "Pediatrician Website Design",
    description:
      "Pediatric practice sites that help parents choose and book with your clinic.",
    link: "/services/pediatrician-website-design",
    icon: <MdOutlineChildCare />,
    group: "Health & Medical",
  },

  // Professional Services
  {
    id: "law-firm-website-design",
    title: "Law Firm Website Design",
    description:
      "Law firm websites built to earn trust and convert qualified case inquiries.",
    link: "/services/law-firm-website-design",
    icon: <MdGavel />,
    group: "Professional Services",
  },
  {
    id: "real-estate-agent-website-design",
    title: "Real Estate Agent Website Design",
    description:
      "Agent and brokerage sites with listings and lead capture that win clients.",
    link: "/services/real-estate-agent-website-design",
    icon: <MdOutlineRealEstateAgent />,
    group: "Professional Services",
  },

  // Auto & Transport
  {
    id: "towing-company-website-design",
    title: "Towing Company Website Design",
    description:
      "Towing websites built for emergency calls and 24/7 dispatch requests.",
    link: "/services/towing-company-website-design",
    icon: <MdOutlineCarCrash />,
    group: "Auto & Transport",
  },
];

const industryLinks: NicheLink[] = [
  // Repair & Installation
  {
    id: "hvac-marketing-agency",
    title: "HVAC Marketing",
    description:
      "Map pack rankings, GBP, paid ads, maintenance memberships, and reviews tuned to HVAC seasonal demand peaks.",
    link: "/services/hvac-marketing-agency",
    icon: <MdOutlineHvac />,
    group: "Repair & Installation",
  },
  {
    id: "plumbing-marketing-agency",
    title: "Plumbing Marketing",
    description:
      "Map pack rankings, GBP, paid ads, websites, and reviews built to win urgent service calls for plumbing contractors.",
    link: "/services/plumbing-marketing-agency",
    icon: <MdOutlinePlumbing />,
    group: "Repair & Installation",
  },
  {
    id: "electrician-marketing-agency",
    title: "Electrician Marketing",
    description:
      "Map visibility, paid leads, and booking systems for electrical contractors.",
    link: "/services/electrician-marketing-agency",
    icon: <MdOutlineElectricalServices />,
    group: "Repair & Installation",
  },
  {
    id: "roofing-marketing-agency",
    title: "Roofing Marketing",
    description:
      "Storm, repair, and replacement leads for residential roofing companies.",
    link: "/services/roofing-marketing-agency",
    icon: <MdRoofing />,
    group: "Repair & Installation",
  },
  {
    id: "garage-door-marketing-agency",
    title: "Garage Door Marketing",
    description:
      "Urgent-call lead generation for garage door repair and installation teams.",
    link: "/services/garage-door-marketing-agency",
    icon: <MdOutlineGarage />,
    group: "Repair & Installation",
  },
  {
    id: "appliance-repair-marketing-agency",
    title: "Appliance Repair Marketing",
    description:
      "Same-day service calls at a cost per lead a repair ticket can carry.",
    link: "/services/appliance-repair-marketing-agency",
    icon: <MdOutlineKitchen />,
    group: "Repair & Installation",
  },
  {
    id: "gutter-marketing-agency",
    title: "Gutter Marketing",
    description:
      "Seamless gutter, guard, and cleaning leads that scale with every storm.",
    link: "/services/gutter-marketing-agency",
    icon: <MdOutlineWaterDrop />,
    group: "Repair & Installation",
  },
  {
    id: "septic-marketing-agency",
    title: "Septic Marketing",
    description:
      "Pumping, repair, and install leads for septic companies from maps, search, and paid ads.",
    link: "/services/septic-marketing-agency",
    icon: <MdOutlinePropaneTank />,
    group: "Repair & Installation",
  },
  {
    id: "solar-marketing-agency",
    title: "Solar Marketing",
    description:
      "Exclusive install and battery storage leads for solar companies from maps, search, and paid ads.",
    link: "/services/solar-marketing-agency",
    icon: <MdOutlineSolarPower />,
    group: "Repair & Installation",
  },

  // Remodeling & Construction
  {
    id: "bathroom-remodeling-marketing-agency",
    title: "Bathroom Remodeling Marketing",
    description:
      "Exclusive estimate requests for bath remodelers and shower conversion specialists.",
    link: "/services/bathroom-remodeling-marketing-agency",
    icon: <MdOutlineBathtub />,
    group: "Remodeling & Construction",
  },
  {
    id: "kitchen-remodeling-marketing-agency",
    title: "Kitchen Remodeling Marketing",
    description:
      "Booked design consultations for kitchen remodelers and design-build firms.",
    link: "/services/kitchen-remodeling-marketing-agency",
    icon: <MdOutlineCountertops />,
    group: "Remodeling & Construction",
  },
  {
    id: "general-contractor-marketing-agency",
    title: "General Contractor Marketing",
    description:
      "A pipeline beyond referrals for additions, remodels, ADUs, and custom builds.",
    link: "/services/general-contractor-marketing-agency",
    icon: <MdOutlineEngineering />,
    group: "Remodeling & Construction",
  },
  {
    id: "flooring-marketing-agency",
    title: "Flooring Marketing",
    description:
      "Showroom visits and in-home measures for flooring companies and installers.",
    link: "/services/flooring-marketing-agency",
    icon: <MdOutlineLayers />,
    group: "Remodeling & Construction",
  },
  {
    id: "window-and-door-marketing-agency",
    title: "Window & Door Marketing",
    description:
      "Exclusive replacement estimates for window and door dealers and installers.",
    link: "/services/window-and-door-marketing-agency",
    icon: <MdOutlineSensorDoor />,
    group: "Remodeling & Construction",
  },
  {
    id: "painting-contractor-marketing-agency",
    title: "Painting Contractor Marketing",
    description:
      "Estimate requests and local demand generation for painting contractors.",
    link: "/services/painting-contractor-marketing-agency",
    icon: <MdOutlineFormatPaint />,
    group: "Remodeling & Construction",
  },

  // Outdoor & Property Care
  {
    id: "landscaping-marketing-agency",
    title: "Landscaping Marketing",
    description:
      "Local search, ads, and recurring-service leads for landscaping companies.",
    link: "/services/landscaping-marketing-agency",
    icon: <MdOutlineGrass />,
    group: "Outdoor & Property Care",
  },
  {
    id: "tree-service-marketing-agency",
    title: "Tree Service Marketing",
    description:
      "High-ticket removals and storm response work for tree care companies.",
    link: "/services/tree-service-marketing-agency",
    icon: <MdOutlineForest />,
    group: "Outdoor & Property Care",
  },
  {
    id: "pool-service-marketing-agency",
    title: "Pool Service Marketing",
    description:
      "Recurring maintenance accounts and repair work, routed by neighborhood.",
    link: "/services/pool-service-marketing-agency",
    icon: <MdOutlinePool />,
    group: "Outdoor & Property Care",
  },
  {
    id: "pest-control-marketing-agency",
    title: "Pest Control Marketing",
    description:
      "Urgent and recurring pest-control leads from maps, search, and paid ads.",
    link: "/services/pest-control-marketing-agency",
    icon: <MdOutlinePestControl />,
    group: "Outdoor & Property Care",
  },

  // Cleaning Services
  {
    id: "cleaning-company-marketing-agency",
    title: "Cleaning Company Marketing",
    description:
      "Lead generation and local growth for residential and commercial cleaners.",
    link: "/services/cleaning-company-marketing-agency",
    icon: <MdOutlineCleaningServices />,
    group: "Cleaning Services",
  },

  // Health & Medical
  {
    id: "dental-marketing-agency",
    title: "Dental Marketing",
    description:
      "Local patient acquisition, paid ads, and reputation growth for dentists.",
    link: "/services/dental-marketing-agency",
    icon: <FaTooth />,
    group: "Health & Medical",
  },
  {
    id: "chiropractic-marketing-agency",
    title: "Chiropractic Marketing",
    description:
      "Patient acquisition systems for chiropractic clinics and local practices.",
    link: "/services/chiropractic-marketing-agency",
    icon: <FaUserDoctor />,
    group: "Health & Medical",
  },
  {
    id: "pediatric-marketing-agency",
    title: "Pediatric Marketing",
    description:
      "New-patient growth for pediatric practices from local search and reviews.",
    link: "/services/pediatric-marketing-agency",
    icon: <MdOutlineChildCare />,
    group: "Health & Medical",
  },

  // Professional Services
  {
    id: "law-firm-marketing-agency",
    title: "Law Firm Marketing",
    description:
      "Qualified case inquiries from search, paid media, and conversion-focused pages.",
    link: "/services/law-firm-marketing-agency",
    icon: <MdGavel />,
    group: "Professional Services",
  },
  {
    id: "real-estate-marketing-agency",
    title: "Real Estate Marketing",
    description:
      "Lead generation and digital visibility for agents, teams, and brokerages.",
    link: "/services/real-estate-marketing-agency",
    icon: <MdOutlineRealEstateAgent />,
    group: "Professional Services",
  },
  {
    id: "home-inspector-marketing",
    title: "Home Inspector Marketing",
    description:
      "Local SEO, Google Ads, GBP, and websites built to book more home inspections across the US.",
    link: "/services/home-inspector-marketing",
    icon: <MdOutlineHomeWork />,
    group: "Professional Services",
  },
  {
    id: "non-profit-marketing-agency",
    title: "Nonprofit Marketing",
    description:
      "Digital fundraising and advocacy — social, Google Ad Grant, video, and board-ready reporting for mission-driven organizations.",
    link: "/services/non-profit-marketing-agency",
    icon: <MdOutlineVolunteerActivism />,
    group: "Professional Services",
  },

  // Cannabis & Retail
  {
    id: "cannabis-marketing-agency",
    title: "Cannabis Marketing",
    description:
      "Compliant SEO, menu listings, SMS and loyalty marketing for dispensaries and brands.",
    link: "/services/cannabis-marketing-agency",
    icon: <FaCannabis />,
    group: "Cannabis & Retail",
  },

  // Auto & Transport
  {
    id: "auto-repair-marketing-agency",
    title: "Auto Repair Marketing",
    description:
      "Local visibility, paid search, reviews, and lead generation for repair shops.",
    link: "/services/auto-repair-marketing-agency",
    icon: <MdOutlineCarRepair />,
    group: "Auto & Transport",
  },
  {
    id: "towing-marketing-agency",
    title: "Towing Marketing",
    description:
      "Cash calls and dispatched tows for towing and roadside assistance companies.",
    link: "/services/towing-marketing-agency",
    icon: <MdOutlineCarCrash />,
    group: "Auto & Transport",
  },
  {
    id: "moving-company-marketing-agency",
    title: "Moving Company Marketing",
    description:
      "Booked move leads and local visibility for residential and commercial movers.",
    link: "/services/moving-company-marketing-agency",
    icon: <MdOutlineLocalShipping />,
    group: "Auto & Transport",
  },
];

export const seoServiceGroups = groupNicheLinks(seoServiceLinks);
export const webDesignGroups = groupNicheLinks(webDesignLinks);
export const industryGroups = groupNicheLinks(industryLinks);
