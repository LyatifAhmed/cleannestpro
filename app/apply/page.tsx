// app/apply/page.tsx
"use client";

import { FormEvent, useState } from "react";

type LanguageOption = "English" | "Russian" | "Turkish" | "Ukrainian" | "Other";

type CleanerApplyForm = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  languages: LanguageOption[];
  availability: string;
  hasSupplies: string;
  transport: string;
  notes: string;
};

const WHATSAPP_NUMBER = "905000000000"; // change this

const languageOptions: LanguageOption[] = [
  "English",
  "Russian",
  "Turkish",
  "Ukrainian",
  "Other",
];

const initialState: CleanerApplyForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  experience: "",
  languages: [],
  availability: "",
  hasSupplies: "No",
  transport: "No",
  notes: "",
};

function buildCleanerWhatsAppMessage(data: CleanerApplyForm) {
  const languages =
    data.languages.length > 0 ? data.languages.join(", ") : "Not specified";

  return `Hello, I would like to apply to work with CleanNestPro.

Full name: ${data.fullName}
Phone / WhatsApp: ${data.phone}
Email: ${data.email || "Not provided"}
Location: ${data.location}
Cleaning experience: ${data.experience || "Not provided"}
Languages: ${languages}
Availability: ${data.availability || "Not provided"}
Can bring supplies: ${data.hasSupplies}
Has transport: ${data.transport}

Notes:
${data.notes || "None"}`;
}

export default function ApplyPage() {
  const [form, setForm] = useState<CleanerApplyForm>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof CleanerApplyForm>(
    key: K,
    value: CleanerApplyForm[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleLanguage(language: LanguageOption) {
    setForm((prev) => {
      const exists = prev.languages.includes(language);
      return {
        ...prev,
        languages: exists
          ? prev.languages.filter((item) => item !== language)
          : [...prev.languages, language],
      };
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = buildCleanerWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);
    window.open(url, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900 dark:bg-[#0b1020] dark:text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.08),transparent_25%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Work with CleanNestPro
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Join our trusted cleaning network in Antalya
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We are building a small, reliable network of detail-oriented
              cleaners for premium homes, holiday properties, and short-term
              rentals. If you take pride in your work and want to be part of a
              more thoughtful service experience, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-semibold">Who we are looking for</h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• Reliable and detail-oriented cleaners</li>
                <li>• People who care about presentation and consistency</li>
                <li>• Experience with homes, villas, or short-term rentals is a plus</li>
                <li>• Professional communication and punctuality matter</li>
                <li>• English, Russian, Turkish, or Ukrainian language skills are valuable</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-200 bg-[#f6f3ee] p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Why apply</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• Premium client base</li>
                <li>• Better organised communication</li>
                <li>• Clearer job details before confirmation</li>
                <li>• Opportunity to work with international clients</li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8"
          >
            <h2 className="text-2xl font-semibold">Apply to work with us</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Fill in a few details below and your application will open in
              WhatsApp for review.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field>
                <Label>Full name</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </Field>

              <Field>
                <Label>Phone / WhatsApp</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+90 ..."
                  required
                />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field>
                <Label>Area in Antalya</Label>
                <Input
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="Where are you based?"
                  required
                />
              </Field>

              <Field className="md:col-span-2">
                <Label>Cleaning experience</Label>
                <Textarea
                  value={form.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  placeholder="Tell us about your experience with apartments, villas, Airbnb cleaning, deep cleaning, etc."
                />
              </Field>

              <Field className="md:col-span-2">
                <Label>Languages you speak</Label>
                <div className="flex flex-wrap gap-3">
                  {languageOptions.map((language) => {
                    const active = form.languages.includes(language);
                    return (
                      <button
                        key={language}
                        type="button"
                        onClick={() => toggleLanguage(language)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          active
                            ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                        }`}
                      >
                        {language}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field>
                <Label>Availability</Label>
                <Input
                  value={form.availability}
                  onChange={(e) => updateField("availability", e.target.value)}
                  placeholder="Weekdays, weekends, mornings..."
                />
              </Field>

              <Field>
                <Label>Can you bring supplies?</Label>
                <Select
                  value={form.hasSupplies}
                  onChange={(e) => updateField("hasSupplies", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </Field>

              <Field>
                <Label>Do you have transport?</Label>
                <Select
                  value={form.transport}
                  onChange={(e) => updateField("transport", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </Field>

              <Field className="md:col-span-2">
                <Label>Anything else we should know?</Label>
                <Textarea
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="You can mention experience, availability, areas you prefer, or anything useful for your application."
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
              >
                Send application on WhatsApp
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                Open WhatsApp directly
              </a>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                Your application has been prepared and opened in WhatsApp.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={5}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}