const { redirect } = require("next/dist/server/api-utils");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["https://fitpage-ten.vercel.app", "media.graphassets.com"],
		formats: ["image/avif", "image/webp"],
	},
	async redirects() {
		return [
			{
				source: "/bezplatna-konsultacja",
				destination: "/#kontakt",
				permanent: true,
			},
		];
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});

		return config;
	},
};

module.exports = nextConfig;
