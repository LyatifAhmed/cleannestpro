import Link from "next/link";

type FooterProps = {
  whatsappNumber: string;
};

export default function Footer({ whatsappNumber }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              CleanNestPro
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Premium home cleaning in Antalya for expats, Airbnb hosts, and
              holiday homeowners.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              English • Russian • Ukrainian support
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Navigation</h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-black transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-black transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#quote-form" className="hover:text-black transition">
                  Get a quote
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Contact</h4>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Antalya, Turkey</p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-black transition"
              >
                WhatsApp
              </a>

              <p>Secure international payment options available</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} CleanNestPro. All rights reserved.
            </p>

            <p className="text-xs text-slate-400">
              Designed for international clients. Discreet, reliable, and premium service.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-black transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-black transition">
              Terms
            </Link>

            <Link href="/apply" className="hover:text-black transition opacity-80 hover:opacity-100">
  Work with us
</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}