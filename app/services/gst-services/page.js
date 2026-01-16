"use client";

export default function GSTRegistrationPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            GST Registration Services
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Get your GST registration done quickly and correctly with expert
            support. We handle the entire process end-to-end so you can focus
            on running your business.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Talk to a GST Expert
          </button>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-slate-900">
              What is GST Registration?
            </h2>

            <p className="mt-4 text-slate-700">
              GST registration is mandatory for businesses whose turnover
              exceeds the prescribed limit or who are engaged in interstate
              supply, e-commerce, or certain notified services.
            </p>

            <p className="mt-3 text-slate-700">
              Once registered, you receive a GSTIN which allows you to collect
              tax, claim input tax credit, and comply with GST regulations.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              Our GST Registration Includes
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ Consultation to determine GST applicability</li>
              <li>✔ Document checklist & verification</li>
              <li>✔ Application filing on GST portal</li>
              <li>✔ ARN tracking & follow-ups</li>
              <li>✔ GSTIN certificate delivery</li>
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              Who Should Register for GST?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ Businesses crossing turnover threshold</li>
              <li>✔ E-commerce sellers</li>
              <li>✔ Service providers</li>
              <li>✔ Interstate suppliers</li>
              <li>✔ Voluntary registrants</li>
            </ul>

          </div>

          {/* PRICING CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border h-fit">

            <h3 className="text-xl font-bold text-slate-900">
              Pricing
            </h3>

            <div className="mt-4">
              <p className="text-4xl font-extrabold text-emerald-600">
                ₹4,499
              </p>
              <p className="text-sm text-slate-500">
                + Govt fees (if applicable)
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li>✔ End-to-end handling</li>
              <li>✔ Expert assisted filing</li>
              <li>✔ No hidden charges</li>
              <li>✔ WhatsApp & call support</li>
            </ul>

            <button
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="mt-8 w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition"
            >
              Get Started
            </button>

            <p className="mt-4 text-xs text-center text-slate-500">
              🔒 100% confidential • No spam
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}
