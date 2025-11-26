import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "SeedTask",
	description: "一种用于远程管理您自有 NAS 或私有服务器上传输任务的工具，让你在手机上随时随地管理任务。",
	keywords: ["qbittorrent", "SwiftUI", "Liquid Glass", "iOS", "App"],
	logo: "/assets/seed.svg",
	storeLinks: {
		apple: "#",
        apple_testflight: "https://testflight.apple.com/join/Be2qS88r",
	},
	socialLinks,
} as const;