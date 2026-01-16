"use client";

export default function NRITaxServicesPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            NRI Tax Services
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Expert tax compliance solutions for Non-Resident Indians (NRIs).
            We help you stay compliant with Indian tax laws while you live
            and work abroad.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Talk to an NRI Tax Expert
          </button>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-slate-900">
              NRI Taxation in India — Simplified
            </h2>

            <p className="mt-4 text-slate-700">
              Indian tax laws for NRIs can be complex. Income earned or sourced
              in India may still be taxable even if you live abroad. Our experts
              ensure accurate filing and full compliance.
            </p>

            <p className="mt-3 text-slate-700">
              We handle everything remotely — documentation, filing, refunds,
              and notices — with complete transparency and confidentiality.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              Our NRI Tax Services Include
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ NRI Income Tax Return (ITR) filing</li>
              <li>✔ Capital gains tax on property & investments</li>
              <li>✔ TDS refund & compliance</li>
              <li>✔ DTAA (Double Taxation Avoidance Agreement) benefits</li>
              <li>✔ Repatriation & Form 15CA / 15CB</li>
              <li>✔ Handling income tax notices</li>
            </ul>

            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              Who Should File NRI Tax Returns?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ NRIs with income earned in India</li>
              <li>✔ NRIs owning property in India</li>
              <li>✔ NRIs with capital gains or investments</li>
              <li>✔ NRIs claiming TDS refund</li>
            </ul>

          </div>

          {/* PRICING */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border h-fit">

            <h3 className="text-xl font-bold text-slate-900">
              Pricing (Starting From)
            </h3>

            <div className="mt-4">
              <p className="text-4xl font-extrabold text-emerald-600">
                ₹5,999
              </p>
              <p className="text-sm text-slate-500">
                Depends on income & complexity
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>✔ Expert-reviewed filing</li>
              <li>✔ End-to-end online process</li>
              <li>✔ Dedicated NRI tax expert</li>
              <li>✔ Secure document handling</li>
            </ul>

            <button
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="mt-8 w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition"
            >
              Get Expert Assistance
            </button>

            <p className="mt-4 text-xs text-center text-slate-500">
              🌍 Serving NRIs across USA, UK, UAE, Canada & more
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}
