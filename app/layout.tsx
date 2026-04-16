import type { Metadata } from "next";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script"; // 👈 IMPORTANT

export const metadata: Metadata = {
  metadataBase: new URL(clinic.domain),
  title: clinic.name,
  description: "Implantologie și chirurgie dento-alveolară în Buzău.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
