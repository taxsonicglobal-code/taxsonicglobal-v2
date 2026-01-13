export const metadata = {
  title: "NRI Tax Services | TaxSonic Global",
  description: "NRI tax filing, capital gains, property taxation and DTAA guidance.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">NRI Tax Services</h1>
      <p className="mt-3 text-slate-600">
        For NRIs worldwide — capital gains, property income, DTAA guidance and accurate tax filing.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <ul className="list-disc pl-5 text-slate-700">
          <li>NRI ITR Filing</li>
          <li>Capital Gains on Property Sale</li>
          <li>Rental Income Tax Compliance</li>
          <li>DTAA Advisory</li>
        </ul>

        <a href="https://wa.me/918858118918" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition">
          WhatsApp NRI Expert →
        </a>
      </div>
    </main>
  );
}
