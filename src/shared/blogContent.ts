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
 * (server-side, no DB fields needed). Ties fall back to recency. Used to give
 * every post a crawlable "Related guides" block — 28 posts had zero internal
 * links before this (Sept 2026 crawl).
 */
export function pickRelatedPosts<T extends { slug: string; blogTitle: string }>(
  current: { slug: string; blogTitle: string },
  candidates: T[],
  limit = 4,
): T[] {
  const base = titleTerms(current.blogTitle);
  return candidates
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
}

/**
 * CMS article HTML occasionally links the bare apex host. The canonical host
 * is www, so rewrite internal links before render (one post still carried a
 * non-www link in the Sept 2026 crawl).
 */
export function canonicalizeHostLinks(html: string) {
  return html.replace(/https?:\/\/zonicllc\.com(?=[\/"'?#\s])/gi, "https://www.zonicllc.com");
}
