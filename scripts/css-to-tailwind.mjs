// Redesign migration tool (docs/growth-plan-2026-10.md §6b).
// Converts a page-scoped stylesheet (rules written as `.root .root-x …`) into
// prefixed Tailwind utilities written directly on the JSX elements, so the page
// no longer needs the stylesheet. Old files are never modified: the tool writes
// NEW .tsx files and one small companion CSS file (keyframes + root-level tag
// rules, which have no element to live on).
//
//   node scripts/css-to-tailwind.mjs \
//     --css src/app/style/dfwMarketing.css --root dfw --marker dm \
//     --base-css src/components/rd/dfw-marketing/dfwMarketing.base.css \
//     --map "<in.tsx>=<out.tsx>" [--map …] [--report reports/migrate-dfw.json]
//
// How it maps CSS onto elements:
//  - every rule's target is the last compound selector that contains a
//    `.<root>-…` class (the "anchor"); ancestors, extra classes/pseudos on the
//    target and descendants become a Tailwind arbitrary variant, e.g.
//    `.dfw .dfw-a .dfw-b:hover span` -> on dfw-b: `tw:[.dm-a_&:hover_span]:[…]`
//  - @media (max-width: N.98px) -> max-bs* breakpoints defined in tailwind.css;
//    prefers-reduced-motion -> motion-reduce
//  - class names are kept as unstyled markers (`dfw-x` -> `dm-x`) so variants
//    and runtime toggles (is-you, tone modifiers) keep working
//  - the cascade is resolved per element: a declaration that can never win
//    (overridden for every viewport by a later/stronger one) is dropped
import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default || _traverse;

const argv = process.argv.slice(2);
const one = (k, d) => { const i = argv.indexOf(k); return i > -1 ? argv[i + 1] : d; };
const many = (k) => argv.flatMap((a, i) => (a === k ? [argv[i + 1]] : []));
const CSS = one("--css");
const ROOT = one("--root", "dfw");
const MARK = one("--marker", "dm");
const BASE_OUT = one("--base-css");
const REPORT = one("--report");
const MAPS = many("--map").map((m) => m.split("="));
// Optional JSON config: { "boost": ["<anchor>|<variant>|<prop>", …] } raises the
// listed declarations by one class of specificity. Used where two rules from
// different sections hit the same element and the original source order (which
// Tailwind cannot reproduce) decided the winner; found with scripts/style-diff.mjs.
const CONFIG = one("--config") ? JSON.parse(fs.readFileSync(one("--config"), "utf8")) : {};
const BOOST = new Set(CONFIG.boost || []);
const P = "tw:";

const MEDIA = {
  "(max-width: 1399.98px)": { v: "max-bs2xl", w: 1400 },
  "(max-width: 1199.98px)": { v: "max-bsxl", w: 1200 },
  "(max-width: 991.98px)": { v: "max-bslg", w: 992 },
  "(max-width: 767.98px)": { v: "max-bsmd", w: 768 },
  "(max-width: 575.98px)": { v: "max-bssm", w: 576 },
  "(prefers-reduced-motion: reduce)": { v: "motion-reduce", w: null },
};
const rootRe = new RegExp(`^${ROOT}$`);
const anchorRe = new RegExp(`^${ROOT}-`);
// Marker classes drop BEM "__": Tailwind reads "_" inside arbitrary variants
// as a space, so `.dm-step__num` would become `.dm-step num`.
const mk = (cls) => cls.replace(new RegExp(`^${ROOT}-`), `${MARK}-`).replace(/__/g, "-");
const rename = (s) => s.replace(new RegExp(`\\.(${ROOT}-[a-zA-Z0-9_-]+)`, "g"), (_, c) => "." + mk(c)).replace(new RegExp(`\\.${ROOT}(?![\\w-])`, "g"), `.${MARK}-root`);
const renameKeyframes = (v) => v.replace(new RegExp(`\\b${ROOT}-([a-z0-9-]+)`, "g"), `${MARK}-$1`);

const problems = [];
const entries = []; // {anchor|null(root), variant, media[], prop, value, important, spec:[a,b,c], order}
const baseRules = []; // root-level rules with no anchor
const keyframes = [];
let order = 0;

