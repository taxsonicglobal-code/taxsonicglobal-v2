import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="TaxSonic Global"
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide text-slate-900">
              TaxSonic Global
            </div>
            <div className="text-xs text-slate-500">
              India • NRI • Global
            </div>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/services"
            className="text-slate-600 transition hover:text-indigo-600"
          >
            Services
          </Link>
          <Link
            href="/services/nri-tax-services"
            className="text-slate-600 transition hover:text-indigo-600"
          >
            NRI
          </Link>
          <Link
            href="/about"
            className="text-slate-600 transition hover:text-indigo-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 transition hover:text-indigo-600"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <a
          href={WHATSAPP}
          className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
