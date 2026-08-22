import { Link, useRoute } from "wouter";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { getGuide, guidesBySlug } from "@/content/guides";
import { useSeo, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import NotFound from "@/pages/not-found";

export default function GuidePage() {
  const [, params] = useRoute("/guides/:slug");
  const guide = getGuide(params?.slug);

  const url = guide ? `${SITE_URL}/guides/${guide.slug}` : SITE_URL;

  useSeo({
    title: guide
      ? `${guide.metaTitle} | Australian Citizenship Test`
      : "Guide not found | Australian Citizenship Test",
    description: guide?.metaDescription ?? "Australian citizenship test study guides.",
    path: guide ? `/guides/${guide.slug}` : "/guides",
    noindex: !guide,
    jsonLd: !guide ? undefined : {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: guide.title,
          description: guide.metaDescription,
          mainEntityOfPage: url,
          url,
          inLanguage: "en-AU",
          publisher: {
            "@type": "Organization",
            name: "Australian Citizenship Test",
            url: SITE_URL + "/",
          },
        },
        faqJsonLd(guide.faqs),
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
          <span>/</span>
          <span className="truncate">{guide.short}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          {guide.title}
        </h1>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{guide.readMinutes} min read</span>
        </div>
      </header>

      <div className="space-y-4">
        {guide.intro.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-foreground/90">{p}</p>
        ))}
      </div>

      {guide.sections.map((s, i) => (
        <section key={i} className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight pt-2">{s.h2}</h2>
          {s.paras?.map((p, j) => (
            <p key={j} className="leading-relaxed text-foreground/90">{p}</p>
          ))}
          {s.list && (
            <ul className="space-y-2 pl-1">
              {s.list.map((li, j) => (
                <li key={j} className="flex gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F5A200] shrink-0" />
                  <span className="text-foreground/90">{li}</span>
                </li>
              ))}
            </ul>
          )}
          {s.olist && (
            <ol className="space-y-2.5 pl-1 counter-reset">
              {s.olist.map((li, j) => (
                <li key={j} className="flex gap-3 leading-relaxed">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-[#002F6C] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                    {j + 1}
                  </span>
                  <span className="text-foreground/90">{li}</span>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}

      <section className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {guide.faqs.map((f, i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-1.5">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-xl border bg-[#FFF3CD] dark:bg-[#2a2a1a] p-6 text-center space-y-3">
        <h2 className="font-semibold text-lg">Put it into practice</h2>
        <p className="text-sm text-muted-foreground">
          10 free practice tests built from the testable section of Our Common Bond.
          No sign-up needed to start.
        </p>
        <Link href="/practice-tests">
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#002F6C] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#003DA6] transition-colors cursor-pointer">
            Take a free practice test <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      {guide.related.length > 0 && (
        <section className="space-y-3 pt-2">
          <h2 className="text-lg font-semibold">Related guides</h2>
          <ul className="space-y-2">
            {guide.related
              .map((slug) => guidesBySlug[slug])
              .filter(Boolean)
              .map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`}>
                    <span className="text-[#002F6C] dark:text-blue-300 hover:underline cursor-pointer">
                      {g.title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}

      <div className="pt-4">
        <Link href="/guides">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#002F6C] cursor-pointer">
            <ArrowLeft className="h-3.5 w-3.5" /> All guides
          </span>
        </Link>
      </div>

      <p className="text-xs text-muted-foreground border-t pt-4 leading-relaxed">
        This is general information, not immigration or legal advice. The Department of
        Home Affairs is the authority on citizenship requirements, fees and processing
        times, and its published information should be relied on over anything here.
      </p>
    </article>
  );
}
