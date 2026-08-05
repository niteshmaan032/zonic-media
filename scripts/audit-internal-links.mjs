import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const APP_ROOT = path.join(ROOT, "src", "app");
const DATA_FILE = path.join(
  ROOT,
  "src",
  "data",
  "industryMarketingPages.generated.json",
);
const SPEC_FILE = path.join(ROOT, ".claude", "interlinking-spec.md");
const SITEMAP_FILE = path.join(APP_ROOT, "sitemap.ts");

const walkFiles = (directory, extensions) => {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(entryPath, extensions));
    else if (extensions.some((extension) => entry.name.endsWith(extension))) {
      files.push(entryPath);
    }
  }
  return files;
};

const normalizeAnchor = (value) => value.replace(/\s+/g, " ").trim();
const wordCount = (value) =>
  normalizeAnchor(value)
    .replace(/[&.,!?():;\u2014\u2013]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

const spec = fs.readFileSync(SPEC_FILE, "utf8");
const sitemap = fs.readFileSync(SITEMAP_FILE, "utf8");
const industryData = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
const allowedTargets = new Set(["/"]);
const sitemapTargets = new Set();

for (const match of spec.matchAll(/`(\/[^`\s]*)`/g)) {
  if (!match[1].includes("{") && !match[1].includes("+")) {
    allowedTargets.add(match[1]);
  }
}
for (const match of sitemap.matchAll(/\$\{BASE_URL\}(\/[^`]*)/g)) {
  allowedTargets.add(match[1]);
  sitemapTargets.add(match[1]);
}

const routeFromRelativePath = (relativePath) => {
  const routeParts = relativePath
    .replaceAll("\\", "/")
    .split("/")
    .filter((part) => part && !(part.startsWith("(") && part.endsWith(")")));
  return routeParts.length ? `/${routeParts.join("/")}` : "/";
};

const pageFiles = walkFiles(APP_ROOT, ["page.tsx", "page.jsx"]);
const appRoutes = new Set(
  pageFiles
    .map((file) => {
      const relative = path.relative(APP_ROOT, file).replaceAll("\\", "/");
      return routeFromRelativePath(relative.replace(/\/?page\.(tsx|jsx)$/, ""));
    })
    .filter((route) => !route.includes("[") && !route.startsWith("/admin")),
);
for (const slug of Object.keys(industryData)) appRoutes.add(`/services/${slug}`);
// Dynamic /legal/[slug] pages (see src/shared/conditions) can't be walked.
for (const slug of ["privacy-policy", "terms-conditions", "refund-policy"]) {
  appRoutes.add(`/legal/${slug}`);
}

const css = walkFiles(APP_ROOT, [".css"])
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
const issues = [];
const reports = [];

const jsxText = (node) => {
  if (ts.isJsxText(node)) return node.text;
  if (ts.isJsxExpression(node)) {
    if (!node.expression) return "";
    if (
      ts.isStringLiteral(node.expression) ||
      ts.isNoSubstitutionTemplateLiteral(node.expression)
    ) {
      return node.expression.text;
    }
    return `{${node.expression.getText()}}`;
  }
  if (ts.isJsxElement(node)) return node.children.map(jsxText).join(" ");
  return "";
};

const attributeValue = (attributes, name) => {
  const attribute = attributes.properties.find(
    (property) =>
      ts.isJsxAttribute(property) && property.name.getText() === name,
  );
  if (!attribute || !ts.isJsxAttribute(attribute) || !attribute.initializer) {
    return null;
  }
  if (ts.isStringLiteral(attribute.initializer)) return attribute.initializer.text;
  if (
    ts.isJsxExpression(attribute.initializer) &&
    attribute.initializer.expression &&
    (ts.isStringLiteral(attribute.initializer.expression) ||
      ts.isNoSubstitutionTemplateLiteral(attribute.initializer.expression))
  ) {
    return attribute.initializer.expression.text;
  }
  return `{${attribute.initializer.getText()}}`;
};

const routeForFile = (file) => {
  const relative = path.relative(APP_ROOT, file).replaceAll("\\", "/");
  if (path.basename(file).toLowerCase() === "statepage.tsx") return null;
  return routeFromRelativePath(path.dirname(relative));
};

const representedRoutes = (file, route) => {
  if (route) return [route];
  if (path.basename(file).toLowerCase() !== "statepage.tsx") return [];
  return fs
    .readdirSync(path.dirname(file), { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(path.dirname(file), entry.name, "page.tsx")),
    )
    .map((entry) =>
      routeFromRelativePath(
        path.relative(APP_ROOT, path.join(path.dirname(file), entry.name)),
      ),
    );
};

// Legacy components whose imports are commented out in their page.tsx —
// never rendered, so their links must not count toward any route.
const DEAD_COMPONENTS = new Set([
  "ChiroDigitalPage.tsx",
  "CommercialSeoPage.tsx",
  "LawSeoPage.tsx",
  "ResidentialSeoPage.tsx",
  "CarTowSeoPage.tsx",
]);

