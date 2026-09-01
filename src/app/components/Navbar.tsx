"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaStore } from "react-icons/fa6";
import { FaBroom, FaTooth, FaUserDoctor } from "react-icons/fa6";
import { IoDesktopOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  MdGavel,
  MdOutlineBathtub,
  MdOutlineCountertops,
  MdOutlineEngineering,
  MdOutlineForest,
  MdOutlineKitchen,
  MdOutlineLayers,
  MdOutlinePool,
  MdOutlineSensorDoor,
  MdOutlineWaterDrop,
  MdOutlineCarCrash,
  MdOutlineCarRepair,
  MdOutlineChildCare,
  MdOutlineCleaningServices,
  MdOutlineElectricalServices,
  MdOutlineFormatPaint,
  MdOutlineGarage,
  MdOutlineGrass,
  MdOutlineHomeWork,
  MdOutlineHvac,
  MdOutlineLocalShipping,
  MdOutlinePestControl,
  MdOutlinePlumbing,
  MdOutlinePropaneTank,
  MdOutlineRealEstateAgent,
  MdOutlineSolarPower,
  MdOutlineVolunteerActivism,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine, RiMapPinLine, RiSearchLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import "@/app/style/navbar.css";
import { SITE_PATHS, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";

const services = [
  {
    id: "gmb",
    label: "Google My Business (GMB)",
    image: "/images/header-gmb.webp",
    alt: "google my business",
    link: "/services/gmb-reinstatement-help",
  },
  {
    id: "web",
    label: "web design",
    image: "/images/header-web.webp",
    alt: "web design",
    link: "/services/web-design",
  },
  {
    id: "seo",
    label: "local SEO",
    image: "/images/header-seo.webp",
    alt: "local seo",
    link: "/services/local-seo-for-home-services",
  },
  {
    id: "ppc",
    label: "Google ADS (PPC)",
    image: "/images/header-ad-2.webp",
    alt: "google ads",
    link: "/services/google-ads",
  },
  {
    id: "travel-tourism",
    label: "Travel & Tourism Marketing",
    image: "/images/header-seo.webp",
    alt: "travel and tourism marketing",
    link: "/services/travel-and-tourism-marketing-agency",
  },
];

const gmbServiceLinks = [
  {
    id: "gmb-reinstatement-help",
    label: "GMB Reinstatement",
    link: "/services/gmb-reinstatement-help",
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
  "Auto & Transport",
] as const;

type NicheGroup = (typeof NICHE_GROUP_ORDER)[number];

type NicheLink = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
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

const seoServiceGroups = groupNicheLinks(seoServiceLinks);
const webDesignGroups = groupNicheLinks(webDesignLinks);
const industryGroups = groupNicheLinks(industryLinks);

// Chevron-only accordion toggle so mobile header links stay outside the button
// (an <a> inside <button> is invalid HTML).
function MobileAccordionToggle({
  eventKey,
  label,
}: {
  eventKey: string;
  label: string;
}) {
  const { activeEventKey } = useContext(AccordionContext);
  const toggleAccordion = useAccordionButton(eventKey);
  const isOpen = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={`accordion-button mob-acc-toggle${isOpen ? "" : " collapsed"}`}
      aria-expanded={isOpen}
      aria-label={label}
      onClick={toggleAccordion}
    />
  );
}

/* ── Free Website offer landers ──────────────────────────────────────────
   The industry-specific versions of the offer. The general offer page is the
   parent nav link itself, so it is deliberately not repeated in this list. */
type FreeWebsiteLink = Omit<NicheLink, "group">;

const freeWebsiteLinks: FreeWebsiteLink[] = [
  {
    id: "free-website-roofing",
    title: "Roofing Websites",
    description:
      "Built around repair, replacement, and storm-damage search intent.",
    link: "/roofing-website-design-agency-us/offer",
    icon: <MdRoofing />,
  },
  {
    id: "free-website-hvac",
    title: "HVAC Websites",
    description:
      "Built around AC repair, heating, and seasonal maintenance demand.",
    link: "/hvac-website-design-agency-us/offer",
    icon: <MdOutlineHvac />,
  },
  {
    id: "free-website-plumbing",
    title: "Plumbing Websites",
    description:
      "Built around emergency calls, drains, and water-heater replacements.",
    link: "/plumber-website-design-agency-us/offer",
    icon: <MdOutlinePlumbing />,
  },
];

function FreeWebsiteMenu() {
  return (
    <div className="services-dropdown-container services-core-dropdown free-website-dropdown">
      <div className="services-core-grid free-website-grid">
        {freeWebsiteLinks.map((item) => (
          <Link href={item.link} className="services-core-card" key={item.id}>
            <span className="services-core-icon">{item.icon}</span>
            <span className="services-core-content">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

type NicheSection = { group: string; items: NicheLink[] };

// Desktop mega menu: the same card layout as the Services dropdown, split into
// category sections ("Repair & Installation", "Health & Medical", ...) so the
// 25-30 niche pages in each menu stay scannable.
function NicheMegaMenu({ groups }: { groups: NicheSection[] }) {
  return (
    <div
      className="services-dropdown-container services-core-dropdown niche-core-dropdown"
      data-lenis-prevent
    >
      {groups.map((section) => (
        <div className="niche-core-section" key={section.group}>
          <p className="niche-core-heading">{section.group}</p>

          <div className="services-core-grid niche-core-grid">
            {section.items.map((item) => (
              <Link href={item.link} className="services-core-card" key={item.id}>
                <span className="services-core-icon">{item.icon}</span>
                <span className="services-core-content">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileNicheList({
  groups,
  onNavigate,
}: {
  groups: NicheSection[];
  onNavigate: () => void;
}) {
  return (
    <ul className="mobile-niche-groups">
      {groups.map((section) => (
        <li className="mobile-niche-group" key={section.group}>
          <p className="mobile-niche-group-title">{section.group}</p>
          <ul className="mobile-niche-sublist">
            {section.items.map((item) => (
              <li key={item.id}>
                <Link href={item.link} onClick={onNavigate}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const forceWhiteNavbar =
    pathname === "/" ||
    pathname === "/services/philadelphia/digital-marketing" ||
    pathname === "/services/philadelphia/sem" ||
    pathname === "/services/philadelphia/ppc" ||
    pathname === "/services/philadelphia/local-seo" ||
    pathname === "/services/delaware/digital-marketing" ||
    pathname === "/services/local-seo-services-for-hvac" ||
    pathname === "/services/industry/local-seo-services-for-hvac" ||
    pathname === "/services/industry/local-seo-for-roofing-companies" ||
    pathname === "/services/industry/car-towing" ||
    pathname === "/services/industry/seo-services-for-plumber" ||
    pathname === "/services/industry/plumber" ||
    pathname === "/services/industry/seo-services-for-pest-control" ||
    pathname === "/services/industry/pest-control" ||
    pathname === "/services/industry/dental-seo-services" ||
    pathname === "/services/industry/pediatricians" ||
    pathname === "/services/industry/real-estate-seo-services" ||
    pathname === "/services/industry/chiropractor-local-seo-services" ||
    pathname === "/services/industry/local-seo-for-law-firms" ||
    pathname === "/services/industry/local-seo-for-commercial-cleaning" ||
    pathname === "/services/industry/local-seo-services-for-residential-cleaning";
  // const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [, setScrollDownDistance] = useState(0);
  // const [, setScrollUpDistance] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [accordionKey, setAccordionKey] = useState<string | null>(null);
  const [mobileServicesNestedKey, setMobileServicesNestedKey] = useState<
    string | null
  >(null);
  const isFirstPathnameRenderRef = useRef(true);
  const mobileOpenRef = useRef(mobileOpen);
  const closeMenuFrameRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    if (isFirstPathnameRenderRef.current) {
      isFirstPathnameRenderRef.current = false;
      return;
    }

    if (!mobileOpenRef.current) {
      return;
    }

    closeMenuFrameRef.current = window.requestAnimationFrame(() => {
      setMobileOpen(false);
      setAccordionKey(null);
    });

    return () => {
      if (closeMenuFrameRef.current !== null) {
        window.cancelAnimationFrame(closeMenuFrameRef.current);
        closeMenuFrameRef.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeMenuFrameRef.current !== null) {
        window.cancelAnimationFrame(closeMenuFrameRef.current);
      }
    };
  }, []);

  const handleToggleMobileMenu = (isOpen: boolean) => {
    setMobileOpen(isOpen);
    if (!isOpen) {
      setAccordionKey(null);
      setMobileServicesNestedKey(null);
    }
  };

  useEffect(() => {
    const syncScrolledState = () => {
      setScrolled(window.scrollY > 40);

      /*
      if (mobileOpen) {
        setShowNavbar(true);
        return;
      }
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY < 80) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (diff > 0) {
        setScrollDownDistance((prev) => {
          const newDown = prev + diff;
          if (newDown > 80) setShowNavbar(false);
          return newDown;
        });
        setScrollUpDistance(0);
      } else {
        setScrollUpDistance((prev) => {
          const newUp = prev + Math.abs(diff);
          if (newUp > 120) setShowNavbar(true);
          return newUp;
        });
        setScrollDownDistance(0);
      }
      setLastScrollY(currentScrollY);
      */
    };

    syncScrolledState();

    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("pageshow", syncScrolledState);

    return () => {
      window.removeEventListener("scroll", syncScrolledState);
      window.removeEventListener("pageshow", syncScrolledState);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar-wrapper show ${scrolled ? "scrolled" : ""} ${forceWhiteNavbar ? "force-white" : ""}`}
      >
        <Container fluid className="p-0">
          <Row className="align-items-center justify-content-between g-0">
            <Col xs="auto">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  width={132}
                  height={50}
                  alt="logo"
                  className="logo-img"
                  priority
                />
              </Link>
            </Col>

            <Col className="d-none d-lg-block">
              <nav className="menu-items">
                <ul>
                  <li className="services-dropdown">
                    <Link href={SITE_PATHS.services}>
                      Services <MdArrowOutward size={16} />
                    </Link>
                    <div className="services-dropdown-container services-core-dropdown">
                      <div className="services-core-grid services-main-grid">
                        <Link
                          href="/services/web-design"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <IoDesktopOutline />
                          </span>
                          <span className="services-core-content">
                            <strong>Web Design</strong>
                            <span>
                              Conversion-focused websites built to give your
                              business a polished online presence.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/services/google-ads"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <SiGoogleads />
                          </span>
                          <span className="services-core-content">
                            <strong>Google Ads</strong>
                            <span>
                              Paid campaigns designed to bring qualified leads
                              and faster visibility.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/services/local-seo-for-home-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <RiMapPinLine />
                          </span>
                          <span className="services-core-content">
                            <strong>Local SEO</strong>
                            <span>
                              Local search strategies that help service
                              businesses rank and generate consistent calls.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/services/travel-and-tourism-marketing-agency"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <LuPlaneTakeoff />
                          </span>
                          <span className="services-core-content">
                            <strong>Travel &amp; Tourism Marketing</strong>
                            <span>
                              Direct-booking growth for hotels, tour operators,
                              and destinations.
                            </span>
                          </span>
                        </Link>

                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <FaStore />
                          </span>
                          <span className="services-core-content">
                            <strong>Google My Business</strong>
                            <span>
                              Profile setup, recovery, and optimization to help
                              customers find you locally.
                            </span>

                            <span className="services-core-tags">
                              {gmbServiceLinks.map((gmbLink) => (
                                <Link
                                  key={gmbLink.id}
                                  href={gmbLink.link}
                                  className="services-core-tag"
                                >
                                  {gmbLink.label}
                                </Link>
                              ))}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="services-core-divider" />

                      <div className="services-core-bottom">
                        <p className="services-core-bottom-copy">
                          Let&apos;s Start a project with{" "}
                          <strong>Zonic Media</strong>
                        </p>

                        <Link href="/contact-us" className="services-core-cta">
                          Get Started Today
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <Link href={SITE_PATHS.seo}>
                      Local SEO <MdArrowOutward size={16} />
                    </Link>

                    <NicheMegaMenu
                      groups={seoServiceGroups}
                    />
                  </li>
                  <li className="services-dropdown">
                    <Link href="/services/web-design">
                      Web Design <MdArrowOutward size={16} />
                    </Link>

                    <NicheMegaMenu
                      groups={webDesignGroups}
                    />
                  </li>
                  <li>
                    <Link href="/services/gmb-reinstatement-help">
                      GMB Reinstatement
                    </Link>
                  </li>
                  <li className="services-dropdown">
                    <span className="nav-link-with-icon">
                      Locations <MdArrowOutward size={16} />
                    </span>

                    <div className="services-dropdown-container services-core-dropdown areas-core-dropdown">
                      <div className="services-core-grid areas-core-grid">
                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <MdOutlineLocationOn />
                          </span>
                          <span className="services-core-content">
                            <strong>
                              <Link
                                href="/services/delaware/digital-marketing"
                                className="services-core-title-link"
                              >
                                Digital Marketing Agency in Delaware
                              </Link>
                            </strong>
                            <span>
                              Full-service digital marketing strategies for
                              Delaware businesses focused on visibility, leads,
                              and long-term growth.
                            </span>

                            <span className="services-core-tags">
                              <Link
                                href="/services/delaware/seo"
                                className="services-core-tag"
                              >
                                SEO Company Delaware
                              </Link>
                              <Link
                                href="/services/delaware/web-design"
                                className="services-core-tag"
                              >
                                Delaware Web Design
                              </Link>
                              <Link
                                href="/services/wilmington/digital-marketing"
                                className="services-core-tag"
                              >
                                Wilmington
                              </Link>
                            </span>
                          </span>
                        </div>

                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <MdOutlineLocationOn />
                          </span>
                          <span className="services-core-content">
                            <strong>
                              <Link
                                href="/services/philadelphia/digital-marketing"
                                className="services-core-title-link"
                              >
                                Digital Marketing Agency in Philadelphia
                              </Link>
                            </strong>
                            <span>
                              Explore our upcoming local market pages and city-
                              focused service coverage.
                            </span>

                            <span className="services-core-tags">
                              <Link
                                href="/services/philadelphia/local-seo"
                                className="services-core-tag"
                              >
                                Philadelphia SEO Company
                              </Link>
                              <Link
                                href="/services/philadelphia/sem"
                                className="services-core-tag"
                              >
                                SEM Agency Philadelphia
                              </Link>
                              <Link
                                href="/services/philadelphia/ppc"
                                className="services-core-tag"
                              >
                                PPC Agency Philadelphia
                              </Link>
                            </span>
                          </span>
                        </div>

                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <MdOutlineLocationOn />
                          </span>
                          <span className="services-core-content">
                            <strong>
                              <Link
                                href="/services/nyc/digital-marketing"
                                className="services-core-title-link"
                              >
                                Digital Marketing Agency in NYC
                              </Link>
                            </strong>
                            <span>
                              Borough-level SEO, ads, and web design for New
                              York City businesses across all five boroughs.
                            </span>

                            <span className="services-core-tags">
                              <Link
                                href="/services/nyc/local-seo"
                                className="services-core-tag"
                              >
                                NYC Local SEO
                              </Link>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <Link
                      href={SITE_PATHS.industries}
                      className="nav-link-with-icon"
                    >
                      Industries <MdArrowOutward size={16} />
                    </Link>

                    <NicheMegaMenu
                      groups={industryGroups}
                    />
                  </li>
                  <li className="services-dropdown services-dropdown--anchored">
                    <Link
                      href="/website-design-agency-us/offer"
                      className="nav-link-with-icon"
                    >
                      Free Website <MdArrowOutward size={16} />
                    </Link>

                    <FreeWebsiteMenu />
                  </li>
                  {/* Desktop "Others" dropdown removed Aug 2026 — its links
                      (Launchpad, About, Blog, Contact, Free Website) live in
                      the footer Others column; the mobile menu keeps its own
                      Others accordion. */}
                </ul>
              </nav>
            </Col>

            <Col xs="auto">
              <div className="header-button d-none d-lg-flex">
                <Link href="tel:3027269736" className="buttons">
                  <span>(302) 726-9736</span>
                  <span className="buttons__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="buttons__icon-svg"
                      width="8"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="8"
                      xmlns="http://www.w3.org/2000/svg"
                      className="buttons__icon-svg buttons__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="hamburger-menu-wrapper d-block d-lg-none">
                <input
                  hidden
                  className="check-icon"
                  id="check-icon"
                  type="checkbox"
                  checked={mobileOpen}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleToggleMobileMenu(e.target.checked)
                  }
                />
                <label className="icon-menu" htmlFor="check-icon">
                  <div className="bar bar--1"></div>
                  <div className="bar bar--2"></div>
                  <div className="bar bar--3"></div>
                </label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className={`mob-tab-navbar-wrapper d-lg-none ${mobileOpen ? "show-mob-tab" : ""}`}
      >
        <div className="mob-tab-nav-menus">
          <ul>
            <li>
              <Accordion
                flush
                id="mobileServicesAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="0">
                  <div className="mob-acc-link-header">
                    <Link
                      href="/services"
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Services
                    </Link>
                    <MobileAccordionToggle
                      eventKey="0"
                      label="Toggle services menu"
                    />
                  </div>
                  <Accordion.Body>
                    <ul>
                      {services.map((s) => (
                        <li key={s.id}>
                          {s.id === "gmb" ? (
                            <Accordion
                              flush
                              className="mobile-services-nested-accordion"
                              activeKey={mobileServicesNestedKey}
                              onSelect={(eventKey) =>
                                setMobileServicesNestedKey(
                                  typeof eventKey === "string"
                                    ? eventKey
                                    : null,
                                )
                              }
                            >
                              <Accordion.Item eventKey="gmb-mobile">
                                <Accordion.Header>{s.label}</Accordion.Header>
                                <Accordion.Body>
                                  <ul className="mobile-services-submenu">
                                    {gmbServiceLinks.map((gmbLink) => (
                                      <li key={gmbLink.id}>
                                        <Link
                                          href={gmbLink.link}
                                          onClick={() =>
                                            handleToggleMobileMenu(false)
                                          }
                                        >
                                          {gmbLink.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          ) : (
                            <Link
                              href={s.link}
                              onClick={() => handleToggleMobileMenu(false)}
                            >
                              {s.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileLocalSeoAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="5">
                  <div className="mob-acc-link-header">
                    <Link
                      href={SITE_PATHS.seo}
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Local SEO
                    </Link>
                    <MobileAccordionToggle
                      eventKey="5"
                      label="Toggle local SEO menu"
                    />
                  </div>
                  <Accordion.Body>
                    <MobileNicheList
                      groups={seoServiceGroups}
                      onNavigate={() => handleToggleMobileMenu(false)}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileWebDesignAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="6">
                  <div className="mob-acc-link-header">
                    <Link
                      href="/services/web-design"
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Web Design
                    </Link>
                    <MobileAccordionToggle
                      eventKey="6"
                      label="Toggle web design menu"
                    />
                  </div>
                  <Accordion.Body>
                    <MobileNicheList
                      groups={webDesignGroups}
                      onNavigate={() => handleToggleMobileMenu(false)}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Link href="/services/gmb-reinstatement-help">
                GMB Reinstatement
              </Link>
            </li>
            <li>
              <Accordion
                flush
                id="mobileAreasAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
                >
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Locations</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <Link
                          href="/services/delaware/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Digital Marketing Agency in Delaware
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Digital Marketing Agency in Philadelphia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/delaware/seo"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          SEO Company Delaware
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/delaware/web-design"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Delaware Web Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/wilmington/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Wilmington Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/local-seo"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Philadelphia SEO Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/sem"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          SEM Agency Philadelphia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/ppc"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          PPC Agency Philadelphia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/nyc/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          NYC Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/nyc/local-seo"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          NYC Local SEO
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileIndustriesAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Industries</Accordion.Header>
                  <Accordion.Body>
                    <MobileNicheList
                      groups={industryGroups}
                      onNavigate={() => handleToggleMobileMenu(false)}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileFreeWebsiteAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="6">
                  <div className="mob-acc-link-header">
                    <Link
                      href="/website-design-agency-us/offer"
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Free Website
                    </Link>
                    <MobileAccordionToggle
                      eventKey="6"
                      label="Toggle free website menu"
                    />
                  </div>
                  <Accordion.Body>
                    <ul className="mobile-niche-sublist">
                      {freeWebsiteLinks.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.link}
                            onClick={() => handleToggleMobileMenu(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileOthersAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="2">
                  <div className="mob-acc-link-header">
                    <Link
                      href={SITE_PATHS.about}
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Others
                    </Link>
                    <MobileAccordionToggle
                      eventKey="2"
                      label="Toggle others menu"
                    />
                  </div>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <Link
                          href="/services/launchpad"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Launchpad
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={SITE_PATHS.about}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={SITE_PATHS.blogs}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={SITE_PATHS.contact}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
          </ul>
        </div>
        <div className="mob-tab-nav-socials">
          <ul>
            {SITE_SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
