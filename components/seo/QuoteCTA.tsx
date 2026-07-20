import Link from "next/link";

export default function QuoteCTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
      <div className="rounded-[32px] bg-[#f0ebe3] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{text}</p>
        </div>
        <Link href="/#quote-form" className="mt-6 inline-flex shrink-0 items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 font-medium text-white transition hover:opacity-90 md:mt-0">Request your quote</Link>
      </div>
    </section>
  );
}
