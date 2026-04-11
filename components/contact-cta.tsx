import { clinic } from "@/lib/clinic";

export function ContactCTA({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section id="contact" className="pb-20 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Programare
            </p>
            <h2 className="mt-3 text-3xl font-semibold">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              {text}
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <p><strong>Adresă:</strong> {clinic.address}</p>
              <p><strong>Telefon:</strong> {clinic.phoneDisplay}</p>
              <p><strong>Email:</strong> {clinic.email}</p>
              <p><strong>Program:</strong> {clinic.hours}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-semibold text-slate-950">
              Contact rapid
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Pentru moment, programările se fac telefonic, pe WhatsApp sau prin email.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white"
              >
                Sună acum
              </a>
              <a
                href={clinic.whatsappHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700"
              >
                Contact pe WhatsApp
              </a>
              <a
                href={`mailto:${clinic.email}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700"
              >
                Trimite email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
