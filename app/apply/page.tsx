"use client";

import { FormEvent, useState } from "react";

type ApplicationType = "Individual Cleaner" | "Cleaning Company";

type LanguageOption = "English" | "Russian" | "Turkish" | "Other";

type CleanerApplyForm = {
  applicationType: ApplicationType;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  languages: LanguageOption[];
  availability: string;
  hasSupplies: string;
  transport: string;
  teamSize: string;
  notes: string;
  website: string;
  formStartedAt: number;
};

const languageOptions: LanguageOption[] = [
  "English",
  "Russian",
  "Turkish",
  "Other",
];

const createInitialState = (): CleanerApplyForm => ({
  applicationType: "Individual Cleaner",
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  location: "",
  experience: "",
  languages: [],
  availability: "",
  hasSupplies: "No",
  transport: "No",
  teamSize: "",
  notes: "",
  website: "",
  formStartedAt: Date.now(),
});

export default function ApplyPage() {
  const [form, setForm] = useState<CleanerApplyForm>(createInitialState());
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);

    try {
      if (form.website.trim() !== "") {
        setSending(false);
        return;
      }

      const secondsOnForm = Math.floor((Date.now() - form.formStartedAt) / 1000);

      if (secondsOnForm < 4) {
        setSending(false);
        alert("Please take a little more time to complete the form.");
        return;
      }

      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send application.");
      }

      setSubmitted(true);
      setForm(createInitialState());
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending the application.");
    } finally {
      setSending(false);
    }
  }

  const isCompany = form.applicationType === "Cleaning Company";

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900 dark:bg-[#0b1020] dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.08),transparent_25%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Work with CleanNestPro
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Join our selected service network in Antalya
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              We work with a limited number of carefully selected local cleaners
              and cleaning firms in Antalya. If you value presentation,
              punctuality, and professional communication, we would be happy to
              hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "English, Turkish & Russian support",
                "Individual and company applications welcome",
                "Better organised communication",
                "Premium client-facing standard",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-semibold">Who we work with</h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• Reliable individual cleaners with strong attention to detail</li>
                <li>• Local cleaning firms with a professional standard</li>
                <li>• Teams experienced with apartments, villas, and guest-ready homes</li>
                <li>• Service partners who communicate clearly and show up on time</li>
                <li>• People comfortable serving international clients</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[30px] border border-slate-200 bg-[#f6f3ee] p-7 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Why partners apply</h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• Access to a more premium client profile</li>
                <li>• Better structured communication before confirmation</li>
                <li>• Clearer briefing and service expectations</li>
                <li>• Opportunity to work with English, Turkish, and Russian-speaking clients</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[30px] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">How applications are reviewed</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                We review applications carefully and may decide not to move
                forward with every enquiry. CleanNestPro is intentionally
                selective about who joins the network, because client trust and
                delivery quality matter more than scale.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none md:p-9"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => updateField("website", e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {(["Individual Cleaner", "Cleaning Company"] as ApplicationType[]).map(
                (type) => {
                  const active = form.applicationType === type;

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField("applicationType", type)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  );
                }
              )}
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              {isCompany ? "Apply as a company" : "Apply as an individual"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Submit your details below and we’ll review your application by
              email. Clear communication in English, Turkish, and Russian is a
              strong advantage.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field>
                <Label>{isCompany ? "Main contact name" : "Full name"}</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder={isCompany ? "Main contact person" : "Your full name"}
                  required
                />
              </Field>

              {isCompany ? (
                <Field>
                  <Label>Company name</Label>
                  <Input
                    value={form.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Your company name"
                    required
                  />
                </Field>
              ) : (
                <Field>
                  <Label>Phone</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+90 ..."
                    required
                  />
                </Field>
              )}

              {!isCompany ? null : (
                <Field>
                  <Label>Phone</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+90 ..."
                    required
                  />
                </Field>
              )}

              <Field>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  required
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

              {isCompany ? (
                <Field>
                  <Label>Approx team size</Label>
                  <Input
                    value={form.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                    placeholder="e.g. 3 cleaners"
                  />
                </Field>
              ) : (
                <Field>
                  <Label>Availability</Label>
                  <Input
                    value={form.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    placeholder="Weekdays, weekends, mornings..."
                  />
                </Field>
              )}

              {isCompany ? (
                <Field>
                  <Label>Availability</Label>
                  <Input
                    value={form.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    placeholder="Typical availability"
                  />
                </Field>
              ) : null}

              <Field className="md:col-span-2">
                <Label>
                  {isCompany ? "Company / team experience" : "Cleaning experience"}
                </Label>
                <Textarea
                  value={form.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  placeholder={
                    isCompany
                      ? "Tell us about your team, the kinds of homes you handle, service areas, and client experience."
                      : "Tell us about your experience with apartments, villas, Airbnb cleaning, deep cleaning, etc."
                  }
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
                  placeholder="You can mention availability, preferred areas, experience, company profile, or anything useful for your application."
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-slate-900"
              >
                {sending ? "Sending..." : "Submit application by email"}
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Your application has been sent.
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-700/90 dark:text-emerald-200/90">
                  Thank you. We’ll review it carefully and get back to you by email if there is a fit.
                </p>
              </div>
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