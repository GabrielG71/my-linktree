import Head from "../components/Head";
import Links from "../components/Links";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <Head />

        <Links
          text="Meu Site"
          description="Conheça meu portfólio e sobre mim."
          platform="website"
          href="https://gabrielgon.com.br"
        />

        <Links
          text="GitHub"
          description="Veja meus projetos e códigos."
          platform="github"
          href="https://github.com/GabrielG71"
        />

        <Links
          text="LinkedIn"
          description="Conecte-se comigo profissionalmente."
          platform="linkedin"
          href="https://linkedin.com/in/gabriel-goncalves-dev"
        />

        <Links
          text="WhatsApp"
          description="Entre em contato direto comigo."
          platform="whatsapp"
          href="https://wa.me/5514999999999"
        />

        <Links
          text="Email"
          description="Mande um email para conversarmos."
          platform="email"
          href="mailto:contato@gabrielgon.com.br"
        />

        <Links
          text="Instagram"
          description="Acompanhe meu dia a dia."
          platform="instagram"
          href="https://instagram.com/gabrielg71"
        />
      </div>
    </div>
  );
}