const root = postcss.parse(fs.readFileSync(CSS, "utf8"));
root.walkAtRules("keyframes", (a) => { keyframes.push(a.clone({ params: renameKeyframes(a.params) })); });

const specOf = (sel) => {
  let a = 0, b = 0, c = 0;
  sel.walk((n) => {
    if (n.type === "id") a++;
    else if (n.type === "class" || n.type === "attribute") b++;
    else if (n.type === "pseudo") {
      if (n.value === ":not" || n.value === ":is" || n.value === ":has") { /* counted via inner nodes */ }
      else if (n.value === ":where") { /* zero, but inner nodes are walked too – subtract below */ }
      else if (n.value.startsWith("::") || [":before", ":after"].includes(n.value)) c++;
      else b++;
    } else if (n.type === "tag" && n.value !== "*") c++;
  });
  return [a, b, c];
};
const cmpSpec = (x, y) => x[0] - y[0] || x[1] - y[1] || x[2] - y[2];

root.walkRules((rule) => {
  let p = rule.parent; const media = [];
  let inKeyframes = false;
  while (p && p.type !== "root") {
    if (p.type === "atrule") {
      if (/keyframes/.test(p.name)) inKeyframes = true;
      else if (p.name === "media") { const m = MEDIA[p.params.trim()]; if (!m) problems.push(`unknown media ${p.params}`); else media.unshift(p.params.trim()); }
      else problems.push(`unsupported at-rule @${p.name} ${p.params}`);
    }
    p = p.parent;
  }
  if (inKeyframes) return;
  const decls = rule.nodes.filter((n) => n.type === "decl");
  for (const raw of rule.selectors) {
    order++;
    const ast = selectorParser().astSync(raw);
    const sel = ast.nodes[0];
    const spec = specOf(sel);
    // split into compounds
    const compounds = [[]]; const combs = [];
    for (const n of sel.nodes) { if (n.type === "combinator") { combs.push(n.value.trim() || " "); compounds.push([]); } else compounds[compounds.length - 1].push(n); }
    const first = compounds[0];
    if (!(first.length >= 1 && first[0].type === "class" && rootRe.test(first[0].value))) { problems.push(`selector does not start with .${ROOT}: ${raw}`); continue; }
    if (first.length > 1) { problems.push(`root compound has extra parts (kept as base rule): ${raw}`); baseRules.push({ raw, media, decls, order }); continue; }
    let t = -1;
    for (let i = compounds.length - 1; i >= 1; i--) if (compounds[i].some((n) => n.type === "class" && anchorRe.test(n.value))) { t = i; break; }
    if (compounds.length === 1) {
      decls.forEach((d, di) => entries.push({ anchor: null, variant: "", media, prop: d.prop, value: renameKeyframes(d.value), important: !!d.important, spec, order: order * 1000 + di }));
      continue;
    }
    if (t === -1) { baseRules.push({ raw, media, decls, order }); continue; }
    const comp = compounds[t];
    const anchorNode = comp.find((n) => n.type === "class" && anchorRe.test(n.value) && !n.value.includes("--")) || comp.find((n) => n.type === "class" && anchorRe.test(n.value));
    const anchor = anchorNode.value;
    const str = (nodes) => nodes.map((n) => n.toString()).join("");
    const suffix = comp.filter((n) => n !== anchorNode).map((n) => n.toString()).join("");
    const joinComb = (c) => (c === " " ? "_" : c);
    let v = "";
    for (let i = 1; i < t; i++) v += str(compounds[i]) + joinComb(combs[i]);
    v += "&" + suffix;
    for (let i = t + 1; i < compounds.length; i++) v += joinComb(combs[i - 1]) + str(compounds[i]);
    v = rename(v).replace(/\s+/g, "_");
    const variant = v === "&" ? "" : v;
    decls.forEach((d, di) => entries.push({ anchor, variant, media, prop: d.prop, value: renameKeyframes(d.value), important: !!d.important, spec, order: order * 1000 + di }));
  }
});

