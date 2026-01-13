export const metadata = {
  title: "GST Services | TaxSonic Global",
  description: "GST registration, returns, compliance and notices support.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">GST Services</h1>
      <p className="mt-3 text-slate-600">Registration, returns and compliance — simplified.</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <ul className="list-disc pl-5 text-slate-700">
          <li>GST Registration</li>
          <li>Monthly/Quarterly Returns</li>
          <li>GST Notices & Replies</li>
          <li>Ongoing Compliance Support</li>
        </ul>

        <a href="https://wa.me/918858118918" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition">
          WhatsApp for GST Help →
        </a>
      </div>
    </main>
  );
}
