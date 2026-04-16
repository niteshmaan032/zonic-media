import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/service/google-my-business/gmb-suspension-reinstatement",
        destination: "/services/gmb-reinstatement-help",
        permanent: true,
      },

      { source: "/company/our-partners", destination: "/", permanent: true },
      {
        source: "/who-we-help/healthcare/veterinary",
        destination: "/dentist-seo-services",
        permanent: true,
      },
      {
        source: "/service/web-design",
        destination: "/services/web-design",
        permanent: true,
      },
      {
        source: "/company/casual-appointment",
        destination: "/contact-us",
        permanent: true,
      },
      { source: "/service/social-media", destination: "/", permanent: true },
      {
        source: "/refund-policy",
        destination: "/legal/refund-policy",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare",
        destination: "/dentist-seo-services",
        permanent: true,
      },
      {
        source: "/who-we-help/medical/doctors",
        destination: "/",
        permanent: true,
      },
      { source: "/company", destination: "/", permanent: true },
      { source: "/who-we-help", destination: "/", permanent: true },
      {
        source:
          "/blog/what-is-deceptive-content-how-to-fix-your-suspended-gmb-profile",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service/search-engine-marketing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/google-business-profile-suspension-guidelines-2025",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/chiropractors",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/medical/med-spas",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service/leads-generation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/hvac",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/dentist",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service/search-engine-optimization",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/pediatrician",
        destination: "/",
        permanent: true,
      },
      { source: "/contact", destination: "/contact-us", permanent: true },
      {
        source: "/who-we-help/service-providers/electricians",
        destination: "/",
        permanent: true,
      },
      { source: "/company/about-us", destination: "/about", permanent: true },
      {
        source: "/service/google-my-business",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/contractors",
        destination: "/",
        permanent: true,
      },
      { source: "/service/web-desing", destination: "/", permanent: true },
      { source: "/blog/author/zonic_llc", destination: "/", permanent: true },
      { source: "/white-label-seo", destination: "/", permanent: true },
      {
        source: "/blog/category/google-my-business",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/legal/terms-conditions",
        permanent: true,
      },

      // Home services
      {
        source: "/who-we-help/home-service/construction-companies",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/plumbers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/hvac",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/electricians",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/roofers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/contractors",
        destination: "/",
        permanent: true,
      },

      // Cleanup URLs
      { source: "/elementor-1720", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/author/zonic_llc", destination: "/", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
