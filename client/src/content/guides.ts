// Long-form guide content. Rendered by /guides and /guides/:slug, and also
// baked into static HTML at build time by scripts/prerender.mjs so search
// engines and AI answer engines can read it without executing JavaScript.

export interface GuideSection {
  h2: string;
  paras?: string[];
  list?: string[];
  olist?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  /** H1 on the page */
  title: string;
  /** <title> tag */
  metaTitle: string;
  metaDescription: string;
  /** Short label used in nav / related links */
  short: string;
  readMinutes: number;
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: string[];
}

export const guides: Guide[] = [
  {
    slug: "how-to-pass-the-australian-citizenship-test",
    title: "How to Pass the Australian Citizenship Test on Your First Try",
    metaTitle: "How to Pass the Australian Citizenship Test (First Try Guide)",
    metaDescription:
      "A step-by-step study plan for the Australian citizenship test: how the 20 questions are structured, the 75% pass mark, the Australian values rule, and the mistakes that fail people who actually knew the material.",
    short: "How to pass first try",
    readMinutes: 8,
    intro: [
      "The Australian citizenship test is not a hard exam. It is a test almost everyone passes — but the people who fail it usually fail for reasons that have nothing to do with intelligence, and everything to do with how they prepared.",
      "This guide covers what the test actually asks, the one rule that catches people out, and a study plan that takes about a week of casual effort.",
    ],
    sections: [
      {
        h2: "What the test actually looks like",
        paras: [
          "The citizenship test is a computer-based multiple-choice test, sat at a Department of Home Affairs office as part of your citizenship appointment. You sit at a screen, on your own, and work through the questions at your own pace.",
        ],
        list: [
          "20 multiple-choice questions",
          "You need at least 15 correct — a 75% pass mark",
          "45 minutes to complete it",
          "5 of the 20 questions are about Australian values, and you must get all 5 right",
          "Every question is drawn from the official booklet, Australian Citizenship: Our Common Bond",
        ],
      },
      {
        h2: "The rule that fails people who would otherwise pass",
        paras: [
          "This is the single most important thing on this page: the five Australian values questions are pass/fail on their own. You can answer 18 out of 20 correctly and still fail the test if even one of those five values questions is wrong.",
          "That design is deliberate. The department wants to be certain that applicants understand and commit to Australia's democratic values, not just that they can recall a fact about the flag. So the values section is where your study time should be concentrated — not spread evenly across the four parts of the book.",
          "Practically: if you have limited time, drill the values questions until you get them right every single time, then spend whatever is left on the rest.",
        ],
      },
      {
        h2: "Where the questions come from",
        paras: [
          "Every testable question comes from the testable section of Our Common Bond, which is published free by the Department of Home Affairs. The book has four testable parts:",
        ],
        olist: [
          "Australia and its people — Aboriginal and Torres Strait Islander peoples, European settlement, Federation, national symbols, states and territories",
          "Australia's democratic beliefs, rights and liberties — freedoms of speech, association and religion, equality, and the responsibilities that come with them",
          "Government and the law in Australia — the three levels of government, Parliament, voting, the Constitution, the courts",
          "Australian values — the values statement you sign, what mutual respect and the rule of law mean in practice",
        ],
      },
      {
        h2: "A study plan that actually works",
        paras: [
          "Reading the book cover to cover is the least efficient way to prepare. Recall beats recognition: you remember what you have been forced to retrieve, not what you have read.",
        ],
        olist: [
          "Day 1 — Read the testable section of Our Common Bond once, quickly. Do not try to memorise. You are building a map, not learning the terrain.",
          "Days 2 to 4 — Take a full 20-question practice test each day. After each one, read the explanation for every question you got wrong, and only those.",
          "Day 5 — Drill the Australian values questions on their own, repeatedly, until you are getting them all correct without hesitating.",
          "Day 6 — Take two or three full practice tests back to back, timed. You are checking for consistency, not a single good score.",
          "Day 7 — Rest, or skim your weak categories with flashcards. Do not cram the night before.",
        ],
      },
      {
        h2: "The most common reasons people fail",
        list: [
          "Studying an outdated question set — the book has been revised, and old question banks circulating online contain questions that are no longer accurate",
          "Getting one Australian values question wrong and not realising that alone ends the attempt",
          "Rushing — you have 45 minutes for 20 questions, which is more than two minutes per question. There is no prize for finishing early",
          "Reading the question too fast and missing a 'not' or 'must' — several questions turn entirely on a single word",
          "Preparing for the test but not for the interview, where an officer checks your identity documents and confirms your English",
        ],
      },
      {
        h2: "On the day",
        paras: [
          "Bring your original identity documents — the appointment letter tells you exactly which ones, and the appointment cannot proceed without them. Arrive early. The test itself is usually the shortest part of the visit.",
          "You will normally find out whether you passed straight away, before you leave the office.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many questions do you need to get right to pass the Australian citizenship test?",
        a: "You need at least 15 out of 20 correct, which is 75%. Separately, you must answer all 5 Australian values questions correctly, regardless of your overall score.",
      },
      {
        q: "How long does the Australian citizenship test take?",
        a: "You are given 45 minutes for the 20 questions. Most people finish in well under half that, but there is no advantage to rushing.",
      },
      {
        q: "Is the citizenship test hard?",
        a: "The overwhelming majority of applicants pass. It is a recall test based on one short, freely available booklet — but the Australian values section is unforgiving, so it rewards targeted practice over general reading.",
      },
      {
        q: "How many practice tests should I do before sitting the real one?",
        a: "As a rough guide, keep practising until you are scoring 18 or better consistently across several different tests, with no values questions wrong. Consistency across tests matters more than one high score.",
      },
    ],
    related: [
      "australian-values-test-questions",
      "what-happens-if-you-fail-the-australian-citizenship-test",
      "our-common-bond-summary",
    ],
  },

  {
    slug: "australian-values-test-questions",
    title: "Australian Values Test Questions: The 5 You Must Get Right",
    metaTitle: "Australian Values Test Questions — All 5 Must Be Correct",
    metaDescription:
      "Five of the twenty questions on the Australian citizenship test cover Australian values, and you must answer all five correctly to pass. Here is what they cover, how they are worded, and how to be sure of them.",
    short: "Australian values questions",
    readMinutes: 6,
    intro: [
      "Of the 20 questions on the Australian citizenship test, 5 are about Australian values — and unlike the rest of the test, there is no margin for error on them. Get one wrong and you fail the whole test, even with a perfect score elsewhere.",
      "This is the section worth over-preparing.",
    ],
    sections: [
      {
        h2: "Why values questions are scored differently",
        paras: [
          "Since the values section was strengthened, the Department of Home Affairs has treated understanding of Australian values as a threshold requirement rather than a topic among topics. The reasoning is that a citizen can reasonably forget the year of Federation, but should not be uncertain about whether violence against family members is acceptable, or whether men and women are equal before the law.",
          "So the five values questions function as their own pass/fail gate sitting inside the larger test.",
        ],
      },
      {
        h2: "What the values questions cover",
        list: [
          "Freedom of speech and expression — including its limits, such as speech that incites violence",
          "Freedom of religion and secular government — Australia has no official state religion, and people may follow any religion or none",
          "Freedom of association — the right to join or not join organisations, unions, or political parties",
          "Equality before the law — the same laws apply to everyone, including governments and officials",
          "Equality of men and women — in law, in the workplace, in marriage and in the family",
          "Equality of opportunity and the 'fair go' — that people should get ahead by effort and talent, not by birth or connections",
          "Peacefulness and rejection of violence — including that violence against a spouse, partner or child is a serious crime",
          "Mutual respect and tolerance — including respect for people of different backgrounds, and English as the national language",
          "Compassion for those in need",
          "Parliamentary democracy and the rule of law",
        ],
      },
      {
        h2: "How the questions tend to be worded",
        paras: [
          "Values questions are rarely trick questions, but they do rely on absolutes. Watch for words like 'always', 'never', 'must' and 'may'. A statement that is true in a general sense may be false as written because of a single qualifier.",
          "The reliable strategy: answer according to what the values statement says, not according to how things work in practice or in your country of origin. The test is checking your knowledge of the stated commitment.",
        ],
      },
      {
        h2: "The Australian Values Statement",
        paras: [
          "Applicants sign an Australian Values Statement as part of the citizenship process, committing to Australia's democratic beliefs, rights and liberties, and to obeying and living by Australian laws. The content of the values questions maps closely onto that statement — which is why reading it carefully is worth ten minutes of anyone's time.",
        ],
      },
      {
        h2: "How to practise them",
        paras: [
          "Do not practise values questions mixed in with everything else. Isolate them, run through them repeatedly, and confirm you can answer each one without pausing. When you can do a values-only set twice in a row with no errors, you are ready.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many Australian values questions are on the citizenship test?",
        a: "Five of the twenty questions cover Australian values, and all five must be answered correctly.",
      },
      {
        q: "What happens if I get one values question wrong?",
        a: "You fail the test, even if your total score is 19 out of 20. The values section is a separate pass requirement.",
      },
      {
        q: "Do the values questions have their own section in the test?",
        a: "They are not presented as a labelled block — they are mixed among the other questions. That is another reason to treat every question carefully rather than assuming the values questions come first.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "our-common-bond-summary",
      "what-happens-if-you-fail-the-australian-citizenship-test",
    ],
  },

  {
    slug: "what-happens-if-you-fail-the-australian-citizenship-test",
    title: "What Happens If You Fail the Australian Citizenship Test?",
    metaTitle: "Failed the Australian Citizenship Test? What Happens Next",
    metaDescription:
      "Failing the citizenship test is not the end of your application. Here is what happens on the day, how re-sits work, whether you pay again, and what to do differently before your next attempt.",
    short: "If you fail the test",
    readMinutes: 6,
    intro: [
      "Failing the citizenship test feels much worse than it is. It does not cancel your application, it does not affect your visa, and it does not count against you in any permanent way.",
      "Here is what actually happens.",
    ],
    sections: [
      {
        h2: "What happens on the day",
        paras: [
          "You will normally be told your result before you leave the office. If you did not pass, the officer will explain how to arrange another appointment. Your citizenship application stays open — a failed test is treated as an incomplete step, not a rejection.",
        ],
      },
      {
        h2: "Can you sit the test again?",
        paras: [
          "Yes. Applicants are able to re-sit the test, and in practice most people who fail pass comfortably on their second attempt. You will be given a new appointment rather than being able to retake it immediately on the same day.",
          "There are limits: if you repeatedly fail to attend appointments, or repeatedly fail the test, the department can decide your application on the material it has, which can mean refusal. The practical advice is simple — turn up to every appointment, and treat the second attempt seriously.",
        ],
      },
      {
        h2: "Do you have to pay the application fee again?",
        paras: [
          "Re-sitting the test is generally part of the same application you have already paid for, rather than a fresh application with a fresh fee. Because fees and policy are updated periodically, confirm the current position on the Department of Home Affairs website or in your appointment correspondence before assuming either way.",
        ],
      },
      {
        h2: "Missing an appointment is worse than failing one",
        paras: [
          "Failing is a normal, recoverable step. Not showing up is a different category of problem: unexplained non-attendance can lead the department to refuse the application. If you cannot make an appointment, contact them beforehand rather than after.",
        ],
      },
      {
        h2: "What to change before your second attempt",
        olist: [
          "Find out which part you failed. If it was the Australian values questions, that is a five-question problem with a very concentrated fix.",
          "Stop re-reading the book. Switch entirely to practice questions with explanations, which force recall rather than recognition.",
          "Take full 20-question tests rather than short quizzes, so you get used to sustaining attention for the whole thing.",
          "Slow down. You have 45 minutes. Read every question twice, particularly any containing 'not', 'must' or 'always'.",
          "If English is the barrier rather than the content, practise reading the questions aloud — the test is written in plain but formal English, and familiarity with the phrasing helps.",
        ],
      },
      {
        h2: "Who does not have to sit the test at all",
        paras: [
          "Some applicants are not required to sit the test — including applicants aged 60 and over, applicants under 18, and people with certain permanent physical or mental incapacities that prevent them from understanding the nature of the application. Eligibility for an exemption is decided by the department, not by self-assessment, so raise it with them directly if you think it applies to you.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many times can you fail the Australian citizenship test?",
        a: "There is no single published number of permitted attempts, and applicants can re-sit the test. However, repeated failures or repeated non-attendance can result in the department deciding your application without a successful test, which may mean refusal.",
      },
      {
        q: "Does failing the citizenship test affect my visa?",
        a: "No. Your visa status is separate from your citizenship application, and a failed test does not affect it.",
      },
      {
        q: "How soon can I re-sit the test?",
        a: "You will be given a new appointment rather than re-sitting immediately. The wait depends on appointment availability at your office.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "australian-values-test-questions",
      "australian-citizenship-test-appointment-what-to-expect",
    ],
  },

  {
    slug: "australian-citizenship-test-appointment-what-to-expect",
    title: "Your Citizenship Appointment: What to Bring and What to Expect",
    metaTitle: "Australian Citizenship Test Appointment — What to Expect",
    metaDescription:
      "What actually happens at an Australian citizenship appointment: the identity check, the interview, the test itself, what documents to bring, and how long the whole visit takes.",
    short: "The appointment",
    readMinutes: 6,
    intro: [
      "Most of the anxiety about the citizenship test is really anxiety about the appointment — an unfamiliar office, documents you are not sure about, and an officer asking questions.",
      "The visit is more routine than it sounds. Here is the shape of it.",
    ],
    sections: [
      {
        h2: "The three parts of the visit",
        olist: [
          "Identity check — an officer confirms who you are against original documents you bring with you.",
          "Interview — a short conversation confirming your details and, informally, your basic English. This is not an exam.",
          "The test — 20 multiple-choice questions on a computer, 45 minutes, done alone.",
        ],
      },
      {
        h2: "What to bring",
        paras: [
          "Your appointment letter lists the exact documents required for your circumstances, and that list is the authority — but almost everyone needs some combination of the following, as originals rather than photocopies:",
        ],
        list: [
          "Your appointment letter",
          "Your passport, including any expired passports covering your time in Australia",
          "Photo identification with your signature (driver licence or similar)",
          "Your birth certificate, or the identity documents named in your letter",
          "Evidence of any name change, if your name differs across documents",
          "Your Australian visa evidence / ImmiCard if applicable",
        ],
      },
      {
        h2: "The most common problem on the day",
        paras: [
          "It is not the test. It is documents — a name spelled differently across two records, a photocopy instead of an original, or a missing expired passport. Lay everything out the night before and check each item against the letter line by line.",
        ],
      },
      {
        h2: "During the test",
        paras: [
          "You sit at a computer terminal. Questions appear one at a time with multiple-choice answers. You can usually move between questions and review before submitting.",
          "You cannot bring notes, phones or the study book into the test. There is a 45-minute limit, but very few people come close to it.",
        ],
      },
      {
        h2: "After the test",
        paras: [
          "You will normally be told your result before leaving. Passing the test is not the final step — your application still has to be approved, and then you attend a citizenship ceremony, usually run by your local council, where you make the Australian Citizenship Pledge. You are not a citizen until you make that pledge.",
          "Waiting times between approval and a ceremony vary considerably by council.",
        ],
      },
      {
        h2: "Practical tips",
        list: [
          "Arrive 15 to 20 minutes early — offices run to schedule and a late arrival can cost you the appointment",
          "Bring a printed copy of your appointment letter rather than relying on your phone",
          "If you need an interpreter or accessibility support, arrange it in advance with the department, not on the day",
          "If you are unwell or cannot attend, contact them beforehand — non-attendance without explanation is treated seriously",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does the citizenship appointment take?",
        a: "Plan for one to two hours in total, though the test itself is usually finished in 15 to 20 minutes. Most of the time is the identity check, the interview and waiting.",
      },
      {
        q: "Do I find out if I passed on the day?",
        a: "Yes, in most cases you are told your result before you leave the office.",
      },
      {
        q: "Is the citizenship interview an English exam?",
        a: "No. It is a short conversation to confirm your details, during which the officer forms a view about your basic English. There is no separate scored English test for most applicants.",
      },
      {
        q: "Am I a citizen once I pass the test?",
        a: "No. After your application is approved you must attend a citizenship ceremony and make the Australian Citizenship Pledge. Citizenship takes effect at the ceremony.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "what-happens-if-you-fail-the-australian-citizenship-test",
      "how-long-does-australian-citizenship-take",
    ],
  },

  {
    slug: "our-common-bond-summary",
    title: "Our Common Bond: A Summary of the Testable Sections",
    metaTitle: "Our Common Bond Summary — Testable Sections Explained",
    metaDescription:
      "A condensed summary of the four testable parts of Australian Citizenship: Our Common Bond, the official study guide every citizenship test question is drawn from.",
    short: "Our Common Bond summary",
    readMinutes: 9,
    intro: [
      "Australian Citizenship: Our Common Bond is the official study resource published by the Department of Home Affairs, and every question on the citizenship test comes from its testable section.",
      "The book is longer than it needs to be for test purposes, because only part of it is testable. This is a summary of what actually matters.",
    ],
    sections: [
      {
        h2: "Part 1 — Australia and its people",
        paras: [
          "Covers who Australians are and how the country came to be. Key points worth knowing cold:",
        ],
        list: [
          "Aboriginal and Torres Strait Islander peoples are the first peoples of Australia, with the world's oldest continuing cultures",
          "The first British settlement was at Sydney Cove in 1788; 26 January is Australia Day",
          "The six colonies federated to form the Commonwealth of Australia on 1 January 1901",
          "Australia has six states and two mainland territories, each with its own capital",
          "The national flag carries the Union Jack, the Commonwealth Star and the Southern Cross; the Aboriginal and Torres Strait Islander flags are also flags of Australia",
          "The national anthem is Advance Australia Fair; the national colours are green and gold; the national flower is the golden wattle",
          "Anzac Day, 25 April, commemorates the landing at Gallipoli in 1915 and all who have served",
        ],
      },
      {
        h2: "Part 2 — Australia's democratic beliefs, rights and liberties",
        list: [
          "Parliamentary democracy: laws are made by representatives the people elect",
          "The rule of law: everyone, including governments, is subject to the law",
          "Freedom of speech, freedom of association and freedom of religion, each with limits set by law",
          "Equality under the law regardless of sex, race, religion, background or age",
          "Responsibilities of citizens: obey the law, vote in elections, defend Australia if needed, serve on a jury if called",
          "Privileges of citizenship: an Australian passport, standing for Parliament, applying for public service jobs and the Defence Force, registering children born overseas as Australian citizens",
        ],
      },
      {
        h2: "Part 3 — Government and the law in Australia",
        list: [
          "Three levels of government: federal, state or territory, and local — each with different responsibilities",
          "The Australian Constitution is the set of rules by which Australia is governed and can only be changed by referendum",
          "Parliament has two houses: the House of Representatives and the Senate",
          "The party or coalition with the majority in the House of Representatives forms government; its leader is the Prime Minister",
          "Australia's head of state is the monarch, represented in Australia by the Governor-General, and in each state by a Governor",
          "Voting is compulsory for Australian citizens aged 18 and over, and is by secret ballot",
          "The courts are independent of government; the High Court is the highest court",
        ],
      },
      {
        h2: "Part 4 — Australian values",
        paras: [
          "This is the part that must be known perfectly, because all five values questions must be answered correctly. See the dedicated guide for detail, but in summary Australian values include:",
        ],
        list: [
          "Respect for the freedom and dignity of the individual",
          "Freedom of religion, including the freedom not to follow a religion, and a secular government",
          "Commitment to the rule of law and parliamentary democracy",
          "Equality of men and women, and equality of opportunity — the 'fair go'",
          "English as the national language",
          "Mutual respect, tolerance, compassion for those in need, and peacefulness",
        ],
      },
      {
        h2: "The non-testable part",
        paras: [
          "Our Common Bond also contains a substantial non-testable section on Australia's states and territories, achievements, culture and history in more depth. It is genuinely interesting and it will not be examined. If your time is limited, read the testable section and let the rest go.",
        ],
      },
      {
        h2: "Where to get the book",
        paras: [
          "Our Common Bond is published free by the Department of Home Affairs and can be downloaded as a PDF, in English and in a range of other languages, from the citizenship section of the Home Affairs website. Be careful with third-party copies — older editions still circulating online contain material that has since been revised.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to read all of Our Common Bond?",
        a: "No. Only the testable section is examinable. The rest is background reading.",
      },
      {
        q: "Is Our Common Bond free?",
        a: "Yes. The Department of Home Affairs publishes it free as a PDF, in English and other languages.",
      },
      {
        q: "Are the test questions taken word for word from the book?",
        a: "Questions are drawn from the testable section, but they are rephrased rather than copied. Understanding the material matters more than memorising sentences.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "australian-values-test-questions",
      "australian-citizenship-test-questions-and-answers",
    ],
  },

  {
    slug: "australian-citizenship-test-questions-and-answers",
    title: "Australian Citizenship Test Questions and Answers",
    metaTitle: "Australian Citizenship Test Questions and Answers (Free)",
    metaDescription:
      "Free Australian citizenship test questions with answers and explanations, organised by the four testable parts of Our Common Bond. Read them, then test yourself.",
    short: "Questions and answers",
    readMinutes: 5,
    intro: [
      "The fastest way to prepare for the citizenship test is to work through real questions with the answers explained, rather than re-reading the study book.",
      "Every practice test on this site is free and open — no account needed to start — and each question shows you the correct answer with an explanation once you have answered it.",
    ],
    sections: [
      {
        h2: "How the question bank is organised",
        paras: [
          "Questions are grouped by the four testable parts of Our Common Bond, so you can either take a full mixed test that mirrors the real thing, or drill a single part you keep getting wrong.",
        ],
        list: [
          "Part 1 — Australia and its people",
          "Part 2 — Australia's democratic beliefs, rights and liberties",
          "Part 3 — Government and the law in Australia",
          "Part 4 — Australian values",
        ],
      },
      {
        h2: "Sample questions",
        paras: [
          "These give a sense of the style and difficulty. The full sets are linked below.",
        ],
        list: [
          "In what year did the six colonies federate to form the Commonwealth of Australia? — 1901.",
          "What is the name of Australia's national flower? — The golden wattle.",
          "Which of these is a responsibility of Australian citizens aged 18 and over? — To vote in federal and state or territory elections and in referendums.",
          "Should people in Australia be free to follow any religion they choose? — Yes, provided they obey Australian law; Australia also has a secular government with no official state religion.",
          "What does the Southern Cross on the Australian flag represent? — A constellation of stars visible in the southern hemisphere.",
        ],
      },
      {
        h2: "How to use practice questions properly",
        olist: [
          "Answer before you look. The value is entirely in the retrieval attempt, even when you get it wrong.",
          "Read the explanation only for the questions you missed.",
          "Retake the same test two days later — the questions you miss the second time are your real weak points.",
          "Once you are consistently at 18 or better, switch to timed full tests.",
        ],
      },
      {
        h2: "A warning about question banks found online",
        paras: [
          "Our Common Bond has been revised over the years, and a large number of old question lists still circulate on forums and file-sharing sites. Some contain answers that are no longer correct. Use questions built against the current edition of the book, and cross-check anything that surprises you against the official PDF.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are these the real citizenship test questions?",
        a: "No — the actual test questions are not published by the Department of Home Affairs. These are practice questions written against the testable section of Our Common Bond, which is where the real questions come from, in the same format and at the same level.",
      },
      {
        q: "Do I need an account to practise?",
        a: "No. You can start a practice test straight away without signing up. An account only saves your progress across sessions.",
      },
      {
        q: "How many practice questions should I do?",
        a: "Enough to score consistently above 18 out of 20 across several different tests, with no Australian values questions wrong.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "our-common-bond-summary",
      "australian-values-test-questions",
    ],
  },

  {
    slug: "australian-citizenship-test-for-new-zealanders",
    title: "The Australian Citizenship Test for New Zealanders",
    metaTitle: "Australian Citizenship Test for New Zealanders (SCV 444)",
    metaDescription:
      "New Zealand citizens on a Special Category Visa can apply for Australian citizenship directly. Here is how the direct pathway works and whether you still have to sit the citizenship test.",
    short: "For New Zealanders",
    readMinutes: 6,
    intro: [
      "Since 1 July 2023, New Zealand citizens living in Australia on a Special Category (subclass 444) visa have had a direct pathway to Australian citizenship — without first having to obtain a permanent visa.",
      "The most common question that follows is whether the citizenship test still applies. For most applicants, it does.",
    ],
    sections: [
      {
        h2: "What the direct pathway changed",
        paras: [
          "Before July 2023, most New Zealanders in Australia had to secure a permanent residence visa before they could apply for citizenship — an expensive and often slow additional step. The direct pathway removed it: eligible SCV holders can apply for citizenship by conferral directly.",
          "An important detail is the backdating provision: SCV holders who were granted their visa before 1 July 2022 may have their permanent-resident status for citizenship purposes treated as beginning on 1 July 2022, which can bring forward the point at which they meet the 12-month requirement.",
        ],
      },
      {
        h2: "Broad eligibility",
        list: [
          "Hold a Special Category visa (subclass 444)",
          "Have been usually resident in Australia for at least four years",
          "Have been a permanent resident or eligible New Zealand citizen for the 12 months immediately before applying",
          "Have not been absent from Australia for more than 12 months in total in those four years, including no more than 90 days in the final 12 months",
          "Meet character requirements",
          "Intend to reside in, or maintain a close and continuing association with, Australia",
        ],
      },
      {
        h2: "Do New Zealanders sit the citizenship test?",
        paras: [
          "Yes — applicants for citizenship by conferral aged 18 to 59 normally sit the same test as everyone else, including New Zealanders on the direct pathway. Being a New Zealand citizen does not exempt you.",
          "The usual exemptions still apply: applicants aged 60 and over, applicants under 18, and people with certain permanent incapacities are generally not required to sit it.",
          "In practice the test is the least difficult part of the process for most New Zealand applicants, since English is not the barrier — but the content is specific to Australian history, government and values, and it genuinely does need studying. Knowing New Zealand's system of government does not transfer.",
        ],
      },
      {
        h2: "Where New Zealanders most often trip up",
        list: [
          "Assuming familiarity with Australia is the same as knowing the testable content — the questions are about Federation, the Constitution, the three levels of government and the values statement",
          "The residence arithmetic, especially trans-Tasman travel days counting against the absence limits",
          "Not checking whether the backdating provision applies to them, and waiting longer than necessary to apply",
        ],
      },
      {
        h2: "Checking your own position",
        paras: [
          "Eligibility rules and dates in this area have changed more than once, and individual circumstances (time spent overseas, children born in Australia, past visa history) change the answer. Use the Department of Home Affairs website as the authority, and consider a registered migration agent for anything genuinely borderline.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do New Zealand citizens have to take the Australian citizenship test?",
        a: "Yes. Applicants for citizenship by conferral aged 18 to 59 sit the test, including New Zealand citizens applying through the direct pathway.",
      },
      {
        q: "Do New Zealanders need permanent residency before applying for Australian citizenship?",
        a: "Not since 1 July 2023. Eligible SCV subclass 444 holders can apply for citizenship directly without first obtaining a separate permanent visa.",
      },
      {
        q: "How long do New Zealanders need to have lived in Australia?",
        a: "Broadly, four years of lawful residence, with the last 12 months as a permanent resident or eligible New Zealand citizen, subject to absence limits. Check your own dates against the Home Affairs residence requirement.",
      },
    ],
    related: [
      "how-to-pass-the-australian-citizenship-test",
      "how-long-does-australian-citizenship-take",
      "australian-citizenship-test-exemptions",
    ],
  },

  {
    slug: "australian-citizenship-test-exemptions",
    title: "Who Is Exempt from the Australian Citizenship Test?",
    metaTitle: "Australian Citizenship Test Exemptions — Who Doesn't Sit It",
    metaDescription:
      "Not everyone applying for Australian citizenship has to sit the test. Here are the main exemptions — age 60 and over, under 18, and permanent incapacity — and how they are assessed.",
    short: "Test exemptions",
    readMinutes: 5,
    intro: [
      "The citizenship test applies to most applicants for citizenship by conferral aged 18 to 59. Outside that group, and in some specific circumstances inside it, applicants are not required to sit it.",
      "Exemptions are decided by the Department of Home Affairs on the evidence provided — not by self-assessment — so if you think one applies to you, raise it as part of your application.",
    ],
    sections: [
      {
        h2: "Applicants aged 60 and over",
        paras: [
          "Applicants who are 60 years of age or older at the time of application are not required to sit the citizenship test. They will usually still attend an appointment or interview, where identity is confirmed.",
        ],
      },
      {
        h2: "Applicants under 18",
        paras: [
          "Children applying for citizenship do not sit the test. Applications for children are usually made by a responsible parent, and the requirements differ from the adult conferral pathway.",
        ],
      },
      {
        h2: "Permanent physical or mental incapacity",
        paras: [
          "An applicant who, because of a permanent physical or mental incapacity, is unable to understand the nature of the application may not be required to sit the test. This requires supporting medical evidence, and the department assesses each case individually.",
          "There are also provisions relating to significant hearing, speech or sight impairment.",
        ],
      },
      {
        h2: "Other pathways where the test does not apply",
        list: [
          "Citizenship by descent — for people born outside Australia to an Australian citizen parent",
          "Citizenship by adoption in certain circumstances",
          "Resuming citizenship previously held",
        ],
        paras: [
          "These are different application types rather than exemptions from the conferral process, but the practical effect is the same: no citizenship test.",
        ],
      },
      {
        h2: "What an exemption does not remove",
        paras: [
          "An exemption from the test is not an exemption from the rest of the process. Identity, character and residence requirements still apply, an appointment or interview is usually still required, and the citizenship ceremony and pledge remain the final step for conferral applicants.",
        ],
      },
    ],
    faqs: [
      {
        q: "At what age are you exempt from the Australian citizenship test?",
        a: "Applicants aged 60 and over at the time of application are not required to sit the test.",
      },
      {
        q: "Do children have to sit the citizenship test?",
        a: "No. Applicants under 18 do not sit the test.",
      },
      {
        q: "Can I be exempt because my English is poor?",
        a: "No. Limited English is not itself a ground for exemption from the test — basic English is part of what the conferral process assesses. Support such as an interpreter for parts of the appointment can be arranged in advance in some circumstances.",
      },
    ],
    related: [
      "australian-citizenship-test-appointment-what-to-expect",
      "how-to-pass-the-australian-citizenship-test",
      "australian-citizenship-test-for-new-zealanders",
    ],
  },

  {
    slug: "how-long-does-australian-citizenship-take",
    title: "How Long Does Australian Citizenship Take?",
    metaTitle: "How Long Does Australian Citizenship Take? (Timeline)",
    metaDescription:
      "The Australian citizenship timeline from application to ceremony — the residence requirement, processing, the test appointment, approval and the wait for a ceremony.",
    short: "The timeline",
    readMinutes: 6,
    intro: [
      "There are two separate clocks in Australian citizenship: the years of residence you need before you can apply, and the processing time after you do. People often conflate them.",
      "This is the shape of the whole journey.",
    ],
    sections: [
      {
        h2: "Before you can apply — the residence requirement",
        paras: [
          "For citizenship by conferral, the general residence requirement is broadly four years of lawful residence in Australia immediately before applying, with at least the final 12 months as a permanent resident, and absences of no more than 12 months across the four years including no more than 90 days in the final year.",
          "Miscounting absences is one of the most common reasons applications are delayed or refused. Count carefully, and count from your actual travel records rather than memory.",
        ],
      },
      {
        h2: "After you apply",
        olist: [
          "Application lodged and acknowledged",
          "Processing and checks by the Department of Home Affairs",
          "Appointment scheduled — identity check, interview and the citizenship test",
          "Decision on the application",
          "Invitation to a citizenship ceremony",
          "Ceremony and the Australian Citizenship Pledge — you become a citizen at this point",
        ],
      },
      {
        h2: "How long each stage takes",
        paras: [
          "Processing times vary substantially with application volumes, your circumstances, and how complete your application is. The Department of Home Affairs publishes current indicative processing times for citizenship applications, and that page — rather than anecdotes in forums — is the number to rely on.",
          "The ceremony wait is a separate and often underestimated stage. Ceremonies are typically run by local councils, and how long you wait after approval depends heavily on which council area you live in.",
        ],
      },
      {
        h2: "What actually speeds it up",
        list: [
          "A complete application first time — missing documents are the largest self-inflicted delay",
          "Consistent details across every document, including name spellings and dates",
          "Responding immediately to any request for further information",
          "Passing the test on the first attempt, so no second appointment is needed",
          "Keeping your contact details current so appointment invitations reach you",
        ],
      },
      {
        h2: "What does not speed it up",
        paras: [
          "Repeatedly contacting the department for status updates does not move an application forward and consumes the same processing capacity you are waiting on. Check the published processing times, and only follow up if you are outside them or your circumstances have changed.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many years do you need to live in Australia to apply for citizenship?",
        a: "Generally four years of lawful residence immediately before applying, with the final 12 months as a permanent resident, subject to limits on time spent outside Australia.",
      },
      {
        q: "Am I a citizen as soon as my application is approved?",
        a: "No. For conferral applicants, citizenship takes effect when you make the Australian Citizenship Pledge at a ceremony.",
      },
      {
        q: "How long is the wait for a citizenship ceremony?",
        a: "It varies widely by local council. Check current processing information from the Department of Home Affairs and your council.",
      },
    ],
    related: [
      "australian-citizenship-test-appointment-what-to-expect",
      "how-to-pass-the-australian-citizenship-test",
      "australian-citizenship-test-for-new-zealanders",
    ],
  },

  {
    slug: "australian-citizenship-test-booking",
    title: "Booking Your Australian Citizenship Test Appointment",
    metaTitle: "How to Book the Australian Citizenship Test Appointment",
    metaDescription:
      "How the citizenship test appointment is arranged, whether you can choose the date or location, what to do if you need to reschedule, and what happens if you miss it.",
    short: "Booking the test",
    readMinutes: 5,
    intro: [
      "One of the most common misunderstandings about the citizenship test is that you book it yourself, like a driving test. For most applicants, you do not.",
    ],
    sections: [
      {
        h2: "You are invited, you do not book",
        paras: [
          "After you lodge your citizenship application and it reaches the right stage of processing, the Department of Home Affairs contacts you with an appointment. You do not schedule the test independently, and there is no way to bring it forward by applying for it separately.",
          "This is why keeping your contact details up to date with the department matters so much — the appointment invitation goes to the address and email on your application.",
        ],
      },
      {
        h2: "Can you choose the date or office?",
        paras: [
          "Your appointment is scheduled at a Home Affairs office, generally the one closest to the address on your application. Limited rescheduling is possible if you genuinely cannot attend, using the contact details in the appointment correspondence, but you should treat the offered appointment as the appointment.",
        ],
      },
      {
        h2: "If you need to reschedule",
        olist: [
          "Contact the department using the details in your appointment letter, before the appointment date.",
          "Explain the reason. Illness, work travel and family emergencies are ordinary reasons and are handled routinely.",
          "Wait for confirmation of a new appointment — do not simply not attend.",
        ],
      },
      {
        h2: "If you miss it",
        paras: [
          "Failing to attend without contacting the department is treated far more seriously than failing the test. Repeated non-attendance can lead to the application being decided without a successful test, which can mean refusal. If you have already missed an appointment, contact them promptly rather than waiting to be contacted.",
        ],
      },
      {
        h2: "Preparing between application and appointment",
        paras: [
          "The gap between lodging your application and receiving an appointment is often months, and it is the single best window to prepare. The mistake is to wait for the letter and then cram. Work through practice tests periodically during the wait, and you will arrive at the appointment already comfortable with the material.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I book the Australian citizenship test?",
        a: "You generally do not book it. The Department of Home Affairs schedules an appointment and contacts you once your application reaches the relevant stage.",
      },
      {
        q: "Can I reschedule my citizenship test appointment?",
        a: "Limited rescheduling is possible for genuine reasons. Contact the department using the details in your appointment letter before the appointment date.",
      },
      {
        q: "What happens if I do not attend my appointment?",
        a: "Unexplained non-attendance is treated seriously and repeated non-attendance can result in your application being refused. Always contact the department in advance if you cannot attend.",
      },
    ],
    related: [
      "australian-citizenship-test-appointment-what-to-expect",
      "how-long-does-australian-citizenship-take",
      "how-to-pass-the-australian-citizenship-test",
    ],
  },
];

export const guidesBySlug: Record<string, Guide> = Object.fromEntries(
  guides.map((g) => [g.slug, g]),
);

export function getGuide(slug?: string): Guide | undefined {
  return slug ? guidesBySlug[slug] : undefined;
}
