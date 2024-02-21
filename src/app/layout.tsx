import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lucaseduardo.xyz",
  description: "Sou programador back-end e gosto de criar projetos incríveis. Estou sempre procurando expandir meus conhecimentos e adquirir novas habilidades para tornar meu trabalho mais eficiente.",
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
