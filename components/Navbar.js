"use client";

import { useState } from "react";
import Link from "next/link";
import ContactSlideOver from "./ContactSlideOver";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          
          {/* Logo + Brand */}
          <Link href="/" className="group flex items-center gap-4">
            <img
              src="/logo.png"
              alt="TaxSonic Global"
              className="h-14 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="leading-tight">
              <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                TaxSonic Global
              </div>
              <div className="text-xs font-medium text-slate-500">
                India • NRI • Global Clients
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/services" className="text-slate-600 hover:text-slate-900">
              Services
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition"
          >
            Get Expert Help
          </button>
        </div>
      </header>

      {/* SLIDE-OVER CONTACT FORM */}
      <ContactSlideOver open={open} onClose={() => setOpen(false)} />
    </>
  );
}
