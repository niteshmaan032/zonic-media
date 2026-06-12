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
