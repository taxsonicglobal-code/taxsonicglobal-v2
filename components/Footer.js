import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-bold text-white">TaxSonic Global</h3>
            <p className="mt-3 text-sm text-slate-400">
              Trusted tax & compliance services for India, NRIs and global
              businesses.
            </p>
            <a
              href={WHATSAPP}
              className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
            >
              WhatsApp Us
            </a>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services">GST Registration</Link></li>
              <li><Link href="/services">Company Registration</Link></li>
              <li><Link href="/services">LLP Registration</Link></li>
              <li><Link href="/services">FSSAI License</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/services/nri-tax-services">NRI Services</Link></li>
            </ul>
          </div>

          {/* TRUST */}
          <div>
            <h4 className="font-semibold text-white">Trust</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>✔ Government compliant</li>
              <li>✔ Secure document handling</li>
              <li>✔ WhatsApp-first support</li>
              <li>📍 Lucknow, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
