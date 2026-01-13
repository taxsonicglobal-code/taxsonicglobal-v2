import Link from "next/link";

export const metadata = {
  title: "Services | TaxSonic Global",
  description: "Explore our tax, compliance and business setup services for India, NRIs and global clients.",
};

const services = [
  { title: "Company Registration", href: "/services/company-registration", desc: "Private Ltd, LLP, OPC & more." },
  { title: "GST Services", href: "/services/gst-services", desc: "Registration, returns, notices & compliance." },
  { title: "Income Tax Filing", href: "/services/income-tax-filing", desc: "ITR filing, planning, refunds & notices." },
  { title: "NRI Tax Services", href: "/services/nri-tax-services", desc: "Capital gains, property tax, DTAA." },
  { title: "Global Services", href: "/services/global-services", desc: "Support for overseas clients & founders." },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-slate-600">Choose a service to view details and start quickly.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <div className="text-lg font-semibold text-slate-900">{s.title}</div>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <div className="mt-4 text-sm font-semibold text-amber-700">Know more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
