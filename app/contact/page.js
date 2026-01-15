export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">
        Contact Us
      </h1>

      <p className="mt-4 text-slate-600">
        Share your details and our team will get back to you shortly.
      </p>

      <div className="mt-10 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true"
          className="w-full"
          height="850"
          frameBorder="0"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}
