import { Link } from "wouter";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { guides } from "@/content/guides";
import { useSeo, breadcrumbJsonLd } from "@/lib/seo";

export default function GuidesIndex() {
  useSeo({
    title: "Australian Citizenship Test Guides — Free Study Advice",
    description:
      "Free guides to the Australian citizenship test: how to pass first try, the Australian values questions, what happens if you fail, the appointment, exemptions, and the timeline to citizenship.",
    path: "/guides",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Australian Citizenship Test Guides",
      hasPart: guides.map((g) => ({
        "@type": "Article",
        headline: g.title,
        url: `https://auscitizentest.com/guides/${g.slug}`,
      })),
      breadcrumb: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ]),
    },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[#002F6C]">Home</Link>
          <span>/</span>
          <span>Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Australian Citizenship Test Guides
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Straight answers to the questions people actually have before sitting the
          citizenship test — how it is scored, what happens at the appointment, and
          what to do if it goes wrong. All free, no account needed.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`}>
            <article className="group h-full rounded-xl border bg-card p-5 hover:border-[#002F6C]/40 hover:shadow-md transition-all cursor-pointer flex flex-col">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <BookOpen className="h-3.5 w-3.5 text-[#002F6C]" />
                <span>Guide</span>
                <span>·</span>
                <Clock className="h-3.5 w-3.5" />
                <span>{g.readMinutes} min read</span>
              </div>
              <h2 className="font-semibold text-lg leading-snug group-hover:text-[#002F6C] transition-colors">
                {g.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                {g.metaDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#002F6C]">
                Read guide <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </article>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border bg-[#FFF3CD] dark:bg-[#2a2a1a] p-6 text-center space-y-3">
        <h2 className="font-semibold text-lg">Ready to test yourself?</h2>
        <p className="text-sm text-muted-foreground">
          10 full practice tests, 219 questions, free and no sign-up required.
        </p>
        <Link href="/practice-tests">
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#002F6C] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#003DA6] transition-colors cursor-pointer">
            Start a free practice test <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
