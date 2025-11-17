import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "SeedTask",
	description: "Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	keywords: ["qbittorrent", "SwiftUI", "Liquid Glass", "iOS", "App"],
	logo: "/assets/seed.svg",
	storeLinks: {
		apple: "#",
        apple_testflight: "#",
	},
	socialLinks,
} as const;