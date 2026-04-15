import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/service/google-my-business/gmb-suspension-reinstatement",
        destination: "/services/gmb-reinstatement-help",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
