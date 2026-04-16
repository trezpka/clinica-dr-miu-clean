import type { Metadata } from "next";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.domain),
  title: clinic.name,
  description: "Implantologie și chirurgie dento-alveolară în Buzău.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-white pb-24 text-slate-800 antialiased md:pb-0">
        
        {/* HEADER */}
        <SiteHeader />

        {/* PAGINI */}
        {children}

        {/* FOOTER */}
        <SiteFooter />

        {/* 🔥 STICKY BAR MOBIL (Sună + Programează) */}
        <MobileCallBar />

      </body>
    </html>
  );
}
