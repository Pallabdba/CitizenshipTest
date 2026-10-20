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

import { parts } from "../client/src/content/parts";
import { officialQuestions } from "../server/official-questions";
import { faqs, faqCategories } from "../client/src/lib/faq-data";
import { reviews } from "../client/src/lib/reviews-data";

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
  // Some pages (e.g. /about) render the same content as another canonical
  // URL and should point their canonical tag there instead of at themselves.
  canonicalPath?: string;
  // Set false to keep a page out of sitemap.xml (e.g. a canonicalized dupe).
  inSitemap?: boolean;
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

function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
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

// Practice tests index
const sets = testSets();

// Body reused by both "/" (the real homepage) and "/about" (which renders
// identical marketing content in the live app and self-canonicalizes to "/").
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
].join("");

// About page — same content as the homepage; canonicalize to "/" so it
// consolidates rather than competing with the homepage in search results.
pages.push({
  path: "/about",
  title: "Australian Citizenship Test Practice — Free Questions, Flashcards & Study Guide",
  description:
    "Free Australian citizenship test practice with 219 official-style questions, 10 full practice tests, 243 flashcards and the complete 'Our Common Bond' study guide. Start instantly, no sign-up required.",
  priority: "0.5",
  canonicalPath: "/",
  inSitemap: false,
  body: homeBody,
});

// Reviews — real testimonials, matching the live /reviews page.
pages.push({
  path: "/reviews",
  title: "Reviews & Success Stories | Australian Citizenship Test",
  description:
    "Real stories from people who passed the Australian citizenship test using our free practice tests, flashcards and study guide.",
  priority: "0.5",
  body: [
    `<h1>Reviews & Success Stories</h1>`,
    p(
      "Real stories from people who passed the Australian Citizenship Test using our app.",
    ),
    `<ul>${reviews
      .map(
        (r) =>
          `<li><strong>${esc(r.name)}</strong>${r.rating ? ` (${r.rating}/5)` : ""} — "${esc(r.testimonial)}"</li>`,
      )
      .join("")}</ul>`,
  ].join(""),
  jsonLd: graph(
    crumbs([
      { name: "Home", path: "/" },
      { name: "Reviews", path: "/reviews" },
    ]),
  ),
});

// Help & FAQ — real FAQ content, with FAQPage structured data.
const howToSteps = [
  {
    title: "1. Read the Study Guide",
    desc: "Start with the Study Guide. It covers all topics from the official 'Our Common Bond' PDF. Read through each section at least once before attempting tests.",
  },
  {
    title: "2. Revise with Flashcards",
    desc: "Flip through flashcards by category. Mark ones you know as 'Got it' and ones you're unsure about as 'Review again'. Repeat until you're confident.",
  },
  {
    title: "3. Take Practice Tests",
    desc: "Take a full 20-question test. Try each category individually first, then take mixed tests. Aim for 90%+ before booking the real test.",
  },
  {
    title: "4. Review Mistakes",
    desc: "After each test, see what you got wrong so you can focus on your weak spots.",
  },
  {
    title: "5. Track Your Progress",
    desc: "Your score trends over time show when you're consistently scoring above 85-90% and ready for the real citizenship test.",
  },
];

pages.push({
  path: "/help",
  title: "Help & FAQ — Australian Citizenship Test",
  description:
    "Answers to common questions about using Australian Citizenship Test: practice tests, flashcards, progress tracking, subscriptions and the real citizenship test.",
  priority: "0.5",
  body: [
    `<h1>Help & Guide</h1>`,
    p("Everything you need to know about using Australian Citizenship Test."),
    `<h2>How to Use This Website</h2>`,
    `<ol>${howToSteps
      .map((s) => `<li><strong>${esc(s.title)}</strong> — ${esc(s.desc)}</li>`)
      .join("")}</ol>`,
    `<h2>Frequently Asked Questions</h2>`,
    faqCategories
      .map((cat) => {
        const items = faqs.filter((f) => f.category === cat);
        if (!items.length) return "";
        return `<h3>${esc(cat)}</h3><dl>${items
          .map((f) => `<dt>${esc(f.question)}</dt><dd>${esc(f.answer)}</dd>`)
          .join("")}</dl>`;
      })
      .join(""),
  ].join(""),
  jsonLd: graph(
    faqLd(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
    crumbs([
      { name: "Home", path: "/" },
      { name: "Help", path: "/help" },
    ]),
  ),
});

// Sign in — thin by nature (it's a form), but kept as a real 200-status page
// instead of a client-only route that 404s on direct/crawler requests.
pages.push({
  path: "/login",
  title: "Sign In — Australian Citizenship Test",
  description:
    "Sign in or create a free account to save your progress on Australian Citizenship Test practice tests, flashcards and results.",
  priority: "0.3",
  body: [
    `<h1>Sign In</h1>`,
    p(
      "Sign in or create a free account to save your progress across practice tests, flashcards and results.",
    ),
  ].join(""),
});

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
  const url = `${SITE}${page.canonicalPath ?? page.path}`;
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
    `<div id="root"><main class="prerender" style="visibility:hidden;position:absolute;pointer-events:none">${page.body}</main></div>`,
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
writeFileSync(
  join(OUT, "index.html"),
  template.replace(
    '<div id="root"></div>',
    `<div id="root"><main class="prerender" style="visibility:hidden;position:absolute;pointer-events:none">${homeBody}</main></div>`,
  ),
  "utf8",
);

// ── sitemap ──────────────────────────────────────────────────────────────────

// /study, /study-guide, /flashcards and /pricing are gated behind login in
// the app's own router (see client/src/App.tsx) — they never render public
// content for a logged-out visitor or a crawler, so they don't belong here.
const sitemapUrls: { loc: string; priority: string; changefreq: string }[] = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
  ...pages
    .filter((pg) => pg.inSitemap !== false)
    .map((pg) => ({
      loc: `${SITE}${pg.path}`,
      priority: pg.priority,
      changefreq: "monthly",
    })),
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
