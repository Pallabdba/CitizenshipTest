import { useState } from "react";
import {
  ChevronDown, ChevronUp, MessageCircle, BookOpen, FileText,
  CreditCard, TrendingUp, Star, HelpCircle,
} from "lucide-react";
import { faqs, faqCategories } from "@/lib/faq-data";
import { openJoyChat } from "@/components/support-chat";

const howToSteps = [
  {
    icon: BookOpen,
    title: "1. Read the Study Guide",
    desc: "Start with the Study Guide (sidebar → Study). It covers all topics from the official 'Our Common Bond' PDF. Read through each section at least once before attempting tests.",
  },
  {
    icon: CreditCard,
    title: "2. Revise with Flashcards",
    desc: "Go to Flashcards and flip through cards by category. Mark ones you know as 'Got it' and ones you're unsure about as 'Review again'. Repeat until you're confident.",
  },
  {
    icon: FileText,
    title: "3. Take Practice Tests",
    desc: "Head to the Test page and take a full 20-question test. Try each category individually first, then take mixed tests. Aim for 90%+ before booking the real test.",
  },
  {
    icon: TrendingUp,
    title: "4. Review Mistakes",
    desc: "After each test, visit Results to see what you got wrong. The Reviews page collects all your incorrect answers so you can focus on weak spots.",
  },
  {
    icon: Star,
    title: "5. Track Your Progress",
    desc: "The Progress page shows your score trends over time. When you're consistently scoring above 85–90%, you're ready for the real citizenship test.",
  },
];

function AccordionItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors gap-3"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-sm font-medium">{faq.question}</span>
        {open
          ? <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground" />
          : <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed whitespace-pre-line border-t bg-muted/20">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...faqCategories];
  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="max-w-3xl mx-auto space-y-10 pb-16">

      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#002F6C]/10 mb-1">
          <HelpCircle className="w-7 h-7 text-[#002F6C]" />
        </div>
        <h1 className="text-3xl font-bold">Help & Guide</h1>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          Everything you need to know about using Australian Citizenship Pro. Chat with Joy, our study assistant, or browse the FAQ below.
        </p>
        <button
          onClick={() => openJoyChat()}
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full
            bg-[#002F6C] text-white text-sm font-medium hover:bg-[#001F4E] transition-colors shadow"
        >
          <MessageCircle className="w-4 h-4" />
          Chat with Joy
        </button>
      </div>

      {/* Access on phone banner */}
      <section className="rounded-2xl border border-[#002F6C]/20 bg-[#002F6C]/5 p-5 flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-[#002F6C]/10 flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5 text-[#002F6C]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#002F6C]">No mobile app — use the website</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Australian Citizenship Pro is a <strong>website</strong>, not an app on the App Store or Google Play.
            Open your phone browser and visit{" "}
            <a
              href="https://pallabdba.github.io/CitizenshipTest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002F6C] underline underline-offset-2 font-medium"
            >
              pallabdba.github.io/CitizenshipTest
            </a>. You can add it to your home screen for app-like access.
          </p>
        </div>
      </section>

      {/* How to use */}
      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#002F6C]" />
          How to Use This Website
        </h2>
        <div className="grid gap-4">
          {howToSteps.map(step => (
            <div key={step.title}
              className="flex gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#002F6C]/10 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-[#002F6C]" />
              </div>
              <div>
                <p className="font-semibold text-sm">{step.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick tips */}
      <section className="rounded-2xl border bg-[#002F6C]/5 p-6">
        <h2 className="text-lg font-bold mb-3 text-[#002F6C] dark:text-blue-300">
          Quick Tips for Success
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            "The real test is 20 questions — you need 15 correct (75%) to pass.",
            "Focus on the three main categories: Values, Democracy, and Government.",
            "Key dates: Federation (1901), ANZAC Day (25 April), Australia Day (26 January).",
            "Use flashcards daily for 10 minutes — spaced repetition beats cramming.",
            "Your data is saved automatically — no need to start from scratch each session.",
            "Consistently scoring 90%+ in practice? You're ready for the real test!",
          ].map(tip => (
            <li key={tip} className="flex gap-2">
              <span className="text-[#F5A200] font-bold shrink-0">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#002F6C]" />
          Frequently Asked Questions
        </h2>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
                activeCategory === cat
                  ? "bg-[#002F6C] text-white border-[#002F6C]"
                  : "text-muted-foreground border-border hover:border-[#002F6C]/50 hover:text-[#002F6C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map(faq => <AccordionItem key={faq.id} faq={faq} />)}
        </div>
      </section>

      {/* Still need help */}
      <section className="text-center rounded-2xl border p-8 space-y-3">
        <MessageCircle className="w-10 h-10 text-[#002F6C] mx-auto" />
        <h2 className="text-lg font-bold">Still need help?</h2>
        <p className="text-sm text-muted-foreground">
          Joy can answer most questions instantly. For anything else, email us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
          <button
            onClick={() => openJoyChat()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
              bg-[#002F6C] text-white text-sm font-medium hover:bg-[#001F4E] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with Joy
          </button>
        </div>
      </section>

    </div>
  );
}
