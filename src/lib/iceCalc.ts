// The ice calculator's math. Used on the server (first view, works without
// JavaScript) and in the browser (live updates). The numbers themselves live in
// `iceCalculator` in src/data/site.ts.

export type Bag = { size: number; count: number };

/** Pounds of ice for an event, rounded up to a whole pound. */
export function poundsNeeded(opts: {
  guests: number;
  lbPerGuest: number;
  weatherFactor: number;
  hours: number;
  baseHours: number;
  extraPerHour: number;
}): number {
  const { guests, lbPerGuest, weatherFactor, hours, baseHours, extraPerHour } = opts;
  const hourFactor = 1 + extraPerHour * Math.max(0, hours - baseHours);
  return Math.ceil(guests * lbPerGuest * weatherFactor * hourFactor);
}

// How many "extra pounds" one more bag is worth avoiding. Higher = fewer bags
// with a bit more ice; lower = closer to the exact weight with more small bags.
const BAG_PENALTY_LB = 4;

/**
 * Cheapest-feeling mix of bag sizes that covers `lbs`: little extra ice,
 * not too many bags. Example: 125 lb with [40, 16, 5] → 3 × 40 + 1 × 5.
 */
export function bagMix(lbs: number, sizes: readonly number[]): Bag[] {
  const sorted = [...sizes].sort((a, b) => b - a);
  const top = lbs + sorted[0];
  // fewest[w] = fewest bags that add up to exactly w pounds; last[w] = one bag used to get there
  const fewest = new Array<number>(top + 1).fill(Infinity);
  const last = new Array<number>(top + 1).fill(0);
  fewest[0] = 0;
  for (let w = 1; w <= top; w++) {
    for (const s of sorted) {
      if (s <= w && fewest[w - s] + 1 < fewest[w]) { fewest[w] = fewest[w - s] + 1; last[w] = s; }
    }
  }
  let pick = -1;
  let pickCost = Infinity;
  for (let w = lbs; w <= top; w++) {
    if (fewest[w] === Infinity) continue;
    const cost = (w - lbs) + BAG_PENALTY_LB * fewest[w];
    if (cost < pickCost) { pickCost = cost; pick = w; }
  }
  const counts = new Map<number, number>();
  for (let w = pick; w > 0; w -= last[w]) counts.set(last[w], (counts.get(last[w]) ?? 0) + 1);
  return sorted.filter((s) => counts.has(s)).map((s) => ({ size: s, count: counts.get(s)! }));
}

/** "3 × 40 lb + 1 × 5 lb bags" */
export function describeMix(mix: Bag[]): string {
  const total = mix.reduce((n, b) => n + b.count, 0);
  return `${mix.map((b) => `${b.count} × ${b.size} lb`).join(" + ")} ${total === 1 ? "bag" : "bags"}`;
}

export const mixWeight = (mix: Bag[]) => mix.reduce((n, b) => n + b.size * b.count, 0);
