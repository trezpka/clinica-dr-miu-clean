import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Dr. Miu — Implant Dentar Buzău | Chirurgie Dento-Alveolară",
  description:
    "Clinica Dr. Miu din Buzău oferă servicii de implantologie și chirurgie dento-alveolară. Peste 500 de implanturi inserate cu succes. Programează-te acum.",
  keywords: [
    "implant dentar Buzău",
    "implantologie Buzău",
    "chirurgie dento-alveolară",
    "clinica Dr. Miu",
    "medic implantolog Buzău",
  ],
  authors: [{ name: "Dr. Cosmin Miu" }],
  metadataBase: new URL("https://clinicadrmiu.ro"),
  openGraph: {
    title: "Clinica Dr. Miu — Implant Dentar Buzău",
    description:
      "Specialist în implantologie și chirurgie dento-alveolară în Buzău. Peste 500 de implanturi inserate cu succes.",
    url: "https://clinicadrmiu.ro",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinica Dr. Miu — Implant Dentar Buzău",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
