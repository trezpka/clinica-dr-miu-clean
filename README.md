# Clinica Dr. Miu — Next.js project

Proiect Next.js App Router pentru homepage și subpagini SEO dedicate:
- Implant dentar Buzău
- Implantologie Buzău
- Sinus lift Buzău
- Adiție osoasă Buzău
- All-on-X Buzău
- Chirurgie dento-alveolară Buzău

## Pornire locală

```bash
npm install
npm run dev
```

## Ce trebuie completat înainte de publicare
- imaginile reale din `public/`
- integrarea formularului cu email / CRM / WhatsApp
- favicon și OG image finală
- Search Console, Analytics, sitemap și robots


## Pagini incluse suplimentar

- `/despre-dr-miu`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/sitemap.xml`
- `/robots.txt`


## Configurare email pentru formular

1. Copiază `.env.example` în `.env.local`.
2. Completează variabilele SMTP și adresele de email.
3. Endpointul formularului este disponibil la `POST /api/contact`.

Câmpurile trimise sunt:
- `name`
- `phone`
- `message`

## Pagini legale incluse

- `/politica-de-confidentialitate`
- `/politica-de-cookies`
- `/termeni-si-conditii`


## Pagini suplimentare incluse

- `/preturi`
- `/google-ads`
- `/landing-page-implant-dentar-buzau`

## Resurse marketing

- `docs/google-ads-copy.md`
- `docs/banner-texts.md`
