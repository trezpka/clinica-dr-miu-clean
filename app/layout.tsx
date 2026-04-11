import type { Metadata } from "next";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.domain),
  title: clinic.name,
  description: "Implantologie și chirurgie dento-alveolară în Buzău.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
