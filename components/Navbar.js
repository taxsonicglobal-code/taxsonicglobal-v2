"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SlideOverContact from "./SlideOverContact";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Optional global CTA trigger
  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-contact", openHandler);
    return () => window.removeEventListener("open-contact", openHandler);
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO + BRAND */}
          <Link href="/" className="flex items-center gap-4 group">
            <img
              src="/logo.png"
              alt="TaxSonic Global"
              className="h-12 w-12 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110"
            />

            <div className="leading-tight">
              <div className="text-2xl font-extrabold tracking-tight text-white">
                TaxSonic Global
              </div>
              <div className="text-sm text-white/70">
                India • NRI • Global Clients
              </div>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-slate-200">

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <span className="relative cursor-pointer text-lg font-semibold text-white/90 hover:text-white">
                Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </span>

              {/* Hover buffer */}
              <div className="absolute left-0 top-full h-4 w-full"></div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-4 hidden w-64 rounded-2xl border border-slate-200 bg-white shadow-xl group-hover:block">
                <div className="flex flex-col space-y-3 p-4 text-sm text-slate-700">

                  <Link href="/services/company-registration" className="hover:text-emerald-600">
                    Company Registration
                  </Link>

                  <Link href="/services/gst-registration" className="hover:text-emerald-600">
                    GST Registration
                  </Link>

                  <Link href="/services/income-tax-filing" className="hover:text-emerald-600">
                    Income Tax Filing
                  </Link>

                  <Link href="/services/nri-tax-services" className="hover:text-emerald-600">
                    NRI Tax Services
                  </Link>

                  <Link href="/services/fssai-registration" className="hover:text-emerald-600">
                    FSSAI Registration
                  </Link>

                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-emerald-400 transition">
              About
            </Link>
          </nav>

          {/* CTA BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-emerald-500 px-6 py-3 text-base font-semibold text-black transition-all hover:bg-emerald-400 hover:scale-[1.03]"
          >
            Talk to an Expert
          </button>

        </div>
      </header>

      {/* SLIDE-OVER CONTACT FORM */}
      <SlideOverContact open={open} onClose={() => setOpen(false)} />
    </>
  );
}
