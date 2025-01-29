import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import('next').NextConfig} */
// Your Next.js config
const nextConfig = {
  reactStrictMode: true,
};

/** 文檔出處 */
// https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started

const nextConfigFunction = async (phase) => {
  // 不同模式的時候
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
    });
    return withPWA(nextConfig);
  }
  //   預設模式
  return nextConfig;
};

export default nextConfigFunction;
