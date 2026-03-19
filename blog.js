function formatBlogDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeBlogPosts(posts, sourceLabel) {
  if (!Array.isArray(posts)) {
    return [];
  }

  return posts
    .filter((post) => post && post.title && post.href)
    .map((post) => ({
      title: post.title,
      description: post.description || "",
      href: post.href,
      image: post.image || "",
      date: post.date || "",
      source: post.source || sourceLabel,
      external: Boolean(post.external)
    }));
}

function createBlogCard(post) {
  const imageMarkup = post.image
    ? `<div class="blog-card-media"><img class="blog-card-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" /></div>`
    : '<div class="blog-card-media blog-card-media-fallback"></div>';
  const target = post.external ? ' target="_blank" rel="noreferrer"' : "";
  const actionLabel = post.external ? "Read on Medium" : "Open article";

  return `
    <a class="blog-card" href="${escapeHtml(post.href)}"${target}>
      ${imageMarkup}
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span class="blog-source-tag">${escapeHtml(post.source)}</span>
          <p>${formatBlogDate(post.date)}</p>
        </div>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.description)}</p>
        <span class="blog-card-action">${escapeHtml(actionLabel)}</span>
      </div>
    </a>
  `;
}

function renderBlogGrid() {
  const grid = document.getElementById("blog-grid");
  const localEntries = normalizeBlogPosts(window.localPosts, "Local");
  const mediumEntries = normalizeBlogPosts(window.mediumPosts, "Medium");
  const entries = [...localEntries, ...mediumEntries].sort((left, right) => {
    return new Date(right.date).getTime() - new Date(left.date).getTime();
  });

  if (!grid) {
    return;
  }

  if (!entries.length) {
    grid.innerHTML = `
      <article class="blog-empty-state">
        <p class="eyebrow">$ waiting_for_posts</p>
        <h2>No blog posts yet.</h2>
        <p>Add a local HTML article or wait for the Medium sync to publish entries here.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = entries.map(createBlogCard).join("");
}

renderBlogGrid();
