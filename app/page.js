"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Tax & Compliance<br />
              <span className="text-emerald-400">Handled Professionally</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Trusted tax, GST & business compliance services for
              India, NRIs & global clients — delivered with clarity,
              transparency and expert care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event("open-contact"))}
                className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:bg-emerald-400 transition"
              >
                Talk to a Tax Expert
              </button>

              <Link
                href="#services"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <ul className="space-y-4 text-slate-200">
              <li>✔ CA-guided compliance</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Fast WhatsApp & call support</li>
              <li>✔ India & NRI specialization</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-6 grid gap-4 md:grid-cols-4 text-center text-sm text-slate-700">
          <div>✔ Professional CA Support</div>
          <div>✔ Clear & Fixed Pricing</div>
          <div>✔ Secure Document Handling</div>
          <div>✔ Trusted by Global Clients</div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Our Core Services
          </h2>
          <p className="mt-3 text-center text-slate-600">
            End-to-end tax & compliance solutions under one roof
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              ["GST Registration", "Smooth GST registration & filing support"],
              ["Income Tax Filing", "Accurate ITR filing with expert review"],
              ["NRI Tax Services", "Specialized tax solutions for NRIs"],
              ["Company Registration", "Private Ltd, LLP, OPC & more"],
              ["FSSAI Registration", "Food license & compliance handled"],
              ["Business Compliance", "Annual filings & regulatory support"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group cursor-pointer rounded-3xl bg-white p-8 shadow hover:shadow-xl transition border"
              >
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600">
                  {desc}
                </p>
                <p className="mt-5 font-medium text-emerald-600">
                  Know more →
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MID CTA ================= */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h3 className="text-3xl font-bold">
            Not sure which service you need?
          </h3>
          <p className="mt-4 text-slate-300">
            Speak to an expert and get clear guidance in minutes.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 rounded-xl bg-emerald-500 px-10 py-4 font-semibold text-black hover:bg-emerald-400 transition"
          >
            Get Expert Advice
          </button>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-white py-16">
        <p className="text-center text-sm text-slate-500">
          🔒 Your information is 100% confidential • No spam • No sales pressure
        </p>
      </section>

    </main>
  );
}
