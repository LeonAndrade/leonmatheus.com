/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
