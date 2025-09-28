/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: false,
	transpilePackages: ["@repo/ui"],
	images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
		],
  },

};

export default nextConfig;
