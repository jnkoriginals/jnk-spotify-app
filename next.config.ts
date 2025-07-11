import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["i.scdn.co"], // ← Spotify image host erlauben
    },
};

export default nextConfig;