{ const seen = new Map(); for (const a of [...new Set(entries.map((e) => e.anchor).filter(Boolean))]) { const m = mk(a); if (seen.has(m) && seen.get(m) !== a) problems.push(`marker collision ${a} / ${seen.get(m)} -> ${m}`); seen.set(m, a); } }

// ---- cascade pruning -------------------------------------------------------
const mediaW = (m) => (m.length ? MEDIA[m[m.length - 1]].w : Infinity);
const covers = (b, a) => {
  if (!b.media.length) return true;
  if (b.media.length === 1 && a.media.length >= 1 && b.media[0] === a.media[0] && a.media.length >= b.media.length) return true;
  const bw = MEDIA[b.media[0]].w, aw = a.media.length ? MEDIA[a.media[a.media.length - 1]].w : null;
  return b.media.length === 1 && bw !== null && aw !== null && bw >= aw && !a.media.some((m) => MEDIA[m].w === null);
};
const wins = (b, a) => (b.important !== a.important ? b.important : (cmpSpec(b.spec, a.spec) || b.order - a.order) > 0);
// A shorthand (text-decoration, background, margin, …) and one of its
// longhands on the same element: CSS source order decided which wins, Tailwind
// sorts them its own way. Boost whichever came later so it still wins.
const NOT_LONGHAND = /^border-(radius|collapse|spacing|image)|^background-blend|^font-(feature|variant|kerning)/;
const fixShorthands = (list) => {
  const groups = new Map();
  for (const e of list) { const k = e.variant + "|" + e.media.join(","); (groups.get(k) || groups.set(k, []).get(k)).push(e); }
  for (const g of groups.values()) for (const sh of g) for (const lo of g) {
    if (lo === sh || !lo.prop.startsWith(sh.prop + "-") || NOT_LONGHAND.test(lo.prop)) continue;
    const later = wins(lo, sh) ? lo : sh;
    later.boost = true;
  }
  return list;
};
const prune = (list) => {
  const groups = new Map();
  for (const e of list) { const k = e.variant + "|" + e.prop; (groups.get(k) || groups.set(k, []).get(k)).push(e); }
  const keep = [];
  for (const g of groups.values()) for (const a of g) if (!g.some((b) => b !== a && covers(b, a) && wins(b, a))) keep.push(a);
  return fixShorthands(keep.map((e) => ({ ...e }))).sort((x, y) => mediaW(y.media) - mediaW(x.media) || x.order - y.order);
};

