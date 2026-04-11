export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  intro: string[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cat-costa-un-implant-dentar-in-buzau",
    title: "Cât costă un implant dentar în Buzău?",
    description:
      "Factori care influențează costul unui implant dentar în Buzău și de ce evaluarea corectă este mai importantă decât un preț afișat fără context.",
    publishedAt: "2026-04-10",
    readingTime: "6 min",
    category: "Implant dentar",
    intro: [
      "Mulți pacienți caută direct cât costă un implant dentar în Buzău, dar răspunsul corect nu înseamnă doar un număr.",
      "Costul final poate depinde de situația clinică, de suportul osos, de nevoia unor proceduri suplimentare și de etapa protetică.",
    ],
    sections: [
      {
        title: "De ce nu toate cazurile au același cost",
        paragraphs: [
          "Un implant dentar nu înseamnă doar inserarea unui implant. În multe situații este nevoie de evaluare imagistică, planificare atentă și etapizare corectă.",
          "Doi pacienți pot cere același tratament, dar contextul clinic să fie complet diferit.",
        ],
        bullets: [
          "volumul osos existent",
          "zona în care lipsește dintele",
          "necesitatea unei adiții osoase sau a unui sinus lift",
          "tipul restaurării protetice",
        ],
      },
      {
        title: "De ce este importantă consultația",
        paragraphs: [
          "Consultația nu este doar un pas administrativ, ci momentul în care se stabilește ce este realist și corect pentru cazul respectiv.",
          "Un plan de tratament bine explicat oferă pacientului claritate și ajută la înțelegerea costului real al tratamentului.",
        ],
      },
      {
        title: "Cum ar trebui interpretat un preț foarte mic",
        paragraphs: [
          "În zona medicală, un preț afișat fără context poate crea impresii greșite. Important este ce include tratamentul și dacă soluția propusă este potrivită pe termen lung.",
        ],
      },
    ],
  },
  {
    slug: "cand-ai-nevoie-de-aditie-osoasa-inainte-de-implant",
    title: "Când ai nevoie de adiție osoasă înainte de implant?",
    description:
      "Află în ce situații poate fi necesară adiția osoasă înainte de tratamentul implantar și de ce decizia se ia numai după evaluare atentă.",
    publishedAt: "2026-04-10",
    readingTime: "5 min",
    category: "Adiție osoasă",
    intro: [
      "Nu toți pacienții care au nevoie de implant dentar necesită adiție osoasă.",
      "Această procedură este recomandată atunci când suportul osos existent nu oferă condiții suficiente pentru stabilitatea implantului.",
    ],
    sections: [
      {
        title: "Situații în care poate fi necesară",
        paragraphs: [
          "Pierderile dentare vechi sunt frecvent urmate de resorbție osoasă. În aceste cazuri, osul se poate reduce atât cantitativ, cât și calitativ.",
        ],
        bullets: [
          "după pierderi dentare vechi",
          "după extracții dificile",
          "în caz de resorbție osoasă semnificativă",
          "în reabilitări extinse pe implanturi",
        ],
      },
      {
        title: "Cum se stabilește indicația",
        paragraphs: [
          "Indicația nu se stabilește după impresii generale, ci după evaluare clinică și imagistică. Fiecare pacient are particularități anatomice diferite.",
        ],
      },
    ],
  },
  {
    slug: "ce-este-sinus-lift-ul-si-cand-este-recomandat",
    title: "Ce este sinus lift-ul și când este recomandat?",
    description:
      "Explicație clară despre sinus lift, în ce cazuri poate fi necesar și cum este integrat într-un plan corect de implantologie.",
    publishedAt: "2026-04-10",
    readingTime: "5 min",
    category: "Sinus lift",
    intro: [
      "Sinus lift-ul este o procedură despre care mulți pacienți aud atunci când vor să facă implanturi în zona laterală a maxilarului superior.",
      "Rolul ei este să creeze condițiile necesare pentru o bază osoasă mai bună, atunci când osul existent este insuficient.",
    ],
    sections: [
      {
        title: "Când poate fi necesar",
        paragraphs: [
          "În mod frecvent, procedura este luată în calcul când înălțimea osoasă din zona posterioară a maxilarului este redusă.",
        ],
        bullets: [
          "resorbție osoasă după pierderea dinților",
          "necesitatea unei inserări stabile a implanturilor",
          "planuri de tratament cu reabilitare funcțională pe termen lung",
        ],
      },
      {
        title: "De ce nu este recomandat tuturor",
        paragraphs: [
          "Sinus lift-ul nu este o procedură standard pentru orice pacient, ci o etapă indicată doar când este cu adevărat necesară pentru succesul tratamentului implantar.",
        ],
      },
    ],
  },
  {
    slug: "all-on-x-pentru-cine-este-potrivit-tratamentul",
    title: "All-on-X: pentru cine este potrivit tratamentul?",
    description:
      "Cui se adresează tratamentul All-on-X și ce trebuie să știe pacientul înainte de o reabilitare completă pe implanturi.",
    publishedAt: "2026-04-10",
    readingTime: "6 min",
    category: "All-on-X",
    intro: [
      "All-on-X este o soluție de reabilitare fixă pe implanturi pentru pacienții fără dinți sau cu dentiție sever compromisă.",
      "Tratamentul nu este identic pentru toți pacienții, iar planul final se stabilește numai după evaluare și investigații.",
    ],
    sections: [
      {
        title: "Cui se adresează",
        paragraphs: [
          "Conceptul este util în special pacienților care doresc o soluție fixă și au nevoie de o reabilitare completă, nu de intervenții izolate.",
        ],
        bullets: [
          "pacienți fără dinți",
          "pacienți cu dinți afectați sever și prognostic slab",
          "pacienți care își doresc dinți ficși pe implanturi",
        ],
      },
      {
        title: "De ce este necesară evaluarea completă",
        paragraphs: [
          "Volumul osos, starea țesuturilor și obiectivul protetic influențează strategia finală. De aceea, tratamentul trebuie personalizat.",
        ],
      },
    ],
  },
];
