export const SITE_CONTACT = {
  email: "contact@zonicllc.com",
  emailHref: "mailto:contact@zonicllc.com",
  phoneDisplay: "(302) 726-9736",
  phoneHref: "tel:+13027269736",
  address: "8 The Green, STE B Dover, Kent, DE 19901 United States",
  mapHref: "https://maps.app.goo.gl/wWvgJJjzki7kjT8A9",
  bookCallHref: "/contact-us",
} as const;

export const SITE_PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact-us",
  blogs: "/coming-soon",
  seo: "/services/local-seo",
  terms: "/legal/terms-conditions",
  legalPlaceholder: "/coming-soon",
  privacy: "/legal/privacy-policy",
  refund: "/legal/refund-policy",
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
    href: "https://www.instagram.com/zonicmedia?igsh=dXVndXJ3ZnlleHRp",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ZonicMediaDelware",
  },
] as const;
