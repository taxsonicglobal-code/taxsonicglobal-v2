export const metadata = {
  title: "Company Registration | TaxSonic Global",
  description: "Private Ltd, LLP, OPC and Partnership registration with expert help.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Company Registration</h1>
      <p className="mt-3 text-slate-600">
        Start your business legally with end-to-end support — documentation, filing and guidance.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold">We help with</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Private Limited Company</li>
          <li>LLP (Limited Liability Partnership)</li>
          <li>OPC (One Person Company)</li>
          <li>Partnership Firm</li>
        </ul>

        <a
          href="https://wa.me/918858118918"
          className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
        >
          WhatsApp to Start →
        </a>
      </div>
    </main>
  );
}
