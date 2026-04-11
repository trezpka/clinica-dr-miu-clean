import { clinic } from "@/lib/clinic";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

export function ContactCTA({ title, text }: { title: string; text: string }) {
  return (
    <section id="contact" className="pb-20 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Programare</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{text}</p>
              <div className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Adresă</p><p className="mt-1 leading-7 text-slate-300">{clinic.address}</p></div></div>
                <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Telefon</p><a href={clinic.phoneHref} className="mt-1 block leading-7 text-slate-300 hover:text-white">{clinic.phoneDisplay}</a></div></div>
                <div className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Email</p><a href={`mailto:${clinic.email}`} className="mt-1 block leading-7 text-slate-300 hover:text-white">{clinic.email}</a></div></div>
                <div className="flex items-start gap-3"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Program</p><p className="mt-1 leading-7 text-slate-300">{clinic.hours}</p></div></div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-200 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Programare rapidă</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                În implementarea live, acest bloc poate fi conectat la formular, CRM, email sau WhatsApp.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
