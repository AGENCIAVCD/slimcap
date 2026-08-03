import { execFileSync } from "node:child_process";
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const apiUrl = "https://slimcap.com.br/wp-json/wp/v2/posts?per_page=100&_embed=1";
const projectRoot = process.cwd();
const contentDir = path.join(projectRoot, "content");
const coversDir = path.join(projectRoot, "public", "blog", "capas");

const decodeEntities = (value = "") => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
  .replace(/&nbsp;/g, " ")
  .replace(/&hellip;/g, "…")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#039;|&apos;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");

const plainText = (html = "") => decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());

const cleanContent = (html = "") => html
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<(script|style|iframe|form)[^>]*>[\s\S]*?<\/\1>/gi, "")
  .replace(/\s(?:class|id|style|srcset|sizes|loading|decoding|data-[\w-]+)=("[^"]*"|'[^']*')/gi, "")
  .replace(/<p>\s*<\/p>/gi, "")
  .trim();

async function downloadCover(sourceUrl, slug) {
  if (!sourceUrl) return "/images/cris-avaliacao-capilar.png";

  const sourceResponse = await fetch(sourceUrl);
  if (!sourceResponse.ok) throw new Error(`Falha ao baixar capa: ${sourceUrl}`);

  const temporaryPath = path.join(coversDir, `${slug}.source`);
  const finalPath = path.join(coversDir, `${slug}.webp`);
  await writeFile(temporaryPath, Buffer.from(await sourceResponse.arrayBuffer()));

  execFileSync("sips", ["-Z", "1400", temporaryPath], { stdio: "ignore" });
  execFileSync("cwebp", ["-quiet", "-q", "76", temporaryPath, "-o", finalPath], { stdio: "ignore" });
  await unlink(temporaryPath);

  return `/blog/capas/${slug}.webp`;
}

await mkdir(contentDir, { recursive: true });
await mkdir(coversDir, { recursive: true });

let sourcePosts;
try {
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error(`WordPress respondeu ${response.status}`);
  sourcePosts = await response.json();
} catch {
  sourcePosts = JSON.parse(await readFile("/tmp/slimcap-posts.json", "utf8"));
}

const posts = [];
for (const post of sourcePosts) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = (post._embedded?.["wp:term"] ?? []).flat();
  const category = terms.find((term) => term.taxonomy === "category")?.name ?? "Saúde capilar";
  const cover = await downloadCover(media?.source_url, post.slug);

  posts.push({
    slug: post.slug,
    title: plainText(post.title?.rendered),
    excerpt: plainText(post.excerpt?.rendered).replace(/\s*\[…\]$|\s*\[&hellip;\]$/i, ""),
    content: cleanContent(post.content?.rendered),
    date: post.date,
    modified: post.modified,
    category: decodeEntities(category),
    cover,
    coverAlt: plainText(media?.alt_text) || plainText(post.title?.rendered),
    legacyUrl: post.link,
  });
}

await writeFile(path.join(contentDir, "blog-posts.json"), `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Blog sincronizado: ${posts.length} artigos e ${posts.filter((post) => post.cover.startsWith("/blog/" )).length} capas locais.`);
