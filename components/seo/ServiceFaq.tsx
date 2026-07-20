export type Faq = { question: string; answer: string };

export default function ServiceFaq({ items }: { items: Faq[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200">
          {items.map((item) => (
            <article key={item.question} className="py-6 first:pt-0 last:pb-0">
              <h3 className="font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-3 max-w-4xl leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
