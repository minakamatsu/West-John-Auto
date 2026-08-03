# West John Auto 诚信车行 — Website

Professional marketing website for **West John Auto** — Auto Repair & Auto Body in Hicksville, NY (serving drivers since 1990).

Built with **React + Vite**. Fully responsive with a dedicated mobile layout, sticky one‑tap **Call Now** bar, and a phone‑number call‑to‑action throughout.

- **Brand colors:** banana yellow (`#FFCE00`) + deep ocean blue (`#0A2E6E` / `#071F4E`), matching the storefront sign.
- **Primary CTA:** the shop phone number `(516) 931-8582` (tap-to-call `tel:` links everywhere).

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
public/favicon.svg
```

## Updating content

All business details (phone, address, hours, service list, review quotes) live in
`src/data/business.js`. Change them there and every section updates automatically.

## Mobile version

The site is mobile-first responsive — resize the browser or open it on a phone.
On small screens it uses a hamburger menu and a fixed bottom bar with **Call Now**
and **Directions** buttons for one-tap access.
