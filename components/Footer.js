import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-bold text-white">
              TaxSonic Global
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Professional tax & compliance services for Indian businesses,
              startups, NRIs, and global clients — delivered with clarity,
              speed, and trust.
            </p>

            <a
              href={WHATSAPP}
              className="mt-5 inline-block rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-black shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services/gst-registration" className="hover:text-white">GST Registration</Link></li>
              <li><Link href="/services/private-limited-company" className="hover:text-white">Private Limited Company</Link></li>
              <li><Link href="/services/llp-registration" className="hover:text-white">LLP Registration</Link></li>
              <li><Link href="/services/opc-registration" className="hover:text-white">OPC Registration</Link></li>
              <li><Link href="/services/fssai-registration" className="hover:text-white">FSSAI Registration</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/services/nri-tax-services" className="hover:text-white">NRI Services</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* TRUST */}
          <div>
            <h4 className="font-semibold text-white">Trust & Compliance</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>✔ Government-compliant filings</li>
              <li>✔ Secure document handling</li>
              <li>✔ WhatsApp-first support</li>
              <li>✔ India • NRI • Global clients</li>
              <li>📍 Lucknow, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-slate-800" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
          </p>
          <p>
            Built for trust • Designed for growth
          </p>
        </div>
      </div>
    </footer>
  );
}
