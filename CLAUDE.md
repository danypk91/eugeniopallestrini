# Pallestrini — Sito personale

## Stack
- **Astro** (ultima stabile) con Vercel adapter
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **GSAP** per animazioni scroll
- **astro-icon** + Lucide per icone

## Convenzioni

- Font self-hosted in `public/fonts/` (woff2). Mai usare Google Fonts CDN o link esterni.
- Palette definita come CSS custom properties in `src/styles/global.css`
- Componenti Astro puri, React solo se strettamente necessario per interattività
- Contenuti pubblicazioni in MDX via content collections (`src/content/libri/`)
- Immagini ottimizzate con `astro:assets`

## Struttura
```
src/
  components/     # Componenti riutilizzabili
    home/         # Componenti specifici homepage
  content/        # Content collections (libri, ecc.)
  layouts/        # Layout base
  pages/          # Pagine del sito
  styles/         # CSS globali, font, tokens
public/
  fonts/          # Font woff2 self-hosted
  images/         # Immagini statiche
```

## Design
- Layout editoriale, NO pattern "landing page a scroll"
- Homepage con bento grid asimmetrico
- Typography-driven: Cormorant Garamond (titoli) + Inter (corpo)
- Palette: avorio / blu notte / oro antico
- Spazi bianchi generosi, animazioni minime e sobrie

## Git
- Non inserire Claude/AI nei contributi o co-author dei commit
- Commit messages in italiano, concisi
- Un commit per milestone logica, non per singolo file

## Deploy
- Vercel
- Dominio: eugeniopallestrini.it
