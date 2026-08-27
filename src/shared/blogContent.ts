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
