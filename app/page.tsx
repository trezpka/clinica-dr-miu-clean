import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-blue-700">Clinica Dr. Miu · Buzău</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              Implant dentar în Buzău — fără durere, cu planificare atentă
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Tot conținutul este acum într-o singură pagină pentru acces rapid la informațiile
              esențiale despre tratamente, medic, cazuri clinice și programare.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <Image
              src="/dr-miu-portrait-v2.jpg"
              alt="Dr. Miu în clinică"
              width={600}
              height={760}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        <section id="despre-medic" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Despre Dr. Miu</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Experiență în implantologie și chirurgie dento-alveolară, cu accent pe planificare
            digitală, tratamente precise și rezultate stabile pe termen lung.
          </p>
        </section>

        <section id="servicii" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Servicii</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Implant dentar",
              "Sinus lift",
              "Reabilitare maxilară",
              "Chirurgie dento-alveolară",
              "Implantologie avansată",
              "Consultații și planificare digitală",
            ].map((service) => (
              <div key={service} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="cazuri" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Înainte și După</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <figure className="rounded-2xl border border-slate-200 bg-white p-3">
              <Image
                src="/caz-maxilar-1.jpg"
                alt="Caz clinic înainte"
                width={900}
                height={700}
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="mt-2 text-sm text-slate-600">Înainte de tratament</figcaption>
            </figure>
            <figure className="rounded-2xl border border-slate-200 bg-white p-3">
              <Image
                src="/caz-maxilar-2.jpg"
                alt="Caz clinic după"
                width={900}
                height={700}
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="mt-2 text-sm text-slate-600">După tratament</figcaption>
            </figure>
          </div>
        </section>

        <section id="programare" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Contact & Programare</h2>
          <p className="mt-4 text-slate-600">
            Sună acum pentru o evaluare completă și un plan de tratament personalizat.
          </p>
        </section>
      </main>
    </>
  );
}
