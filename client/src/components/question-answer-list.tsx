import type { QuestionWithCategory } from "@shared/schema";
import { CheckCircle2 } from "lucide-react";

const LETTERS = ["A", "B", "C", "D"] as const;

export function optionsOf(q: QuestionWithCategory) {
  return [q.optionA, q.optionB, q.optionC, q.optionD]
    .map((text, i) => ({ letter: LETTERS[i], text }))
    .filter((o) => !!o.text) as { letter: string; text: string }[];
}

export function answerTextOf(q: QuestionWithCategory) {
  const opt = optionsOf(q).find((o) => o.letter === q.correctAnswer);
  return opt?.text ?? "";
}

/**
 * Static, readable question list with answers revealed — used on the public
 * SEO pages. The interactive test experience lives in /test.
 */
export default function QuestionAnswerList({
  questions,
  startIndex = 0,
}: {
  questions: QuestionWithCategory[];
  startIndex?: number;
}) {
  return (
    <ol className="space-y-5">
      {questions.map((q, i) => {
        const options = optionsOf(q);
        return (
          <li key={q.id} className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold leading-snug mb-3">
              {startIndex + i + 1}. {q.question}
            </h3>
            <ul className="space-y-1.5 mb-3">
              {options.map((o) => {
                const correct = o.letter === q.correctAnswer;
                return (
                  <li
                    key={o.letter}
                    className={`flex gap-2 items-start text-sm rounded-md px-2.5 py-1.5 ${
                      correct
                        ? "bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200 font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className="font-semibold shrink-0">{o.letter}.</span>
                    <span>{o.text}</span>
                    {correct && <CheckCircle2 className="h-4 w-4 shrink-0 ml-auto mt-0.5" />}
                  </li>
                );
              })}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                Answer: {q.correctAnswer}.
              </span>{" "}
              {q.explanation}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
