import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ti Bébé Péi - Créations artisanales pour bébés et mamans",
  description: "Créations artisanales faites main à La Réunion : sacs à langer, capes de bain, trousses et accessoires pour bébés. Personnalisables et éco-responsables.",
  keywords: "artisanat, bébé, maman, La Réunion, fait main, sac à langer, cape de bain, cadeau naissance",
  openGraph: {
    title: "Ti Bébé Péi - Créations artisanales",
    description: "Créations artisanales pour bébés et mamans, inspirées de La Réunion",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-gray-800`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
