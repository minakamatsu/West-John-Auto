# West John Auto 诚信车行 — Website

Professional marketing website for **West John Auto** — Auto Repair & Auto Body in Hicksville, NY (serving drivers since 1990).

Built with **React + Vite**. Phone-number call-to-action throughout: `(516) 931-8582`.

## Version status

**V1 — "post pitch"**

| Surface | Status |
|--------|--------|
| **Desktop** | **FINISHED / FROZEN.** Do not change desktop layout or design. |
| **Mobile** | **Active work.** All remaining refinements are mobile-only. |

**Important:** Future edits must not affect the desktop version. Prefer changes inside mobile media queries / mobile-only UI so wide viewports stay identical to V1.

## Brand

- **Colors:** banana yellow (`#FFCE00`) + deep ocean blue (`#0A2E6E` / `#071F4E`), matching the storefront sign
- **Primary CTA:** shop phone number with tap-to-call `tel:` links

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
```

## Project structure

```
index.html                 App entry / SEO meta tags
src/
  main.jsx                 React bootstrap
  App.jsx                  Page composition
  data/business.js         ← Edit phone, address, hours, services, reviews here
  components/              Header, Hero, Services, About, Reviews, Contact, Footer, MobileCallBar
  hooks/useReveal.js       Scroll-in animations
  styles/                  global.css (theme tokens) + components.css (layout + responsive)
public/
  favicon.svg
  images/                  Storefront + team photos for hero/about
```

## Updating content

All business details (phone, address, hours, service list, review quotes) live in
`src/data/business.js`. Change them there and every section updates automatically.
