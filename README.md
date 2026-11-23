# Esposito's Ice & Party Rentals website

Built with Astro + Tailwind CSS. Static site, hosted on Netlify.

## Run it on your computer
```
npm install        # first time only
npm run dev        # opens http://localhost:4321 and live-reloads while you edit
npm run build      # makes the final site in dist/
```

## Where to edit things (all in `src/data/site.ts`)
| To change… | Look for… |
|---|---|
| Phone, address, socials | `business` |
| Opening hours (used by "Open now" and Google data) | `hours.week` (24-hour times) and `hours.summary` (how they're printed) |
| Product text and sizes | `products.bagged / dry / luges / artisan / freezers / party`, each with a `specs` list |
| Prices | Each spec row has `price: null`. Type a price like `"$125"` and a Price column appears |
| Delivery towns | `delivery.towns` |
| Reviews | `reviews` (both marked `needs-owner-approval`) |
| FAQ | `faq` |
| Photos | the `photo:` fields; see `images.md` |
| Page titles and Google descriptions | `seo` |
| Launch switch | `business.isPreview`: set to `false` on launch day so Google indexes the site |

Colors live at the top of `src/styles/global.css`.

## Quote form
Uses Netlify Forms (free tier). Submissions appear in Netlify → Site → Forms.
Nobody gets emailed until you add the owner's address under **Forms → Form notifications**.
On `localhost` the form runs in demo mode and sends nothing.

## Redirects
`public/_redirects` sends old WordPress URLs (e.g. `/dry-ice-products/`) to the new pages.
