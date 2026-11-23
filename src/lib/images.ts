// Finds a photo in src/assets/photos/ by its file name (the name used in site.ts).
import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/photos/*.{jpg,jpeg,png,webp,avif}", { eager: true });

export function photo(name?: string | null): ImageMetadata | null {
  if (!name) return null;
  const file = files[`/src/assets/photos/${name}`];
  if (!file) throw new Error(`Photo "${name}" not found. Put it in src/assets/photos/ or fix the name in src/data/site.ts`);
  return file.default;
}
