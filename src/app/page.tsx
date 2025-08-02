import Head from "../components/Head";
import Links from "../components/Links";

export default function HomePage() {
  return (
    <div>
      <Head />
      <Links
        text="GitHub"
        description="Veja meus projetos e código"
        imageUrl="/github-logo.png"
        href="https://github.com/seu-usuario"
        imageAlt="Logo do GitHub"
      />
    </div>
  );
}
