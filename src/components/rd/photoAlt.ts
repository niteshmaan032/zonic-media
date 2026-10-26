/* Alt text for trade photos whose components had alt="" (SEO checkup,
   27 Oct 2026). Builds a short description from the file path, e.g.
   /images/free-website/free-hvac/ac-repair.webp -> "AC repair (HVAC)" and
   /images/home-improvement-web/flooring-hero.webp -> "Flooring work photo". */

const ACRONYMS: Record<string, string> = { hvac: "HVAC", ac: "AC", gbp: "GBP" };
const GENERIC = /^(hero|image|img|primary|every|first|impressions|service|line|specialty|vertical|postcard|showcase|v\d+|\d+)$/;

const words = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((w) => ACRONYMS[w] ?? w)
    .join(" ");

const sentence = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

export function photoAlt(src: string): string {
  const path = decodeURIComponent(src).split("?")[0];
  const parts = path.split("/").filter(Boolean);
  const file = (parts.pop() ?? "").replace(/\.[a-z0-9]+$/i, "");
  const dir = parts.pop() ?? "";

  let niche = "";
  let detailSlug = file;
  if (dir.startsWith("free-")) niche = dir.slice(5);
  else if (dir.endsWith("-web") && dir !== "home-improvement-web") niche = dir.slice(0, -4);
  else if (dir === "home-improvement-web") {
    const m = file.match(/^(.*?)-(hero|first-impressions)/);
    niche = m ? m[1] : file;
    detailSlug = "";
  }

  const detail = detailSlug
    .split("-")
    .filter((w) => !GENERIC.test(w))
    .join("-");
  const nicheText = words(niche);
  if (detail && words(detail).toLowerCase() !== nicheText.toLowerCase()) {
    const d = sentence(words(detail));
    return nicheText && !d.toLowerCase().includes(nicheText.toLowerCase())
      ? `${d} (${nicheText})`
      : d;
  }
  return nicheText ? `${sentence(nicheText)} work photo` : "";
}
