import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Dr. Miu — Implant Dentar Buzău | Chirurgie Dento-Alveolară",
  description:
    "Clinica Dr. Miu din Buzău oferă servicii de implantologie și chirurgie dento-alveolară. Programează o consultație.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
