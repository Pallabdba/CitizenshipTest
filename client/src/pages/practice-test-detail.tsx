import { Link, useRoute } from "wouter";
import { ArrowRight, Target, Timer, ListChecks } from "lucide-react";
import { api } from "@/lib/clientStorage";
import { useSeo, breadcrumbJsonLd } from "@/lib/seo";
import QuestionAnswerList from "@/components/question-answer-list";
import NotFound from "@/pages/not-found";

const SAMPLE_COUNT = 5;

export default function PracticeTestDetail() {
  const [, params] = useRoute("/practice-test/:id");
  const id = params?.id ? parseInt(params.id, 10) : NaN;
  const set = Number.isNaN(id) ? undefined : api.getTestSet(id);
  const sample = set ? set.questions.slice(0, SAMPLE_COUNT) : [];

  const title = set
    ? `${set.name} — Free Australian Citizenship Practice Test`
    : "Practice test";

  useSeo({
    title: set ? `${title} | Australian Citizenship Test` : "Practice test not found",
    description: set
      ? `${set.description}. A free 20-question Australian citizenship practice test with instant results and explanations — no sign-up required.`
      : "Free Australian citizenship practice tests.",
    path: set ? `/practice-test/${set.id}` : "/practice-tests",
    noindex: !set,
    jsonLd: !set
      ? undefined
      : {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Quiz",
              name: set.name,
              description: set.description,
              educationalLevel: "Adult education",
              url: `https://auscitizentest.com/practice-test/${set.id}`,
              numberOfQuestions: set.questions.length,
              about: { "@type": "Thing", name: "Australian citizenship test" },
            },
            {
              "@type": "FAQPage",
              mainEntity: sample.map((q) => ({
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
              { name: "Practice tests", path: "/practice-tests" },
              { name: set.name, path: `/practice-test/${set.id}` },
            ]),
          ],
        },
  });

  if (!set) return <NotFound />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-[#002F6C]">Home</Link>
          <span>/</span>
          <Link href="/practice-tests" className="hover:text-[#002F6C]">Practice tests</Link>
          <span>/</span>
          <span className="truncate">{set.name}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          {set.name}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {set.description}. This is a free practice test with {set.questions.length}{" "}
          questions drawn from the testable section of{" "}
          <em>Australian Citizenship: Our Common Bond</em>, the official study guide the
          real test is based on.
        </p>
      </header>

      <div className="rounded-xl border bg-[#FFF3CD] dark:bg-[#2a2a1a] p-6 text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          Answers are marked instantly and every question comes with an explanation.
        </p>
        <Link href={`/test/practice?category=${set.id}`}>
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#002F6C] text-white px-6 py-3 text-sm font-semibold hover:bg-[#003DA6] transition-colors cursor-pointer">
            Start this test <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { icon: ListChecks, label: `${set.questions.length} questions` },
          { icon: Target, label: "15 correct to pass" },
          { icon: Timer, label: "45 minute limit" },
        ].map((f) => (
          <div key={f.label} className="rounded-xl border bg-card p-4 flex items-center gap-3">
            <f.icon className="h-5 w-5 text-[#002F6C] shrink-0" />
            <p className="font-semibold text-sm">{f.label}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Sample questions from this test
        </h2>
        <p className="text-sm text-muted-foreground">
          Here are {sample.length} of the {set.questions.length} questions with their answers
          explained. Start the test above to work through all of them.
        </p>
        <QuestionAnswerList questions={sample} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">More practice tests</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {api
            .getTestSets()
            .filter((s) => s.id !== set.id)
            .map((s) => (
              <li key={s.id}>
                <Link href={`/practice-test/${s.id}`}>
                  <span className="text-[#002F6C] dark:text-blue-300 hover:underline cursor-pointer text-sm">
                    {s.name}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <p className="text-xs text-muted-foreground border-t pt-4 leading-relaxed">
        Practice questions only — these are not the actual test questions, which are not
        published by the Department of Home Affairs. This site is not affiliated with the
        Australian Government.
      </p>
    </div>
  );
}
