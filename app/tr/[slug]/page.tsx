import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";

const pages = {
  "luks-villa-temizligi-antalya": {
    heroImage: "/antalya-luks-villa-temizligi.webp",
    heroAlt: "Antalya lüks villasında profesyonel temizlik ve özenli yaşam alanı hazırlığı",
    title: "Antalya Lüks Villa Temizliği | CleanNestPro",
    description: "Antalya'da lüks villa ve müstakil evler için profesyonel temizlik koordinasyonu. Konyaaltı, Lara ve çevresinde seçilmiş yerel ekipler, yazılı teklif ve takip.",
    heading: "Antalya'da lüks villa temizliği",
    intro: "Villanızın büyüklüğü, hassas yüzeyleri ve kullanım takvimi farklı bir yaklaşım gerektirir. CleanNestPro, uygun bağımsız yerel temizlik ekipleriyle ihtiyaçlarınızı yazılı şekilde koordine eder.",
    needs: ["Sezon açılışı ve uzun süre boş kalan villa hazırlığı", "Misafir gelişi öncesi mutfak, banyo ve yaşam alanlarının temizliği", "Teras, balkon, geniş camlar ve ek işlerin ayrı kapsamlandırılması", "Ev sahibi Antalya dışında olduğunda erişim ve teslimat koordinasyonu"],
    location: "Konyaaltı, Lara, Kundu ve Antalya çevresinde hizmet uygunluğu mülk adresine, işe ve partner kapasitesine göre teyit edilir.",
    faq: [["Villa temizliği fiyatı ne kadar?", "Fiyat metrekare, oda ve banyo sayısı, mülkün durumu, tercih edilen tarih ve ek işlere göre değişir. Formu doldurduğunuzda tahmini aralık görebilir, nihai yazılı teklif isteyebilirsiniz."],["Villada olmam şart mı?", "Hayır. Anahtar teslimi ve erişim detayları önceden yazılı olarak kararlaştırılabiliyorsa uzaktan koordinasyon talep edebilirsiniz."]],
  },
  "profesyonel-ev-temizligi-antalya": {
    heroImage: "/antalya-profesyonel-ev-temizligi.webp",
    heroAlt: "Antalya modern rezidansında profesyonel ev temizliği yapılan aydınlık yaşam alanı",
    title: "Antalya Profesyonel Ev Temizliği | CleanNestPro",
    description: "Antalya Konyaaltı, Lara ve Muratpaşa için profesyonel ev temizliği teklifleri. Türkçe iletişim, bağımsız yerel partnerler ve şeffaf hizmet koordinasyonu.",
    heading: "Antalya'da profesyonel ev temizliği",
    intro: "Daireniz veya rezidansınız için güvenilir, planlı ve açık iletişimli bir temizlik hizmeti mi arıyorsunuz? CleanNestPro ihtiyacınıza uygun yerel partnerleri araştırır, kapsamı ve fiyatı yazılı olarak netleştirir.",
    needs: ["Düzenli ve tek seferlik daire temizliği", "Taşınma öncesi veya sonrası hazırlık", "Detaylı mutfak, banyo ve yaşam alanı temizliği", "Rezidans, yazlık ve kısa süreli kullanılan konutların hazırlanması"],
    location: "Konyaaltı, Hurma, Liman, Muratpaşa, Lara ve yakın bölgeler için teklif talebi oluşturabilirsiniz. Her adres için uygunluk ayrıca kontrol edilir.",
    faq: [["Ücret nasıl hesaplanıyor?", "Oda, banyo, metrekare, temizlik tipi ve seçilen ek hizmetlere göre tahmini fiyat aralığı hesaplanır. Nihai teklif uygun yerel sağlayıcıyla teyit edilir."],["Temizlik malzemesi getirilir mi?", "İhtiyaç formunda malzeme talebinizi belirtebilirsiniz; kapsam ve olası ek ücret teklif öncesinde açıklanır."]],
  },
  "detayli-temizlik-antalya": {
    heroImage: "/antalya-detayli-temizlik.webp",
    heroAlt: "Antalya konutunda banyo mermer yüzeylerinde detaylı ve özenli temizlik",
    title: "Antalya Detaylı Ev Temizliği | CleanNestPro",
    description: "Antalya detaylı ev temizliği ve derinlemesine temizlik hizmeti. Daire, rezidans ve villalar için yazılı kapsam, yerel ekip koordinasyonu ve teklif.",
    heading: "Antalya'da detaylı ev temizliği",
    intro: "Standart günlük temizliğin ötesinde bir yenileme gerektiğinde, öncelikleri ve ek işleri en baştan tanımlıyoruz. CleanNestPro yerel hizmet sağlayıcısıyla zaman, kapsam ve beklentileri netleştirmeye yardımcı olur.",
    needs: ["Uzun süre kullanılmayan konutların kapsamlı temizliği", "Taşınma ve sezon başlangıcı öncesi derin temizlik", "İç camlar, fırın, buzdolabı ve dolap içi gibi isteğe bağlı işler", "Koltuk, yatak ve perde gibi uzman ekipman isteyen işlerin ayrı değerlendirilmesi"],
    location: "Konyaaltı, Lara, Muratpaşa ve Antalya'nın uygun hizmet alanlarında talepler ayrı ayrı incelenir.",
    faq: [["Detaylı temizlikte neler dahildir?", "İş kapsamı mülk bilgilerine ve seçilen ek hizmetlere göre yazılı teklifte belirlenir. Koltuk, yatak ve perde temizliğini otomatik olarak dahil varsaymayın."],["Aynı gün rezervasyon yapılabilir mi?", "Tarih talebinizi iletebilirsiniz, fakat randevu yerel partner uygunluğu ve yazılı onay tamamlanmadan kesinleşmez."]],
  },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in pages)) return { title: "Sayfa bulunamadı | CleanNestPro", robots: { index: false } };
  const p = pages[slug as Slug];
  const url = `https://www.cleannestpro.com/tr/${slug}`;
  return {
    title: p.title, description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, locale: "tr_TR", siteName: "CleanNestPro", type: "website", images: [{ url: p.heroImage, alt: p.heroAlt, width: 1200, height: 900 }] },
  };
}

