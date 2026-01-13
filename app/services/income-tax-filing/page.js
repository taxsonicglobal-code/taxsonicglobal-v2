export const metadata = {
  title: "Income Tax Filing | TaxSonic Global",
  description: "ITR filing, tax planning, refunds and notices assistance.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Income Tax Filing</h1>
      <p className="mt-3 text-slate-600">Accurate filing with clear guidance and quick support.</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <ul className="list-disc pl-5 text-slate-700">
          <li>ITR Filing (Individuals & Businesses)</li>
          <li>Tax Planning</li>
          <li>Refund Support</li>
          <li>Notice Handling</li>
        </ul>

        <a href="https://wa.me/918858118918" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition">
          WhatsApp for ITR →
        </a>
      </div>
    </main>
  );
}
