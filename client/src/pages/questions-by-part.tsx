import { Link, useRoute } from "wouter";
import { ArrowRight } from "lucide-react";
import { api } from "@/lib/clientStorage";
import { partsBySlug, parts } from "@/content/parts";
import { useSeo, breadcrumbJsonLd } from "@/lib/seo";
import QuestionAnswerList from "@/components/question-answer-list";
import NotFound from "@/pages/not-found";

export default function QuestionsByPart() {
  const [, params] = useRoute("/questions/:slug");
  const part = params?.slug ? partsBySlug[params.slug] : undefined;

  const all = part ? api.getQuestions(part.categoryId) : [];
  const shown = all.slice(0, part?.publicQuestionLimit ?? 0);

  useSeo({
    title: part
      ? `${part.metaTitle} | Australian Citizenship Test`
      : "Questions | Australian Citizenship Test",
    description:
      part?.metaDescription ??
      "Free Australian citizenship test questions and answers.",
    path: part ? `/questions/${part.slug}` : "/questions",
    noindex: !part,
    jsonLd: !part
      ? undefined
      : {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: shown.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${q.correctAnswer}. ${q.explanation ?? ""}`.trim(),
                },
              })),
            },
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Questions", path: `/questions/${part.slug}` },
            ]),
          ],
        },
  });

  if (!part) return <NotFound />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-[#002F6C]">Home</Link>
          <span>/</span>
          <span className="truncate">{part.short}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          {part.title}
        </h1>
        {part.intro.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
        <p className="text-sm text-muted-foreground">
          Showing {shown.length} of {all.length} questions in this part.
        </p>
      </header>

      <QuestionAnswerList questions={shown} />

      <div className="rounded-xl border bg-[#FFF3CD] dark:bg-[#2a2a1a] p-6 text-center space-y-3">
        <h2 className="font-semibold text-lg">Now test yourself properly</h2>
        <p className="text-sm text-muted-foreground">
          Reading answers is not the same as recalling them. Take a timed 20-question
          test — free, no sign-up needed.
        </p>
        <Link href={`/test/practice?category=${part.categoryId}`}>
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#002F6C] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#003DA6] transition-colors cursor-pointer">
            Take the {part.short.split("—")[0].trim()} test <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">The other testable parts</h2>
        <ul className="space-y-2">
          {parts
            .filter((p) => p.slug !== part.slug)
            .map((p) => (
              <li key={p.slug}>
                <Link href={`/questions/${p.slug}`}>
                  <span className="text-[#002F6C] dark:text-blue-300 hover:underline cursor-pointer">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <p className="text-xs text-muted-foreground border-t pt-4 leading-relaxed">
        These are practice questions written against the testable section of the official
        study guide, <em>Australian Citizenship: Our Common Bond</em>. They are not the
        actual test questions, which are not published. This site is not affiliated with
        the Australian Government.
      </p>
    </div>
  );
}
