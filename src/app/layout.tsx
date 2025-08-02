import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Gabriel Gonçalves - Linktree",
  description:
    "Uma linktree feita em Next e React com meus principais links como rede sociais, projetos e etc...",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
