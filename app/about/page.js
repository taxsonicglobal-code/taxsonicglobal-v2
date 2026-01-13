export const metadata = {
  title: "About Us | TaxSonic Global",
  description: "TaxSonic Global — trusted tax and compliance partner for India, NRIs and global clients.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">About TaxSonic Global</h1>
      <p className="mt-4 text-slate-600">
        We are a professional tax and compliance service firm based in Lucknow, Uttar Pradesh, serving clients across India and worldwide.
        Our focus is clarity, accuracy and fast support — especially for NRIs and global clients.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Why clients choose us</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Simple communication (no confusing jargon)</li>
          <li>Fast WhatsApp-first support</li>
          <li>Secure document handling</li>
          <li>Clear next steps and timely updates</li>
        </ul>
      </div>
    </main>
  );
}
