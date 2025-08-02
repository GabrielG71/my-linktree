"use client";

import { ExternalLink } from "lucide-react";

interface LinksProps {
  text: string;
  description?: string;
  platform:
    | "website"
    | "github"
    | "linkedin"
    | "whatsapp"
    | "email"
    | "instagram";
  href: string;
}

const platformConfigs = {
  website: {
    badge:
      "https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white",
    alt: "Website",
  },
  github: {
    badge:
      "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub",
  },
  linkedin: {
    badge:
      "https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white",
    alt: "LinkedIn",
  },
  whatsapp: {
    badge:
      "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white",
    alt: "WhatsApp",
  },
  email: {
    badge:
      "https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white",
    alt: "Email",
  },
  instagram: {
    badge:
      "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white",
    alt: "Instagram",
  },
};

export default function Links({
  text,
  description,
  platform,
  href,
}: LinksProps) {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const config = platformConfigs[platform];

  return (
    <button onClick={handleClick} className="w-full max-w-md mx-auto group">
      <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-white/90 transition-colors">
            {text}
          </h3>
          {description && (
            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 ml-4">
          <div className="rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src={config.badge}
              alt={config.alt}
              className="h-8 object-contain"
            />
          </div>
          <ExternalLink
            size={18}
            className="text-white/60 group-hover:text-white/80 transition-colors"
          />
        </div>
      </div>
    </button>
  );
}
