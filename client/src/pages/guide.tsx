import { Link, useRoute } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  guides,
  guidesBySlug,
  guideDisclaimer,
  GUIDES_REVIEWED,
  OFFICIAL_URL,
} from "@/content/guides";
import { useSeo, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import NotFound from "@/pages/not-found";

export function GuidesIndex() {
  useSeo({
    title: "Australian Citizenship Test Guides (2026) | Australian Citizenship Test",
    description:
      "Plain-English guides to the Australian citizenship test: format and pass mark, how to study, Australian values, eligibility and the citizenship pledge.",
    path: "/guides",
  });
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Australian Citizenship Test Guides
      </h1>
      <p className="text-muted-foreground leading-relaxed">
        Plain-English answers to the questions people ask while preparing for the
        Australian citizenship test.
      </p>
      <ul className="space-y-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`}>
              <span className="text-[#002F6C] dark:text-blue-300 font-semibold hover:underline cursor-pointer">
                {g.h1}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground border-t pt-4">{guideDisclaimer}</p>
    </div>
  );
}

export default function GuidePage() {
  const [, params] = useRoute("/guides/:slug");
  const guide = params?.slug ? guidesBySlug[params.slug] : undefined;

  useSeo({
    title: guide ? `${guide.metaTitle} | Australian Citizenship Test` : "Guide not found",
    description: guide?.metaDescription ?? "Australian citizenship test guides.",
    path: guide ? `/guides/${guide.slug}` : "/guides",
    noindex: !guide,
    jsonLd: !guide
      ? undefined
      : {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: guide.h1,
              description: guide.metaDescription,
              dateModified: "2026-10-20",
              mainEntityOfPage: `https://auscitizentest.com/guides/${guide.slug}`,
              publisher: { "@type": "Organization", name: "Australian Citizenship Test" },
            },
            faqJsonLd(guide.faqs.map((f) => ({ q: f.question, a: f.answer }))),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides" },
              { name: guide.short, path: `/guides/${guide.slug}` },
            ]),
          ],
        },
  });

  if (!guide) return <NotFound />;

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-[#002F6C]">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#002F6C]">Guides</Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">{guide.h1}</h1>
        <p className="text-xs text-muted-foreground">Last reviewed {GUIDES_REVIEWED}</p>
        {guide.intro.map((t, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{t}</p>
        ))}
      </header>

      {guide.sections.map((s) => (
        <section key={s.heading} className="space-y-3">
          <h2 className="text-xl font-semibold">{s.heading}</h2>
          {s.paragraphs?.map((t, i) => (
            <p key={i} className="leading-relaxed">{t}</p>
          ))}
          {s.bullets && (
            <ul className="list-disc pl-6 space-y-1.5 leading-relaxed">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        {guide.faqs.map((f) => (
          <div key={f.question} className="space-y-1">
            <h3 className="font-semibold">{f.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </section>

      <div className="rounded-xl border bg-[#FFF3CD] dark:bg-[#2a2a1a] p-6 text-center space-y-3">
        <h2 className="font-semibold text-lg">Put it into practice</h2>
        <p className="text-sm text-muted-foreground">
          Try a free 20-question practice test with instant results and explanations.
        </p>
        <Link href="/practice-tests">
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#002F6C] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#003DA6] transition-colors cursor-pointer">
            Free practice tests <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Related guides</h2>
        <ul className="space-y-2">
          {guide.related.map((slug) => guidesBySlug[slug] && (
            <li key={slug}>
              <Link href={`/guides/${slug}`}>
                <span className="text-[#002F6C] dark:text-blue-300 hover:underline cursor-pointer">
                  {guidesBySlug[slug].h1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-xs text-muted-foreground border-t pt-4 leading-relaxed">
        {guideDisclaimer}{" "}
        <a href={OFFICIAL_URL} className="underline" rel="noopener noreferrer" target="_blank">
          Official Home Affairs citizenship information
        </a>
        .
      </p>
    </article>
  );
}
