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
    title: "Implant dentar Buzău | Clinica Dr. Miu",
    description:
      "Cauți implant dentar în Buzău? La Clinica Dr. Miu beneficiezi de evaluare atentă, planificare corectă și tratamente de implantologie pentru cazuri simple și complexe.",
    h1: "Implant dentar în Buzău – soluția modernă pentru înlocuirea dinților lipsă",
    hero: [
      "Implantul dentar este una dintre cele mai eficiente și stabile soluții pentru înlocuirea unui dinte lipsă.",
      "La Clinica Dr. Miu din Buzău, tratamentele sunt planificate atent, în funcție de situația clinică, volumul osos existent și obiectivele pacientului.",
      "Scopul tratamentului nu este doar înlocuirea unui dinte, ci refacerea funcției, a confortului și a aspectului natural al zâmbetului.",
    ],
    benefitsTitle: "Când și de ce poate fi recomandat un implant dentar",
    benefits: [
      "Poate fi o soluție potrivită când lipsește unul sau mai mulți dinți",
      "Oferă stabilitate foarte bună și confort la masticație",
      "Poate proteja dinții vecini, fără să fie necesară șlefuirea lor",
      "Are un aspect apropiat de cel natural când este corect planificat și restaurat",
      "Poate fi indicat și în cazuri mai complexe, după etape suplimentare precum adiție osoasă sau sinus lift",
    ],
    processTitle: "Cum decurge tratamentul",
    process: [
      { step: "1", title: "Consultație și investigații", text: "Se realizează evaluarea clinică și imagistică pentru a înțelege suportul osos, zona edentată și obiectivul tratamentului." },
      { step: "2", title: "Planificare corectă", text: "Se stabilește dacă implantul poate fi inserat direct sau dacă sunt necesare proceduri precum adiția osoasă sau sinus lift-ul." },
      { step: "3", title: "Inserare și vindecare", text: "După intervenție urmează perioada de osteointegrare, monitorizată atent pentru stabilitate și predictibilitate." },
      { step: "4", title: "Etapa protetică", text: "Implantul este restaurat astfel încât pacientul să recapete funcția, confortul și estetica dorite." },
    ],
    faq: [
      { q: "Când este recomandat un implant dentar?", a: "Implantul dentar poate fi recomandat atunci când lipsește unul sau mai mulți dinți și există indicație pentru o soluție fixă, stabilă și funcțională." },
      { q: "Se poate face implant dacă nu mai am os?", a: "În multe situații, da. Atunci când suportul osos este insuficient, se poate lua în calcul o adiție osoasă sau un sinus lift, în funcție de particularitățile cazului." },
      { q: "Este dureroasă intervenția?", a: "Intervenția este realizată cu anestezie locală, iar protocolul este gândit pentru confort și control bun al disconfortului post-operator." },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Sinus lift Buzău", href: "/sinus-lift-buzau" },
    ],
    ctaTitle: "Programează o consultație pentru implant dentar în Buzău",
    ctaText: "Dacă ai nevoie de evaluare pentru un implant dentar sau vrei să înțelegi ce opțiuni există în cazul tău, te așteptăm la consultație pentru un plan clar de tratament.",
  },
  {
    path: "/implantologie-buzau",
    navLabel: "Implantologie",
    shortTitle: "Implantologie Buzău",
    title: "Implantologie Buzău | Clinica Dr. Miu",
    description:
      "Clinica Dr. Miu oferă servicii de implantologie în Buzău, inclusiv pentru cazuri complexe care necesită adiție osoasă, sinus lift sau reabilitări All-on-X.",
    h1: "Implantologie în Buzău – tratamente moderne pentru înlocuirea dinților lipsă",
    hero: [
      "Implantologia este ramura stomatologiei care se ocupă de înlocuirea dinților lipsă prin implanturi dentare și soluții protetice adaptate fiecărui pacient.",
      "La Clinica Dr. Miu din Buzău, implantologia este una dintre direcțiile centrale ale activității medicale.",
      "Sunt abordate atât cazuri simple, cât și cazuri complexe, în care pot fi necesare proceduri suplimentare precum adiție osoasă, sinus lift sau reabilitări complete pe implanturi.",
    ],
    benefitsTitle: "Ce înseamnă o abordare corectă în implantologie",
    benefits: [
      "Evaluare clinică și imagistică atentă",
      "Plan de tratament construit în funcție de contextul real al pacientului",
      "Alegerea etapelor necesare pentru stabilitate pe termen lung",
      "Integrarea părții chirurgicale cu etapa protetică finală",
      "Comunicare clară și realistă, fără promisiuni exagerate",
    ],
    processTitle: "Etapele evaluării în implantologie",
    process: [
      { step: "1", title: "Analiză clinică inițială", text: "Se discută istoricul pacientului, simptomele și obiectivul funcțional sau estetic urmărit." },
      { step: "2", title: "Investigații și diagnostic", text: "Se analizează zona edentată, volumul osos și starea generală a cavității orale." },
      { step: "3", title: "Alegerea strategiei de tratament", text: "Se stabilește dacă este vorba despre un caz simplu, un caz care necesită proceduri suplimentare sau o reabilitare extinsă." },
      { step: "4", title: "Monitorizare și restaurare", text: "După etapa chirurgicală, tratamentul continuă până la obținerea unei soluții funcționale, stabile și armonioase." },
    ],
    faq: [
      { q: "Ce include implantologia?", a: "Implantologia include evaluarea, planificarea, inserarea implanturilor dentare și integrarea lor într-o reabilitare funcțională și estetică." },
      { q: "Se ocupă implantologia și de cazurile complexe?", a: "Da. În multe situații, implantologia include și cazuri cu resorbție osoasă, edentație extinsă sau necesitatea unor proceduri chirurgicale suplimentare." },
      { q: "Este suficientă doar inserarea implantului?", a: "Nu întotdeauna. Tratamentul corect include și planificarea protetică, contextul biologic și etapele de monitorizare." },
    ],
    related: [
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
      { label: "Chirurgie dento-alveolară Buzău", href: "/chirurgie-dento-alveolara-buzau" },
    ],
    ctaTitle: "Programează o consultație de implantologie în Buzău",
    ctaText: "Dacă ai pierdut unul sau mai mulți dinți și cauți o soluție corectă, stabilă și bine planificată, te așteptăm la consultație pentru evaluare.",
  },
  {
    path: "/sinus-lift-buzau",
    navLabel: "Sinus lift",
    shortTitle: "Sinus lift Buzău",
    title: "Sinus lift Buzău | Clinica Dr. Miu",
    description:
      "Sinus lift în Buzău, realizat în cadrul Clinicii Dr. Miu pentru pacienții care au nevoie de volum osos suplimentar înainte de inserarea implanturilor dentare.",
    h1: "Sinus lift în Buzău – soluție atunci când osul este insuficient în zona maxilară",
    hero: [
      "Sinus lift-ul este o procedură chirurgicală utilizată atunci când în zona laterală a maxilarului superior nu există suficient os pentru inserarea implanturilor dentare în condiții predictibile.",
      "Prin această procedură, se creează condițiile necesare pentru augmentarea osoasă, astfel încât implanturile să poată fi susținute corect.",
      "Indicația pentru sinus lift se stabilește doar după evaluare clinică și imagistică, în funcție de anatomia fiecărui pacient și de planul protetic final.",
    ],
    benefitsTitle: "Când poate fi recomandat un sinus lift",
    benefits: [
      "Când înălțimea osoasă este redusă în zona posterioară a maxilarului superior",
      "Când se dorește inserarea implanturilor în condiții stabile și predictibile",
      "Când pierderea dinților a fost urmată de resorbție osoasă",
      "Când planul de tratament impune o bază osoasă mai bună pentru implanturi",
      "Când soluția finală urmărește stabilitate funcțională pe termen lung",
    ],
    processTitle: "Cum este integrat sinus lift-ul în planul de tratament",
    process: [
      { step: "1", title: "Evaluare imagistică", text: "Se analizează înălțimea osoasă disponibilă și particularitățile sinusului maxilar." },
      { step: "2", title: "Stabilirea indicației", text: "Se decide dacă procedura este cu adevărat necesară pentru succesul tratamentului implantar." },
      { step: "3", title: "Intervenție și monitorizare", text: "Procedura este integrată într-un plan general etapizat, cu monitorizare atentă post-operatorie." },
      { step: "4", title: "Inserarea implanturilor", text: "În funcție de caz, implanturile pot fi inserate simultan sau într-o etapă ulterioară." },
    ],
    faq: [
      { q: "Este necesar sinus lift-ul pentru orice implant?", a: "Nu. Procedura este recomandată doar atunci când suportul osos din zona respectivă este insuficient pentru inserarea implanturilor în condiții predictibile." },
      { q: "Se stabilește doar după consultație?", a: "Da. Decizia se ia după evaluare clinică și imagistică, nu doar pe baza simptomelor sau a unei presupuneri generale." },
      { q: "Sinus lift-ul face parte din tratamentul implantar?", a: "Da, în anumite cazuri poate fi o etapă necesară pentru a crea condițiile corecte de inserare a implanturilor dentare." },
    ],
    related: [
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
    ],
    ctaTitle: "Programează o evaluare pentru sinus lift în Buzău",
    ctaText: "Dacă ți s-a spus că nu există suficient os pentru implant sau vrei o a doua opinie, te așteptăm la consultație pentru evaluare corectă și plan clar.",
  },
  {
    path: "/aditie-osoasa-buzau",
    navLabel: "Adiție osoasă",
    shortTitle: "Adiție osoasă Buzău",
    title: "Adiție osoasă Buzău | Clinica Dr. Miu",
    description:
      "Adiție osoasă în Buzău pentru pacienții care au nevoie de reconstrucția volumului osos înainte de implant dentar. Evaluare și plan corect la Clinica Dr. Miu.",
    h1: "Adiție osoasă în Buzău – reconstrucția suportului necesar pentru implant dentar",
    hero: [
      "Adiția osoasă este procedura prin care se reconstruiește volumul osos necesar pentru inserarea implanturilor dentare.",
      "Aceasta poate fi indicată atunci când osul existent nu oferă condiții suficiente pentru stabilitatea implantului.",
      "Decizia de a realiza o adiție osoasă se ia numai după evaluare atentă, cu obiectivul de a crea o bază solidă pentru tratamentul ulterior.",
    ],
    benefitsTitle: "Când poate fi necesară adiția osoasă",
    benefits: [
      "După pierderi dentare vechi, asociate cu resorbție osoasă",
      "În situațiile în care suportul osos este insuficient pentru stabilitatea implantului",
      "După extracții complexe sau zone cu volum redus",
      "În tratamente care urmăresc o reabilitare funcțională și predictibilă",
      "În cazuri în care planificarea corectă cere reconstrucția suportului osos înainte de inserarea implanturilor",
    ],
    processTitle: "Rolul adiției osoase în tratament",
    process: [
      { step: "1", title: "Diagnostic și analiză", text: "Se stabilește dacă volumul osos existent este suficient pentru tratamentul dorit." },
      { step: "2", title: "Planificarea etapei osoase", text: "Se decide dacă este nevoie de augmentare și cum se integrează această procedură în planul general." },
      { step: "3", title: "Vindecare și monitorizare", text: "Zona este urmărită pentru a permite obținerea unei baze stabile pentru etapa implantară." },
      { step: "4", title: "Continuarea tratamentului", text: "După consolidarea suportului osos, se poate continua către inserarea implanturilor și etapa protetică." },
    ],
    faq: [
      { q: "Este necesară adiția osoasă în orice caz de implant?", a: "Nu. Ea este recomandată doar atunci când suportul osos este insuficient pentru o inserare stabilă și predictibilă a implanturilor." },
      { q: "De ce este importantă?", a: "Un implant dentar are nevoie de o bază osoasă adecvată. Atunci când aceasta lipsește, adiția osoasă poate crește predictibilitatea tratamentului și șansa unui rezultat stabil pe termen lung." },
      { q: "Se decide după investigații?", a: "Da. Indicația se stabilește după evaluare clinică și imagistică, în funcție de particularitățile fiecărui caz." },
    ],
    related: [
      { label: "Sinus lift Buzău", href: "/sinus-lift-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
    ],
    ctaTitle: "Programează o consultație pentru adiție osoasă în Buzău",
    ctaText: "Dacă ai nevoie de o evaluare înainte de implant dentar sau ți s-a spus că suportul osos este insuficient, te așteptăm pentru un plan de tratament corect și realist.",
  },
  {
    path: "/all-on-x-buzau",
    navLabel: "All-on-X",
    shortTitle: "All-on-X Buzău",
    title: "All-on-X Buzău | Dinți ficși pe implanturi | Clinica Dr. Miu",
    description:
      "All-on-X în Buzău pentru pacienții care își doresc dinți ficși pe implanturi. Evaluare și plan personalizat la Clinica Dr. Miu.",
    h1: "All-on-X în Buzău – soluție fixă pe implanturi pentru reabilitări complete",
    hero: [
      "All-on-X este un concept de tratament destinat pacienților care au pierdut toți dinții sau au o dentiție sever compromisă și au nevoie de o reabilitare completă pe implanturi.",
      "În funcție de situația clinică, se stabilește numărul de implanturi necesar și tipul de etapizare potrivit.",
      "Obiectivul este obținerea unei soluții fixe, funcționale și confortabile, adaptată contextului clinic real.",
    ],
    benefitsTitle: "Cui se adresează tratamentul All-on-X",
    benefits: [
      "Pacienților fără dinți",
      "Pacienților cu dinți afectați sever și prognostic slab",
      "Pacienților care își doresc o soluție fixă pe implanturi",
      "Pacienților care vor o reabilitare completă bine planificată",
      "Cazurilor în care este nevoie de corelarea atentă dintre chirurgie și protetică",
    ],
    processTitle: "Cum se planifică o reabilitare All-on-X",
    process: [
      { step: "1", title: "Consultație și diagnostic", text: "Se analizează starea generală a cavității orale, volumul osos și fezabilitatea unei soluții fixe pe implanturi." },
      { step: "2", title: "Alegerea strategiei", text: "Se stabilește numărul de implanturi, tipul etapizării și dacă sunt necesare proceduri suplimentare." },
      { step: "3", title: "Etapa chirurgicală", text: "Se realizează inserarea implanturilor în contextul unui plan bine definit și adaptat pacientului." },
      { step: "4", title: "Etapa protetică finală", text: "Se urmărește obținerea unei reabilitări stabile, funcționale și confortabile pe termen lung." },
    ],
    faq: [
      { q: "Ce înseamnă All-on-X?", a: "Este un concept de reabilitare fixă pe implanturi, destinat pacienților care au pierdut toți dinții sau au o dentiție sever compromisă." },
      { q: "Este potrivit pentru orice pacient fără dinți?", a: "Nu toate cazurile sunt identice. Planul final se stabilește doar după evaluare și investigații, astfel încât soluția propusă să fie realistă și stabilă." },
      { q: "Tratamentul este standard pentru toți?", a: "Nu. Numărul de implanturi, etapele și nevoia de proceduri suplimentare se stabilesc personalizat." },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Adiție osoasă Buzău", href: "/aditie-osoasa-buzau" },
      { label: "Chirurgie dento-alveolară Buzău", href: "/chirurgie-dento-alveolara-buzau" },
    ],
    ctaTitle: "Programează o consultație pentru All-on-X în Buzău",
    ctaText: "Dacă îți dorești dinți ficși pe implanturi și ai nevoie de o evaluare serioasă a opțiunilor disponibile, te așteptăm la consultație pentru un plan personalizat.",
  },
  {
    path: "/chirurgie-dento-alveolara-buzau",
    navLabel: "Chirurgie dento-alveolară",
    shortTitle: "Chirurgie dento-alveolară Buzău",
    title: "Chirurgie dento-alveolară Buzău | Clinica Dr. Miu",
    description:
      "Chirurgie dento-alveolară în Buzău: extracții complexe, molari de minte incluși, intervenții pre-implant și tratamente chirurgicale realizate la Clinica Dr. Miu.",
    h1: "Chirurgie dento-alveolară în Buzău – intervenții realizate cu precizie și planificare corectă",
    hero: [
      "Chirurgia dento-alveolară include o gamă largă de intervenții necesare pentru sănătatea orală, confortul pacientului sau pregătirea pentru tratamente ulterioare, inclusiv implantologie.",
      "La Clinica Dr. Miu din Buzău sunt abordate extracții dentare simple și complexe, extracții de molari de minte incluși și proceduri chirurgicale asociate tratamentelor complexe.",
      "Fiecare intervenție este recomandată în funcție de indicația clinică reală și de planul general de tratament.",
    ],
    benefitsTitle: "Când poate fi necesară chirurgia dento-alveolară",
    benefits: [
      "În extracții simple sau dificile",
      "În cazul molarilor de minte incluși",
      "În managementul resturilor radiculare",
      "În pregătirea câmpului oral pentru implanturi sau alte tratamente",
      "În contextul unor reabilitări complexe care necesită etapizare chirurgicală",
    ],
    processTitle: "Abordarea tratamentului chirurgical",
    process: [
      { step: "1", title: "Evaluare clinică", text: "Se stabilește indicația reală a intervenției și se explică pacientului pașii tratamentului." },
      { step: "2", title: "Planificare și investigații", text: "Se analizează dificultatea cazului și se integrează procedura în planul general de tratament." },
      { step: "3", title: "Intervenție și control post-operator", text: "Tratamentul este realizat atent, cu indicații clare pentru perioada de vindecare și monitorizare." },
      { step: "4", title: "Continuarea reabilitării", text: "După vindecare, cazul poate continua către etapele ulterioare, inclusiv implantologie sau protetică." },
    ],
    faq: [
      { q: "Ce înseamnă chirurgie dento-alveolară?", a: "Este domeniul care include intervenții chirurgicale la nivel dentar și al structurilor învecinate, necesare pentru sănătatea orală sau pentru pregătirea altor tratamente." },
      { q: "Sunt incluse și extracțiile de molari de minte?", a: "Da. Molarii de minte incluși sau dificil de extras pot face parte din această categorie de tratamente." },
      { q: "Poate fi necesară înainte de implanturi?", a: "Da. În anumite cazuri, chirurgia dento-alveolară este o etapă necesară pentru a pregăti terenul înaintea tratamentului implantar." },
    ],
    related: [
      { label: "Implantologie Buzău", href: "/implantologie-buzau" },
      { label: "Implant dentar Buzău", href: "/implant-dentar-buzau" },
      { label: "All-on-X Buzău", href: "/all-on-x-buzau" },
    ],
    ctaTitle: "Programează o consultație pentru chirurgie dento-alveolară în Buzău",
    ctaText: "Dacă ai nevoie de o evaluare chirurgicală sau ți s-a recomandat o intervenție înaintea altui tratament, te așteptăm pentru consult și planificare corectă.",
  },
];
