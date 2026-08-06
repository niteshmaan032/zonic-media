/* Title Case for headings.
 *
 * The site used to lean on `text-transform: capitalize`, which uppercased every
 * word and produced "Judged Like A Broken AC" / "What Kind Of Businesses…".
 * Headings are now cased in the source instead, and this helper applies the
 * same rule to headings that are assembled at build time from config values
 * (see data/industryMarketing/template.ts).
 *
 * Rule: uppercase the first letter of every word, EXCEPT small words (articles,
 * coordinating conjunctions, short prepositions, and the linking verbs
 * is/am/are/was/were/be) — those stay lowercase unless they open or close a
 * clause. Only a word's first letter is ever touched, so acronyms (SEO, GBP,
 * HVAC, AC) survive untouched.
 */

const SMALL = new Set([
  "a", "an", "and", "am", "are", "as", "at", "be", "but", "by", "for", "from",
  "in", "into", "is", "nor", "of", "off", "on", "onto", "or", "over", "the",
  "to", "up", "via", "was", "were", "with",
]);

const CLAUSE_BREAK = /[:—–|?!.]$/;
const SEPARATOR_ONLY = /^[—–|:-]+$/;
const ENTITY = /^&(?:#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/;

const stripEntities = (w: string) => w.replace(/&[a-z]+[0-9]*;/gi, "");
const core = (w: string) => stripEntities(w).replace(/[^A-Za-z]/g, "");

function mapFirstLetter(word: string, fn: (c: string) => string) {
  let i = 0;
  while (i < word.length) {
    // Skip whole HTML entities — "&amp;" must never become "&Amp;".
    const ent = word.slice(i).match(ENTITY);
    if (ent) {
      i += ent[0].length;
      continue;
    }
    const ch = word[i];
    if (/[A-Za-z]/.test(ch)) return word.slice(0, i) + fn(ch) + word.slice(i + 1);
    if (!/['"“‘([]/.test(ch)) break;
    i++;
  }
  return word;
}

const upperFirst = (w: string) => mapFirstLetter(w, (c) => c.toUpperCase());
const lowerFirst = (w: string) => mapFirstLetter(w, (c) => c.toLowerCase());

function isAllCaps(word: string) {
  const c = core(word);
  return c.length > 1 && c === c.toUpperCase();
}

export type TitleCaseOptions = {
  /** Does this fragment open the heading (or a new clause)? */
  startsClause?: boolean;
  /** Does this fragment end the heading? */
  endsHeading?: boolean;
};

export function titleCaseText(
  text: string,
  { startsClause = true, endsHeading = true }: TitleCaseOptions = {},
): string {
  const parts = text.split(/(\s+)/);

  const idx: number[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] && !/^\s+$/.test(parts[i])) idx.push(i);
  }
  if (!idx.length) return text;

  const opens = new Set<number>();
  const closes = new Set<number>();
  if (startsClause) opens.add(0);

  for (let n = 0; n < idx.length; n++) {
    const bare = stripEntities(parts[idx[n]]);
    const isSep = SEPARATOR_ONLY.test(bare);
    if (isSep || CLAUSE_BREAK.test(bare)) {
      if (n + 1 < idx.length) opens.add(n + 1);
      for (let p = n - (isSep ? 1 : 0); p >= 0; p--) {
        if (!SEPARATOR_ONLY.test(stripEntities(parts[idx[p]]))) {
          closes.add(p);
          break;
        }
      }
    }
  }
  if (endsHeading) closes.add(idx.length - 1);

  for (let n = 0; n < idx.length; n++) {
    const forced = opens.has(n) || closes.has(n);
    const pieces = parts[idx[n]].split(/(-)/);
    let out = "";
    let firstPiece = true;
    for (const piece of pieces) {
      if (piece === "-" || piece === "") {
        out += piece;
        continue;
      }
      if (isAllCaps(piece)) out += piece;
      else if (!(forced && firstPiece) && SMALL.has(core(piece).toLowerCase())) {
        out += lowerFirst(piece);
      } else out += upperFirst(piece);
      if (core(piece)) firstPiece = false;
    }
    parts[idx[n]] = out;
  }

  return parts.join("");
}

/**
 * Title-cases the text inside every <h1>–<h6> of an HTML string, leaving tags,
 * attributes and everything outside the headings untouched. Idempotent.
 */
export function titleCaseHeadings(html: string): string {
  return html.replace(
    /(<h([1-6])(?:\s[^>]*)?>)([\s\S]*?)(<\/h\2>)/g,
    (_m, open: string, _lvl: string, inner: string, close: string) => {
      // split the heading into text runs and raw tag markup
      const segs: { text: boolean; v: string }[] = [];
      let buf = "";
      let i = 0;
      while (i < inner.length) {
        if (inner[i] === "<") {
          const j = inner.indexOf(">", i);
          if (j === -1) {
            buf += inner[i++];
            continue;
          }
          if (buf) {
            segs.push({ text: true, v: buf });
            buf = "";
          }
          segs.push({ text: false, v: inner.slice(i, j + 1) });
          i = j + 1;
          continue;
        }
        buf += inner[i++];
      }
      if (buf) segs.push({ text: true, v: buf });

      const textIdx = segs
        .map((s, n) => (s.text && /[A-Za-z]/.test(s.v) ? n : -1))
        .filter((n) => n >= 0);
      if (!textIdx.length) return open + inner + close;

      let opensNext = true;
      for (const n of textIdx) {
        const before = segs[n].v;
        segs[n].v = titleCaseText(before, {
          startsClause: opensNext,
          endsHeading: n === textIdx[textIdx.length - 1],
        });
        opensNext = CLAUSE_BREAK.test(stripEntities(before).trimEnd());
      }
      return open + segs.map((s) => s.v).join("") + close;
    },
  );
}
