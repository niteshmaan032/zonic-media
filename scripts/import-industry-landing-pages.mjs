import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sourceDirectory =
  process.argv[2] ??
  "C:\\Users\\maann\\Downloads\\All Landing pages HTML";

const slugs = [
  "auto-repair-marketing-agency",
  "chiropractic-marketing-agency",
  "cleaning-company-marketing-agency",
  "dental-marketing-agency",
  "electrician-marketing-agency",
  "garage-door-marketing-agency",
  "landscaping-marketing-agency",
  "law-firm-marketing-agency",
  "moving-company-marketing-agency",
  "painting-contractor-marketing-agency",
  "pest-control-marketing-agency",
  "real-estate-marketing-agency",
  "roofing-marketing-agency",
];

function outerElementByClass(html, tagName, className) {
  const startPattern = new RegExp(
    `<${tagName}\\b[^>]*class=["'][^"']*\\b${className}\\b[^"']*["'][^>]*>`,
    "i",
  );
  const startMatch = startPattern.exec(html);

  if (!startMatch) {
    throw new Error(`Missing .${className} <${tagName}> element.`);
  }

  const tokenPattern = new RegExp(`<\\/?${tagName}\\b[^>]*>`, "gi");
  tokenPattern.lastIndex = startMatch.index;
  let depth = 0;
  let token;

  while ((token = tokenPattern.exec(html))) {
    depth += token[0].startsWith(`</`) ? -1 : 1;
    if (depth === 0) {
      return html.slice(startMatch.index, tokenPattern.lastIndex);
    }
  }

  throw new Error(`Unclosed .${className} <${tagName}> element.`);
}

function innerHtml(outer) {
  return outer
    .replace(/^<[^>]+>/, "")
    .replace(/<\/[^>]+>\s*$/, "")
    .trim();
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function textFrom(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "").trim());
}

function cleanFragment(fragment) {
  return fragment
    .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "")
    .replace(/\sonclick=("[^"]*"|'[^']*')/gi, "")
    .replace(/\sonsubmit=("[^"]*"|'[^']*')/gi, "")
    .replace(/href=("|')#quote\1/gi, 'href="#industry-audit"')
    .trim();
}

function allSections(html) {
  const starts = [...html.matchAll(/<section\b[^>]*class=["'][^"']*\bsection\b[^"']*["'][^>]*>/gi)];
  return starts.map((start) => {
    const remainder = html.slice(start.index);
    const tokenPattern = /<\/?section\b[^>]*>/gi;
    let depth = 0;
    let token;

    while ((token = tokenPattern.exec(remainder))) {
      depth += token[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        return remainder.slice(0, tokenPattern.lastIndex);
      }
    }

    throw new Error("Unclosed content section.");
  });
}

function metaContent(html, name) {
  const pattern = new RegExp(
    `<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  return decodeEntities(pattern.exec(html)?.[1] ?? "");
}

function formData(html) {
  const formCard = outerElementByClass(html, "div", "form-card");
  const title = textFrom(/<h3[^>]*>([\s\S]*?)<\/h3>/i.exec(formCard)?.[1] ?? "");
  const subtitle = textFrom(
    /<p[^>]*class=["'][^"']*\bsub\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i.exec(
      formCard,
    )?.[1] ?? "",
  );
  const labels = [...formCard.matchAll(/<label[^>]*>([\s\S]*?)<\/label>/gi)].map(
    (match) => textFrom(match[1]),
  );
  const placeholders = [
    ...formCard.matchAll(/<input\b[^>]*placeholder=["']([^"']*)["'][^>]*>/gi),
  ].map((match) => decodeEntities(match[1]));
  const selectMatch = /<select[^>]*>([\s\S]*?)<\/select>/i.exec(formCard)?.[1] ?? "";
  const serviceOptions = [...selectMatch.matchAll(/<option[^>]*>([\s\S]*?)<\/option>/gi)]
    .map((match) => textFrom(match[1]))
    .filter(Boolean);

  const submitLabel = textFrom(
    /<button[^>]*>([\s\S]*?)<\/button>/i.exec(formCard)?.[1] ??
      "Get My Free Audit",
  );
  const finePrint = textFrom(
    /<p[^>]*class=["'][^"']*\bform-fine\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i.exec(
      formCard,
    )?.[1] ?? "",
  );

  return {
    title,
    subtitle,
    labels,
    placeholders,
    serviceOptions,
    submitLabel,
    finePrint,
  };
}

const pages = Object.fromEntries(
  slugs.map((slug) => {
    const source = readFileSync(join(sourceDirectory, `${slug}.html`), "utf8");
    const title = textFrom(/<title>([\s\S]*?)<\/title>/i.exec(source)?.[1] ?? "");
    const description = metaContent(source, "description");
    const hero = innerHtml(outerElementByClass(source, "div", "hero-copy"));
    const breadcrumb = innerHtml(outerElementByClass(source, "div", "crumb"));
    const ticker = innerHtml(outerElementByClass(source, "div", "ticker-track"));
    const trustbar = outerElementByClass(source, "div", "trustbar");
    const content = allSections(source).join("\n");
    const finalCta = outerElementByClass(source, "section", "final");
    const footer = outerElementByClass(source, "footer", "foot");
    const schemas = [...source.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].map(
      (match) =>
        match[1].replaceAll(
          `https://www.zonicllc.com/industries/${slug}`,
          `https://www.zonicllc.com/services/${slug}`,
        ),
    );

    return [
      slug,
      {
        slug,
        title,
        description,
        tickerHtml: cleanFragment(ticker),
        breadcrumbHtml: cleanFragment(breadcrumb),
        heroHtml: cleanFragment(hero),
        trustbarHtml: cleanFragment(trustbar),
        contentHtml: cleanFragment(content),
        finalHtml: cleanFragment(finalCta),
        footerHtml: cleanFragment(footer),
        schemas,
        form: formData(source),
      },
    ];
  }),
);

writeFileSync(
  join(process.cwd(), "src", "data", "industryMarketingPages.generated.json"),
  `${JSON.stringify(pages, null, 2)}\n`,
  "utf8",
);

console.log(`Imported ${Object.keys(pages).length} industry marketing pages.`);
