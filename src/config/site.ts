import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "SeedTask",
	description: "一款 qBittorrent 的第三方 iOS 客户端，让你在手机上随时随地管理种子任务。",
	keywords: ["qbittorrent", "SwiftUI", "Liquid Glass", "iOS", "App"],
	logo: "/assets/seed.svg",
	storeLinks: {
		apple: "#",
        apple_testflight: "#",
	},
	socialLinks,
} as const;