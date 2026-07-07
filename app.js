// Shared helpers used by both index.html and post.html.
// You shouldn't need to touch this file — see posts.js to write.

const SITE_TITLE = "TBD";
const SITE_TAGLINE = "TBD.";

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Very small markdown-ish parser: paragraphs, "> " quotes,
// "## " subheadings, *italic*, **bold**.
function renderContent(raw) {
  const inline = (line) =>
    line
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const blocks = raw.trim().split(/\n\s*\n/);

  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2>${inline(trimmed.slice(3))}</h2>`;
      }
      if (trimmed.startsWith("> ")) {
        const lines = trimmed
          .split("\n")
          .map((l) => inline(l.replace(/^>\s?/, "")))
          .join("<br>");
        return `<blockquote>${lines}</blockquote>`;
      }
      return `<p>${inline(trimmed.replace(/\n/g, "<br>"))}</p>`;
    })
    .join("\n");
}

function excerpt(raw, maxLen = 160) {
  const firstBlock = raw.trim().split(/\n\s*\n/)[0].replace(/^[>#]+\s?/, "");
  const plain = firstBlock.replace(/\*\*?(.+?)\*\*?/g, "$1").replace(/\n/g, " ");
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
