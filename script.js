function createProjectCard(project) {
  const href = project.page || `project.html?project=${project.slug}`;
  const imageFit = project.cardImageFit || "cover";
  const mediaClass = project.cardLogo ? "project-card-media project-card-media-logo" : "project-card-media";
  const githubIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.12 3.29 9.47 7.86 11 .58.11.79-.26.79-.57v-2.02c-3.2.71-3.87-1.38-3.87-1.38-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.04 1.79 2.72 1.27 3.39.97.1-.76.4-1.27.73-1.57-2.55-.29-5.23-1.29-5.23-5.73 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.45-2.69 5.43-5.25 5.72.41.36.78 1.07.78 2.15v3.19c0 .31.21.69.8.57 4.56-1.53 7.84-5.88 7.84-11C23.5 5.7 18.35.5 12 .5Z" fill="currentColor"/>
    </svg>`;
  const mediaStyle = project.cardImage
    ? `background-image: linear-gradient(rgba(11, 15, 12, 0.28), rgba(11, 15, 12, 0.72)), url('${project.cardImage}'); --card-image-fit: ${imageFit};`
    : `background-image: ${project.accent};`;
  const countMarkup = Number.isFinite(project.solvedCount)
    ? `<p class="project-card-count"><span class="project-card-status-dot" aria-hidden="true"></span>${project.solvedCount} ${project.countLabel || "items"}</p>`
    : "";
  const liveMarkup = project.liveDemo
    ? `<a class="project-card-action project-card-action-primary" href="${project.liveDemo}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Request Our Service</a>`
    : "";
  const repoLinks = Array.isArray(project.repoLinks)
    ? project.repoLinks
    : project.repoUrl
      ? [{ label: `${project.name} GitHub repository`, url: project.repoUrl }]
      : [];
  const repoMarkup = repoLinks
    .map(
      (repo) =>
        `<a class="project-icon-link" href="${repo.url}" target="_blank" rel="noreferrer" aria-label="${repo.label}" title="${repo.label}" onclick="event.stopPropagation()">${githubIcon}</a>`
    )
    .join("");
  const cardLogoMarkup = project.cardLogo
    ? `<img class="project-card-logo" src="${project.cardLogo}" alt="${project.name} logo" />`
    : "";

  return `
    <article class="project-card" role="link" tabindex="0" onclick="window.location.href='${href}'" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.location.href='${href}'}">
      <div class="${mediaClass}" style="${mediaStyle}">
        <span>[${project.tag}]</span>
        ${cardLogoMarkup}
      </div>
      <div class="project-card-body">
        <div class="project-card-meta">
          <p>${project.category}</p>
          <p>${project.year}</p>
        </div>
        <h3>${project.name}</h3>
        ${countMarkup}
        <p>${project.cardSummary}</p>
        <div class="project-card-actions">
          <span class="project-card-action project-card-action-muted">Case Study</span>
          ${liveMarkup}
          ${repoMarkup}
        </div>
      </div>
    </article>
  `;
}

function renderProjectGrid() {
  const grid = document.getElementById("project-grid");

  if (!grid || !Array.isArray(projects)) {
    return;
  }

  grid.innerHTML = projects.map(createProjectCard).join("");
}

function renderProjectDetail() {
  const container = document.getElementById("project-detail");

  if (!container || !Array.isArray(projects)) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const heroLogoMarkup = project.heroLogo
    ? `<img class="detail-hero-logo" src="${project.heroLogo}" alt="${project.name} logo" />`
    : "";
  const githubIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.12 3.29 9.47 7.86 11 .58.11.79-.26.79-.57v-2.02c-3.2.71-3.87-1.38-3.87-1.38-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.04 1.79 2.72 1.27 3.39.97.1-.76.4-1.27.73-1.57-2.55-.29-5.23-1.29-5.23-5.73 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.45-2.69 5.43-5.25 5.72.41.36.78 1.07.78 2.15v3.19c0 .31.21.69.8.57 4.56-1.53 7.84-5.88 7.84-11C23.5 5.7 18.35.5 12 .5Z" fill="currentColor"/>
    </svg>`;
  const repoLinks = Array.isArray(project.repoLinks)
    ? project.repoLinks
    : project.repoUrl
      ? [{ label: `${project.name} GitHub repository`, url: project.repoUrl }]
      : [];
  const repoMarkup = repoLinks.length
    ? `<div class="project-repo-links">${repoLinks
        .map(
          (repo) =>
            `<a class="project-icon-link" href="${repo.url}" target="_blank" rel="noreferrer" aria-label="${repo.label}" title="${repo.label}">${githubIcon}</a>`
        )
        .join("")}</div>`
    : "";

  document.title = `${project.name} | Portfolio`;

  container.innerHTML = `
    <section class="detail-hero" style="--project-accent: ${project.accent}; background-image: linear-gradient(180deg, rgba(8, 15, 26, 0.3), rgba(8, 15, 26, 0.82)), url('${project.image}');">
      <a class="back-link" href="index.html#projects">Back to projects</a>
      ${heroLogoMarkup}
      <div class="detail-hero-inner">
        <p class="eyebrow">$ open ${project.slug}</p>
        <h1>${project.name}</h1>
        <p class="detail-lead">${project.overview}</p>
      </div>
    </section>

    <section class="detail-content">
      <div class="detail-grid">
        <article class="detail-panel detail-panel-wide">
          <p class="panel-label">overview.md</p>
          <h2>${project.detailHeadline || "A focused case-study layout for technical storytelling."}</h2>
          <p>${project.detailBody || "This section is designed for the product problem, your engineering approach, major technical decisions, and the final impact."}</p>
        </article>

        <aside class="detail-panel">
          <p class="panel-label">role.txt</p>
          <h3>${project.role}</h3>
          ${project.liveDemo ? `<p><a class="detail-link detail-link-primary" href="${project.liveDemo}" target="_blank" rel="noreferrer">Request our service</a></p>` : ""}
          ${repoMarkup}
        </aside>

        <aside class="detail-panel">
          <p class="panel-label">stack.json</p>
          <ul class="chip-list">
            ${project.stack.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </aside>

        <article class="detail-panel detail-panel-wide">
          <p class="panel-label">outcomes.log</p>
          <ul class="outcome-list">
            ${project.outcomes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

renderProjectGrid();
renderProjectDetail();
