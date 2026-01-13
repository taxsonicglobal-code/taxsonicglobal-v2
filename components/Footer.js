import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="font-bold text-slate-900">TaxSonic Global</div>
          <p className="mt-2 text-sm text-slate-600">
            Tax, compliance & business setup — made simple for India, NRIs and global clients.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            📍 Lucknow, Uttar Pradesh, India – 226010
          </p>
          <p className="text-sm text-slate-600">📧 info@taxsonicglobal.com</p>
          <p className="text-sm text-slate-600">📞 +91 8858118918</p>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="text-slate-600 hover:text-slate-900" href="/services">
              Services
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/services/nri-tax-services">
              NRI Services
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/about">
              About Us
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Service Pages</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="text-slate-600 hover:text-slate-900" href="/services/company-registration">
              Company Registration
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/services/gst-services">
              GST Services
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/services/income-tax-filing">
              Income Tax Filing
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/services/global-services">
              Global Services
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
      </div>
    </footer>
  );
}
