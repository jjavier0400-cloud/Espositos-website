// Site-wide behavior: header shrink, mobile menu, scroll reveals, count-ups, open/closed status.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1) Header shrinks after scrolling a little
const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 2) Mobile menu toggle
const menuBtn = document.querySelector<HTMLButtonElement>("[data-menu-btn]");
const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");
menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!open));
  if (mobileNav) mobileNav.hidden = open;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuBtn?.getAttribute("aria-expanded") === "true") {
    menuBtn.setAttribute("aria-expanded", "false");
    if (mobileNav) mobileNav.hidden = true;
    menuBtn.focus();
  }
});

// 3) Sections fade/rise in once when they scroll into view
const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (!("IntersectionObserver" in window) || reduceMotion) {
  revealEls.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));
}

// 4) Count-up numbers (real facts only; final value is already in the HTML)
const counters = document.querySelectorAll<HTMLElement>("[data-count]");
const runCount = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduceMotion || !target) { el.textContent = String(target); return; }
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ("IntersectionObserver" in window) {
  const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { runCount(e.target as HTMLElement); cio.unobserve(e.target); }
  }), { threshold: 0.6 });
  counters.forEach((el) => cio.observe(el));
}

// 5) Open now / closed, in New Jersey time
type Day = { day: number; label: string; open: string | null; close: string | null };
const toMin = (hhmm: string) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const pretty = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const s = h >= 12 ? "pm" : "am"; const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${s}` : `${h12} ${s}`;
};
document.querySelectorAll<HTMLElement>("[data-open-status]").forEach((el) => {
  const week: Day[] = JSON.parse(el.dataset.hours || "[]");
  const tz = el.dataset.tz || "America/New_York";
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value || "";
  const dayIdx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const nowMin = Number(get("hour")) * 60 + Number(get("minute"));
  const today = week.find((d) => d.day === dayIdx);
  const textEl = el.querySelector("[data-open-text]");
  if (!textEl || dayIdx < 0) return;

  if (today?.open && today.close && nowMin >= toMin(today.open) && nowMin < toMin(today.close)) {
    el.dataset.state = "open";
    textEl.textContent = `Open now, until ${pretty(today.close)}`;
    return;
  }
  el.dataset.state = "closed";
  if (today?.open && nowMin < toMin(today.open)) {
    textEl.textContent = `Closed now. Opens today at ${pretty(today.open)}`;
    return;
  }
  for (let i = 1; i <= 7; i++) {
    const next = week.find((d) => d.day === (dayIdx + i) % 7);
    if (next?.open) {
      textEl.textContent = `Closed now. Opens ${i === 1 ? "tomorrow" : next.label} at ${pretty(next.open)}`;
      return;
    }
  }
});
