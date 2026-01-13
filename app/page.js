import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
<section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),transparent_40%)]"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
      Tax & Business Compliance <br className="hidden md:block" />
      <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
        Made Simple & Global
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
      Helping startups, businesses, and NRIs manage registrations, GST,
      taxation, and compliance with clarity, speed, and confidence.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="https://wa.me/918858118918"
        className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-black shadow-lg hover:scale-105 hover:bg-emerald-400 transition"
      >
        WhatsApp Consultation
      </a>

      <a
        href="/services"
        className="rounded-xl border border-slate-300 bg-white/70 px-8 py-3 font-semibold text-slate-700 backdrop-blur hover:bg-white"
      >
        Explore Services
      </a>
    </div>
  </div>
</section>


      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Everything you need to start, manage, and grow your business.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "GST Registration",
    "Private Limited Company",
    "LLP Registration",
    "One Person Company (OPC)",
    "Partnership Firm",
    "Section 8 Company",
    "Producer Company",
    "Public Limited Company",
    "FSSAI Registration & License",
  ].map((service) => (
    <div
      key={service}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400"></div>

      <h3 className="font-semibold text-slate-900">
        {service}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        End-to-end assistance with documentation, filings, and government
        approvals — handled professionally.
      </p>
    </div>
  ))}
</div>


      {/* WHY US */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Why Choose TaxSonic Global
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Simple, jargon-free guidance",
              "WhatsApp-first support",
              "Trusted by NRIs & global clients",
              "Secure & transparent process",
            ].map((point) => (
              <div
                key={point}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <p className="font-medium text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-indigo-900 py-24 text-center text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),transparent_40%)]"></div>

  <div className="relative">
    <h2 className="text-3xl font-bold">
      Talk to a Compliance Expert Today
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-slate-300">
      Clear guidance, transparent pricing, and quick turnaround for India
      and global clients.
    </p>

    <div className="mt-8">
      <a
        href="https://wa.me/918858118918"
        className="inline-block rounded-xl bg-emerald-400 px-10 py-3 font-semibold text-black shadow-lg hover:scale-105 hover:bg-emerald-300 transition"
      >
        Start WhatsApp Chat
      </a>
    </div>
  </div>
</section>


        <div className="mt-6">
          <a
            href={WHATSAPP}
            className="inline-block rounded-xl bg-emerald-400 px-8 py-3 font-semibold text-black hover:bg-emerald-300"
          >
            Start WhatsApp Chat
          </a>
        </div>
      </section>
    </main>
  );
}
