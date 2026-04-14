export default function HomePage() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      
      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Implant dentar în Buzău – soluții moderne și rapide
        </h1>

        <p className="text-lg text-slate-600 mb-6">
          La Clinica Dr. Miu oferim tratamente moderne de implantologie dentară și chirurgie dento-alveolară,
          cu rezultate rapide și estetice. Poți beneficia de implant dentar cu dinte provizoriu în aceeași zi.
        </p>

        <a
          href="/contact"
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition"
        >
          Programează o consultație
        </a>
      </section>

      {/* DESPRE */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Despre Clinica Dr. Miu
        </h2>

        <p className="text-slate-600 mb-4">
          Suntem specializați în implanturi dentare, reabilitări complexe și tratamente chirurgicale.
          Folosim tehnologie modernă: scanare digitală, ghid chirurgical și planificare 3D.
        </p>

        <img
          src="/dr-miu-portrait-v2.jpg"
          alt="Dr. Miu"
          className="w-[300px] rounded-2xl mt-4"
        />
      </section>

      {/* CAZ CLINIC */}
      <section className="mb-12 bg-slate-100 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Caz clinic: Implant dentar imediat
        </h2>

        <p className="text-slate-600 mb-4">
          Pacientă cu fractură la nivelul incisivului central. Am realizat extracția, inserarea implantului
          și aplicarea unui dinte provizoriu în aceeași ședință.
        </p>

        <a
          href="/caz-clinic-fractura-incisiv-central"
          className="text-slate-900 font-medium underline"
        >
          Vezi cazul complet →
        </a>
      </section>

      {/* SERVICII */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Serviciile noastre
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
          <li>• Implant dentar Buzău</li>
          <li>• Implant dentar imediat</li>
          <li>• Adiție osoasă</li>
          <li>• Sinus lift</li>
          <li>• All-on-X</li>
          <li>• Chirurgie dento-alveolară</li>
        </ul>
      </section>
    </main>
  );
}
