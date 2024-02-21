import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cloudlector.xyz",
  description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente.",
  authors: [{ name: "Lucas Eduardo", url: "https://cloudlector.xyz" }],
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      type: "image/png",
      sizes: "256x256"
    }
  ],
  robots: { index: true, follow: true },
  creator: "Lucas Eduardo",
  referrer: "origin-when-cross-origin",
  publisher: "Lucas Eduardo",
  twitter: { card: "summary_large_image", creator: "Lucas Eduardo", title: "cloudlector.xyz", images: "https://portfolio-lucaseduardo122.vercel.app/static/cover.png", description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente." },
  openGraph: { title: "cloudlector.xyz", description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente.", images: "https://portfolio-lucaseduardo122.vercel.app/static/cover.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <script async src="https://tally.so/widgets/embed.js"></script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
