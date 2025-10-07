import type { Metadata } from "next";
import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "MCN - Musée des Civilisations Noires",
  description: "Découvrez les trésors culturels et artistiques de l'Afrique au Musée des Civilisations Noires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${merriweather.variable} antialiased`}
        style={{ fontFamily: 'var(--font-merriweather), serif' }}
      >
        {children}
      </body>
    </html>
  );
}
