import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Tax & Business Compliance, <br className="hidden md:block" />
            Simplified for India & Global Clients
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            TaxSonic Global helps startups, businesses, and NRIs with
            registrations, GST, income tax, and ongoing compliance — fast,
            clear, and fully online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black shadow hover:bg-emerald-400"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/services"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-200"
            >
              View Services
            </Link>
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
                className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  End-to-end assistance with documentation, filing, and
                  government approvals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="bg-slate-900 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Talk to a Compliance Expert Today
        </h2>
        <p className="mt-4 text-slate-300">
          Get clear answers, transparent pricing, and quick turnaround.
        </p>

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
