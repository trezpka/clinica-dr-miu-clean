"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ChevronRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "@/lib/clinic";
import type { ServicePageData } from "@/lib/pages-data";
import { SectionTitle } from "./section-title";
import { BulletList } from "./bullet-list";
import { ContactCTA } from "./contact-cta";
import { HeroCard } from "./hero-card";

export function ServicePageTemplate({ page }: { page: ServicePageData }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-white">
              <BadgeCheck className="mr-2 h-4 w-4" /> {page.shortTitle} · Buzău · Abordare premium
            </Badge>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{page.h1}</h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slate-600">
              {page.hero.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-base font-medium text-white transition hover:bg-slate-800">Programează o consultație</a>
              <a href={clinic.phoneHref} className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-base font-medium text-slate-900 transition hover:border-slate-950">Sună acum</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }}>
            <HeroCard path={page.path} title={page.shortTitle} />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionTitle eyebrow="Despre tratament" title={page.benefitsTitle} description="" />
          <Card className="rounded-[1.75rem] border-slate-200 shadow-sm"><CardContent className="p-6"><BulletList items={page.benefits} /></CardContent></Card>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Etape" title={page.processTitle} description="" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {page.process.map((item, index) => (
              <motion.div key={`${item.step}-${item.title}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }}>
                <Card className="h-full rounded-[1.75rem] border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">{item.step}</div><h3 className="text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="De ce Clinica Dr. Miu" title="Competență chirurgicală, comunicare calmă și planificare corectă" description="" />
            <div className="mt-8 space-y-4">
              {[
                { title: "Abordare individualizată", text: "Fiecare plan este construit în funcție de anatomia, nevoile și obiectivul real al pacientului.", icon: ShieldCheck },
                { title: "Claritate în explicații", text: "Pacientul trebuie să înțeleagă ce urmează, de ce este recomandat tratamentul și care sunt etapele.", icon: HeartHandshake },
                { title: "Focalizare pe predictibilitate", text: "Scopul nu este doar rezolvarea imediată, ci obținerea unui rezultat stabil, funcțional și corect planificat.", icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon;
                return <div key={item.title} className="flex gap-4 rounded-[1.5rem] border border-slate-200 p-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100"><Icon className="h-5 w-5 text-slate-950" /></div><div><h3 className="text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p></div></div>;
              })}
            </div>
          </div>

          <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl"><CardContent className="p-8 md:p-10"><p className="text-sm uppercase tracking-[0.24em] text-slate-400">Conexiuni utile</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">Pagini relevante asociate</h3><div className="mt-8 space-y-4">{page.related.map((item) => <a key={item.href} href={item.href} className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"><span>{item.label}</span><ChevronRight className="h-4 w-4" /></a>)}</div></CardContent></Card>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Întrebări frecvente" title={`Răspunsuri utile despre ${page.shortTitle}`} description="Întrebările frecvente ajută pacientul și întăresc structura semantică a paginii." />
          <div className="mt-10 grid gap-5">
            {page.faq.map((item) => <Card key={item.q} className="rounded-[1.5rem] border-slate-200 shadow-sm"><CardContent className="p-6"><h3 className="text-lg font-semibold text-slate-950">{item.q}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <ContactCTA title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}