// ---- utility emission --------------------------------------------------------
const esc = (s) => {
  if (s.includes("_")) problems.push(`underscore in value: ${s}`);
  if (s.includes('"')) s = s.replace(/"/g, "'");
  if (s.includes("\\")) problems.push(`backslash in value: ${s}`);
  return s.trim().replace(/\s+/g, "_");
};
const boostVariant = (v) => (v ? v.replace("&", "&&") : "&&");
const utility = (e, qualify) => {
  let variant = e.variant;
  if (e.boost || BOOST.has(`${e.anchor}|${e.variant}|${e.prop}`)) variant = boostVariant(variant);
  if (qualify) variant = variant ? variant.replace("&", `&.${MARK}-${qualify}`) : `&.${MARK}-${qualify}`;
  const BP = { 576: "bssm", 768: "bsmd", 992: "bslg", 1200: "bsxl", 1400: "bs2xl" };
  const mv = (e.minW ? `min-${BP[e.minW]}:` : "") + e.media.map((m) => MEDIA[m].v + ":").join("");
  const vv = variant ? `[${variant}]:` : "";
  return `${P}${mv}${vv}[${e.prop}:${esc(e.value)}]${e.important ? "!" : ""}`;
};
const byAnchor = new Map();
for (const e of entries) { const k = e.anchor || "@root"; (byAnchor.get(k) || byAnchor.set(k, []).get(k)).push(e); }
const markerFor = (cls) => mk(cls);
const utilsFor = (tokens, qualified = [], context = []) => {
  const list = tokens.flatMap((t) => (byAnchor.get(t) || []));
  const out = prune(list).map((e) => utility(e, null));
  // `context`: classes the receiving component always adds to the same element
  // (e.g. Strip -> dfw-strip). Prop classes are qualified (they must beat the
  // component's own base), but any declaration the component's classes would
  // have beaten in the original cascade is dropped.
  const ctx = context.flatMap((t) => (byAnchor.get(t) || []));
  for (const q of qualified) {
    const own = prune(byAnchor.get(q) || []);
    for (const e of own) {
      const rivals = ctx.filter((c) => c.variant === e.variant && c.prop === e.prop && wins(c, e));
      if (rivals.some((c) => covers(c, e))) continue;
      // a rival that wins only below some width: limit this declaration to
      // the widths above it (min-*), which is exactly where it won before
      const below = rivals.filter((c) => c.media.length === 1 && MEDIA[c.media[0]].w !== null).map((c) => MEDIA[c.media[0]].w);
      const minW = below.length ? Math.max(...below) : null;
      out.push(utility(minW ? { ...e, minW } : e, mk(q).replace(new RegExp(`^${MARK}-`), "")));
    }
  }
  return out;
};
const usedAnchors = new Set();

// rewrite a class string (static tokens only); returns new string
const rewriteClassString = (s, { qualify = false, isRootEl = false, context = [] } = {}) => {
  const tokens = s.split(/(\s+)/);
  const anchors = []; const out = [];
  for (const tok of tokens) {
    if (/^\s+$/.test(tok) || !tok) { out.push(tok); continue; }
    if (tok === ROOT) { out.push(`${MARK}-root`); anchors.push("@root"); continue; }
    if (anchorRe.test(tok)) { out.push(markerFor(tok)); anchors.push(tok); usedAnchors.add(tok); continue; }
    out.push(tok);
  }
  if (!anchors.length) return s;
  const utils = qualify ? utilsFor([], anchors, context) : utilsFor(anchors);
  const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
  const core = out.join("").trim();
  return `${lead}${core}${utils.length ? " " + utils.join(" ") : ""}${trail}`;
};

// ---- TSX rewriting -----------------------------------------------------------------
const report = { files: [], dynamicPrefixes: [], problems };
const componentCtx = new Map(); // Component name -> classes it adds next to ${className}
for (const [inFile] of MAPS) {
  const a = parse(fs.readFileSync(inFile, "utf8"), { sourceType: "module", plugins: ["typescript", "jsx"] });
  traverse(a, {
    JSXAttribute(p) {
      if (p.node.name.name !== "className" || p.node.value?.type !== "JSXExpressionContainer") return;
      const t = p.node.value.expression;
      if (t.type !== "TemplateLiteral" || !t.expressions.some((x) => x.type === "Identifier" && x.name === "className")) return;
      const fn = p.findParent((q) => q.isFunctionDeclaration() || q.isVariableDeclarator());
      const name = fn?.node.id?.name;
      if (!name) return;
      const toks = t.quasis.map((q) => q.value.raw).join(" ").split(/\s+/).filter((x) => anchorRe.test(x));
      componentCtx.set(name, toks);
    },
  });
}
report.components = Object.fromEntries(componentCtx);
for (const [inFile, outFile] of MAPS) {
  const src = fs.readFileSync(inFile, "utf8");
  const ast = parse(src, { sourceType: "module", plugins: ["typescript", "jsx"] });
  const edits = [];
  traverse(ast, {
    JSXAttribute(p) {
      if (p.node.name.name !== "className") return;
      const v = p.node.value;
      const el = p.parentPath.node.name; // JSXOpeningElement name
      const isComponent = el && el.type === "JSXIdentifier" && /^[A-Z]/.test(el.name);
      if (!v) return;
      if (v.type === "StringLiteral") {
        const ns = rewriteClassString(v.value, { qualify: isComponent, context: isComponent ? componentCtx.get(el.name) || [] : [] });
        if (ns !== v.value) edits.push([v.start + 1, v.end - 1, ns]);
        return;
      }
      if (v.type !== "JSXExpressionContainer") return;
      const exprPath = p.get("value.expression");
      const visitor = {
        StringLiteral(sp) { const ns = rewriteClassString(sp.node.value, { qualify: true }); if (ns !== sp.node.value) edits.push([sp.node.start + 1, sp.node.end - 1, ns]); },
        TemplateLiteral(tp) {
          const qs = tp.node.quasis;
          qs.forEach((q, i) => {
            let raw = q.value.raw;
            // dynamic prefix like `dfw-tone--${x}` : last token ends with "--" or "-" and an expression follows
            let dynAnchors = [];
            if (i < qs.length - 1) {
              const m = raw.match(new RegExp(`(${ROOT}-[a-z0-9_-]*?-)$`));
              if (m) {
                const prefix = m[1];
                dynAnchors = [...byAnchor.keys()].filter((k) => k !== "@root" && k.startsWith(prefix));
                report.dynamicPrefixes.push({ file: inFile, prefix, anchors: dynAnchors });
                raw = raw.slice(0, -prefix.length);
                const lead = rewriteClassString(raw, { qualify: false });
                const extra = utilsFor([], dynAnchors);
                edits.push([q.start, q.end, `${lead}${extra.length ? extra.join(" ") + " " : ""}${markerFor(prefix)}`]);
                dynAnchors.forEach((a) => usedAnchors.add(a));
                return;
              }
            }
            let ns = rewriteClassString(raw, { qualify: false });
            // keep a space between appended utilities and a following ${…}
            if (ns !== raw && i < qs.length - 1 && !/\s$/.test(ns)) ns += " ";
            if (ns !== raw) edits.push([q.start, q.end, ns]);
          });
        },
      };
      // visit the expression itself as well as its children
      if (visitor[exprPath.node.type]) visitor[exprPath.node.type](exprPath);
      exprPath.traverse(visitor);
    },
  });
  edits.sort((a, b) => b[0] - a[0]);
  let out = src;
  for (const [s, e, t] of edits) out = out.slice(0, s) + t + out.slice(e);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, out);
  report.files.push({ inFile, outFile, edits: edits.length });
}

