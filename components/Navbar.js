"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SlideOverContact from "./SlideOverContact";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Listen to global CTA events
  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-contact", openHandler);
    return () => window.removeEventListener("open-contact", openHandler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          {/* LOGO + BRAND */}
          <Link href="/" className="flex items-center gap-4 group">
            <img
              src="/logo.png"
              alt="TaxSonic Global"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />

            <div className="leading-tight">
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                TaxSonic Global
              </div>
              <div className="text-sm md:text-base text-slate-300">
                India | NRI | Global Clients
              </div>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-slate-200">
            <Link
              href="#services"
              className="hover:text-emerald-400 transition"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-emerald-400 transition"
            >
              About
            </Link>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-black hover:bg-emerald-400 transition shadow-lg"
          >
            Talk to an Expert
          </button>
        </div>
      </header>

      {/* SLIDE-OVER FORM */}
      <SlideOverContact open={open} onClose={() => setOpen(false)} />
    </>
  );
}
