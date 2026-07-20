export type Benefit = { title: string; text: string };

export default function ServiceBenefits({ items }: { items: Benefit[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 md:px-8">
      <div className="grid gap-5 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-3 md:p-9">
        {items.map((item) => (
          <article key={item.title}>
            <h2 className="font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
