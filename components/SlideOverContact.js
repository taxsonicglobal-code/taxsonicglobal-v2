"use client";

import { useState } from "react";

export default function SlideOverContact({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(
        "PASTE_NEW_DEPLOYMENT_URL_HERE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Network error");

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="relative h-full p-6 overflow-y-auto">

          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-slate-900">
            Talk to a Tax Expert
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Clear guidance • Transparent pricing • Fast response
          </p>

          <div className="mt-8 relative">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
              </div>
            )}

            {success ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-emerald-600">
                  Thank you! 🎉
                </h3>
                <p className="mt-2 text-slate-600">
                  Our expert will contact you shortly.
                </p>
                <a
                  href="https://wa.me/918858118918"
                  className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black"
                >
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input name="name" required placeholder="Your full name"
                  className="w-full rounded-xl border px-4 py-3" />

                <input name="email" type="email" required placeholder="you@email.com"
                  className="w-full rounded-xl border px-4 py-3" />

                <input name="phone" required placeholder="Mobile number"
                  className="w-full rounded-xl border px-4 py-3" />

                <textarea name="message" rows="4"
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border px-4 py-3" />

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>

          <p className="mt-6 text-xs text-center text-slate-500">
            🔒 100% confidential • No spam • No sales pressure
          </p>
        </div>
      </div>
    </div>
  );
}
