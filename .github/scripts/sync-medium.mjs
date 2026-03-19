import { writeFile } from "node:fs/promises";

const FEED_URL = "https://medium.com/feed/@mohamedabdulghany";
const OUTPUT_PATH = new URL("../../generated_medium_posts.js", import.meta.url);

function decodeHtmlEntities(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function readTag(block, tagName) {
  const match = block.match(new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, "i"));
  return match ? decodeHtmlEntities(match[1]) : "";
}

function stripHtml(value) {
  return decodeHtmlEntities(value)
    .replace(/<img[^>]*>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(value, maxLength = 170) {
  const plain = stripHtml(value);

  if (plain.length <= maxLength) {
    return plain;
  }

  return `${plain.slice(0, maxLength).trimEnd()}...`;
}

function getFirstImage(value) {
  const match = value.match(/<img[^>]+src="([^"]+)"/i);
  return match ? decodeHtmlEntities(match[1]) : "";
}

function parseFeed(xml) {
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];

  return itemMatches.map((item) => {
    const content = readTag(item, "content:encoded");

    return {
      title: readTag(item, "title"),
      description: createExcerpt(content),
      href: readTag(item, "link"),
      image: getFirstImage(content),
      date: new Date(readTag(item, "pubDate")).toISOString(),
      source: "Medium",
      external: true
    };
  });
}

async function run() {
  const response = await fetch(FEED_URL, {
    headers: {
      "user-agent": "portfolio-medium-sync"
    }
  });

  if (!response.ok) {
    throw new Error(`Medium feed request failed with ${response.status}`);
  }

  const xml = await response.text();
  const posts = parseFeed(xml);
  const fileContents = `const mediumPosts = ${JSON.stringify(posts, null, 2)};\n\nwindow.mediumPosts = mediumPosts;\n`;

  await writeFile(OUTPUT_PATH, fileContents, "utf8");
  console.log(`Synced ${posts.length} Medium post(s).`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
