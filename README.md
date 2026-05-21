# dolledbyVishi — Luxury Beauty Studio Website

The official website for **dolledbyVishi**, a luxury beauty studio in Bamenda, Cameroon, offering hair styling & installation, nails, makeup and lash extensions across two studio locations.

> Where artistry meets allure — crafted to make every woman feel undeniably radiant.

---

## Studio

- **Up Station** · City Chemist, Bamenda
- **Mile 4 Park** · Nkwen, Bamenda
- **WhatsApp / Phone:** +237 653 804 301
- **Hours:** Monday – Sunday · 9:00 — 22:00

## Pages

| Route        | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `/`          | Home — hero, services preview, testimonials       |
| `/about`     | Story, philosophy and the journey of the artist    |
| `/services`  | Full service menu with pricing in XAF              |
| `/gallery`   | Portfolio of real client work                      |
| `/booking`   | Appointment booking form                           |
| `/contact`   | Contact details, studio locations, opening hours   |

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) v1 (React 19 + SSR)
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS v4 with a custom rose-gold luxury design system
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Routing:** File-based routes under `src/routes/`
- **Deployment:** Cloudflare Workers (edge runtime)

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build
```

Then open <http://localhost:5173> in your browser.

## Project Structure

```
src/
├── assets/          # Images (hero, about, gallery, logo)
├── components/      # Reusable UI (Navbar, Hero, About, Gallery, Booking…)
│   └── ui/          # shadcn/ui primitives
├── routes/          # File-based pages
│   ├── __root.tsx   # Root layout (Navbar + Footer)
│   ├── index.tsx    # Home
│   ├── about.tsx
│   ├── services.tsx
│   ├── gallery.tsx
│   ├── booking.tsx
│   └── contact.tsx
├── lib/             # Utilities
└── styles.css       # Design tokens & global styles
```

## Customising

- **Logo** — replace `public/logo.png`
- **Hero & About images** — swap files in `src/assets/`
- **Service prices** — edit the `categories` array in `src/routes/services.tsx`
- **Opening hours** — edit `src/routes/contact.tsx`
- **Brand colors** — adjust the rose-gold tokens in `src/styles.css`

## License

© dolledbyVishi. All rights reserved.