for (const file of walkFiles(APP_ROOT, [".tsx", ".jsx"])) {
  if (DEAD_COMPONENTS.has(path.basename(file))) continue;
  const sourceText = fs.readFileSync(file, "utf8");
  // gbp-lp landing pages style in-body links as "lp-link" (gbpLanding.css).
  if (!sourceText.includes("inline-link") && !sourceText.includes("lp-link"))
    continue;

  const sourceFile = ts.createSourceFile(
    file,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.JSX,
  );
  const links = [];

  const visit = (node, ancestors = []) => {
    if (ts.isJsxElement(node)) {
      const tag = node.openingElement.tagName.getText();
      const className = attributeValue(node.openingElement.attributes, "className");
      if (
        className
          ?.split(/\s+/)
          .some((name) => name.endsWith("inline-link") || name === "lp-link")
      ) {
        const href = attributeValue(node.openingElement.attributes, "href");
        const anchor = normalizeAnchor(node.children.map(jsxText).join(" "));
        const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
        const cssClass = className
          .split(/\s+/)
          .find((name) => name.endsWith("inline-link") || name === "lp-link");
        links.push({ href, anchor, line, cssClass, ancestors });
      }
      const nextAncestors = [...ancestors, tag];
      node.children.forEach((child) => visit(child, nextAncestors));
      return;
    }
    ts.forEachChild(node, (child) => visit(child, ancestors));
  };
  visit(sourceFile);

  const relative = path.relative(ROOT, file).replaceAll("\\", "/");
  const route = routeForFile(file);
  reports.push({ source: relative, routes: representedRoutes(file, route), links });

  if (links.length < 8) {
    issues.push(`${relative}: expected at least 8 links, found ${links.length}`);
  }

  const hrefCounts = new Map();
  for (const link of links) {
    if (!link.href?.startsWith("/")) {
      issues.push(`${relative}:${link.line}: non-static or non-root href ${link.href}`);
    } else {
      hrefCounts.set(link.href, (hrefCounts.get(link.href) ?? 0) + 1);
      if (!allowedTargets.has(link.href)) {
        issues.push(`${relative}:${link.line}: target not in canonical inventory: ${link.href}`);
      }
      if (!appRoutes.has(link.href)) {
        issues.push(`${relative}:${link.line}: target has no app route: ${link.href}`);
      }
      if (route && link.href === route) {
        issues.push(`${relative}:${link.line}: self-link to ${link.href}`);
      }
    }

    if (!link.anchor.includes("{") && (wordCount(link.anchor) < 2 || wordCount(link.anchor) > 6)) {
      issues.push(
        `${relative}:${link.line}: anchor must be 2-6 words: "${link.anchor}"`,
      );
    }
    if (link.ancestors.some((tag) => /^(h1|h2|h3|button|a|Link)$/.test(tag))) {
      issues.push(
        `${relative}:${link.line}: inline link is nested in ${link.ancestors.join(" > ")}`,
      );
    }
    if (!link.cssClass || !css.includes(`.${link.cssClass}`)) {
      issues.push(`${relative}:${link.line}: no CSS rule found for ${link.cssClass}`);
    }
  }
  for (const [href, count] of hrefCounts) {
    if (count > 1) issues.push(`${relative}: duplicate target ${href} (${count} links)`);
  }
}

for (const [slug, page] of Object.entries(industryData)) {
  const links = [];
  for (const match of page.contentHtml.matchAll(
    /<a\s+class="ima-inline-link"\s+href="([^"]+)">([\s\S]*?)<\/a>/g,
  )) {
    links.push({ href: match[1], anchor: normalizeAnchor(match[2]) });
  }
  const route = `/services/${slug}`;
  appRoutes.add(route);
  const source = `src/data/industryMarketingPages.generated.json#${slug}`;
  reports.push({ source, routes: [route], links });
  if (links.length < 8)
    issues.push(`${source}: expected at least 8 links, found ${links.length}`);

  const hrefCounts = new Map();
  for (const link of links) {
    hrefCounts.set(link.href, (hrefCounts.get(link.href) ?? 0) + 1);
    if (!allowedTargets.has(link.href)) {
      issues.push(`${source}: target not in canonical inventory: ${link.href}`);
    }
    if (link.href === route) issues.push(`${source}: self-link to ${link.href}`);
    if (wordCount(link.anchor) < 2 || wordCount(link.anchor) > 6) {
      issues.push(`${source}: anchor must be 2-6 words: "${link.anchor}"`);
    }
  }
  for (const [href, count] of hrefCounts) {
    if (count > 1) issues.push(`${source}: duplicate target ${href} (${count} links)`);
  }
}

for (const report of reports) {
  for (const route of report.routes) {
    if (!sitemapTargets.has(route)) {
      issues.push(`${report.source}: interlinked route missing from sitemap: ${route}`);
    }
  }
}

console.log(`Audited ${reports.length} interlinked sources.`);
console.log(
  `Represented routes: ${reports.reduce((sum, report) => sum + report.routes.length, 0)}.`,
);
console.log(`Contextual links: ${reports.reduce((sum, report) => sum + report.links.length, 0)}.`);
if (issues.length) {
  console.error(`Found ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log("All internal-link checks passed.");
}
