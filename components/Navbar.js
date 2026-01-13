"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TaxSonic Global"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
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
            {["Services", "NRI", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={
                  item === "NRI"
                    ? "/services/nri-tax-services"
                    : `/${item.toLowerCase()}`
                }
                className="relative text-slate-600 transition-all duration-300 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href={WHATSAPP}
            className="hidden rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105 md:inline-block"
          >
            WhatsApp
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden animate-fadeIn">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <nav className="flex flex-col gap-4 text-sm font-medium">
                {[
                  ["Services", "/services"],
                  ["NRI Services", "/services/nri-tax-services"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    href={link}
                    onClick={() => setOpen(false)}
                    className="text-slate-700 transition hover:text-indigo-600"
                  >
                    {label}
                  </Link>
                ))}

                <a
                  href={WHATSAPP}
                  className="mt-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2 text-center font-semibold text-black shadow transition hover:-translate-y-0.5"
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
