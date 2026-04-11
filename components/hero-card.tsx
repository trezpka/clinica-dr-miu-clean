import { Card, CardContent } from "@/components/ui/card";
import { Bone, Building2, Microscope, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

function getIcon(path: string) {
  switch (path) {
    case "/implant-dentar-buzau":
      return Stethoscope;
    case "/implantologie-buzau":
      return ShieldCheck;
    case "/sinus-lift-buzau":
    case "/aditie-osoasa-buzau":
      return Bone;
    case "/all-on-x-buzau":
      return Building2;
    case "/chirurgie-dento-alveolara-buzau":
      return Microscope;
    default:
      return Sparkles;
  }
}

export function HeroCard({ path, title }: { path: string; title: string }) {
  const Icon = getIcon(path);

  return (
    <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
      <CardContent className="p-0">
        <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
          <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Pagină dedicată</span>
              <span>de completat cu imagine reală</span>
            </div>
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-sm">
              <Icon className="h-10 w-10 text-slate-950" />
            </div>
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Clinica Dr. Miu</p>
              <p className="mt-2 text-2xl font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Tratament abordat cu planificare atentă, comunicare clară și accent pe siguranță, funcție și predictibilitate.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
