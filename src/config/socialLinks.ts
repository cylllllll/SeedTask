import {
    RiGithubLine,
    RiInstagramFill,
    RiTelegram2Fill,
    RiTwitterXFill,
} from "react-icons/ri";
import type { SocialLink } from "@/types/app";

export const socialLinks: SocialLink[] = [
	{
		url: "https://t.me/SeedTask",
		icon: RiTelegram2Fill,
		label: "Telegram",
	},
	{
		url: "https://github.com/cylllllll/SeedTask",
		icon: RiGithubLine,
		label: "Github",
	},
];
