import Link from "next/link";

export default function Footer({ locale = "en" }: { locale?: "en" | "ru" }) {
  const trustpilotProfileUrl =
    "https://uk.trustpilot.com/review/cleannestpro.com";

  if (locale === "ru") {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">CleanNestPro</h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Уборка квартир и домов в Анталье с понятным онлайн-запросом и
                поддержкой на русском языке.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium">Услуги</h4>

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="/ru/generalnaya-uborka-antaliya">
                    Генеральная уборка
                  </Link>
                </li>
                <li>
                  <Link href="/ru/uborka-kvartir-antaliya">
                    Уборка квартир
                  </Link>
                </li>
                <li>
                  <Link href="/ru/klining-konyaalti">
                    Клининг в Коньяалты
                  </Link>
                </li>
                <li>
                  <Link href="/#quote-form">Получить расчёт</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium">Районы</h4>

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="/ru/klining-konyaalti">Хурма</Link>
                </li>
                <li>
                  <Link href="/ru/klining-konyaalti">Лиман</Link>
                </li>
                <li>
                  <Link href="/ru/klining-konyaalti">Коньяалты</Link>
                </li>
                <li>
                  <Link href="/cleaning-service-muratpasa">Муратпаша</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium">Компания</h4>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>
                  <strong>Generation Beta Digital Ltd</strong>
                </p>

                <p>Company No: 16274319</p>
                <p>ICO No: ZB883806</p>

                <a
                  href={trustpilotProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium underline decoration-emerald-500 underline-offset-4 transition hover:text-emerald-700"
                >
                  CleanNestPro на Trustpilot
                  <span aria-hidden="true">↗</span>
                </a>

                <div>
                  <Link
                    href="/"
                    className="inline-block underline transition hover:text-black"
                  >
                    English version
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} CleanNestPro. Все права защищены.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.15fr_0.8fr_0.8fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              CleanNestPro
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              Private home cleaning in Antalya for expats, holiday homeowners,
              and guest-ready properties. Designed around trust, calm
              communication, and international expectations.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "English support",
                "Türkçe support",
                "Russian support",
                "Secure Stripe payments",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Services
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link
                  href="/deep-cleaning-antalya"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Deep cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/apartment-cleaning-antalya"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Apartment cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/villa-cleaning-antalya"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Villa cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/airbnb-cleaning-antalya"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Airbnb cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/move-in-move-out-cleaning-antalya"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Move in / move out
                </Link>
              </li>
              <li>
                <Link
                  href="/#quote-form"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Areas
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link
                  href="/cleaning-service-konyaalti"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Konyaaltı cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/cleaning-service-konyaalti"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Hurma cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/cleaning-service-muratpasa"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Muratpaşa cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/cleaning-service-muratpasa"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Lara cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Work with us
                </Link>
              </li>
              <li>
                <Link
                  href="/ru"
                  lang="ru"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Русская версия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Company &amp; trust
            </h4>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <p>
                <strong>Generation Beta Digital Ltd</strong>
              </p>

              <p>
                3rd Floor, 86–90 Paul Street
                <br />
                London EC2A 4NE, UK
              </p>

              <p>Company No: 16274319</p>
              <p>ICO No: ZB883806</p>
              <p>Quote requests handled by email</p>
              <p>Internationally trusted payment infrastructure via Stripe</p>

              <a
                href={trustpilotProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-slate-900 underline decoration-emerald-500 underline-offset-4 transition hover:text-emerald-700 dark:text-slate-100 dark:hover:text-emerald-400"
              >
                View our Trustpilot profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} CleanNestPro. All rights reserved.</p>

            <p className="text-xs text-slate-400 dark:text-slate-500">
              UK-based, Antalya-connected, and designed for clients who value
              clarity, trust, and international standards.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-black dark:hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/about"
              className="transition hover:text-black dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/apply"
              className="transition hover:text-black dark:hover:text-white"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}