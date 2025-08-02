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
      <body className="bg-[#0e1117] text-white m-0 p-0">
        <main className="min-h-screen flex flex-col items-center justify-start py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
