import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cloudlector.xyz",
  description: "Meu nome é Lucas Eduardo, sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente.",
  authors: [{ name: "Lucas Eduardo", url: "https://cloudlector.xyz" }],
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
      type: "image/png",
      sizes: "256x256"
    }
  ],
  robots: { index: true, follow: true },
  creator: "Lucas Eduardo",
  referrer: "origin-when-cross-origin",
  publisher: "Lucas Eduardo",
  twitter: { card: "summary_large_image", creator: "Lucas Eduardo", title: "cloudlector.xyz", images: "https://cloudlector.xyz/static/cover.png", description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente." },
  openGraph: { title: "cloudlector.xyz", description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente.", images: "https://cloudlector.xyz/static/cover.png" },
  keywords: "lucas eduardo,lucaseduardo.xyz,cloudlector.xyz blog,cloudlector.xyz portfolio,cloudlector.xyz projects,cloudlector.xyz about,cloudlector.xyz contact,cloudlector.xyz resume,cloudlector.xyz cv,cloudlector.xyz curriculum vitae,cloudlector.xyz curriculum,Lucas Eduardo,lucas eduardo dev,Lucas Eduardo dev,back-end,front-end,full-stack,backend,frontend,fullstack,devops,dev,programação,developer,programmer,programador,programmers,setup,setup minimalism,setup minimal,minimalism,setup minimalista,mano deyvin,chorume,bolha dev,bolha dev twitter,jovem tranquilao,aprender programação,tecnologia,junior,pleno,senior,fullstack developer,wallpaper dev,deyvin,chorume,bolha dev,bolha dev twitter,setup dev,melhor linguagem de programação,lucas montano,filipe deschamps,portfolio,portfolio dev,meu setup,a day in the life,a day in the life dev,a day in the life of a developer,a day in the life of a developer dev,a day in the life of a software engineer,rotina programador,rotina dev,rotina"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <Head>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MW3QZ5HC');;
              `,
            }}
          />
      </Head>
      <body className={inter.className}>
          <script src="https://www.googletagmanager.com/gtag/js?id=G-HG54YKLHNH" data-nscript="afterInteractive"></script>
          <script id="gtag" data-nscript="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
            id="gtag"
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HG54YKLHNH');
              `,
            }}
            
          />
        <script async src="https://tally.so/widgets/embed.js"></script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
