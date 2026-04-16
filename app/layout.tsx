import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { GoogleAnalytics } from "@/components/google-analytics";

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
      <head>
        {/* 🔥 GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BN8R5LYNDK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-BN8R5LYNDK');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-white pb-32 text-slate-800 antialiased md:pb-0">
        
        {/* 🔥 TRACKING GLOBAL */}
        <GoogleAnalytics />

        {/* HEADER */}
        <SiteHeader />

        {/* PAGINI */}
        {children}

        {/* FOOTER */}
        <SiteFooter />

        {/* 🔥 BARĂ MOBILĂ (Sună + WhatsApp + Programare) */}
        <MobileCallBar />

      </body>
    </html>
  );
}
