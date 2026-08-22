import { Link } from "wouter";
import { ArrowRight, ListChecks, Timer, Target } from "lucide-react";
import { api } from "@/lib/clientStorage";
import { parts } from "@/content/parts";
import { useSeo, breadcrumbJsonLd } from "@/lib/seo";

export default function PracticeTestsIndex() {
  const sets = api.getTestSets();

  useSeo({
    title: "10 Free Australian Citizenship Practice Tests (2026) | Australian Citizenship Test",
    description:
      "Ten free Australian citizenship practice tests, 20 questions each, drawn from the testable section of Our Common Bond. Start instantly — no sign-up required.",
    path: "/practice-tests",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ItemList",
          name: "Australian citizenship practice tests",
          numberOfItems: sets.length,
          itemListElement: sets.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `https://auscitizentest.com/practice-test/${s.id}`,
          })),
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice tests", path: "/practice-tests" },
        ]),
      ],
    },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[#002F6C]">Home</Link>
          <span>/</span>
          <span>Practice tests</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Free Australian Citizenship Practice Tests
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ten full practice tests of 20 questions each, built from the testable section of
          the official study guide. Start one straight away — no account needed.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { icon: ListChecks, label: "20 questions", sub: "same as the real test" },
          { icon: Target, label: "15 to pass", sub: "a 75% pass mark" },
          { icon: Timer, label: "45 minutes", sub: "more than enough time" },
        ].map((f) => (
          <div key={f.label} className="rounded-xl border bg-card p-4 flex items-center gap-3">
            <f.icon className="h-5 w-5 text-[#002F6C] shrink-0" />
            <div>
              <p className="font-semibold text-sm">{f.label}</p>
              <p className="text-xs text-muted-foreground">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {sets.map((s) => (
          <Link key={s.id} href={`/practice-test/${s.id}`}>
            <div className="group h-full rounded-xl border bg-card p-5 hover:border-[#002F6C]/40 hover:shadow-md transition-all cursor-pointer">
              <h2 className="font-semibold group-hover:text-[#002F6C] transition-colors">
                {s.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {s.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#002F6C]">
                View test <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Practise by topic instead</h2>
        <p className="text-sm text-muted-foreground">
          If one part of the study guide keeps catching you out, work through its questions
          with answers and explanations.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {parts.map((p) => (
            <li key={p.slug}>
              <Link href={`/questions/${p.slug}`}>
                <span className="text-[#002F6C] dark:text-blue-300 hover:underline cursor-pointer text-sm">
                  {p.short}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