// ---- base css (keyframes + root-level rules) ----------------------------------------
if (BASE_OUT) {
  const lines = [`/* Generated by scripts/css-to-tailwind.mjs from ${CSS}.\n   Keyframes and root-level element rules only — every class-based rule now\n   lives as Tailwind utilities on the elements. :where() keeps these at\n   element specificity so utilities always win, as the original cascade did. */`];
  for (const k of keyframes) lines.push(k.toString());
  for (const r of baseRules) {
    // Tag/universal-only rules drop to element specificity via :where() so the
    // element utilities beat them (as the original .root-x rules did); rules
    // aimed at other classes/attributes/states keep the root class's weight.
    const rest = r.raw.replace(new RegExp(`^\\.${ROOT}\\s*`), "");
    const tagOnly = !/[.\[:#]/.test(rest.replace(/::?(before|after)\b/g, ""));
    const sel = rename(r.raw).replace(new RegExp(`\\.${MARK}-root`), tagOnly ? `:where(.${MARK}-root)` : `.${MARK}-root`);
    let block = `${sel} {\n${r.decls.map((d) => `  ${d.prop}: ${renameKeyframes(d.value)}${d.important ? " !important" : ""};`).join("\n")}\n}`;
    for (const m of [...r.media].reverse()) block = `@media ${m} {\n${block}\n}`;
    lines.push(block);
  }
  fs.mkdirSync(path.dirname(BASE_OUT), { recursive: true });
  fs.writeFileSync(BASE_OUT, lines.join("\n\n") + "\n");
}

const unused = [...byAnchor.keys()].filter((k) => k !== "@root" && !usedAnchors.has(k));
report.unusedAnchors = unused;
report.counts = { entries: entries.length, baseRules: baseRules.length, keyframes: keyframes.length, anchors: byAnchor.size };
if (REPORT) { fs.mkdirSync(path.dirname(REPORT), { recursive: true }); fs.writeFileSync(REPORT, JSON.stringify(report, null, 1)); }
console.log(JSON.stringify({ ...report.counts, files: report.files, problems: problems.length, unusedAnchors: unused.length }, null, 1));
if (problems.length) console.log("PROBLEMS:\n  " + [...new Set(problems)].slice(0, 30).join("\n  "));
if (unused.length) console.log("Anchors in CSS not found in the rewritten files (used by the other DFW page or dead):\n  " + unused.slice(0, 60).join(" "));
