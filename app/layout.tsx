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
  keywords: "artisanat, bébé, maman, La Réunion, fait main, sac à langer, cape de bain, cadeau naissance, sur mesure, éco-responsable",
  authors: [{ name: "Marie - Ti Bébé Péi" }],
  creator: "Ti Bébé Péi",
  publisher: "Ti Bébé Péi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: "Ti Bébé Péi - Créations artisanales",
    description: "Créations artisanales pour bébés et mamans, inspirées de La Réunion",
    locale: "fr_FR",
    siteName: "Ti Bébé Péi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ti Bébé Péi - Créations artisanales",
    description: "Créations artisanales pour bébés et mamans à La Réunion",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6B6B',
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
