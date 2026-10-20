/**
 * Plain-English guides targeting the searches people actually make while
 * preparing for the Australian citizenship test. Shared by the React app
 * (client/src/pages/guide.tsx) and the static prerenderer
 * (scripts/prerender.ts) so crawlers and people see identical content.
 */
export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  /** <title> — kept short enough not to truncate in search results */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short label for link lists */
  short: string;
  intro: string[];
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const GUIDES_REVIEWED = "October 2026";

export const OFFICIAL_URL = "https://immi.homeaffairs.gov.au/citizenship";

export const guideDisclaimer =
  "This guide is general information written to help you prepare. It is not legal or migration advice, and this website is not affiliated with the Australian Government or the Department of Home Affairs. Rules and fees change — always confirm the current requirements on the official Home Affairs website before you apply or book your test.";

export const guides: Guide[] = [
  {
    slug: "australian-citizenship-test-format-and-pass-mark",
    metaTitle: "Australian Citizenship Test: Format, Questions & Pass Mark (2026)",
    metaDescription:
      "How many questions are on the Australian citizenship test, what the pass mark is, how long you get, and why the 5 values questions matter. A clear 2026 guide.",
    h1: "Australian Citizenship Test: Format, Number of Questions and Pass Mark",
    short: "Test format, questions and pass mark",
    intro: [
      "The Australian citizenship test is a short, computer-based, multiple-choice test. Knowing exactly how it is set up removes a lot of the anxiety, because the format is the same for everyone.",
      "Below is how the test is structured, what the pass mark is, and the one rule that catches people out: the Australian values questions.",
    ],
    sections: [
      {
        heading: "The test at a glance",
        bullets: [
          "20 multiple-choice questions, answered on a computer",
          "45 minutes to complete the test",
          "Pass mark: at least 15 of the 20 questions correct (75%)",
          "5 of the 20 questions are about Australian values, and all 5 must be answered correctly",
          "Every question is based on the testable section of the official booklet, Australian Citizenship: Our Common Bond",
        ],
      },
      {
        heading: "The Australian values questions are the rule that catches people out",
        paragraphs: [
          "You can get a score of 15 out of 20 and still not pass if one of the five values questions is wrong. That makes the values questions the most important part of your preparation, even though they are only a quarter of the test.",
          "The good news is that the values questions are the most predictable. They test whether you understand ideas such as freedom of religion, equality of men and women, the rule of law and parliamentary democracy — not obscure dates or names.",
        ],
      },
      {
        heading: "What the questions look like",
        paragraphs: [
          "Each question has a short question and several possible answers; you choose the one that is correct. There are no essays and no spoken parts. The wording is plain, and the test is designed to check that you understand Australia's responsibilities and privileges, not to trick you.",
        ],
      },
      {
        heading: "Where the questions come from",
        paragraphs: [
          "The test is drawn from the testable section of Our Common Bond, which is free from the Department of Home Affairs. It covers Australia and its people, democratic beliefs, rights and liberties, government and the law, and Australian values. The actual test questions are not published, so any practice material — including ours — is written against the booklet rather than copied from the real test.",
        ],
      },
      {
        heading: "How to know you are ready",
        paragraphs: [
          "A good rule of thumb is to score 90% or higher on several full 20-question practice tests in a row, and to get every values question right each time. Scoring 75% in practice leaves you with no margin on the day.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many questions are on the Australian citizenship test?",
        answer:
          "There are 20 multiple-choice questions. Five of them are about Australian values.",
      },
      {
        question: "What is the pass mark for the Australian citizenship test?",
        answer:
          "You need at least 15 of the 20 questions correct (75%), and you must answer all 5 Australian values questions correctly.",
      },
      {
        question: "How long do you get for the citizenship test?",
        answer:
          "You have 45 minutes to complete the 20 questions, which is plenty of time for most people.",
      },
      {
        question: "What happens if I miss one of the values questions?",
        answer:
          "Even with a score of 15 out of 20 or higher, you will not pass if any of the five Australian values questions is incorrect.",
      },
    ],
    related: [
      "australian-values-citizenship-test",
      "how-to-study-for-the-australian-citizenship-test",
      "australian-citizenship-eligibility-requirements",
    ],
  },
  {
    slug: "how-to-study-for-the-australian-citizenship-test",
    metaTitle: "How to Study for the Australian Citizenship Test: 2-Week Plan",
    metaDescription:
      "A practical 2-week study plan for the Australian citizenship test: how to use Our Common Bond, flashcards and practice tests so you pass on your first attempt.",
    h1: "How to Study for the Australian Citizenship Test (A 2-Week Plan)",
    short: "How to study: a 2-week plan",
    intro: [
      "Most people who prepare properly pass the Australian citizenship test the first time. The difference between passing comfortably and scraping through is usually how you study, not how long you study.",
      "This plan fits around work and family, takes about 30 to 45 minutes a day, and uses the three things that work: reading the official booklet, flashcards, and timed practice tests.",
    ],
    sections: [
      {
        heading: "Step 1 — Read the testable section of Our Common Bond (days 1–4)",
        paragraphs: [
          "Our Common Bond is the official, free booklet the test is based on. Read the testable parts once, slowly, rather than skimming the whole thing. Focus on the key facts: the first peoples, Federation, national symbols, the three levels of government, the rights and responsibilities of citizens, and the Australian values.",
        ],
        bullets: [
          "Part 1 — Australia and its people",
          "Part 2 — Australia's democratic beliefs, rights and liberties",
          "Part 3 — Government and the law in Australia",
          "Part 4 — Australian values",
        ],
      },
      {
        heading: "Step 2 — Learn the facts with flashcards (days 3–8)",
        paragraphs: [
          "Flashcards force you to recall an answer rather than just recognise it, which is what the test asks of you. Go through a set, mark the cards you got right, and repeat only the ones you missed. Short daily sessions beat one long weekend session.",
        ],
      },
      {
        heading: "Step 3 — Practise by topic, then in full (days 6–11)",
        paragraphs: [
          "Start with one topic at a time so you can see which parts of the booklet you are weakest on, then move to mixed 20-question tests. Read the explanation for every question you get wrong — that is where most of the learning happens.",
        ],
      },
      {
        heading: "Step 4 — Rehearse the real thing (days 12–14)",
        paragraphs: [
          "Take full timed tests that mimic the real format: 20 questions, 45 minutes, and a pass only if you get all 5 values questions right. When you are scoring 90% or more on several tests in a row, you are ready to book.",
        ],
      },
      {
        heading: "Tips that save time",
        bullets: [
          "Memorise the values questions first — they decide whether you pass.",
          "Study a little every day instead of cramming the night before.",
          "If English is not your first language, read each question twice and look at every option before choosing.",
          "Do not try to memorise exact dates for everything; learn the sequence of major events and why they matter.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to study for the Australian citizenship test?",
        answer:
          "Most people are ready in about two weeks of 30 to 45 minutes a day. If you are new to Australian history and government, give yourself three to four weeks.",
      },
      {
        question: "What is the best way to study for the citizenship test?",
        answer:
          "Read the testable section of Our Common Bond once, learn key facts with flashcards, then take timed practice tests and review every mistake.",
      },
      {
        question: "Can I pass the citizenship test without studying?",
        answer:
          "It is not recommended. The test is based on specific content in Our Common Bond, and the Australian values questions all have to be correct.",
      },
    ],
    related: [
      "australian-citizenship-test-format-and-pass-mark",
      "australian-values-citizenship-test",
      "australian-citizenship-pledge",
    ],
  },
  {
    slug: "australian-values-citizenship-test",
    metaTitle: "Australian Values Questions on the Citizenship Test Explained",
    metaDescription:
      "The 5 Australian values questions must all be correct to pass the citizenship test. Learn the values, what they mean and how they are tested, with examples.",
    h1: "Australian Values Questions on the Citizenship Test, Explained",
    short: "Australian values questions explained",
    intro: [
      "Five of the 20 questions on the Australian citizenship test are about Australian values, and you must answer every one of them correctly to pass. They are the questions most worth getting right.",
      "The values themselves are not complicated. The key is to understand what each one means in everyday life, because the questions are usually about applying them.",
    ],
    sections: [
      {
        heading: "The Australian values you need to know",
        bullets: [
          "Respect for the freedom and dignity of the individual",
          "Freedom of religion, including the freedom not to follow a religion",
          "Commitment to the rule of law",
          "Parliamentary democracy",
          "Equality of men and women",
          "Equality of opportunity",
          "Peacefulness",
        ],
      },
      {
        heading: "What these mean in practice",
        paragraphs: [
          "Respect for the freedom and dignity of the individual means every person is valued and has the same basic rights. Freedom of religion means you can follow any faith or none, and the government does not impose one. The rule of law means everyone — including leaders and officials — must obey the same laws, and no one is above them.",
          "Parliamentary democracy means Australians choose their representatives by voting in free and fair elections, and those representatives make the laws. Equality of men and women and equality of opportunity mean people are not treated differently because of their sex, race, religion or background. Peacefulness means disagreements are settled through discussion and the law, not violence.",
        ],
      },
      {
        heading: "How the values are tested",
        paragraphs: [
          "Rather than asking you to recite a list, the questions usually describe a situation or ask what a value means. For example, you might be asked which statement is consistent with Australian values, or what freedom of speech does and does not allow. Read every option before you answer, because wrong options are often plausible-sounding.",
        ],
      },
      {
        heading: "Rights come with responsibilities",
        paragraphs: [
          "Our Common Bond links rights and responsibilities. Citizens are expected to obey the law, vote in federal and state elections, and respect the rights of others. Expect at least one question on the idea that freedom is not unlimited — your freedoms stop where they harm others or break the law.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Australian values questions are on the citizenship test?",
        answer:
          "Five of the 20 questions are about Australian values, and all five must be answered correctly to pass.",
      },
      {
        question: "What are the Australian values?",
        answer:
          "They include respect for the freedom and dignity of the individual, freedom of religion, commitment to the rule of law, parliamentary democracy, equality of men and women, equality of opportunity and peacefulness.",
      },
      {
        question: "Can I fail the test if I get 15 questions right?",
        answer:
          "Yes. If any of the five Australian values questions is wrong you do not pass, even if you answer 15 or more questions correctly overall.",
      },
    ],
    related: [
      "australian-citizenship-test-format-and-pass-mark",
      "how-to-study-for-the-australian-citizenship-test",
      "australian-citizenship-pledge",
    ],
  },
  {
    slug: "australian-citizenship-eligibility-requirements",
    metaTitle: "Australian Citizenship Eligibility Requirements (2026 Guide)",
    metaDescription:
      "A plain-English overview of who can apply for Australian citizenship by conferral: residence, character, English, the test and the pledge. Check the official rules.",
    h1: "Australian Citizenship Eligibility: Who Can Apply and What You Need",
    short: "Citizenship eligibility requirements",
    intro: [
      "Most people become Australian citizens by conferral — applying after living in Australia as a permanent resident. This page gives a plain-English overview of the main requirements so you know where you stand before you study for the test.",
      "Rules and fees are set by the Department of Home Affairs and can change, so treat this as a starting point and check the official site before you apply.",
    ],
    sections: [
      {
        heading: "The main requirements",
        bullets: [
          "Be a permanent resident (or an eligible New Zealand citizen) when you apply and when the decision is made",
          "Meet the general residence requirement: generally four years of lawful residence in Australia before applying, including at least one year as a permanent resident, with limits on time spent overseas",
          "Be of good character",
          "Intend to live in Australia or maintain a close and continuing association with it",
          "Have a basic knowledge of English",
          "Understand the responsibilities and privileges of citizenship — which is what the citizenship test checks",
        ],
      },
      {
        heading: "Who sits the citizenship test?",
        paragraphs: [
          "Most applicants aged 18 to 59 are asked to sit the test. People aged 60 or over, applicants under 18, and some people with a permanent physical or mental incapacity are generally not required to take it. The Department will tell you whether you need to sit it.",
        ],
      },
      {
        heading: "The steps from application to citizen",
        bullets: [
          "Lodge your application online and pay the application fee",
          "Provide identity documents and any other requested evidence",
          "Attend an appointment to sit the citizenship test, if required",
          "Wait for the decision on your application",
          "Attend a citizenship ceremony and make the pledge",
        ],
      },
      {
        heading: "Why preparing early helps",
        paragraphs: [
          "The test is an appointment, and appointments can take time to get, so it is sensible to start studying while your application is being processed. Using practice tests lets you check your knowledge well before the day.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to be a permanent resident to apply for Australian citizenship?",
        answer:
          "Generally yes. Most applicants must be a permanent resident, or an eligible New Zealand citizen, when they apply and when the decision is made.",
      },
      {
        question: "Does everyone have to take the Australian citizenship test?",
        answer:
          "No. Most applicants aged 18 to 59 sit the test, but people aged 60 and over and applicants under 18 are generally not required to.",
      },
      {
        question: "Where do I check the current citizenship rules?",
        answer:
          "The Department of Home Affairs publishes the current eligibility requirements and fees at immi.homeaffairs.gov.au. Always confirm there before you apply.",
      },
    ],
    related: [
      "australian-citizenship-test-format-and-pass-mark",
      "how-to-study-for-the-australian-citizenship-test",
      "australian-citizenship-pledge",
    ],
  },
  {
    slug: "australian-citizenship-pledge",
    metaTitle: "Australian Citizenship Pledge: Wording & Ceremony Guide",
    metaDescription:
      "The Australian citizenship pledge in full, the two versions you can choose from, and what to expect at your citizenship ceremony after passing the test.",
    h1: "The Australian Citizenship Pledge and What to Expect at Your Ceremony",
    short: "The citizenship pledge and ceremony",
    intro: [
      "Becoming an Australian citizen is finalised at a citizenship ceremony, where you make the pledge. Passing the test is the step before that.",
      "Here are the words of the pledge, what they mean, and what usually happens on the day.",
    ],
    sections: [
      {
        heading: "The pledge",
        paragraphs: [
          "You can choose between two versions. The first includes a reference to God; the second does not. Both mean the same commitment to Australia.",
          "Version 1: \"From this time forward, under God, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey.\"",
          "Version 2: \"From this time forward, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey.\"",
        ],
      },
      {
        heading: "What the pledge means",
        paragraphs: [
          "The pledge connects directly to the content of the test: sharing Australia's democratic beliefs, respecting the rights and liberties of others, and upholding and obeying the law. If you understand the Australian values and the responsibilities of citizens, you already understand the pledge.",
        ],
      },
      {
        heading: "What happens at a citizenship ceremony",
        bullets: [
          "You are invited to a ceremony, usually organised by your local council",
          "An official welcomes you and speaks about what citizenship means",
          "You make the pledge, or an affirmation, together with the other new citizens",
          "You receive your citizenship certificate and become an Australian citizen at that moment",
          "Many councils include a short celebration, and you can bring family and friends",
        ],
      },
      {
        heading: "After the ceremony",
        paragraphs: [
          "As a citizen you can enrol to vote, apply for an Australian passport and live in Australia without any visa conditions. Voting in federal and state elections is compulsory for Australian citizens, so enrol soon after your ceremony.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Australian citizenship pledge?",
        answer:
          "It is a short promise of loyalty to Australia and its people, made at your citizenship ceremony. You can choose a version that includes \"under God\" or one that does not.",
      },
      {
        question: "Do I have to learn the pledge for the citizenship test?",
        answer:
          "You do not need to memorise it for the test, but its ideas — democratic beliefs, rights and liberties, and obeying the law — match what the test covers.",
      },
      {
        question: "Is voting compulsory for new citizens?",
        answer:
          "Yes. Voting in federal and state elections is compulsory for Australian citizens, so you should enrol after you become a citizen.",
      },
    ],
    related: [
      "australian-values-citizenship-test",
      "australian-citizenship-eligibility-requirements",
      "australian-citizenship-test-format-and-pass-mark",
    ],
  },
];

export const guidesBySlug: Record<string, Guide> = Object.fromEntries(
  guides.map((g) => [g.slug, g]),
);
