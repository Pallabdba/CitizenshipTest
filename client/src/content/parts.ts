/** The four testable parts of "Our Common Bond", with SEO metadata. */
export interface TestablePart {
  slug: string;
  categoryId: number;
  title: string;
  metaTitle: string;
  metaDescription: string;
  short: string;
  intro: string[];
  /** How many questions to render on the public Q&A page */
  publicQuestionLimit: number;
}

export const parts: TestablePart[] = [
  {
    slug: "part-1-australia-and-its-people",
    categoryId: 1,
    title: "Part 1 Questions and Answers — Australia and Its People",
    metaTitle: "Part 1 Questions & Answers — Australia and Its People",
    metaDescription:
      "Free Australian citizenship test questions and answers for Part 1 of Our Common Bond: Aboriginal and Torres Strait Islander peoples, European settlement, Federation and national symbols.",
    short: "Part 1 — Australia and its people",
    intro: [
      "Part 1 of Our Common Bond covers who Australians are and how the nation came to be — the first peoples, European settlement, the gold rush, Federation, and Australia's symbols and holidays.",
      "These are practice questions written against the testable section, with the correct answer and an explanation for each.",
    ],
    publicQuestionLimit: 25,
  },
  {
    slug: "part-2-democratic-beliefs-rights-and-liberties",
    categoryId: 2,
    title: "Part 2 Questions and Answers — Democratic Beliefs, Rights and Liberties",
    metaTitle: "Part 2 Questions & Answers — Democratic Beliefs and Rights",
    metaDescription:
      "Free citizenship test questions and answers for Part 2 of Our Common Bond: freedom of speech, religion and association, equality under the law, and the responsibilities of Australian citizens.",
    short: "Part 2 — Democratic beliefs, rights and liberties",
    intro: [
      "Part 2 covers Australia's democratic beliefs and the rights and liberties that go with them — and, just as importantly, the responsibilities that come attached to those rights.",
      "Each question below shows the correct answer and an explanation.",
    ],
    publicQuestionLimit: 25,
  },
  {
    slug: "part-3-government-and-the-law",
    categoryId: 3,
    title: "Part 3 Questions and Answers — Government and the Law in Australia",
    metaTitle: "Part 3 Questions & Answers — Government and the Law",
    metaDescription:
      "Free citizenship test questions and answers for Part 3 of Our Common Bond: the three levels of government, Parliament, the Constitution, voting and the courts.",
    short: "Part 3 — Government and the law",
    intro: [
      "Part 3 is the part most people find hardest, because it is the least intuitive: three levels of government, two houses of Parliament, the role of the Governor-General, and how the Constitution can be changed.",
      "Work through these with the explanations and the structure starts to make sense quickly.",
    ],
    publicQuestionLimit: 25,
  },
  {
    slug: "part-4-australian-values",
    categoryId: 4,
    title: "Part 4 Questions and Answers — Australian Values",
    metaTitle: "Australian Values Questions & Answers (Must Get All Right)",
    metaDescription:
      "Free Australian values questions and answers. Five of the twenty questions on the citizenship test cover Australian values, and every one of them must be answered correctly to pass.",
    short: "Part 4 — Australian values",
    intro: [
      "This is the part that must be known perfectly. Five of the twenty questions on the real test come from Australian values, and getting even one of them wrong fails the whole test regardless of your total score.",
      "Practise these until you answer every one without hesitating.",
    ],
    publicQuestionLimit: 30,
  },
];

export const partsBySlug: Record<string, TestablePart> = Object.fromEntries(
  parts.map((p) => [p.slug, p]),
);
