// IndexNow ping (set up 24 Nov 2026). Tells Bing — and through the shared
// IndexNow network Yandex, Seznam, Naver and others — that URLs changed, so
// they recrawl within days instead of weeks. Bing feeds Copilot and much of
// ChatGPT search; before this, Bing's copies of the GBP pages were 4–5 weeks
// old.
//
// Run AFTER a deploy is live (Bing fetches the key file from the site):
//   node scripts/indexnow.mjs /services/gbp-reinstatement-service /blog/some-post
//   node scripts/indexnow.mjs https://www.zonicllc.com/about
//   node scripts/indexnow.mjs --sitemap        (every URL in the live sitemap)
//
// The key file lives at public/<KEY>.txt and must stay deployed.

const HOST = "www.zonicllc.com";
const KEY = "33d47d64d6b2bb1b8a19e33c856473ff";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const toUrl = (arg) =>
  arg.startsWith("http") ? arg : `https://${HOST}${arg.startsWith("/") ? "" : "/"}${arg}`;

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripts/indexnow.mjs <path-or-url ...> | --sitemap");
  process.exit(1);
}

const urls = args.includes("--sitemap") ? await sitemapUrls() : args.map(toUrl);
const foreign = urls.filter((u) => new URL(u).host !== HOST);
if (foreign.length) {
  console.error(`Not on ${HOST}:`, foreign);
  process.exit(1);
}

const keyCheck = await fetch(KEY_LOCATION);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`Key file not live at ${KEY_LOCATION} — deploy first.`);
  process.exit(1);
}

// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
  });
  // 200 = accepted, 202 = accepted (key validation pending).
  console.log(`IndexNow ${res.status} ${res.statusText} — ${batch.length} URL(s)`);
  if (!res.ok) {
    console.error(await res.text());
    process.exit(1);
  }
}
for (const u of urls.slice(0, 20)) console.log("  ", u);
if (urls.length > 20) console.log(`   …and ${urls.length - 20} more`);
