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
  title: "Eudora Couture - Créations haute couture pour bébés et mamans",
  description: "Créations haute couture d'exception à La Réunion : sacs de luxe, capes de bain premium, pochettes raffinées et accessoires haut de gamme pour bébés. Pièces uniques et sur-mesure.",
  keywords: "haute couture, luxe, bébé, maman, La Réunion, fait main, artisanat d'exception, cadeau naissance prestigieux, sur mesure, création exclusive",
  authors: [{ name: "Marie - Eudora Couture" }],
  creator: "Eudora Couture",
  publisher: "Eudora Couture",
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
    title: "Eudora Couture - Haute Couture pour bébés",
    description: "Créations haute couture pour bébés et mamans d'exception à La Réunion",
    locale: "fr_FR",
    siteName: "Eudora Couture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eudora Couture - Haute Couture",
    description: "Créations haute couture pour bébés et mamans à La Réunion",
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
