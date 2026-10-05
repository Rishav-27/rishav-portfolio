import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Send www.rishavdev.in to the canonical apex domain so search engines see one site.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rishavdev.in" }],
        destination: "https://rishavdev.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
