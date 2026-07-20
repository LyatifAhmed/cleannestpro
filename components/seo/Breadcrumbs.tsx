import Link from "next/link";

export default function Breadcrumbs({ current, locale = "en" }: { current: string; locale?: "en" | "ru" }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href={locale === "ru" ? "/ru" : "/"} className="transition hover:text-slate-900">{locale === "ru" ? "Главная" : "Home"}</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-slate-700">{current}</li>
      </ol>
    </nav>
  );
}
