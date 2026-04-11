import type { Metadata } from "next";
import { clinic } from "./clinic";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${clinic.domain}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: clinic.name,
      type: "website",
      locale: "ro_RO",
      images: [
        {
          url: `${clinic.domain}/og-clinica-dr-miu.jpg`,
          width: 1200,
          height: 630,
          alt: clinic.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${clinic.domain}/og-clinica-dr-miu.jpg`],
    },
  };
}

export function dentistJsonLd(description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    description,
    telephone: "+40 750 709 716",
    email: clinic.email,
    url: `${clinic.domain}${path}`,
    areaServed: clinic.city,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressCountry: "RO",
    },
    founder: {
      "@type": "Person",
      name: clinic.doctor,
      jobTitle: "Medic specialist chirurgie dento-alveolară și implantologie",
    },
  };
}

export function faqJsonLd(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
