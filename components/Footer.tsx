import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              CleanNestPro
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Premium home cleaning in Antalya for expats, Airbnb hosts, and
              holiday homeowners.
            </p>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              English • Russian support
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Navigation
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <a href="#services" className="transition hover:text-black dark:hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition hover:text-black dark:hover:text-white">
                  Why us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition hover:text-black dark:hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#quote-form" className="transition hover:text-black dark:hover:text-white">
                  Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>Antalya, Turkey</p>
              <p>Quote requests handled by email</p>
              <p>Secure international payment options available</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} CleanNestPro. All rights reserved.</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Designed for international clients. Discreet, reliable, and premium service.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition hover:text-black dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-black dark:hover:text-white">
              Terms
            </Link>
            <Link href="/about" className="transition hover:text-black dark:hover:text-white">
              About
            </Link>
            <Link href="/apply" className="transition hover:text-black dark:hover:text-white">
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}