# Eugenio Pallestrini — Redesign sito personale

**Sito attuale:** https://www.eugeniopallestrini.it/  
**Stack:** Astro + Tailwind CSS  
**Deploy:** Vercel  
**Font:** locali (self-hosted, no CDN esterni)

---

## Concept: Layout Editoriale

Abbandoniamo il pattern "landing page a scroll" usato negli altri progetti.  
Il sito racconta una persona con molte dimensioni: medicina, teatro, politica, cultura.  
L'approccio è quello di una **rivista/fondazione** — tipografia forte, grid asimmetrici, contenuto come protagonista.

### Principi di design

- **Typography-driven** — Serif elegante per i titoli (Cormorant / Playfair Display), sans-serif pulito per il corpo (Inter / Source Sans). Font scaricati e serviti da `/public/fonts/`.
- **Grid editoriale** — Homepage a blocchi asimmetrici (bento grid), ogni blocco apre un "mondo". No hero fullscreen.
- **Palette sobria** — Blu notte / avorio / oro, oppure antracite / bianco / bordeaux. Da definire con il cliente.
- **Spazi bianchi generosi** — Il contenuto respira. Niente densità da Wikipedia.
- **Animazioni minime** — CSS transitions per hover/reveal, GSAP leggero solo dove serve. Niente 3D.
- **Content-first** — Il testo e le immagini sono il design. No decorazioni fini a sé stesse.

---

## Struttura del sito

### Homepage
Grid asimmetrico con blocchi di dimensioni diverse. Ogni blocco rappresenta un'area:
- Presentazione breve (chi è, una frase)
- Medicina & Ricerca
- Teatro Stabile di Genova
- Museo Biblioteca dell'Attore
- Pubblicazioni / Libri
- Vita pubblica (Provincia di Genova)

### Pagine interne

| Pagina | Contenuto |
|---|---|
| **Medicina** | Carriera ORL, ruoli, timeline professionale |
| **Pubblicazioni** | Griglia libri con copertina, abstract, link Scholar/ResearchGate. Contenuti in MDX per facile aggiornamento |
| **Teatro Stabile** | Presidenza 2006-2016, gallery fotografica, momenti chiave |
| **Museo Biblioteca Attore** | Storia, mission, foto, convenzioni universitarie |
| **Prof. Ernesto Pallestrini** | Sezione dedicata al padre, come nell'attuale sito |
| **Contatti** | Email, telefono, social. Form opzionale |

### Navigazione
- Top bar minimale con le macro-aree
- Menu mobile hamburger
- Breadcrumb nelle pagine interne
- No sidebar

---

## Stack tecnico

| Componente | Dettaglio |
|---|---|
| Framework | Astro (ultima versione stabile) |
| CSS | Tailwind CSS 4 con design system custom |
| Animazioni | CSS transitions + GSAP (scroll reveal) |
| Font | Self-hosted in `public/fonts/` (woff2) |
| Contenuti | Markdown/MDX per pubblicazioni e pagine ricche |
| Icone | astro-icon + Lucide (come caffè) |
| SEO | Schema.org (Person), sitemap, meta OG |
| Analytics | Vercel Analytics |
| Deploy | Vercel |

---

## Palette (proposta iniziale, da validare)

```
--color-bg:        #FAFAF7    /* avorio caldo */
--color-surface:   #FFFFFF
--color-text:      #1A1A2E    /* blu notte */
--color-heading:   #16213E    /* blu scuro */
--color-accent:    #C4A35A    /* oro antico */
--color-muted:     #6B7280    /* grigio */
--color-border:    #E5E5E0
```

---

## Font

Scaricare i file woff2 e metterli in `public/fonts/`:

- **Titoli:** Cormorant Garamond (Bold, SemiBold)
- **Corpo:** Inter (Regular, Medium, SemiBold)
- **Accenti/citazioni:** Cormorant Garamond Italic

Dichiarare `@font-face` in `src/styles/fonts.css` con `font-display: swap`.

---

## Todolist

### Setup progetto
- [x] `npm create astro@latest` nella cartella pallestrini
- [x] Installare Tailwind CSS 4 (`@tailwindcss/vite`)
- [x] Installare dipendenze (astro-icon, @iconify-json/lucide, gsap, sitemap, vercel)
- [x] Configurare Vercel adapter in `astro.config.mjs`
- [x] Scaricare font (Cormorant Garamond + Inter) in `public/fonts/`
- [x] Creare `@font-face` in `src/styles/global.css`
- [x] Creare design tokens (palette, spacing) in `src/styles/global.css`
- [x] Configurare Tailwind con il design system custom (`@theme`)

### Layout e componenti base
- [x] `src/layouts/BaseLayout.astro` — HTML base, head, meta, font, Schema.org Person
- [x] `src/components/Header.astro` — Navigazione top bar + menu mobile integrato
- [x] `src/components/Footer.astro`
- [x] `src/components/Breadcrumb.astro`
- [x] `src/components/PageHero.astro` — Hero riutilizzabile per pagine interne

### Homepage
- [x] `src/pages/index.astro` — Intro + bento grid asimmetrico con 6 card

### Pagine interne
- [x] `src/pages/medicina.astro` — Carriera e timeline
- [x] `src/pages/pubblicazioni.astro` — Griglia libri con dati strutturati
- [x] `src/pages/teatro.astro` — Teatro Stabile
- [x] `src/pages/museo.astro` — Museo Biblioteca Attore
- [x] `src/pages/ernesto-pallestrini.astro` — Sezione dedicata al padre
- [x] `src/pages/contatti.astro`

### Contenuti
- [x] Estrarre testi dal sito attuale (tutte le pagine)
- [x] Estrarre e ottimizzare immagini dal sito attuale
- [ ] Creare file MDX per le pubblicazioni in `src/content/libri/` (opzionale, ora inline)
- [ ] Configurare content collections in `src/content/config.ts` (opzionale)

### SEO e performance
- [x] Schema.org Person markup (in BaseLayout)
- [x] Sitemap (plugin configurato)
- [x] Meta OG per ogni pagina
- [x] Ottimizzazione immagini (ridimensionate, spianata-genova da 718K a 178K)
- [x] Favicon personalizzato (P su fondo blu notte)
- [ ] Lighthouse audit (target: 95+ su tutto)

### Deploy
- [ ] Configurare progetto su Vercel
- [ ] Test deploy preview
- [ ] Collegare dominio eugeniopallestrini.it
- [ ] Redirect da www a apex (o viceversa)
- [ ] Verificare DNS e SSL

### Rifinitura
- [x] Animazioni scroll reveal con GSAP (ScrollTrigger, fade-up/fade-left)
- [x] Hover states su card e link
- [x] Immagini integrate in tutte le pagine (homepage, medicina, teatro, museo, ernesto, contatti)
- [ ] Dark mode (opzionale, da valutare)
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Cookie policy / privacy (se analytics attivo)
