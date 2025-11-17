import type {Feature} from "@/types/app";
import {
    TbAdCircleOff
    , TbGlassFilled,
    TbLockAccess,
} from "react-icons/tb";

export const features: Feature[] = [
    {
        title: "Liquid Glass",
        description: "使用 iOS 26 Liquid Glass 设计风格。",
        icon: TbGlassFilled,
    },
    {
        title: "无广告",
        description: "没有任何广告干扰你的体验。",
        icon: TbAdCircleOff,
    },
    {
        title: "隐私保护",
        description: "不收集任何数据，所有数据都将留在本地。",
        icon: TbLockAccess,
    },
];
