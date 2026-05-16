import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { MessageCircle, X, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { faqs, searchFAQs, quickTopics, type FAQ } from "@/lib/faq-data";
import { Link } from "wouter";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  category?: string;
}

export interface SupportChatHandle {
  open: () => void;
}

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

function botMsg(text: string, category?: string): Message {
  return { id: uid(), from: "bot", text, category };
}

const WELCOME_TEXT =
  "Hi! 👋 I'm Joy, your citizenship test study assistant. Pick a topic below or type your question.";

export const SupportChat = forwardRef<SupportChatHandle>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([botMsg(WELCOME_TEXT)]);
  const [input, setInput] = useState("");
  const [showChips, setShowChips] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({ open: () => setOpen(true) }));

  useEffect(() => {
    if (open) setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [messages, open]);

  const push = (...msgs: Message[]) => setMessages(prev => [...prev, ...msgs]);

  const handleQuickTopic = (faq: FAQ) => {
    setShowChips(false);
    push(
      { id: uid(), from: "user", text: faq.question },
      botMsg(faq.answer, faq.category),
    );
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setInput("");
    setShowChips(false);
    push({ id: uid(), from: "user", text });

    setTimeout(() => {
      const results = searchFAQs(text);
      if (results.length === 0) {
        push(botMsg(
          "I'm not sure about that one. You can email us at support@citizenshiptest.com.au or visit the Help page for a full FAQ.",
        ));
        setShowChips(true);
      } else {
        push(botMsg(results[0].answer, results[0].category));
      }
    }, 380);
  };

  return (
    <>
      {/* Floating trigger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open support chat"
          className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50
            w-14 h-14 rounded-full shadow-lg flex items-center justify-center
            bg-[#002F6C] hover:bg-[#001F4E] text-white transition-colors
            ring-2 ring-[#F5A200]/60"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50
            w-[calc(100vw-2rem)] max-w-sm rounded-2xl shadow-2xl border
            bg-background flex flex-col overflow-hidden"
          style={{ height: "min(540px, calc(100vh - 120px))" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ background: "#002F6C" }}>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-[#F5A200]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-none">Joy</p>
              <p className="text-xs text-blue-300 mt-0.5">Your study assistant</p>
            </div>
            <Link href="/help" onClick={() => setOpen(false)}>
              <span className="text-xs text-blue-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer mr-2">
                Help page
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-blue-300 hover:text-white transition-colors p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-4 py-3">
            <div className="space-y-3">
              {messages.map(msg =>
                msg.from === "bot" ? (
                  <div key={msg.id} className="flex items-start gap-2 max-w-[90%]">
                    <div className="w-7 h-7 rounded-full bg-[#002F6C] flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#F5A200]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line">
                        {msg.text}
                      </div>
                      {msg.category && (
                        <p className="text-[11px] text-muted-foreground pl-1">
                          Category: <span className="font-medium">{msg.category}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-[#002F6C] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-sm max-w-[80%] leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                )
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          {/* Quick topic chips */}
          {showChips && (
            <div className="px-3 pb-2 pt-2 border-t flex flex-wrap gap-1.5 shrink-0">
              {quickTopics.map(t => {
                const faq = faqs.find(f => f.id === t.faqId);
                if (!faq) return null;
                return (
                  <button
                    key={t.faqId}
                    onClick={() => handleQuickTopic(faq)}
                    className="text-xs px-2.5 py-1 rounded-full border border-[#002F6C]/30
                      text-[#002F6C] dark:border-blue-400/30 dark:text-blue-300
                      hover:bg-[#002F6C] hover:text-white dark:hover:bg-blue-700
                      transition-colors"
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={e => { e.preventDefault(); handleSend(input); }}
            className="flex items-center gap-2 px-3 py-3 border-t bg-background shrink-0"
          >
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 text-sm h-9"
            />
            <Button
              type="submit"
              size="icon"
              className="h-9 w-9 shrink-0 bg-[#002F6C] hover:bg-[#001F4E]"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
});

SupportChat.displayName = "SupportChat";
