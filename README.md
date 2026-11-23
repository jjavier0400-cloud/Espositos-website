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

## Chat assistant (demo, OFF by default)

An AI assistant that answers visitor questions and collects call-back requests. It is **off**: with it off, the built site is byte-for-byte the same as a site without it.

### Turn it on or off (the kill switch)
Open `src/data/site.ts`, find `export const chatbot`, and change `enabled: false` to `true` (or back to `false`). Then commit and redeploy.
- **Off:** no widget, no script, no request on any page, and `/api/chat` answers 404. Use this to shut it down fast.
- Build check: `npm run build` fails with a clear error if `site.ts` and `astro.config.mjs` ever disagree about the flag.

### Settings you need (not stored in the repo)
| Name | Where | What |
|---|---|---|
| `ANTHROPIC_API_KEY` | Netlify → Site configuration → Environment variables (scope: Functions, and Deploy Previews if you want previews to work). Locally: a `.env` file (gitignored). See `.env.example`. | Key for the Claude API. Never put it in code or commit it. |

With no key set, the widget still loads and shows "the assistant isn't available right now (this is a demo), please call (973) 267-2355". It never breaks the page.

### Spend cap (do this)
**A hard monthly spend limit cannot be set from code.** Set it in the Anthropic Console (Settings → Limits) before turning the bot on. The code also limits cost: replies are capped at 400 tokens, only the last 10 messages are sent, a chat is capped at 12 visitor messages, and each visitor message at 500 characters. The model is `claude-haiku-5-5`, set in one place (`chatbot.model`). Prices are on the [Anthropic pricing page](https://platform.claude.com/docs/en/about-claude/pricing).

Netlify's Free plan has a hard 300-credit monthly limit; if it runs out, **every project on the account is paused**. The chat function uses very few credits, but this is another reason to keep the kill switch handy.

### How it works
- `src/components/ChatWidget.astro`: the button and panel (plain-text answers; only the business phone number and the quote-form path become links).
- `netlify/functions/chat.ts`: the function at `/api/chat`. Rate limit: 8 requests per minute per visitor IP (Netlify's `rateLimit`, set in the file). It only accepts requests from our own pages. It never logs what people type: only error codes and a "request" line.
- Call-back requests go to a Netlify Form named `chat-lead`. To get them by email: Netlify → Forms → `chat-lead` → Form notifications → add the owner's email. (No email address is in the code.) On `localhost` the form runs in demo mode and sends nothing.
- Chats are not stored anywhere.

### Update what the bot knows
Edit `src/data/site.ts` only. The bot's instructions are built from it on every request (business info, hours, delivery towns, products, policies, FAQ). Two lists matter especially:
- `unverified`: topics the owner hasn't confirmed. The bot says "I'd confirm that by phone" about these. **Delete a row once the owner confirms it.**
- Prices: every price is `null`, so the bot says it has no pricing and gives the phone number. Fill in a price in a spec row and the bot will start quoting it.

### Test it
```
npm run dev:chat      # site + function together at http://localhost:8888 (needs a key in .env)
npm run eval:chat     # asks ~26 test questions and prints PASS/FAIL (costs a few cents)
```
The eval checks simple rules (e.g. no prices, no order promises, stays on topic). A pass is not a guarantee; read the printed answers too.
