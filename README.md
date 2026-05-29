# null.po1nt audio — Launch Site

Coming-soon launch site for null.point audio. 3 pages, fully linked, ready to deploy.

## Pages

- **index.html** — Coming soon home page with email capture
- **about.html** — Brand story, values, workshop info, contact
- **beta.html** — Tremolator V2 closed beta application form

## Structure

```
├── index.html           # Coming soon — Launching 2026
├── about.html           # About + manifesto + contact
├── beta.html            # Beta application
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

## Dev

Open `index.html` with VS Code Live Server. No build step.

## Deploy

Push to `main` — connect to Vercel/Netlify for auto-deploy.
The forms currently fake-submit with a toast. Wire them to an actual endpoint
(Formspree, ConvertKit, Mailchimp) before launch.
