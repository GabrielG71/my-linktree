"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";

export default function Head() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Meu Linktree",
          url: window.location.href,
        })
        .catch((error) => console.log("Erro ao compartilhar", error));
    } else {
      alert("Seu navegador não suporta o compartilhamento.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <Image
          src="/Gabriel.png"
          alt="Foto de perfil"
          width={120}
          height={120}
          className="rounded-full object-cover ring-4 ring-white shadow-lg"
        />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-2">
            Gabriel Gonçalves
          </h1>
          <p className="text-sm text-gray-200 leading-relaxed">
            Desenvolvedor Full-Stack | NodeJS | TypeScript | PHP
          </p>
        </div>

        <button
          onClick={handleShare}
          className="ml-4 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
          aria-label="Compartilhar"
        >
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
