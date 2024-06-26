/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "/personal-website" : "",
  output: "export",
  distDir: "dist",
};

export const { basePath } = nextConfig;
export default nextConfig;
