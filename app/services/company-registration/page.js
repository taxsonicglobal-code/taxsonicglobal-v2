"use client";

export default function CompanyRegistrationPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Company Registration Services
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Register your business with the right legal structure. We provide
            end-to-end company registration services with expert guidance,
            transparent pricing, and full compliance support.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Talk to a Company Expert
          </button>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-slate-900">
              Types of Company Registration We Offer
            </h2>

            <p className="mt-4 text-slate-700">
              Choosing the correct business structure impacts taxation,
              compliance, funding, and long-term growth. Our experts help you
              make the right choice based on your business goals.
            </p>

            {/* OPC */}
            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              One Person Company (OPC)
            </h3>
            <p className="mt-3 text-slate-700">
              Ideal for solo entrepreneurs who want limited liability and full
              control while enjoying the benefits of a corporate structure.
            </p>

            {/* LLP */}
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Limited Liability Partnership (LLP)
            </h3>
            <p className="mt-3 text-slate-700">
              Suitable for professionals and small businesses seeking flexibility,
              lower compliance, and limited liability protection.
            </p>

            {/* PRIVATE */}
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Private Limited Company
            </h3>
            <p className="mt-3 text-slate-700">
              Best for startups and growing businesses looking to raise funding,
              build credibility, and scale operations efficiently.
            </p>

            {/* SECTION 8 */}
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Section 8 Company (NGO)
            </h3>
            <p className="mt-3 text-slate-700">
              Designed for non-profit organizations involved in charitable,
              educational, social, or environmental activities.
            </p>

            {/* PUBLIC */}
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Public Limited Company
            </h3>
            <p className="mt-3 text-slate-700">
              Suitable for large enterprises planning to raise capital from the
              public and operate at a national or global scale.
            </p>

            {/* PRODUCER */}
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Producer Company
            </h3>
            <p className="mt-3 text-slate-700">
              Ideal for farmer groups and producers engaged in agriculture,
              manufacturing, processing, and allied activities.
            </p>

            {/* INCLUDED */}
            <h3 className="mt-10 text-xl font-semibold text-slate-900">
              What’s Included in Our Service
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ Business structure consultation</li>
              <li>✔ Name approval & documentation</li>
              <li>✔ DSC & DIN assistance</li>
              <li>✔ MCA incorporation filing</li>
              <li>✔ Certificate of Incorporation</li>
              <li>✔ PAN & TAN application</li>
              <li>✔ Expert support till completion</li>
            </ul>

          </div>

          {/* PRICING CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border h-fit">

            <h3 className="text-xl font-bold text-slate-900">
              Pricing
            </h3>

            <div className="mt-6 space-y-4 text-slate-700">
              <p><strong>OPC Registration:</strong> ₹9,999</p>
              <p><strong>LLP Registration:</strong> ₹9,999</p>
              <p><strong>Private Limited Company:</strong> ₹14,999</p>
              <p><strong>Section 8 Company:</strong> ₹19,999</p>
              <p><strong>Public Limited Company:</strong> ₹19,999</p>
              <p><strong>Producer Company:</strong> ₹29,999</p>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              + Government fees as applicable
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>✔ Transparent pricing</li>
              <li>✔ Expert-led process</li>
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
