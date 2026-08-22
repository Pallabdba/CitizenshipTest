/**
 * Static pre-rendering for the SEO-critical routes.
 *
 * This app is a client-rendered SPA served from GitHub Pages. Search engines
 * can execute JavaScript, but they do it slowly and inconsistently, and the AI
 * answer engines (GPTBot, PerplexityBot, ClaudeBot, Applebot) largely do not
 * execute it at all. So after `vite build` we emit a real static HTML file for
 * every indexable route, containing the actual page content.
 *
 * React mounts into #root and replaces the pre-rendered markup on hydrate, so
 * what a crawler reads and what a human sees are the same content.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { guides } from "../client/src/content/guides";
import { parts } from "../client/src/content/parts";
import { officialQuestions } from "../server/official-questions";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = process.env.PRERENDER_OUT ?? join(ROOT, "dist", "public");
const SITE = "https://auscitizentest.com";
const TODAY = new Date().toISOString().slice(0, 10);

// ── helpers ──────────────────────────────────────────────────────────────────

const esc = (s: string) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const p = (t: string) => `<p>${esc(t)}</p>`;
const ul = (items: string[]) =>
  `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const ol = (items: string[]) =>
  `<ol>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`;

interface Page {
  path: string;
  title: string;
  description: string;
  body: string;
  jsonLd?: unknown;
  priority: string;
}

// ── question data (mirrors client/src/lib/clientStorage.ts) ──────────────────

const QUESTIONS = officialQuestions.map((q, i) => ({ ...q, id: i + 1 }));

function shuffle(arr: number[], seed: number): number[] {
  const out = [...arr];
  let r = seed;
  for (let i = out.length - 1; i > 0; i--) {
    r = (r * 9301 + 49297) % 233280;
    const j = Math.floor((r / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const byCat = (c: number) => QUESTIONS.filter((q) => q.categoryId === c).map((q) => q.id);

function testSets() {
  const [p1, p2, p3, p4] = [byCat(1), byCat(2), byCat(3), byCat(4)];
  const mixed = (s: number) =>
    shuffle(
      [
        ...shuffle(p1, s).slice(0, 8),
        ...shuffle(p2, s + 1).slice(0, 4),
        ...shuffle(p3, s + 2).slice(0, 4),
        ...shuffle(p4, s + 3).slice(0, 4),
      ],
      s + 4,
    ).slice(0, 20);
  return [
    { id: 1, name: "Part 1 Focus Test", description: "20 questions focused on Australia and its people", ids: shuffle(p1, 6).slice(0, 20) },
    { id: 2, name: "Part 2 Focus Test", description: "20 questions focused on democratic beliefs and rights", ids: shuffle(p2, 7).slice(0, 20) },
    { id: 3, name: "Part 3 Focus Test", description: "20 questions focused on government and the law", ids: shuffle(p3, 8).slice(0, 20) },
    { id: 4, name: "Part 4 Focus Test", description: "20 questions focused on Australian values", ids: shuffle(p4, 9).slice(0, 20) },
    { id: 5, name: "Practice Test Set 1", description: "Mixed questions from all 4 parts", ids: mixed(1) },
    { id: 6, name: "Practice Test Set 2", description: "Mixed questions from all 4 parts", ids: mixed(2) },
    { id: 7, name: "Practice Test Set 3", description: "Mixed questions from all 4 parts", ids: mixed(3) },
    { id: 8, name: "Practice Test Set 4", description: "Mixed questions from all 4 parts", ids: mixed(4) },
    { id: 9, name: "Practice Test Set 5", description: "Mixed questions from all 4 parts", ids: mixed(5) },
    {
      id: 10,
      name: "Official Practice Test",
      description: "Simulates the real test with 5 values questions and 15 other questions",
      ids: shuffle(
        [
          ...QUESTIONS.filter((q) => q.isValuesQuestion).map((q) => q.id).slice(0, 5),
          ...QUESTIONS.filter((q) => !q.isValuesQuestion).map((q) => q.id).slice(0, 15),
        ],
        10,
      ),
    },
  ];
}

const qById = new Map(QUESTIONS.map((q) => [q.id, q]));

function questionHtml(q: (typeof QUESTIONS)[number], n: number) {
  const opts = [
    ["A", q.optionA],
    ["B", q.optionB],
    ["C", q.optionC],
    ["D", q.optionD],
  ].filter(([, t]) => !!t) as [string, string][];
  return [
    `<li>`,
    `<h3>${n}. ${esc(q.question)}</h3>`,
    ul(opts.map(([l, t]) => `${l}. ${t}`)),
    `<p><strong>Answer: ${esc(q.correctAnswer)}.</strong> ${esc(q.explanation ?? "")}</p>`,
    `</li>`,
  ].join("");
}

function questionFaqLd(qs: (typeof QUESTIONS)[number][]) {
  return {
    "@type": "FAQPage",
    mainEntity: qs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${q.correctAnswer}. ${q.explanation ?? ""}`.trim(),
      },
    })),
  };
}

const ORG = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Australian Citizenship Test",
  url: `${SITE}/`,
};

function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": [ORG, ...nodes] };
}

function crumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

// ── page definitions ─────────────────────────────────────────────────────────

const pages: Page[] = [];

// Guides index
pages.push({
  path: "/guides",
  title: "Australian Citizenship Test Guides — Free Study Advice",
  description:
    "Free guides to the Australian citizenship test: how to pass first try, the Australian values questions, what happens if you fail, the appointment, exemptions, and the timeline to citizenship.",
  priority: "0.8",
  body: [
    `<h1>Australian Citizenship Test Guides</h1>`,
    p(
      "Straight answers to the questions people actually have before sitting the citizenship test — how it is scored, what happens at the appointment, and what to do if it goes wrong. All free, no account needed.",
    ),
    `<ul>${guides
      .map(
        (g) =>
          `<li><a href="/guides/${g.slug}"><strong>${esc(g.title)}</strong></a> — ${esc(g.metaDescription)}</li>`,
      )
      .join("")}</ul>`,
    `<p><a href="/practice-tests">Start a free practice test</a></p>`,
  ].join(""),
  jsonLd: graph(
    {
      "@type": "CollectionPage",
      name: "Australian Citizenship Test Guides",
      url: `${SITE}/guides`,
      hasPart: guides.map((g) => ({
        "@type": "Article",
        headline: g.title,
        url: `${SITE}/guides/${g.slug}`,
      })),
    },
    crumbs([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
    ]),
  ),
});

// Individual guides
for (const g of guides) {
  const body = [
    `<h1>${esc(g.title)}</h1>`,
    ...g.intro.map(p),
    ...g.sections.map((s) =>
      [
        `<h2>${esc(s.h2)}</h2>`,
        ...(s.paras ?? []).map(p),
        s.list ? ul(s.list) : "",
        s.olist ? ol(s.olist) : "",
      ].join(""),
    ),
    `<h2>Frequently asked questions</h2>`,
    g.faqs.map((f) => `<h3>${esc(f.q)}</h3>${p(f.a)}`).join(""),
    `<p><a href="/practice-tests">Take a free practice test</a></p>`,
    `<h2>Related guides</h2><ul>${g.related
      .map((slug) => guides.find((x) => x.slug === slug))
      .filter(Boolean)
      .map((r) => `<li><a href="/guides/${r!.slug}">${esc(r!.title)}</a></li>`)
      .join("")}</ul>`,
  ].join("");

  pages.push({
    path: `/guides/${g.slug}`,
    title: `${g.metaTitle} | Australian Citizenship Test`,
    description: g.metaDescription,
    priority: "0.8",
    body,
    jsonLd: graph(
      {
        "@type": "Article",
        headline: g.title,
        description: g.metaDescription,
        mainEntityOfPage: `${SITE}/guides/${g.slug}`,
        url: `${SITE}/guides/${g.slug}`,
        inLanguage: "en-AU",
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: g.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      crumbs([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: g.short, path: `/guides/${g.slug}` },
      ]),
    ),
  });
}

// Practice tests index
const sets = testSets();
pages.push({
  path: "/practice-tests",
  title: "10 Free Australian Citizenship Practice Tests (2026) | Australian Citizenship Test",
  description:
    "Ten free Australian citizenship practice tests, 20 questions each, drawn from the testable section of Our Common Bond. Start instantly — no sign-up required.",
  priority: "0.9",
  body: [
    `<h1>Free Australian Citizenship Practice Tests</h1>`,
    p(
      "Ten full practice tests of 20 questions each, built from the testable section of the official study guide. Start one straight away — no account needed.",
    ),
    ul([
      "20 multiple-choice questions, the same as the real test",
      "15 correct to pass — a 75% pass mark",
      "45 minutes, and all 5 Australian values questions must be correct",
    ]),
    `<ul>${sets
      .map(
        (s) =>
          `<li><a href="/practice-test/${s.id}"><strong>${esc(s.name)}</strong></a> — ${esc(s.description)}</li>`,
      )
      .join("")}</ul>`,
    `<h2>Practise by topic instead</h2><ul>${parts
      .map((pt) => `<li><a href="/questions/${pt.slug}">${esc(pt.short)}</a></li>`)
      .join("")}</ul>`,
  ].join(""),
  jsonLd: graph(
    {
      "@type": "ItemList",
      name: "Australian citizenship practice tests",
      numberOfItems: sets.length,
      itemListElement: sets.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${SITE}/practice-test/${s.id}`,
      })),
    },
    crumbs([
      { name: "Home", path: "/" },
      { name: "Practice tests", path: "/practice-tests" },
    ]),
  ),
});

// Individual practice tests
for (const s of sets) {
  const sample = s.ids.map((id) => qById.get(id)!).filter(Boolean).slice(0, 5);
  pages.push({
    path: `/practice-test/${s.id}`,
    title: `${s.name} — Free Australian Citizenship Practice Test | Australian Citizenship Test`,
    description: `${s.description}. A free 20-question Australian citizenship practice test with instant results and explanations — no sign-up required.`,
    priority: "0.7",
    body: [
      `<h1>${esc(s.name)}</h1>`,
      p(
        `${s.description}. This is a free practice test with 20 questions drawn from the testable section of Australian Citizenship: Our Common Bond, the official study guide the real test is based on.`,
      ),
      `<p><a href="/test/practice?category=${s.id}">Start this test</a></p>`,
      `<h2>Sample questions from this test</h2>`,
      `<ol>${sample.map((q, i) => questionHtml(q, i + 1)).join("")}</ol>`,
      `<h2>More practice tests</h2><ul>${sets
        .filter((o) => o.id !== s.id)
        .map((o) => `<li><a href="/practice-test/${o.id}">${esc(o.name)}</a></li>`)
        .join("")}</ul>`,
    ].join(""),
    jsonLd: graph(
      {
        "@type": "Quiz",
        name: s.name,
        description: s.description,
        url: `${SITE}/practice-test/${s.id}`,
        numberOfQuestions: 20,
        about: { "@type": "Thing", name: "Australian citizenship test" },
      },
      questionFaqLd(sample),
      crumbs([
        { name: "Home", path: "/" },
        { name: "Practice tests", path: "/practice-tests" },
        { name: s.name, path: `/practice-test/${s.id}` },
      ]),
    ),
  });
}

// Questions by testable part
for (const pt of parts) {
  const all = QUESTIONS.filter((q) => q.categoryId === pt.categoryId);
  const shown = all.slice(0, pt.publicQuestionLimit);
  pages.push({
    path: `/questions/${pt.slug}`,
    title: `${pt.metaTitle} | Australian Citizenship Test`,
    description: pt.metaDescription,
    priority: "0.8",
    body: [
      `<h1>${esc(pt.title)}</h1>`,
      ...pt.intro.map(p),
      p(`Showing ${shown.length} of ${all.length} questions in this part.`),
      `<ol>${shown.map((q, i) => questionHtml(q, i + 1)).join("")}</ol>`,
      `<p><a href="/test/practice?category=${pt.categoryId}">Take a timed test on this part</a></p>`,
      `<h2>The other testable parts</h2><ul>${parts
        .filter((o) => o.slug !== pt.slug)
        .map((o) => `<li><a href="/questions/${o.slug}">${esc(o.title)}</a></li>`)
        .join("")}</ul>`,
    ].join(""),
    jsonLd: graph(
      questionFaqLd(shown),
      crumbs([
        { name: "Home", path: "/" },
        { name: pt.short, path: `/questions/${pt.slug}` },
      ]),
    ),
  });
}

// ── render ───────────────────────────────────────────────────────────────────

const template = readFileSync(join(OUT, "index.html"), "utf8");

function render(page: Page): string {
  const url = `${SITE}${page.path}`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${esc(page.title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:title" content="[\s\S]*?" \/>/,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[\s\S]*?" \/>/,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<meta property="og:type" content="[\s\S]*?" \/>/,
    `<meta property="og:type" content="article" />`,
  );
  // hreflang alternates point at the page itself
  html = html.replace(
    /<link rel="alternate" hreflang="[a-z-]+" href="[\s\S]*?" \/>/g,
    (m) => m.replace(/href="[^"]*"/, `href="${url}"`),
  );

  // Replace the site-wide structured data with this page's graph.
  if (page.jsonLd) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`,
    );
  }

  // Content inside #root — React replaces this on mount.
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><main class="prerender">${page.body}</main></div>`,
  );

  return html;
}

// GitHub Pages serves /foo from foo.html with no redirect, whereas
// /foo/index.html forces a 301 to /foo/. Emitting flat .html files keeps every
// canonical URL a direct 200.
let written = 0;
for (const page of pages) {
  const file = join(OUT, `${page.path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(page), "utf8");
  written++;
}

// Give the homepage real body content too, rather than an empty #root.
const homeBody = [
  `<h1>Australian Citizenship Test Practice — Pass First Time</h1>`,
  p(
    "Free practice tests, flashcards and the complete official 'Our Common Bond' study guide to help you pass the Australian citizenship test on your first attempt. 219 practice questions across 10 full tests, and 243 flashcards.",
  ),
  `<h2>How the Australian citizenship test works</h2>`,
  ul([
    "20 multiple-choice questions, computer-based, at a Department of Home Affairs office",
    "You must answer at least 15 of 20 correctly — a 75% pass mark",
    "All 5 Australian values questions must be answered correctly",
    "45 minutes to complete the test",
    "Every question comes from the official 'Our Common Bond' resource booklet",
  ]),
  `<h2>Start practising</h2>`,
  `<ul>${sets
    .slice(0, 10)
    .map((s) => `<li><a href="/practice-test/${s.id}">${esc(s.name)}</a></li>`)
    .join("")}</ul>`,
  `<h2>Questions and answers by topic</h2>`,
  `<ul>${parts
    .map((pt) => `<li><a href="/questions/${pt.slug}">${esc(pt.title)}</a></li>`)
    .join("")}</ul>`,
  `<h2>Study guides</h2>`,
  `<ul>${guides
    .map((g) => `<li><a href="/guides/${g.slug}">${esc(g.title)}</a></li>`)
    .join("")}</ul>`,
].join("");

writeFileSync(
  join(OUT, "index.html"),
  template.replace(
    '<div id="root"></div>',
    `<div id="root"><main class="prerender">${homeBody}</main></div>`,
  ),
  "utf8",
);

// ── sitemap ──────────────────────────────────────────────────────────────────

const sitemapUrls: { loc: string; priority: string; changefreq: string }[] = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
  ...pages.map((pg) => ({
    loc: `${SITE}${pg.path}`,
    priority: pg.priority,
    changefreq: "monthly",
  })),
  { loc: `${SITE}/study`, priority: "0.6", changefreq: "monthly" },
  { loc: `${SITE}/study-guide`, priority: "0.6", changefreq: "monthly" },
  { loc: `${SITE}/flashcards`, priority: "0.6", changefreq: "monthly" },
  { loc: `${SITE}/reviews`, priority: "0.5", changefreq: "monthly" },
  { loc: `${SITE}/pricing`, priority: "0.5", changefreq: "monthly" },
  { loc: `${SITE}/help`, priority: "0.5", changefreq: "monthly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(OUT, "sitemap.xml"), sitemap, "utf8");

// ── llms.txt ─────────────────────────────────────────────────────────────────
// Answer engines read this to understand what the site covers.

const llmsPath = join(OUT, "llms.txt");
if (existsSync(llmsPath)) {
  const base = readFileSync(llmsPath, "utf8").split("\n## Pages")[0].trimEnd();
  const listing = [
    "",
    "",
    "## Pages",
    "",
    `- [Home](${SITE}/): free practice tests, flashcards and the Our Common Bond study guide`,
    `- [All practice tests](${SITE}/practice-tests): 10 free 20-question practice tests`,
    ...sets.map((s) => `- [${s.name}](${SITE}/practice-test/${s.id}): ${s.description}`),
    ...parts.map(
      (pt) => `- [${pt.title}](${SITE}/questions/${pt.slug}): ${pt.metaDescription}`,
    ),
    `- [Study guides](${SITE}/guides): guides to the test, the appointment and the process`,
    ...guides.map((g) => `- [${g.title}](${SITE}/guides/${g.slug}): ${g.metaDescription}`),
    "",
  ].join("\n");
  writeFileSync(llmsPath, base + listing, "utf8");
}

if (!existsSync(join(OUT, "404.html"))) {
  console.warn("[prerender] warning: 404.html missing from build output");
}

console.log(
  `[prerender] wrote ${written} static pages + homepage, sitemap with ${sitemapUrls.length} URLs`,
);
