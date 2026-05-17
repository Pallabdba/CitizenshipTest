export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const faqCategories = [
  "Getting Started",
  "Practice Tests",
  "Flashcards",
  "Progress & Results",
  "Account & Subscription",
  "The Citizenship Test",
  "Study Tips",
] as const;

export const faqs: FAQ[] = [
  // ── Getting Started ──────────────────────────────────────────────────────
  {
    id: "gs-1",
    category: "Getting Started",
    question: "How do I start using Australian Citizenship Pro?",
    answer:
      "After signing in, you land on the Dashboard. From there you can jump into Practice Tests, browse Study materials by category, or use Flashcards for quick revision. We recommend reading the Study Guide first, then testing yourself with Practice Tests.",
    keywords: ["start", "begin", "how to use", "new", "first", "getting started", "sign in", "login"],
  },
  {
    id: "gs-2",
    category: "Getting Started",
    question: "What is the Dashboard?",
    answer:
      "The Dashboard is your home screen. It shows your overall progress, recent activity, quick-start buttons for each study category, and a summary of how many questions you've answered correctly.",
    keywords: ["dashboard", "home", "overview", "summary", "main page"],
  },
  {
    id: "gs-3",
    category: "Getting Started",
    question: "What study material is this app based on?",
    answer:
      "All questions and content are aligned with the official 'Our Common Bond' PDF — the same guide published by the Australian Department of Home Affairs that is used in the real citizenship test.",
    keywords: ["material", "content", "based on", "common bond", "official", "source", "book"],
  },
  {
    id: "gs-4",
    category: "Getting Started",
    question: "How do I change the colour theme?",
    answer:
      "Click the palette icon (🎨) in the top-right corner on desktop, or in the top header on mobile. You can choose from 11 colour themes. Your choice is saved automatically.",
    keywords: ["theme", "colour", "color", "palette", "appearance", "change colour", "dark"],
  },

  // ── Practice Tests ────────────────────────────────────────────────────────
  {
    id: "pt-1",
    category: "Practice Tests",
    question: "How do I take a practice test?",
    answer:
      "Go to the Test page from the sidebar or bottom navigation. Choose a category or take a mixed test. Each test presents multiple-choice questions. After submitting, you'll see your score and review any mistakes.",
    keywords: ["test", "practice", "quiz", "question", "exam", "take test", "start test"],
  },
  {
    id: "pt-2",
    category: "Practice Tests",
    question: "How many questions are in each test?",
    answer:
      "A standard practice test contains 20 questions, matching the format of the real Australian citizenship test. You can also choose specific categories to focus on particular topics.",
    keywords: ["how many questions", "test length", "number of questions", "20 questions"],
  },
  {
    id: "pt-3",
    category: "Practice Tests",
    question: "Can I review my wrong answers after a test?",
    answer:
      "Yes! After each test, go to the Results page to see which questions you got wrong. You can also visit the Reviews page in the sidebar to see all questions you've previously answered incorrectly, so you can focus on your weak areas.",
    keywords: ["wrong answers", "review", "mistakes", "incorrect", "results", "after test"],
  },
  {
    id: "pt-4",
    category: "Practice Tests",
    question: "What categories of questions are available?",
    answer:
      "Questions are grouped into three main categories matching the real test:\n• Australia's democratic beliefs, rights and liberties\n• Government and the law in Australia\n• Australian values\n\nYou can practice any category individually or take a mixed test.",
    keywords: ["categories", "topics", "democratic", "government", "values", "sections"],
  },
  {
    id: "pt-5",
    category: "Practice Tests",
    question: "Is the pass mark the same as the real test?",
    answer:
      "The real test requires 15 correct answers out of 20 (75%). Our practice tests show you your score percentage and highlight whether you'd pass or need more study, using the same 75% benchmark.",
    keywords: ["pass mark", "pass rate", "75%", "passing score", "how many to pass", "benchmark"],
  },

  // ── Flashcards ────────────────────────────────────────────────────────────
  {
    id: "fc-1",
    category: "Flashcards",
    question: "How do Flashcards work?",
    answer:
      "Flashcards show you a question on the front. Tap or click the card to flip it and reveal the answer. Mark it as 'Got it' or 'Review again' to track your confidence. Cards you mark for review will appear more often.",
    keywords: ["flashcard", "flash card", "flip", "card", "how flashcard", "study card"],
  },
  {
    id: "fc-2",
    category: "Flashcards",
    question: "Can I filter flashcards by category?",
    answer:
      "Yes. On the Flashcards page, select a specific study category from the dropdown to only see flashcards for that topic. This is great for targeted revision before focusing on a specific section.",
    keywords: ["filter flashcard", "category flashcard", "specific topic", "filter", "select category"],
  },

  // ── Progress & Results ────────────────────────────────────────────────────
  {
    id: "pr-1",
    category: "Progress & Results",
    question: "Where can I see my progress?",
    answer:
      "The Progress page (sidebar → Progress) shows your performance over time, including score trends, questions answered per category, and your improvement rate. The Dashboard also shows a quick progress summary.",
    keywords: ["progress", "performance", "statistics", "stats", "improvement", "track"],
  },
  {
    id: "pr-2",
    category: "Progress & Results",
    question: "How do I see my past test results?",
    answer:
      "Go to the Results page from the sidebar. You'll see a history of every practice test you've taken, with date, score, and a breakdown by category. Click any result to review the individual questions.",
    keywords: ["past results", "history", "previous tests", "results page", "test history"],
  },
  {
    id: "pr-3",
    category: "Progress & Results",
    question: "Does my progress save automatically?",
    answer:
      "Yes, all your test results, flashcard scores, and progress data are saved automatically to your account as long as you are signed in. Your data is stored securely and syncs across devices.",
    keywords: ["save", "auto save", "data", "sync", "cloud", "lost progress", "progress saved"],
  },

  // ── Account & Subscription ────────────────────────────────────────────────
  {
    id: "ac-1",
    category: "Account & Subscription",
    question: "What is the difference between free and premium?",
    answer:
      "Free accounts get access to a limited set of practice questions and basic progress tracking. Premium (weekly or monthly plan) unlocks all 400+ questions, full progress analytics, unlimited flashcards, and priority support.",
    keywords: ["free", "premium", "difference", "subscription", "upgrade", "plan", "pro", "paid"],
  },
  {
    id: "ac-2",
    category: "Account & Subscription",
    question: "How do I upgrade to premium?",
    answer:
      "Click 'Upgrade' in the sidebar (or visit the Pricing page). Choose a weekly or monthly plan and complete payment. Your account upgrades instantly and all features unlock immediately.",
    keywords: ["upgrade", "subscribe", "buy", "premium", "pay", "pricing", "plan", "purchase"],
  },
  {
    id: "ac-3",
    category: "Account & Subscription",
    question: "How do I sign out?",
    answer:
      "Scroll to the bottom of the sidebar and click 'Sign Out'. On mobile, open the hamburger menu (top-left) and scroll to the bottom.",
    keywords: ["sign out", "logout", "log out", "signout"],
  },
  {
    id: "ac-4",
    category: "Account & Subscription",
    question: "I forgot my password. How do I reset it?",
    answer:
      "On the login screen, click 'Forgot password?' and enter your email address. You'll receive a reset link within a few minutes. Check your spam folder if you don't see it.",
    keywords: ["password", "forgot", "reset", "forgot password", "lost password", "email reset"],
  },
  {
    id: "ac-5",
    category: "Account & Subscription",
    question: "Can I use this on my phone?",
    answer:
      "Yes! Australian Citizenship Pro is a website — not a native app on the App Store or Google Play. Simply open your phone browser (Chrome or Safari) and go to:\n\nhttps://pallabdba.github.io/CitizenshipTest\n\nFor the best experience, add it to your home screen:\n• iPhone (Safari): tap the Share button → 'Add to Home Screen'\n• Android (Chrome): tap the 3-dot menu → 'Add to Home Screen'\n\nIt will open like an app from your home screen. No download needed.",
    keywords: ["mobile", "phone", "tablet", "responsive", "app", "android", "iphone", "ios", "download", "install", "home screen"],
  },
  {
    id: "ac-6",
    category: "Account & Subscription",
    question: "Is there a mobile app to download?",
    answer:
      "No dedicated mobile app is available at this time — Australian Citizenship Pro is a web-based tool you access through your browser.\n\nOpen your phone browser and visit:\nhttps://pallabdba.github.io/CitizenshipTest\n\nYou can add it to your phone's home screen for quick access (see 'Can I use this on my phone?' above). A native mobile app may be available in the future.",
    keywords: ["mobile app", "download", "app store", "google play", "native app", "install", "android app", "ios app"],
  },

  // ── The Citizenship Test ──────────────────────────────────────────────────
  {
    id: "ct-1",
    category: "The Citizenship Test",
    question: "What is the Australian citizenship test?",
    answer:
      "The Australian citizenship test is a 20-question multiple-choice test administered by the Department of Home Affairs. You need to score 75% (15/20) to pass. It covers Australian values, democracy, government, and history.",
    keywords: ["citizenship test", "real test", "what is", "australian test", "official test"],
  },
  {
    id: "ct-2",
    category: "The Citizenship Test",
    question: "How do I book the real citizenship test?",
    answer:
      "You can book the real citizenship test through the Department of Home Affairs website. Visit immi.homeaffairs.gov.au and navigate to the citizenship test booking portal. You must be eligible to apply for citizenship before booking.",
    keywords: ["book test", "book appointment", "schedule test", "real test", "home affairs", "apply"],
  },
  {
    id: "ct-3",
    category: "The Citizenship Test",
    question: "Who needs to take the citizenship test?",
    answer:
      "Most applicants for Australian citizenship aged 18–59 must pass the citizenship test. Applicants under 18, those over 60, or those with a permanent physical or cognitive incapacity may be exempt.",
    keywords: ["who needs", "eligible", "exempt", "age", "requirement", "who has to"],
  },
  {
    id: "ct-4",
    category: "The Citizenship Test",
    question: "How long do I have to complete the real test?",
    answer:
      "There is no fixed time limit for the real citizenship test — you can take as long as you need. However, most people complete it within 45 minutes. Practice tests in this app have no timer either.",
    keywords: ["time limit", "time", "how long", "timer", "duration", "minutes"],
  },

  // ── Study Tips ────────────────────────────────────────────────────────────
  {
    id: "st-1",
    category: "Study Tips",
    question: "What is the best way to study for the citizenship test?",
    answer:
      "1. Read the Study Guide (based on 'Our Common Bond') at least once.\n2. Practice with flashcards to memorise key facts.\n3. Take practice tests regularly and review your wrong answers.\n4. Focus extra time on categories where your score is below 75%.\n5. Aim for consistent 90%+ scores before booking your real test.",
    keywords: ["best way", "study tips", "how to study", "tips", "advice", "prepare", "preparation"],
  },
  {
    id: "st-2",
    category: "Study Tips",
    question: "How long does it take to prepare for the test?",
    answer:
      "Most people are ready in 1–2 weeks of focused study (30–60 minutes per day). If you are new to Australian history and government, allow 3–4 weeks. Use the Progress page to see when your scores consistently hit 85%+.",
    keywords: ["how long", "preparation time", "weeks", "days", "ready", "time to study"],
  },
  {
    id: "st-3",
    category: "Study Tips",
    question: "Which topics are most commonly tested?",
    answer:
      "The most common topics are:\n• Australian values (freedom, democracy, rule of law)\n• How parliament works (House of Representatives, Senate)\n• Rights and responsibilities of citizens\n• Key dates and historical facts (Federation 1901, ANZAC Day)\n• The role of the Head of State and Governor-General",
    keywords: ["common topics", "important topics", "what to study", "focus", "frequently asked", "most tested"],
  },
];

export function searchFAQs(query: string, limit = 3): FAQ[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const scored = faqs.map(faq => {
    let score = 0;
    if (faq.question.toLowerCase().includes(q)) score += 10;
    if (faq.answer.toLowerCase().includes(q)) score += 5;
    faq.keywords.forEach(kw => {
      if (q.includes(kw) || kw.includes(q)) score += 3;
      const qWords = q.split(/\s+/);
      qWords.forEach(word => { if (kw.includes(word) && word.length > 2) score += 1; });
    });
    return { faq, score };
  });
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.faq);
}

export const quickTopics = [
  { label: "How to take a test", faqId: "pt-1" },
  { label: "Study tips", faqId: "st-1" },
  { label: "What is premium?", faqId: "ac-1" },
  { label: "How flashcards work", faqId: "fc-1" },
  { label: "View my progress", faqId: "pr-1" },
  { label: "About the real test", faqId: "ct-1" },
  { label: "Use on my phone", faqId: "ac-5" },
  { label: "Is there a mobile app?", faqId: "ac-6" },
] as const;
