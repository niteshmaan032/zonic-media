export const SITE_CONTACT = {
  email: "contact@zonicllc.com",
  emailHref: "mailto:contact@zonicllc.com",
  phoneDisplay: "+1 (302) 726-9376",
  phoneHref: "tel:+13027269376",
  address: "8 The Green, STE B Dover, Kent, DE 19901 United States",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=8+The+Green,+STE+B,+Dover,+Kent,+DE+19901,+United+States",
  bookCallHref: "/contact-us",
} as const;

export const SITE_PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact-us",
  blogs: "/coming-soon",
  seo: "/services/local-seo",
  legalPlaceholder: "/coming-soon",
} as const;

export const SITE_SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zonic-media/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zonicmediallc/?rdid=KDHW5CqF87EH3bDP",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zoniclocalseo?igsh=dXVndXJ3ZnlleHRp",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ZonicMediaDelware",
  },
] as const;
