import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["untitled-ui-api.ru"],
  },
  sassOptions: {
    includePaths: ["./src/styles/abstracts"],
    prependData: `@import "index.scss";`,
  },
};

export default nextConfig;
