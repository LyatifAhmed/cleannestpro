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
  canInvoice: string;
  acceptsFeedback: string;
  performsFinalCheck: string;
  qualityCommitment: boolean;
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
  canInvoice: "No",
  acceptsFeedback: "Yes",
  performsFinalCheck: "Yes",
  qualityCommitment: false,
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
        alert("Lütfen formu dikkatlice doldurmak için biraz daha zaman ayırın.");
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
        throw new Error(data?.error || "Başvuru gönderilemedi.");
      }

      setSubmitted(true);
      setForm(createInitialState());
    } catch (error) {
      console.error(error);
      alert("Başvuru gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.");
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
              CleanNestPro hizmet ağına katılın
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Antalya’daki seçkin hizmet ağımıza katılın
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Antalya’da özenle seçilmiş, sınırlı sayıda profesyonel temizlik
              ekibi ve bireysel hizmet sağlayıcıyla çalışıyoruz. İşinizi zamanında
              ve eksiksiz teslim ediyor, müşterilerle saygılı iletişim kuruyor ve
              geri bildirimi hizmetin doğal bir parçası olarak görüyorsanız
              başvurunuzu bekliyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Türkçe, İngilizce ve Rusça müşteri desteği",
                "Bireysel ve kurumsal başvuru",
                "Planlı ve açık iletişim",
                "Avrupa standartlarında hizmet anlayışı",
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
              <h2 className="text-2xl font-semibold">Kimlerle çalışıyoruz?</h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• Ayrıntılara önem veren, güvenilir bireysel temizlik görevlileri</li>
                <li>• Fatura kesebilen profesyonel temizlik şirketleri ve ekipleri</li>
                <li>• Daire, villa, tatil evi ve misafir girişine hazırlık deneyimi olanlar</li>
                <li>• Randevu saatine uyan ve gecikme durumunda önceden haber verenler</li>
                <li>• Uluslararası müşterilerle saygılı ve profesyonel iletişim kurabilenler</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[30px] border border-slate-200 bg-[#f6f3ee] p-7 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Sizden beklediğimiz hizmet standardı</h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>• İşe başlamadan önce verilen görev listesini dikkatle kontrol etmeniz</li>
                <li>• Temizlik bitmeden müşteriye özellikle kontrol edilmesini istediği bir yer olup olmadığını sormanız</li>
                <li>• Müşterinin makul geri bildirimlerini savunmaya geçmeden dinleyip gerekli düzeltmeyi yapmanız</li>
                <li>• Teslimden önce kendi son kalite kontrolünüzü gerçekleştirmeniz</li>
                <li>• Fiyat, kapsam, gecikme veya ek masraf konusunda sürpriz yaratmamanız</li>
                <li>• Talep edildiğinde yapılan işe uygun fatura düzenleyebilmeniz</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[30px] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Başvurular nasıl değerlendiriliyor?</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Her başvuruyu deneyim, iletişim, hizmet bölgesi, ekip yapısı ve
                kalite yaklaşımı açısından inceliyoruz. Her başvuruyla ilerleme
                garantisi vermiyoruz. Uygun bulunan iş ortaklarıyla önce detayları
                görüşebilir, gerektiğinde deneme hizmeti veya referans isteyebiliriz.
                Bizim için ağın büyüklüğünden çok müşteri güveni ve tutarlı hizmet
                kalitesi önemlidir.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none md:p-9"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Web sitesi</label>
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
                      {type === "Individual Cleaner" ? "Bireysel başvuru" : "Şirket / ekip başvurusu"}
                    </button>
                  );
                }
              )}
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              {isCompany ? "Şirket veya ekip olarak başvurun" : "Bireysel olarak başvurun"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Aşağıdaki bilgileri mümkün olduğunca açık ve eksiksiz paylaşın.
              Başvurunuzu e-posta yoluyla değerlendireceğiz. Türkçenin yanında
              İngilizce veya Rusça iletişim kurabilmek önemli bir avantajdır.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field>
                <Label>{isCompany ? "Yetkili kişinin adı soyadı" : "Adınız soyadınız"}</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder={isCompany ? "İletişim kurulacak yetkili" : "Adınız ve soyadınız"}
                  required
                />
              </Field>

              {isCompany ? (
                <Field>
                  <Label>Şirket / ekip adı</Label>
                  <Input
                    value={form.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Ticari adınız veya ekip adınız"
                    required
                  />
                </Field>
              ) : (
                <Field>
                  <Label>Telefon</Label>
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
                  <Label>Telefon</Label>
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
                <Label>Antalya’da hizmet verdiğiniz bölgeler</Label>
                <Input
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="Örn. Muratpaşa, Konyaaltı, Lara, Kemer"
                  required
                />
              </Field>

              {isCompany ? (
                <Field>
                  <Label>Yaklaşık ekip büyüklüğü</Label>
                  <Input
                    value={form.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                    placeholder="Örn. 3 temizlik görevlisi"
                  />
                </Field>
              ) : (
                <Field>
                  <Label>Çalışma günleri ve saatleri</Label>
                  <Input
                    value={form.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    placeholder="Hafta içi, hafta sonu, sabah, akşam..."
                  />
                </Field>
              )}

              {isCompany ? (
                <Field>
                  <Label>Çalışma günleri ve saatleri</Label>
                  <Input
                    value={form.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    placeholder="Genel müsaitlik durumunuz"
                  />
                </Field>
              ) : null}

              <Field className="md:col-span-2">
                <Label>
                  {isCompany ? "Şirket / ekip deneyimi" : "Temizlik deneyiminiz"}
                </Label>
                <Textarea
                  value={form.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  placeholder={
                    isCompany
                      ? "Ekibinizi, kaç yıldır çalıştığınızı, hizmet verdiğiniz konut türlerini ve müşteri deneyiminizi anlatın."
                      : "Daire, villa, Airbnb / tatil evi, detaylı temizlik gibi alanlardaki deneyiminizi anlatın."
                  }
                />
              </Field>

              <Field className="md:col-span-2">
                <Label>Konuşabildiğiniz diller</Label>
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
                        {{ English: "İngilizce", Russian: "Rusça", Turkish: "Türkçe", Other: "Diğer" }[language]}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field>
                <Label>Temizlik malzemesi ve ekipman sağlayabilir misiniz?</Label>
                <Select
                  value={form.hasSupplies}
                  onChange={(e) => updateField("hasSupplies", e.target.value)}
                >
                  <option value="Yes">Evet</option>
                  <option value="No">Hayır</option>
                </Select>
              </Field>

              <Field>
                <Label>Ulaşım için kendi aracınız var mı?</Label>
                <Select
                  value={form.transport}
                  onChange={(e) => updateField("transport", e.target.value)}
                >
                  <option value="Yes">Evet</option>
                  <option value="No">Hayır</option>
                </Select>
              </Field>

              <Field>
                <Label>Verdiğiniz hizmet için fatura kesebilir misiniz?</Label>
                <Select value={form.canInvoice} onChange={(e) => updateField("canInvoice", e.target.value)} required>
                  <option value="Yes">Evet</option>
                  <option value="No">Hayır</option>
                </Select>
              </Field>

              <Field>
                <Label>Müşteri geri bildirimini kabul edip gerekli düzeltmeyi yapar mısınız?</Label>
                <Select value={form.acceptsFeedback} onChange={(e) => updateField("acceptsFeedback", e.target.value)} required>
                  <option value="Yes">Evet</option>
                  <option value="No">Hayır</option>
                </Select>
              </Field>

              <Field className="md:col-span-2">
                <Label>İşten ayrılmadan önce müşteriye “Özellikle kontrol etmemizi istediğiniz başka bir yer var mı?” diye sorup son kontrol yapar mısınız?</Label>
                <Select value={form.performsFinalCheck} onChange={(e) => updateField("performsFinalCheck", e.target.value)} required>
                  <option value="Yes">Evet, bunu standart teslim sürecimizin parçası yapabiliriz</option>
                  <option value="No">Hayır</option>
                </Select>
              </Field>

              <Field className="md:col-span-2">
                <Label>Başvurunuzla ilgili eklemek istediğiniz başka bir bilgi var mı?</Label>
                <Textarea
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="Referanslarınızı, sosyal medya veya web sitenizi, tercih ettiğiniz bölgeleri ya da hizmet yaklaşımınızı paylaşabilirsiniz."
                />
              </Field>

              <Field className="md:col-span-2">
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-[#f6f3ee] p-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    checked={form.qualityCommitment}
                    onChange={(e) => updateField("qualityCommitment", e.target.checked)}
                    required
                  />
                  <span>CleanNestPro müşterilerine zamanında, saygılı ve özenli hizmet sunmamız beklendiğini; makul geri bildirimlerde gerekli düzeltmeleri yapmamız ve müşteriden ayrılmadan önce son kontrol istememiz gerektiğini anlıyorum.</span>
                </label>
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-slate-900"
              >
                {sending ? "Gönderiliyor..." : "Başvuruyu gönder"}
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Başvurunuz gönderildi.
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-700/90 dark:text-emerald-200/90">
                  Teşekkür ederiz. Başvurunuzu dikkatle inceleyeceğiz. İş birliği için uygunluk olması hâlinde sizinle e-posta veya telefon yoluyla iletişime geçeceğiz.
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