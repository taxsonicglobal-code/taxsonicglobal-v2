import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="TaxSonic Global" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="font-bold text-slate-900">TaxSonic Global</div>
            <div className="text-xs text-slate-500">
              India • NRI • Global Clients
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-slate-600 hover:text-slate-900" href="/services">
            Services
          </Link>
          <Link className="text-slate-600 hover:text-slate-900" href="/services/nri-tax-services">
            NRI
          </Link>
          <Link className="text-slate-600 hover:text-slate-900" href="/about">
            About
          </Link>
          <Link className="text-slate-600 hover:text-slate-900" href="/contact">
            Contact
          </Link>
        </nav>

        <a
          href={WHATSAPP}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400 transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
