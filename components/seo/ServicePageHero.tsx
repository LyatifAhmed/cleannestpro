import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

type Props = { eyebrow: string; title: string; intro: string; breadcrumb: string };

export default function ServicePageHero({ eyebrow, title, intro, breadcrumb }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:px-8 md:pb-20 md:pt-14">
      <Breadcrumbs current={breadcrumb} />
      <div className="mt-12 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-slate-950 md:text-6xl md:leading-[1.05]">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">{intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/#quote-form" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 font-medium text-white transition hover:opacity-90">Request a detailed quote</Link>
          <Link href="/#how-it-works" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-800 transition hover:bg-slate-50">How it works</Link>
        </div>
      </div>
    </section>
  );
}
