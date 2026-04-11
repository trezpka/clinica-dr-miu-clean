export type AdSet = {
  campaign: string;
  targetPage: string;
  keywords: string[];
  headlines: string[];
  descriptions: string[];
  callouts: string[];
  structuredSnippets: string[];
  sitelinks: { title: string; description: string; href: string }[];
};

export const adSets: AdSet[] = [
  {
    campaign: "Implant dentar Buzău",
    targetPage: "/landing-page-implant-dentar-buzau",
    keywords: [
      "implant dentar buzau",
      "clinica implantologie buzau",
      "medic implantolog buzau",
      "implantologie buzau",
      "consult implant dentar buzau",
    ],
    headlines: [
      "Implant dentar în Buzău",
      "Clinica Dr. Miu",
      "Implantologie premium",
      "Consultație în Buzău",
      "Cazuri simple și complexe",
      "Plan clar de tratament",
      "Sinus lift și adiție osoasă",
      "Dr. Miu Cosmin",
      "Chirurgie dento-alveolară",
      "Programează o evaluare",
      "Dinți ficși pe implanturi",
      "Abordare calmă și clară",
      "Soluții All-on-X",
      "Standard premium medical",
      "Implantologie în siguranță",
    ],
    descriptions: [
      "Implant dentar în Buzău cu evaluare atentă, plan corect și abordare premium. Programează o consultație.",
      "Clinică axată pe implantologie și chirurgie dento-alveolară. Cazuri simple și complexe, explicate clar.",
      "Ai nevoie de implant dentar? Evaluare în Buzău pentru soluții stabile, funcționale și predictibile.",
      "Experiență în adiție osoasă, sinus lift și All-on-X. Contactează Clinica Dr. Miu pentru programare.",
    ],
    callouts: [
      "Medic specialist",
      "Buzău",
      "Cazuri complexe",
      "Consultație clară",
      "Plan etapizat",
      "Abordare premium",
    ],
    structuredSnippets: [
      "Servicii: Implant dentar, Implantologie, Sinus lift, Adiție osoasă, All-on-X",
    ],
    sitelinks: [
      { title: "Implant dentar", description: "Vezi tratamentul complet", href: "/implant-dentar-buzau" },
      { title: "Prețuri", description: "Ce influențează costul", href: "/preturi" },
      { title: "All-on-X", description: "Dinți ficși pe implanturi", href: "/all-on-x-buzau" },
      { title: "Contact", description: "Programare rapidă", href: "/contact" },
    ],
  },
];

export const bannerMessages = [
  {
    size: "1200x628",
    title: "Implant dentar în Buzău",
    subtitle: "Evaluare atentă. Plan clar. Abordare premium.",
    cta: "Programează o consultație",
  },
  {
    size: "1080x1080",
    title: "Cazuri simple și complexe",
    subtitle: "Implantologie, sinus lift, adiție osoasă, All-on-X.",
    cta: "Vezi opțiunile",
  },
  {
    size: "1080x1920",
    title: "Clinica Dr. Miu",
    subtitle: "Implantologie și chirurgie dento-alveolară în Buzău.",
    cta: "Solicită programare",
  },
  {
    size: "1200x1200",
    title: "Dinți ficși pe implanturi",
    subtitle: "Soluții stabile, funcționale și bine planificate.",
    cta: "Află mai multe",
  },
];
