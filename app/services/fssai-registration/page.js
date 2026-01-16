"use client";

export default function FSSAIRegistrationPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            FSSAI Registration & License
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Mandatory food safety compliance for food businesses in India.
            We help you obtain FSSAI Registration or License smoothly with
            complete documentation and expert support.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Talk to an FSSAI Expert
          </button>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-slate-900">
              What is FSSAI?
            </h2>

            <p className="mt-4 text-slate-700">
              The Food Safety and Standards Authority of India (FSSAI)
              regulates food safety in India. Any business involved in
              manufacturing, processing, storing, distributing, or selling
              food must obtain FSSAI registration or license.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              Types of FSSAI Compliance
            </h3>

            <h4 className="mt-4 font-semibold text-slate-800">
              FSSAI Registration (Basic)
            </h4>
            <p className="mt-2 text-slate-700">
              Required for small food businesses, home kitchens, startups,
              and petty food manufacturers with limited turnover.
            </p>

            <h4 className="mt-6 font-semibold text-slate-800">
              FSSAI License (State / Central)
            </h4>
            <p className="mt-2 text-slate-700">
              Required for medium to large food businesses, restaurants,
              manufacturers, exporters, importers, and e-commerce sellers.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              What We Handle for You
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ Eligibility assessment</li>
              <li>✔ Document preparation & verification</li>
              <li>✔ Application filing on FSSAI portal</li>
              <li>✔ Follow-ups & clarifications</li>
              <li>✔ Certificate / License delivery</li>
            </ul>

          </div>

          {/* PRICING */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border h-fit">

            <h3 className="text-xl font-bold text-slate-900">
              Pricing
            </h3>

            <div className="mt-6 space-y-5 text-slate-700">

              <div>
                <p className="text-lg font-semibold">
                  FSSAI Registration
                </p>
                <p className="text-2xl font-bold text-emerald-600">
                  ₹2,000
                </p>
                <p className="text-sm text-slate-500">
                  + Government fees Additional
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  FSSAI License
                </p>
                <p className="text-2xl font-bold text-emerald-600">
                  ₹3,000
                </p>
                <p className="text-sm text-slate-500">
                  + ₹2,000 / year government fee (up to 5 years)
                </p>
              </div>

            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>✔ Expert-assisted filing</li>
              <li>✔ Transparent pricing</li>
              <li>✔ End-to-end handling</li>
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
