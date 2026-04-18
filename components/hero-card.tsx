import { Card, CardContent } from "@/components/ui/card";
import { Bone, Building2, Microscope, ShieldCheck, Sparkles, Stethoscope, Star, Award, ScanLine, CheckCircle2 } from "lucide-react";

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

function getStats(path: string): { label: string; value: string }[] {
  switch (path) {
    case "/implant-dentar-buzau":
    case "/implantologie-buzau":
    case "/all-on-x-buzau":
      return [
        { value: "500+", label: "implanturi inserate" },
        { value: "5.0 ★", label: "rating Google" },
        { value: "CBCT", label: "planificare digitală" },
      ];
    case "/sinus-lift-buzau":
    case "/aditie-osoasa-buzau":
      return [
        { value: "CBCT", label: "analiză 3D obligatorie" },
        { value: "5.0 ★", label: "rating Google" },
        { value: "2012", label: "experiență clinică" },
      ];
    case "/chirurgie-dento-alveolara-buzau":
      return [
        { value: "2017", label: "specialist chirurgie" },
        { value: "5.0 ★", label: "rating Google" },
        { value: "100%", label: "anestezie locală" },
      ];
    default:
      return [
        { value: "500+", label: "implanturi inserate" },
        { value: "5.0 ★", label: "rating Google" },
        { value: "CBCT", label: "planificare digitală" },
      ];
  }
}

const trustBadges = [
  { icon: Award, text: "Specialist chirurgie dento-alveolară" },
  { icon: ScanLine, text: "Planificare digitală cu CBCT" },
  { icon: CheckCircle2, text: "Cursuri naționale și internaționale" },
  { icon: Star, text: "5.0 rating Google Reviews" },
];

export function HeroCard({ path, title }: { path: string; title: string }) {
  const Icon = getIcon(path);
  const stats = getStats(path);

  return (
    <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
      <CardContent className="p-0">
        <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Clinica Dr. Miu · Buzău</p>
                <p className="text-base font-semibold text-slate-950">{title}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white py-4 px-2 text-center shadow-sm">
                  <span className="text-xl font-bold text-slate-950">{stat.value}</span>
                  <span className="mt-1 text-xs leading-4 text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="space-y-2">
              {trustBadges.map(({ icon: BadgeIcon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3">
                  <BadgeIcon className="h-4 w-4 shrink-0 text-slate-950" />
                  <span className="text-sm text-slate-700">{text}</span>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="rounded-2xl bg-slate-950 px-5 py-4 text-center text-white">
              <p className="text-sm font-medium">Evaluare corectă. Plan clar. Rezultat predictibil.</p>
              <p className="mt-1 text-xs text-slate-400">Dr. Cosmin Miu — medic specialist</p>
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  );
}
