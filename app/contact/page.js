"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact Us | TaxSonic Global",
  description: "Contact TaxSonic Global for tax, GST, company registration and NRI services.",
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-slate-600">
        Share your requirement and we’ll respond quickly.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="font-semibold">Direct Contact</div>
          <p className="mt-3 text-slate-600">📍 Lucknow, Uttar Pradesh, India – 226010</p>
          <p className="text-slate-600">📧 info@taxsonicglobal.com</p>
          <p className="text-slate-600">📞 +91 8858118918</p>

          <a
            href="https://wa.me/918858118918"
            className="mt-5 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
          >
            WhatsApp Now →
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-3"
            >
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Full Name" required />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" required />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Phone" required />
              <select className="rounded-xl border border-slate-200 px-4 py-3" required>
                <option value="">Select Service</option>
                <option>Company Registration</option>
                <option>GST Services</option>
                <option>Income Tax Filing</option>
                <option>NRI Tax Services</option>
                <option>Global Services</option>
              </select>
              <textarea className="rounded-xl border border-slate-200 px-4 py-3" rows="4" placeholder="Message" />

              <button className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 transition">
                Submit
              </button>
              <p className="text-xs text-slate-500">
                (Next step: we’ll connect this form to email/CRM.)
              </p>
            </form>
          ) : (
            <div>
              <div className="text-lg font-bold text-slate-900">Submitted ✅</div>
              <p className="mt-2 text-slate-600">
                Thanks! For faster response, message us on WhatsApp.
              </p>
              <a
                href="https://wa.me/918858118918"
                className="mt-4 inline-flex rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
              >
                WhatsApp Now →
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
