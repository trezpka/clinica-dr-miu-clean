export type ServicePageData = {
  path: string;
  navLabel: string;
  shortTitle: string;
  title: string;
  description: string;
  h1: string;
  hero: string[];
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  process: { step: string; title: string; text: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const servicePages: ServicePageData[] = [
  {
    path: "/implant-dentar-buzau",
    navLabel: "Implant dentar",
    shortTitle: "Implant dentar Buzău",
    title: "Implant dentar Buzău | Dr. Cosmin Miu | Planificare digitală",
    description:
      "Implant dentar în Buzău la Clinica Dr. Miu. Peste 500 de implanturi inserate, planificare digitală cu CBCT și ghid chirurgical. Evaluare corectă, rezultat predictibil.",
    h1: "Implant dentar în Buzău — soluția modernă pentru înlocuirea dinților lipsă",
    hero: [
      "Lipsa unui dinte afectează mai mult decât zâmbetul — afectează masticația, vorbirea și, în timp, structura osoasă din jur. Implantul dentar este soluția care rezolvă toate acestea simultan.",
      "La Clinica Dr. Miu din Buzău, fiecare caz de implant este evaluat individual: analiză clinică, tomografie computerizată (CBCT) și planificare digitală înainte de orice intervenție.",
      "Scopul nu este doar să punem un implant — ci să îți redăm funcția, confortul și un zâmbet care arată și se simte natural.",
    ],
    benefitsTitle: "De ce implantul dentar este soluția recomandată",
    benefits: [
      "Singura soluție care înlocuiește și rădăcina dintelui, nu doar coroana",
      "Stabilitate excelentă la masticație — funcționează ca un dinte natural",
      "Protejează dinții vecini: nu necesită șlefuirea lor ca la o punte",
      "Previne resorbția osoasă care apare după pierderea unui dinte",
      "Durabilitate pe termen lung când este corect planificat și îngrijit",
      "Poate fi soluția potrivită și în cazuri complexe, cu adiție osoasă sau sinus lift",
    ],
    processTitle: "Cum decurge tratamentul cu implant dentar",
    process: [
      {
        step: "1",
        title: "Consultație și CBCT",
        text: "Evaluăm clinic zona edentată și analizăm volumul osos prin tomografie 3D. Fără investigații corecte, nu există plan corect.",
      },
      {
        step: "2",
        title: "Planificare digitală",
        text: "Poziția implantului este stabilită pe computer, în funcție de os, de dinții vecini și de restaurarea finală dorită. Acolo unde este indicat, realizăm un ghid chirurgical.",
      },
      {
        step: "3",
        title: "Inserare și osteointegrare",
        text: "Intervenția este realizată sub anestezie locală, cu protocol gândit pentru confort. Urmează perioada de integrare a implantului în os, monitorizată atent.",
      },
      {
        step: "4",
        title: "Restaurarea finală",
        text: "Implantul este restaurat cu o coroană care se armonizează cu restul dinților — funcțional, estetic și durabil.",
      },
    ],
    faq: [
      {
        q: "Cât durează intervenția de inserare a unui implant?",
        a: "Datorită planificării digitale și ghidului chirurgical, inserarea unui implant durează de obicei între 15 și 30 de minute. Planificarea corectă reduce semnificativ timpul pe scaun.",
      },
      {
        q: "Este dureroasă intervenția?",
        a: "Nu. Procedura se realizează sub anestezie locală profundă. Majoritatea pacienților noștri declară că nu au simțit disconfort în timpul intervenției. Post-operator, există un protocol clar pentru gestionarea oricărui disconfort.",
      },
      {
        q: "Se poate face implant dacă nu mai am os suficient?",
        a: "În multe cazuri, da. Atunci când volumul osos este insuficient, putem realiza o adiție osoasă sau un sinus lift ca etapă pregătitoare. Decizia se ia după evaluare imagistică, nu după presupuneri.",
      },
      {
        q: "Cât costă un implant dentar în Buzău?",
        a: "Prețul variază în funcție de tipul implantului, necesitatea unor proceduri suplimentare și restaurarea protetică finală. Un cost corect poate fi stabilit doar după consultație și CBCT — nu există un preț universal valabil.",
      },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Sinus lift Buzău", href: "/sinus-lift-buzau" },
    ],
    ctaTitle: "Vrei să știi dacă ești candidat pentru implant dentar?",
    ctaText: "Programează o consultație la Clinica Dr. Miu din Buzău. Evaluăm situația ta clinic și imagistic și îți oferim un plan clar, realist și personalizat.",
  },

  {
    path: "/implantologie-buzau",
    navLabel: "Implantologie",
    shortTitle: "Implantologie Buzău",
    title: "Implantologie Buzău | Cazuri simple și complexe | Clinica Dr. Miu",
    description:
      "Implantologie în Buzău la Clinica Dr. Miu — cazuri simple și complexe, adiție osoasă, sinus lift, reabilitări All-on-X. Dr. Cosmin Miu, specialist cu experiență în chirurgie implantară.",
    h1: "Implantologie în Buzău — de la cazuri simple la reabilitări complexe",
    hero: [
      "Implantologia nu înseamnă doar inserarea unui șurub în os. Înseamnă evaluare corectă, planificare atentă și integrarea chirurgiei cu restaurarea protetică finală.",
      "La Clinica Dr. Miu din Buzău, Dr. Cosmin Miu abordează atât cazuri simple de implant unic, cât și situații complexe care necesită adiție osoasă, sinus lift sau reabilitări complete pe implanturi.",
      "Fiecare pacient primește un plan de tratament construit pe realitatea cazului său — nu pe un protocol standard aplicat tuturor.",
    ],
    benefitsTitle: "Ce înseamnă o abordare corectă în implantologie",
    benefits: [
      "Evaluare clinică și imagistică completă înainte de orice decizie",
      "Plan de tratament adaptat contextului real al fiecărui pacient",
      "Integrarea chirurgiei cu etapa protetică finală de la bun început",
      "Comunicare clară despre etape, durată și așteptări realiste",
      "Experiență în cazuri complexe: resorbție osoasă, edentații extinse, reabilitări totale",
      "Monitorizare atentă pe tot parcursul tratamentului",
    ],
    processTitle: "Cum abordăm un caz de implantologie",
    process: [
      {
        step: "1",
        title: "Analiză clinică și imagistică",
        text: "Discutăm obiectivul tău și analizăm situația reală: volumul osos, starea dinților vecini, istoricul medical relevant.",
      },
      {
        step: "2",
        title: "Diagnostic și strategie",
        text: "Stabilim dacă este un caz simplu sau dacă sunt necesare etape suplimentare — adiție osoasă, sinus lift sau altele.",
      },
      {
        step: "3",
        title: "Etapa chirurgicală planificată",
        text: "Intervenția este realizată conform planului stabilit, cu ghid chirurgical acolo unde este indicat, pentru precizie maximă.",
      },
      {
        step: "4",
        title: "Restaurare și monitorizare",
        text: "Tratamentul continuă până la obținerea rezultatului final — funcțional, stabil și armonios estetic.",
      },
    ],
    faq: [
      {
        q: "Ce include implantologia ca specialitate?",
        a: "Implantologia include evaluarea, planificarea, inserarea implanturilor dentare și integrarea lor într-o reabilitare funcțională și estetică. Poate include și proceduri chirurgicale pregătitoare, cum ar fi adiția osoasă sau sinus lift-ul.",
      },
      {
        q: "Dr. Miu tratează și cazuri complexe de implantologie?",
        a: "Da. Pe lângă cazurile simple de implant unic, Dr. Cosmin Miu are experiență în cazuri cu resorbție osoasă, edentații extinse și reabilitări complete pe implanturi (All-on-X).",
      },
      {
        q: "Cât durează un tratament complet de implantologie?",
        a: "Depinde de complexitatea cazului. Un implant simplu poate fi restaurat în câteva luni. Cazurile complexe, cu proceduri suplimentare, pot dura mai mult. Durata exactă se stabilește după evaluare.",
      },
    ],
    related: [
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
      { label: "Chirurgie dento-alveolară Buzău", href: "/chirurgie-dento-alveolara-buzau" },
    ],
    ctaTitle: "Programează o consultație de implantologie în Buzău",
    ctaText: "Indiferent dacă ai pierdut un singur dinte sau ai nevoie de o reabilitare completă, la Clinica Dr. Miu primești o evaluare corectă și un plan de tratament adaptat situației tale reale.",
  },

  {
    path: "/sinus-lift-buzau",
    navLabel: "Sinus lift",
    shortTitle: "Sinus lift Buzău",
    title: "Sinus lift Buzău | Pregătire pentru implant dentar | Clinica Dr. Miu",
    description:
      "Sinus lift în Buzău la Clinica Dr. Miu. Procedură indicată când osul din zona maxilară posterioară este insuficient pentru implant dentar. Evaluare corectă, planificare atentă.",
    h1: "Sinus lift în Buzău — când osul nu este suficient pentru implant",
    hero: [
      "Ți s-a spus că nu poți face implant pentru că nu ai suficient os? Sinus lift-ul este procedura care poate schimba această situație.",
      "Când în zona posterioară a maxilarului superior osul este prea subțire sau prea scurt, inserarea implanturilor nu este posibilă în condiții predictibile fără o etapă pregătitoare.",
      "La Clinica Dr. Miu din Buzău, sinus lift-ul este integrat într-un plan de tratament complet — nu este o procedură izolată, ci o etapă dintr-un traseu clar spre implant.",
    ],
    benefitsTitle: "Când este indicat sinus lift-ul",
    benefits: [
      "Când înălțimea osoasă în zona posterioară a maxilarului superior este redusă",
      "Când pierderea dinților a fost urmată de resorbție osoasă semnificativă",
      "Când se doresc implanturi stabile și predictibile în zona laterală superioară",
      "Când planul de tratament necesită o bază osoasă mai bună pentru rezultat pe termen lung",
      "Când alte soluții (implanturi scurte, poziționare alternativă) nu sunt indicate în cazul respectiv",
    ],
    processTitle: "Cum este integrat sinus lift-ul în planul de tratament",
    process: [
      {
        step: "1",
        title: "Evaluare CBCT",
        text: "Analizăm înălțimea osoasă disponibilă și anatomia sinusului maxilar prin tomografie 3D. Fără această analiză, nu se poate stabili corect indicația.",
      },
      {
        step: "2",
        title: "Decizia clinică",
        text: "Stabilim dacă sinus lift-ul este cu adevărat necesar, ce tehnică este potrivită și dacă implanturile pot fi inserate simultan sau ulterior.",
      },
      {
        step: "3",
        title: "Intervenție și vindecare",
        text: "Procedura este realizată cu anestezie locală, urmată de o perioadă de monitorizare pentru consolidarea osului nou format.",
      },
      {
        step: "4",
        title: "Inserarea implanturilor",
        text: "Odată ce suportul osos este adecvat, tratamentul continuă cu inserarea implanturilor și restaurarea protetică finală.",
      },
    ],
    faq: [
      {
        q: "Este dureros sinus lift-ul?",
        a: "Procedura se realizează sub anestezie locală. Post-operator poate exista un disconfort moderat, gestionat cu medicație adecvată. Majoritatea pacienților revin la activitate normală în câteva zile.",
      },
      {
        q: "Pot face implant și fără sinus lift?",
        a: "Depinde de volumul osos disponibil. În unele cazuri există alternative — implanturi scurte sau poziționare diferită. Decizia corectă se ia doar după evaluare imagistică, nu după o regulă generală.",
      },
      {
        q: "Cât durează vindecarea după sinus lift?",
        a: "De obicei, sunt necesare câteva luni pentru consolidarea osului înainte de inserarea implanturilor. Durata exactă depinde de tehnica folosită și de particularitățile cazului.",
      },
    ],
    related: [
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
    ],
    ctaTitle: "Ți s-a spus că nu poți face implant din lipsă de os?",
    ctaText: "Programează o evaluare la Clinica Dr. Miu. Analizăm situația ta real și îți spunem clar dacă sinus lift-ul este indicat și cum se integrează în planul tău de tratament.",
  },

  {
    path: "/aditie-osoasa-buzau",
    navLabel: "Adiție osoasă",
    shortTitle: "Adiție osoasă Buzău",
    title: "Adiție osoasă Buzău | Reconstrucție osoasă pentru implant | Clinica Dr. Miu",
    description:
      "Adiție osoasă în Buzău la Clinica Dr. Miu. Reconstrucția volumului osos necesar pentru implant dentar, realizată corect și integrat în planul de tratament.",
    h1: "Adiție osoasă în Buzău — reconstrucția suportului pentru un implant stabil",
    hero: [
      "Osul se resoarbe după pierderea unui dinte. Cu cât trece mai mult timp, cu atât volumul disponibil pentru un implant scade. Adiția osoasă este procedura care reconstruiește acest suport.",
      "Nu orice lipsă de os necesită adiție osoasă — dar atunci când este indicată, este o etapă esențială pentru succesul pe termen lung al implantului.",
      "La Clinica Dr. Miu din Buzău, adiția osoasă este planificată și realizată ca parte dintr-un tratament integrat, nu ca o procedură separată fără context.",
    ],
    benefitsTitle: "Când poate fi necesară adiția osoasă",
    benefits: [
      "Când dintele a fost pierdut de mult timp și osul s-a resorbit",
      "Când extracția a lăsat un defect osos care nu permite inserarea directă a implantului",
      "Când se dorește un implant în zona frontală, unde estetica gingiei depinde de volumul osos",
      "Când planul de tratament necesită o bază solidă pentru stabilitate pe termen lung",
      "Când alte proceduri (sinus lift, reabilitare extinsă) sunt integrate în același plan",
    ],
    processTitle: "Cum se integrează adiția osoasă în tratament",
    process: [
      {
        step: "1",
        title: "Diagnostic imagistic",
        text: "Analizăm volumul osos disponibil prin CBCT și stabilim dacă adiția este necesară și ce tehnică este potrivită.",
      },
      {
        step: "2",
        title: "Planificarea etapei osoase",
        text: "Decidem tipul de material de augmentare, tehnica chirurgicală și cum se integrează această etapă în planul general.",
      },
      {
        step: "3",
        title: "Intervenție și monitorizare",
        text: "Procedura este realizată cu anestezie locală, urmată de o perioadă de vindecare monitorizată pentru consolidarea osului.",
      },
      {
        step: "4",
        title: "Continuarea tratamentului",
        text: "Odată ce suportul osos este adecvat, tratamentul continuă cu inserarea implanturilor și restaurarea protetică.",
      },
    ],
    faq: [
      {
        q: "Adiția osoasă este dureroasă?",
        a: "Procedura se realizează sub anestezie locală. Post-operator există un disconfort gestionabil cu medicație. Majoritatea pacienților revin la activitate normală în câteva zile.",
      },
      {
        q: "Cât durează vindecarea după adiție osoasă?",
        a: "De obicei, sunt necesare câteva luni pentru maturarea osului nou format. Durata exactă depinde de volumul augmentat și de particularitățile biologice ale fiecărui pacient.",
      },
      {
        q: "Pot face implant fără adiție osoasă dacă osul este puțin?",
        a: "Depinde de cât de puțin este osul și de poziția implantului. Uneori există alternative. Decizia corectă se ia după evaluare imagistică — nu există un răspuns universal.",
      },
    ],
    related: [
      { label: "Sinus lift Buzău", href: "/sinus-lift-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
    ],
    ctaTitle: "Ai nevoie de adiție osoasă înainte de implant?",
    ctaText: "Programează o evaluare la Clinica Dr. Miu. Analizăm volumul osos disponibil și îți spunem clar dacă adiția este necesară și cum se integrează în planul tău de tratament.",
  },

  {
    path: "/all-on-x-buzau",
    navLabel: "All-on-X",
    shortTitle: "All-on-X Buzău",
    title: "All-on-X Buzău | Dinți ficși pe implanturi | Clinica Dr. Miu",
    description:
      "All-on-X în Buzău la Clinica Dr. Miu. Reabilitare completă cu dinți ficși pe implanturi pentru pacienții fără dinți sau cu dentiție sever compromisă. Evaluare și plan personalizat.",
    h1: "All-on-X în Buzău — dinți ficși pe implanturi pentru o reabilitare completă",
    hero: [
      "Dacă ai pierdut toți dinții sau ai o dentiție sever compromisă, All-on-X îți oferă posibilitatea de a ieși din cabinet cu dinți ficși — nu o proteză mobilă, ci o soluție stabilă pe implanturi.",
      "Conceptul All-on-X presupune reabilitarea completă a unui maxilar sau a ambelor, pe un număr redus de implanturi strategic poziționate.",
      "La Clinica Dr. Miu din Buzău, fiecare caz All-on-X este planificat individual — numărul de implanturi, etapizarea și necesitatea unor proceduri suplimentare se stabilesc după evaluare, nu după un protocol standard.",
    ],
    benefitsTitle: "Cui se adresează tratamentul All-on-X",
    benefits: [
      "Pacienților fără dinți care vor o soluție fixă, nu o proteză mobilă",
      "Pacienților cu dinți rămași cu prognostic slab pe termen lung",
      "Pacienților care au trecut prin pierderi dentare multiple și vor să recupereze funcția și estetica",
      "Cazurilor în care proteza mobilă nu mai este o soluție acceptabilă",
      "Pacienților care înțeleg că o reabilitare corectă necesită planificare atentă și etapizare",
    ],
    processTitle: "Cum se planifică o reabilitare All-on-X",
    process: [
      {
        step: "1",
        title: "Evaluare completă",
        text: "Analizăm starea generală a cavității orale, volumul osos disponibil și fezabilitatea unei soluții fixe pe implanturi.",
      },
      {
        step: "2",
        title: "Strategie personalizată",
        text: "Stabilim numărul de implanturi, necesitatea unor proceduri suplimentare și tipul de restaurare protetică finală.",
      },
      {
        step: "3",
        title: "Etapa chirurgicală",
        text: "Inserarea implanturilor este realizată conform planului, cu posibilitatea unui provizoriu imediat în cazurile potrivite.",
      },
      {
        step: "4",
        title: "Restaurarea definitivă",
        text: "Lucrarea protetică finală este realizată pentru stabilitate, funcție și estetică pe termen lung.",
      },
    ],
    faq: [
      {
        q: "Pot pleca din cabinet cu dinți în aceeași zi?",
        a: "În anumite cazuri, da — se poate aplica un provizoriu imediat. Dacă acest protocol este potrivit pentru situația ta se stabilește după evaluare. Nu este posibil în toate cazurile.",
      },
      {
        q: "Câte implanturi sunt necesare pentru All-on-X?",
        a: "De obicei între 4 și 6 implanturi per maxilar, în funcție de volumul osos și de planul protetic. Numărul exact se stabilește după CBCT și planificare digitală.",
      },
      {
        q: "Este potrivit All-on-X pentru orice pacient fără dinți?",
        a: "Nu automat. Există condiții medicale și situații clinice care pot influența indicația. Evaluarea corectă este esențială pentru a stabili dacă All-on-X este soluția potrivită pentru tine.",
      },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Chirurgie dento-alveolară Buzău", href: "/chirurgie-dento-alveolara-buzau" },
    ],
    ctaTitle: "Vrei dinți ficși pe implanturi în Buzău?",
    ctaText: "Programează o consultație la Clinica Dr. Miu. Evaluăm situația ta real și îți spunem clar dacă All-on-X este soluția potrivită și cum arată planul de tratament în cazul tău.",
  },

  {
    path: "/chirurgie-dento-alveolara-buzau",
    navLabel: "Chirurgie dento-alveolară",
    shortTitle: "Chirurgie dento-alveolară Buzău",
    title: "Chirurgie dento-alveolară Buzău | Extracții, molari de minte | Clinica Dr. Miu",
    description:
      "Chirurgie dento-alveolară în Buzău la Clinica Dr. Miu: extracții simple și complexe, molari de minte incluși, intervenții pre-implant. Dr. Cosmin Miu, specialist în chirurgie orală.",
    h1: "Chirurgie dento-alveolară în Buzău — intervenții corecte, planificate și confortabile",
    hero: [
      "Extracțiile dificile, molarii de minte incluși sau intervențiile pre-implant necesită experiență chirurgicală și o planificare atentă — nu doar un instrument și o anestezie.",
      "La Clinica Dr. Miu din Buzău, Dr. Cosmin Miu abordează chirurgia dento-alveolară cu același standard aplicat în implantologie: evaluare corectă, tehnică precisă și protocol clar post-operator.",
      "Fiecare intervenție este recomandată pe baza indicației clinice reale — nu mai mult decât este necesar, nu mai puțin decât este corect.",
    ],
    benefitsTitle: "Când poate fi necesară chirurgia dento-alveolară",
    benefits: [
      "Extracții dentare simple sau dificile, inclusiv rădăcini restante",
      "Extracția molarilor de minte incluși sau parțial erupți",
      "Intervenții de pregătire a câmpului operator înainte de implant",
      "Managementul complicațiilor post-extracționale",
      "Proceduri chirurgicale integrate în planuri de reabilitare complexă",
    ],
    processTitle: "Cum abordăm o intervenție chirurgicală",
    process: [
      {
        step: "1",
        title: "Evaluare și indicație clară",
        text: "Stabilim dacă intervenția este necesară, ce implică și cum se integrează în planul general de tratament al pacientului.",
      },
      {
        step: "2",
        title: "Planificare și investigații",
        text: "Analizăm dificultatea cazului prin radiografie sau CBCT și pregătim protocolul chirurgical adecvat.",
      },
      {
        step: "3",
        title: "Intervenție și control post-operator",
        text: "Procedura este realizată cu anestezie locală, urmată de indicații clare pentru vindecare și o consultație de control.",
      },
      {
        step: "4",
        title: "Continuarea planului de tratament",
        text: "Dacă intervenția face parte dintr-un plan mai amplu (implant, reabilitare), continuăm etapele conform planificării inițiale.",
      },
    ],
    faq: [
      {
        q: "Extracția unui molar de minte inclus este complicată?",
        a: "Depinde de poziția și gradul de includere. Unele cazuri sunt simple, altele necesită o abordare chirurgicală mai complexă. Evaluarea imagistică prealabilă este esențială pentru a ști la ce să te aștepți.",
      },
      {
        q: "Cât durează recuperarea după o extracție chirurgicală?",
        a: "De obicei, disconfortul semnificativ dispare în 2-3 zile. Vindecarea completă a țesuturilor durează câteva săptămâni. Respectarea indicațiilor post-operatorii face o diferență mare.",
      },
      {
        q: "Chirurgia dento-alveolară este necesară înainte de implant?",
        a: "Nu întotdeauna, dar uneori da. Dacă există dinți cu prognostic slab, rădăcini restante sau zone care necesită pregătire, chirurgia dento-alveolară este o etapă necesară înainte de tratamentul implantar.",
      },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
    ],
    ctaTitle: "Ai nevoie de o intervenție chirurgicală stomatologică în Buzău?",
    ctaText: "La Clinica Dr. Miu primești o evaluare corectă, o indicație clară și o intervenție realizată cu experiență și atenție. Programează-te pentru consultație.",
  },
];
