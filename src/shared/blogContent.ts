import blogRedirectsJson from "@/data/blogRedirects.json";

export const FAQ_MARKER_REGEX = /<div[^>]*\bdata-faqs-marker\b[^>]*><\/div>/i;
export const FAQ_MARKER_REGEX_GLOBAL =
  /<div[^>]*\bdata-faqs-marker\b[^>]*><\/div>/gi;

export function wrapTablesForScroll(html: string) {
  return html
    .replace(
      /<table\b([^>]*)>/gi,
      '<div class="bp-table-wrap table-responsive"><table$1>'
    )
    .replace(/<\/table>/gi, "</table></div>");
}

/**
 * Split article HTML at the end of its first section (the second <h2>), so a
 * mid-article CTA can render between sections. Falls back to no split when the
 * article has fewer than two H2s.
 */
export function splitAfterFirstSection(html: string) {
  const h2 = /<h2\b/gi;
  h2.exec(html); // skip first heading
  const second = h2.exec(html);
  if (!second) {
    return { intro: html, rest: "", hasSplit: false };
  }
  return {
    intro: html.slice(0, second.index),
    rest: html.slice(second.index),
    hasSplit: true,
  };
}

export function splitOnFaqMarker(html: string) {
  const match = html.match(FAQ_MARKER_REGEX);
  if (!match || match.index === undefined) {
    return {
      before: wrapTablesForScroll(html.replace(FAQ_MARKER_REGEX_GLOBAL, "")),
      after: "",
      hasMarker: false,
    };
  }
  const before = wrapTablesForScroll(html.slice(0, match.index));
  const after = wrapTablesForScroll(
    html
      .slice(match.index + match[0].length)
      .replace(FAQ_MARKER_REGEX_GLOBAL, "")
  );
  return { before, after, hasMarker: true };
}

/**
 * CMS article HTML sometimes ships <img> tags with no alt attribute (three on
 * one post in the Sept 2026 crawl). Give those a descriptive fallback built
 * from the post title so every image is accessible and indexable.
 */
export function ensureImageAlts(html: string, fallbackAlt: string) {
  const safeAlt = fallbackAlt.replace(/"/g, "&quot;");
  return html.replace(/<img\b([^>]*)>/gi, (tag, attrs: string) => {
    if (/\balt\s*=/.test(attrs)) return tag;
    return `<img alt="${safeAlt}"${attrs}>`;
  });
}

const STOP_WORDS = new Set([
  "the","a","an","and","or","of","to","in","on","for","your","you","is","are",
  "what","why","how","with","from","that","this","it","its","be","can","do",
  "does","get","gets","get","after","before","while","when","every","should",
  "need","needs","vs","versus","into","at","by","about","more","most","not",
  "2025","2026","guide","complete","really","plain","english","owners","owner",
]);

function titleTerms(title: string) {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/[\s-]+/)
      .filter((w) => w.length > 2 && !STOP_WORDS.has(w)),
  );
}

/**
 * Pick the posts most related to the current one by shared title terms
 * (server-side, no DB fields needed). Ties fall back to recency. On top of the
 * scored picks, the posts published immediately before and after the current
 * one are always included (a "coverage ring"), so every post is linked from at
 * least two other posts however unusual its title. Scored picks alone left
 * nine posts with no inbound link from any sitemap page (Sept 2026 crawl).
 */
export function pickRelatedPosts<T extends { slug: string; blogTitle: string }>(
  current: { slug: string; blogTitle: string },
  candidates: T[],
  limit = 4,
): T[] {
  const base = titleTerms(current.blogTitle);
  const picked = candidates
    .filter((post) => post.slug !== current.slug)
    .map((post, index) => {
      const terms = titleTerms(post.blogTitle);
      let score = 0;
      for (const term of terms) if (base.has(term)) score += 1;
      return { post, score, index };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((entry) => entry.post);

  const position = candidates.findIndex((post) => post.slug === current.slug);
  if (position !== -1 && candidates.length > 1) {
    const total = candidates.length;
    for (const offset of [1, -1]) {
      const neighbour = candidates[(position + offset + total) % total];
      if (
        neighbour.slug !== current.slug &&
        !picked.some((post) => post.slug === neighbour.slug)
      ) {
        picked.push(neighbour);
      }
    }
  }

  return picked;
}

const RETIRED_BLOG_SLUGS: Record<string, string> = blogRedirectsJson;

/**
 * Old post slugs that were merged into other posts live in
 * src/data/blogRedirects.json (next.config serves them as 308s). Article
 * bodies can still link the old slug; rewrite those links at render so
 * crawlers never hit the redirect.
 */
export function rewriteRetiredBlogLinks(html: string) {
  return html.replace(
    /href="((?:https?:\/\/(?:www\.)?zonicllc\.com)?\/blog\/)([^"\/?#]+)(\/?(?:[?#][^"]*)?)"/gi,
    (match, prefix: string, slug: string, rest: string) => {
      const target = RETIRED_BLOG_SLUGS[slug];
      return target ? `href="${prefix}${target}${rest}"` : match;
    },
  );
}

const REINSTATEMENT_SERVICE_PATH = "/services/gmb-reinstatement-help";

// Phrases the reinstatement posts already use. Alternatives are ordered so the
// earliest, longest phrase wins ("GBP reinstatement process" before a bare
// "reinstatement"; "get reinstated" before "reinstated").
const REINSTATEMENT_PHRASE =
  /\b(?:(?:google business profile|google my business|gbp|gmb)\s+(?:reinstatement|suspension)(?:\s+(?:service|services|appeal|appeals|process|request|support|help|experts?))?|reinstatement(?:\s+(?:service|services|appeal|appeals|process|request|support|help))?|(?:get|gets|getting|be|been|being|was|were)\s+reinstated|reinstat(?:e|ed|ing))\b/i;

/** Wrap the first phrase match that sits outside any existing <a> in a link. */
function linkFirstPhrase(paragraphHtml: string, href: string) {
  const tokens = paragraphHtml.split(/(<[^>]+>)/);
  let anchorDepth = 0;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.startsWith("<")) {
      if (/^<a\b/i.test(token)) anchorDepth += 1;
      else if (/^<\/a\b/i.test(token)) anchorDepth = Math.max(0, anchorDepth - 1);
      continue;
    }
    if (anchorDepth > 0) continue;
    const match = REINSTATEMENT_PHRASE.exec(token);
    if (!match || match.index === undefined) continue;
    const end = match.index + match[0].length;
    tokens[i] =
      token.slice(0, match.index) +
      `<a href="${href}">${match[0]}</a>` +
      token.slice(end);
    return { html: tokens.join(""), linked: true };
  }
  return { html: paragraphHtml, linked: false };
}

