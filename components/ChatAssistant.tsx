"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starterMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi — I’m the CleanNestPro assistant. I can help with service fit, likely pricing, and the best next step. What kind of cleaning are you looking for?",
  },
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-clean-chat", handler);
    return () => window.removeEventListener("open-clean-chat", handler);
  }, []);

  async function sendMessage() {
    const value = input.trim();
    if (!value || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: value },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as { reply: string };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "I’d be happy to help. You can also request a detailed quote by email below.",
        },
      ]);

      setTimeout(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 60);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m sorry — the assistant is temporarily unavailable. You can still request a quote by email below.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-950 px-5 py-4 text-sm font-medium text-white shadow-xl transition hover:opacity-90 dark:bg-white dark:text-slate-900"
      >
        {open ? "Close assistant" : "Ask the assistant"}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#101726]"
          >
            <div className="border-b border-slate-200 px-5 py-4 dark:border-white/10">
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                CleanNestPro Assistant
              </div>
              <div className="mt-1 text-lg font-semibold">
                Instant guidance before requesting a quote
              </div>
            </div>

            <div
              ref={scrollRef}
              className="max-h-[420px] space-y-4 overflow-y-auto px-4 py-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-slate-100"
                      : "ml-auto bg-slate-950 text-white dark:bg-white dark:text-slate-900"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {loading ? (
                <div className="max-w-[85%] rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-500 dark:bg-white/10 dark:text-slate-300">
                  Thinking...
                </div>
              ) : null}

              <div className="rounded-2xl border border-slate-200 bg-[#f6f3ee] p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Once you feel ready, you can request a detailed quote by email
                  using the form on the page.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4 dark:border-white/10">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Ask about service fit, price range, areas..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/25 dark:focus:ring-white/10"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-slate-900"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}