// Regenerates src/app/style/bootstrap.trimmed.css.
//
// Usage: build the site, start it (`npm run build && npm run start`), then in another shell:
//   node scripts/build-bootstrap-trimmed.mjs http://localhost:3000
//
// It fetches every public page from the running server plus every public source file,
// runs PurgeCSS over bootstrap.min.css and keeps only selectors that can be used
// (plus runtime state classes and react-bootstrap Accordion / validation internals).
// Run it whenever a new page starts using a Bootstrap class that isn't in the file yet.
// The admin area is not covered on purpose: src/app/(admin)/layout.tsx loads the full bootstrap.min.css.
import fs from 'node:fs'; import path from 'node:path'; import { execSync } from 'node:child_process';
import { PurgeCSS } from 'purgecss';
const ROOT=process.cwd(); const base=process.argv[2]||'http://localhost:3000';
const sm=await (await fetch(base+'/sitemap.xml')).text();
const paths=[...sm.matchAll(/<loc>https:\/\/www\.zonicllc\.com([^<]*)<\/loc>/g)].map(m=>m[1]||'/');
const extras=['/thank-you','/coming-soon','/this-page-does-not-exist-404','/services/cannabis-marketing-agency','/services/industry/local-seo-for-cannabis-dispensaries'];
const htmls=[]; let i=0; const all=[...new Set([...paths,...extras])];
async function w(){while(i<all.length){const p=all[i++];try{const r=await fetch(base+p,{headers:{'user-agent':'Mozilla/5.0'}});htmls.push({raw:await r.text(),extension:'html'});}catch(e){console.error('fetch fail',p)}}}
await Promise.all(Array.from({length:8},w));
console.log('pages fetched',htmls.length);
// public source files (everything except the admin group and API routes)
const srcFiles=execSync(`cd ${ROOT} && grep -rIl '' src --include='*.tsx' --include='*.ts' --include='*.jsx' --include='*.json' | grep -v '^src/app/(admin)' | grep -v '^src/app/api/'`).toString().trim().split('\n');
const srcContent=srcFiles.map(f=>({raw:fs.readFileSync(path.join(ROOT,f),'utf8'),extension:'tsx'}));
console.log('source files',srcContent.length);
const css=fs.readFileSync(path.join(ROOT,'node_modules/bootstrap/dist/css/bootstrap.min.css'),'utf8');
const extractor=(content)=>content.match(/[A-Za-z0-9_:\/.-]+/g)||[];
const safelist={
  // Only state classes that scripts toggle at runtime (never present in server HTML) plus
  // react-bootstrap Accordion / form-validation internals. Everything else must appear in a
  // rendered page or a public source file to survive.
  standard:['show','showing','hide','hiding','fade','collapse','collapsing','collapsed','active','disabled','was-validated','visually-hidden','visually-hidden-focusable'],
  deep:[/^accordion/,/^is-(valid|invalid)$/,/^(valid|invalid)-(feedback|tooltip)$/,/^form-(control|select|check|check-input|check-label|label|text|floating)$/,/^btn(-close)?$/],
};
const [res]=await new PurgeCSS().purge({content:[...htmls,...srcContent],css:[{raw:css}],safelist,variables:false,defaultExtractor:extractor,rejected:true});
const out=`/* Bootstrap ${JSON.parse(fs.readFileSync(path.join(ROOT,'node_modules/bootstrap/package.json'))).version} trimmed to the selectors used by the public site.\n   Generated ${new Date().toISOString().slice(0,10)} by scripts/build-bootstrap-trimmed.mjs from bootstrap.min.css:\n   content = rendered HTML of every public page + every public source file, plus a generous safelist\n   (grid, spacing, display/flex, text, border, form, button, accordion, table, spinner, input-group).\n   The admin area still loads the full bootstrap.min.css (see src/app/(admin)/layout.tsx).\n   If a new page uses a Bootstrap class that is missing here, re-run: node scripts/build-bootstrap-trimmed.mjs */\n`+res.css;
fs.writeFileSync(path.join(ROOT,'src/app/style/bootstrap.trimmed.css'),out);
const rejected=res.rejected||[];
console.log(`bootstrap.min.css ${(css.length/1024).toFixed(0)} KB → trimmed ${(out.length/1024).toFixed(0)} KB; selectors removed ${rejected.length}`);
console.log('sample removed selectors:',rejected.slice(0,40).join(' '));
console.log('components dropped (by prefix):',Object.entries(rejected.reduce((a,s)=>{const k=(s.match(/\.([a-z]+)/)||[])[1]||'(el)';a[k]=(a[k]||0)+1;return a},{})).sort((x,y)=>y[1]-x[1]).slice(0,30).map(([k,n])=>k+':'+n).join(' '));
