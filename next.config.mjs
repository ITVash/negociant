/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "t.me",
			},
		],
	},
	reactStrictMode: false,
}

export default nextConfig

