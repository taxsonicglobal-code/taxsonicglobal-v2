"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO + BRAND */}
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="TaxSonic Global"
              className="h-14 w-auto"
            />

            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-wide text-white">
                TaxSonic Global
              </div>
              <div className="text-sm text-slate-300">
                Clarity in Compliance. Confidence in Growth.
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link
              href="/services"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              Services
            </Link>
            <Link
              href="/services/nri-tax-services"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              NRI Services
            </Link>
            <Link
              href="/about"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <a
            href={WHATSAPP}
            className="hidden rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-2 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:inline-block"
          >
            WhatsApp
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden">
            <div className="mb-4 rounded-2xl bg-slate-900 p-4 shadow-xl">
              <nav className="flex flex-col gap-4 text-sm">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-emerald-400"
                >
                  Services
                </Link>
                <Link
                  href="/services/nri-tax-services"
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-emerald-400"
                >
                  NRI Services
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-emerald-400"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-emerald-400"
                >
                  Contact
                </Link>

                <a
                  href={WHATSAPP}
                  className="mt-2 rounded-xl bg-emerald-500 px-4 py-2 text-center font-semibold text-black"
                >
                  WhatsApp Us
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