/**
 * The 20 suspension and reinstatement posts carry all of the site's
 * "gbp reinstatement" impressions (1,330 in 90 days, Sept 2026) while the
 * service page carried none: the posts only reached it through the sidebar
 * and footer. Turn the first mention in the opening paragraphs and the last
 * mention in the closing paragraphs into contextual links, so Google reads the
 * articles as support for the service page. Existing words only: nothing is
 * added, headings and existing links are left alone, at most two links per
 * post, and posts that never mention reinstatement are untouched.
 */
export function linkReinstatementService(html: string) {
  const markerMatch = html.match(FAQ_MARKER_REGEX);
  const cut =
    markerMatch && markerMatch.index !== undefined ? markerMatch.index : html.length;
  const body = html.slice(0, cut);
  const tail = html.slice(cut);

  const paragraphRe = /<p\b[^>]*>[\s\S]*?<\/p>/gi;
  const paragraphs: { start: number; end: number; html: string }[] = [];
  let found: RegExpExecArray | null;
  while ((found = paragraphRe.exec(body)) !== null) {
    paragraphs.push({ start: found.index, end: found.index + found[0].length, html: found[0] });
  }
  if (paragraphs.length === 0) return html;

  const alreadyLinked = (p: { html: string }) =>
    p.html.includes(REINSTATEMENT_SERVICE_PATH);
  const replacements = new Map<number, string>();

  // Opening: first eligible paragraph among the first six.
  const opening = paragraphs.slice(0, 6);
  if (!opening.some(alreadyLinked)) {
    for (let i = 0; i < opening.length; i += 1) {
      const result = linkFirstPhrase(opening[i].html, REINSTATEMENT_SERVICE_PATH);
      if (result.linked) {
        replacements.set(i, result.html);
        break;
      }
    }
  }

  // Closing: last eligible paragraph among the final four, never the same one.
  const closingStart = Math.max(6, paragraphs.length - 4);
  const closing = paragraphs.slice(closingStart);
  if (!closing.some(alreadyLinked)) {
    for (let i = closing.length - 1; i >= 0; i -= 1) {
      const index = closingStart + i;
      if (replacements.has(index)) continue;
      const result = linkFirstPhrase(closing[i].html, REINSTATEMENT_SERVICE_PATH);
      if (result.linked) {
        replacements.set(index, result.html);
        break;
      }
    }
  }

  if (replacements.size === 0) return html;
  let out = "";
  let cursor = 0;
  paragraphs.forEach((p, index) => {
    const replacement = replacements.get(index);
    if (replacement === undefined) return;
    out += body.slice(cursor, p.start) + replacement;
    cursor = p.end;
  });
  out += body.slice(cursor);
  return out + tail;
}

/**
 * CMS article HTML occasionally links the bare apex host. The canonical host
 * is www, so rewrite internal links before render (one post still carried a
 * non-www link in the Sept 2026 crawl).
 */
export function canonicalizeHostLinks(html: string) {
  return (
    html
      .replace(/https?:\/\/zonicllc\.com(?=[\/"'?#\s])/gi, "https://www.zonicllc.com")
      // CMS copy occasionally saves phone links as href="tel; (302) 726-9736",
      // which browsers resolve to /blog/tel;… and crawlers report as 404s
      // (Semrush, Sept 2026). Normalise any tel-ish href to a real tel: URI.
      .replace(
        /href="tel[:;]?\s*\+?1?\s*\(?(\d{3})\)?[\s.-]*(\d{3})[\s.-]*(\d{4})"/gi,
        'href="tel:+1$1$2$3"',
      )
  );
}
