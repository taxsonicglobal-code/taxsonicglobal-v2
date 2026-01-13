"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="TaxSonic Global" className="h-9 w-auto" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-slate-900">
                TaxSonic Global
              </div>
              <div className="text-xs text-slate-500">
                India • NRI • Global
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/services" className="text-slate-600 hover:text-indigo-600">
              Services
            </Link>
            <Link
              href="/services/nri-tax-services"
              className="text-slate-600 hover:text-indigo-600"
            >
              NRI
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <a
            href={WHATSAPP}
            className="hidden rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:scale-105 md:inline-block"
          >
            WhatsApp
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <nav className="flex flex-col gap-4 text-sm font-medium">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-indigo-600"
                >
                  Services
                </Link>
                <Link
                  href="/services/nri-tax-services"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-indigo-600"
                >
                  NRI Services
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-indigo-600"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-indigo-600"
                >
                  Contact
                </Link>

                <a
                  href={WHATSAPP}
                  className="mt-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2 text-center font-semibold text-black shadow"
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
