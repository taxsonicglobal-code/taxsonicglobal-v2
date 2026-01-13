export const metadata = {
  title: "Global Services | TaxSonic Global",
  description: "Support for overseas clients and global founders entering India.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Global Business Services</h1>
      <p className="mt-3 text-slate-600">
        For overseas clients & global founders — smooth India compliance and support.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <ul className="list-disc pl-5 text-slate-700">
          <li>Business setup guidance</li>
          <li>Compliance support</li>
          <li>Documentation & advisory</li>
        </ul>

        <a href="https://wa.me/918858118918" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition">
          WhatsApp Global Team →
        </a>
      </div>
    </main>
  );
}
