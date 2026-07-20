export default function ServiceAreas({ title, intro, areas }: { title: string; intro: string; areas: string[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
      <div className="rounded-[32px] bg-slate-950 p-8 text-white md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {areas.map((area) => <span key={area} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">{area}</span>)}
        </div>
      </div>
    </section>
  );
}
