"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const form = e.target;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbyt2mwb0ZmtoZ3vPZ6hvc1sCTzV-JtJ6ERBSPJ8euExFFJMaR19eSf0OEfx2j-_jOBB6Q/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (res.ok) {
    setSuccess(true);
    form.reset();
  } else {
    alert("Submission failed. Please try again.");
  }

  setLoading(false);
}


  return (
    <main className="mx-auto max-w-5xl px-4 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Talk to a Tax Expert
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Get clear guidance, transparent pricing & fast WhatsApp support.
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        {success ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-600">
              Thank you! 🎉
            </h2>
            <p className="mt-2 text-slate-600">
              We’ve received your details. Our expert will contact you shortly.
            </p>
            <a
              href="https://wa.me/918858118918"
              className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400"
            >
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                name="phone"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>

      {/* Trust line */}
      <p className="mt-6 text-center text-sm text-slate-500">
        🔒 Your information is 100% confidential • No spam • No sales pressure
      </p>
    </main>
  );
}
