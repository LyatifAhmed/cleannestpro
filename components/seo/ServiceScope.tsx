type Props = { title: string; intro?: string; items: string[] };

export default function ServiceScope({ title, intro, items }: Props) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      {intro ? <p className="mt-4 leading-7 text-slate-600">{intro}</p> : null}
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">✓ {item}</li>)}
      </ul>
    </section>
  );
}
