# null.po1nt audio — Launch Site

Coming-soon launch site for null.point audio. 4 pages, fully linked, ready to deploy.

## Pages

- **index.html** — Coming-soon home page with email capture
- **hardware.html** — Hardware line (Eurorack + standalone) — "coming soon" window
- **about.html** — Brand story, values, workshop info, contact
- **beta.html** — Tremolator V2 closed beta: application form + beta-key field for accepted testers

## Structure

```
├── index.html           # Coming soon — Launching 2026
├── hardware.html        # Hardware — coming soon
├── about.html           # About + manifesto + contact
├── beta.html            # Beta application + key redemption
├── css/
│   ├── reset.css        # Browser reset
│   ├── tokens.css       # Design tokens (colors)
│   ├── base.css         # Body, scrollbar, animations
│   ├── components.css   # Nav, tickers, buttons
│   ├── layout.css       # Page heroes, quote section, giant band
│   ├── pages.css        # Coming-soon hero, drops, story, beta form, perks
│   └── responsive.css   # Mobile + tablet breakpoints
└── js/
    └── main.js          # Email capture, beta form, scroll-reveal, toast
```

Nav (Home · Hardware · About · Beta) appears both on desktop and in the mobile burger menu.

## Dev

Open `index.html` with VS Code Live Server. No build step.

## Deploy

Push to `main` — auto-deploys to Vercel ([np-test-site.vercel.app](https://np-test-site.vercel.app)).

## Notes before launch

- The email signup and beta application forms currently fake-submit with a toast.
  Wire them to a real endpoint (Formspree, ConvertKit, Mailchimp) before launch.
- The beta-key field on `beta.html` validates against a hard-coded list in the page
  source. That's fine for a small, early wave, but move validation server-side before
  any wider release — the keys are visible to anyone who views source.
