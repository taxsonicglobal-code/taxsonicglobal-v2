import Link from "next/link";

const WHATSAPP = "https://wa.me/918858118918";
const CALL = "tel:8858118918";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
            🌍 India • NRI • Global Clients
            <span className="text-amber-200">•</span> Secure & Confidential
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Premium Tax & Compliance Services,
            <span className="text-amber-200"> Simplified</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Company registration, GST, income tax filing and ongoing compliance — explained in simple language with fast support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black shadow hover:bg-emerald-400 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={CALL}
              className="rounded-xl border border-amber-200/70 px-6 py-3 font-semibold text-amber-200 hover:bg-amber-200 hover:text-black transition"
            >
              📞 Call Expert
            </a>
            <Link
              href="/services"
              className="rounded-xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition"
            >
              Explore Services →
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustItem title="Fast Response" text="WhatsApp-first support for quick clarity." />
            <TrustItem title="NRI Expertise" text="Property, capital gains, DTAA guidance." />
            <TrustItem title="Secure Process" text="Your documents handled confidentially." />
            <TrustItem title="Lucknow HQ" text="Serving India & worldwide clients." />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
              <p className="mt-2 text-slate-600">
                Clear pricing, clear steps, and expert execution.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-block"
            >
              View All →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Company Registration"
              desc="Private Ltd, LLP, OPC & more — end-to-end support."
              href="/services/company-registration"
            />
            <ServiceCard
              title="GST Services"
              desc="Registration, returns, notices & compliance made easy."
              href="/services/gst-services"
            />
            <ServiceCard
              title="Income Tax Filing"
              desc="ITR filing, tax planning, refunds & notices support."
              href="/services/income-tax-filing"
            />
            <ServiceCard
              title="NRI Tax Services"
              desc="Capital gains, property tax, DTAA & NRI filing."
              href="/services/nri-tax-services"
              badge="Popular"
            />
            <ServiceCard
              title="Global Services"
              desc="Help for overseas clients and global founders."
              href="/services/global-services"
            />
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="text-sm font-semibold text-slate-900">Need guidance?</div>
              <p className="mt-2 text-sm text-slate-600">
                Tell us your situation and we’ll suggest the best service.
              </p>
              <a
                href={WHATSAPP}
                className="mt-4 inline-flex rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition"
              >
                WhatsApp Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Guides & Articles</h2>
          <p className="mt-2 text-slate-600">
            Easy guides on taxes, compliance & business setup.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <GuideCard title="How to choose the right business structure?" />
            <GuideCard title="GST basics for new businesses" />
            <GuideCard title="NRI tax filing checklist" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-black p-10 text-white md:p-14">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              Message us on WhatsApp and get a clear next step. We respond quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400 transition"
              >
                💬 WhatsApp
              </a>
              <Link
                href="/contact"
                className="rounded-xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition"
              >
                Contact Form →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustItem({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-200">{text}</div>
    </div>
  );
}

function ServiceCard({ title, desc, href, badge }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-slate-900">{title}</div>
        {badge ? (
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 text-sm font-semibold text-amber-700 group-hover:text-amber-800">
        Know more →
      </div>
    </Link>
  );
}

function GuideCard({ title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">
        Short, simple explanation + next action.
      </p>
      <div className="mt-4 flex gap-3">
        <a
          href="https://wa.me/918858118918"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition"
        >
          Know more (WhatsApp)
        </a>
        <a
          href="tel:8858118918"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Call
        </a>
      </div>
    </div>
  );
}
