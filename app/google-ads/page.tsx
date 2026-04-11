import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { adSets, bannerMessages } from "@/lib/ads-data";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Resurse Google Ads | Clinica Dr. Miu",
  description:
    "Texte pentru reclame Google Ads, callouts, sitelinks și mesaje pentru bannere pentru campaniile Clinicii Dr. Miu.",
  path: "/google-ads",
});

export default function GoogleAdsResourcesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="Google Ads"
            title="Texte de reclame, extensii și mesaje pentru bannere"
            description="Pagină internă de resurse pentru marketing, utilă pentru campaniile plătite și pentru predarea către specialistul Google Ads sau designerul de bannere."
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
          {adSets.map((setItem) => (
            <Card key={setItem.campaign} className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-slate-950 text-white hover:bg-slate-950">{setItem.campaign}</Badge>
                  <Badge variant="outline" className="rounded-full">{setItem.targetPage}</Badge>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">Headline-uri</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {setItem.headlines.map((item) => (
                        <Badge key={item} variant="secondary" className="rounded-full">{item}</Badge>
                      ))}
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-slate-950">Descrieri</h3>
                    <div className="mt-4 grid gap-3">
                      {setItem.descriptions.map((item) => (
                        <div key={item} className="rounded-xl border border-slate-200 p-4 text-sm leading-7 text-slate-700">{item}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">Cuvinte-cheie</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {setItem.keywords.map((item) => (
                        <Badge key={item} variant="outline" className="rounded-full">{item}</Badge>
                      ))}
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-slate-950">Callouts și sitelinks</h3>
                    <div className="mt-4 grid gap-3">
                      {setItem.callouts.map((item) => (
                        <div key={item} className="rounded-xl border border-slate-200 p-4 text-sm leading-7 text-slate-700">{item}</div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3">
                      {setItem.sitelinks.map((item) => (
                        <div key={item.href} className="rounded-xl border border-slate-200 p-4 text-sm leading-7 text-slate-700">
                          <strong>{item.title}</strong> — {item.description} ({item.href})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Mesaje pentru bannere</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {bannerMessages.map((item) => (
                  <div key={`${item.size}-${item.title}`} className="rounded-[1.25rem] border border-slate-200 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.size}</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</p>
                    <p className="mt-4 text-sm font-medium text-slate-950">CTA: {item.cta}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
