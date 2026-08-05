import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOT = "C:/Users/maann/OneDrive/Desktop/zonic";
const APP_ROOT = path.join(ROOT, "src", "app");

const walkFiles = (directory, extensions) => {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(entryPath, extensions));
    else if (extensions.some((e) => entry.name.endsWith(e))) files.push(entryPath);
  }
  return files;
};

const normalizeAnchor = (v) => v.replace(/\s+/g, " ").trim();

const jsxText = (node) => {
  if (ts.isJsxText(node)) return node.text;
  if (ts.isJsxExpression(node)) {
    if (!node.expression) return "";
    if (ts.isStringLiteral(node.expression) || ts.isNoSubstitutionTemplateLiteral(node.expression))
      return node.expression.text;
    return `{${node.expression.getText()}}`;
  }
  if (ts.isJsxElement(node)) return node.children.map(jsxText).join(" ");
  return "";
};

const attributeValue = (attributes, name) => {
  const attribute = attributes.properties.find(
    (p) => ts.isJsxAttribute(p) && p.name.getText() === name,
  );
  if (!attribute || !ts.isJsxAttribute(attribute) || !attribute.initializer) return null;
  if (ts.isStringLiteral(attribute.initializer)) return attribute.initializer.text;
  if (
    ts.isJsxExpression(attribute.initializer) &&
    attribute.initializer.expression &&
    (ts.isStringLiteral(attribute.initializer.expression) ||
      ts.isNoSubstitutionTemplateLiteral(attribute.initializer.expression))
  )
    return attribute.initializer.expression.text;
  return `{${attribute.initializer.getText()}}`;
};

const dirs = fs
  .readdirSync(path.join(APP_ROOT, "(main)", "services"), { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name.endsWith("-website-design"))
  .map((e) => path.join(APP_ROOT, "(main)", "services", e.name, "page.tsx"));

for (const file of dirs) {
  const sourceText = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const links = [];
  const visit = (node) => {
    if (ts.isJsxElement(node)) {
      const className = attributeValue(node.openingElement.attributes, "className");
      if (className?.split(/\s+/).some((n) => n.endsWith("inline-link"))) {
        const href = attributeValue(node.openingElement.attributes, "href");
        const anchor = normalizeAnchor(node.children.map(jsxText).join(" "));
        const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
        const cssClass = className.split(/\s+/).find((n) => n.endsWith("inline-link"));
        links.push({ href, anchor, line, cssClass });
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  console.log(`\n=== ${path.basename(path.dirname(file))} ===`);
  for (const l of links) console.log(`  L${l.line} [${l.cssClass}] "${l.anchor}" -> ${l.href}`);
}