export default async function TurkishServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pages)) {
    const { notFound } = await import("next/navigation");
    notFound();
  }
  const p = pages[slug as Slug];
  const url = `https://www.cleannestpro.com/tr/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service", name: p.heading,
    url, description: p.description,
    provider: { "@type": "Organization", name: "CleanNestPro", url: "https://www.cleannestpro.com" },
    areaServed: { "@type": "City", name: "Antalya", address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" } },
    availableLanguage: ["tr", "en", "ru"],
  };
  return (
    <main lang="tr" className="min-h-screen bg-[#fcfbf8] text-slate-900">
      <Script id={`tr-service-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="overflow-hidden bg-[#122522] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1fr_1.05fr] md:gap-12 md:px-8 md:py-20">
          <div>
            <Link href="/" className="text-sm font-semibold tracking-wide text-emerald-100">CleanNestPro</Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Antalya • Profesyonel temizlik koordinasyonu</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">{p.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{p.intro}</p>
            <Link href={`/?lang=tr&service=${encodeURIComponent(slug === "detayli-temizlik-antalya" ? "Deep Cleaning" : "Regular Home Cleaning")}${slug === "luks-villa-temizligi-antalya" ? "&property=Villa%20%2F%20Large%20Home" : ""}#quote-form`} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[#122522] transition hover:bg-emerald-50">Ücretsiz teklif talep et</Link>
            <p className="mt-4 text-sm text-slate-300">Talep oluşturmak ücretsizdir. Randevu ve nihai fiyat yazılı onaydan sonra kesinleşir.</p>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#1c3530] shadow-2xl shadow-black/20 md:aspect-[4/5] lg:aspect-[5/4]">
            <Image
              src={p.heroImage}
              alt={p.heroAlt}
              fill
              priority
              quality={78}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
              className="object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10231f]/30 via-transparent to-transparent" />
          </figure>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
        <div>
          <h2 className="text-3xl font-semibold">Size nasıl yardımcı oluyoruz?</h2>
          <p className="mt-5 leading-8 text-slate-600">Mülkünüzün ihtiyaçlarını öğreniyor, uygun bağımsız temizlik hizmeti sağlayıcılarını araştırıyor ve zamanlama, kapsam, ek işler ve ödemeyi açık şekilde koordine ediyoruz. Temizlik sahada bağımsız yerel ekip tarafından gerçekleştirilir.</p>
          <ul className="mt-7 space-y-4">{p.needs.map((item) => <li className="flex gap-3 text-slate-700" key={item}><span className="text-emerald-700">✓</span>{item}</li>)}</ul>
        </div>
        <aside className="self-start rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold">Hizmet bölgeleri</h2>
          <p className="mt-4 leading-7 text-slate-600">{p.location}</p>
          <h3 className="mt-7 text-lg font-semibold">Neden CleanNestPro?</h3>
          <p className="mt-3 leading-7 text-slate-600">Türkçe iletişim, yazılı hizmet kapsamı, uluslararası ödeme altyapısı ve hizmet sonrası takip. Bağımsız yerel partnerlerin çalışmasını koordine ediyoruz.</p>
        </aside>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Sık sorulan sorular</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{p.faq.map(([q,a]) => <div key={q} className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold">{q}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{a}</p></div>)}</div>
          <div className="mt-12 rounded-3xl bg-[#f1f6f2] p-8"><h2 className="text-2xl font-semibold">Eviniz için doğru ekibi bulalım</h2><p className="mt-3 text-slate-600">Mülkünüzü ve ihtiyaçlarınızı paylaşın; uygunluk ve teklif sürecini sizin için koordine edelim.</p><Link href={`/?lang=tr&service=${encodeURIComponent(slug === "detayli-temizlik-antalya" ? "Deep Cleaning" : "Regular Home Cleaning")}${slug === "luks-villa-temizligi-antalya" ? "&property=Villa%20%2F%20Large%20Home" : ""}#quote-form`} className="mt-6 inline-block rounded-full bg-[#122522] px-6 py-3 font-semibold text-white">Teklif iste</Link></div>
          <nav className="mt-12 flex flex-wrap gap-4 text-sm">{Object.entries(pages).filter(([key])=>key!==slug).map(([key,val])=><Link className="text-emerald-800 underline" key={key} href={`/tr/${key}`}>{val.heading}</Link>)}</nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
