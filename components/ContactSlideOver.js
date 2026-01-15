"use client";

import { useState, useEffect } from "react";

export default function ContactSlideOver({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

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
      "https://script.google.com/macros/s/AKfycbzM53onehtT1d570_HNdo5iB5gAtV3gYdtwPK6vU0CiVf86Pg1TZFHnnJWEepzWqCg1/exec",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (result.success) {
      setSuccess(true);
      form.reset();
    } else {
      throw new Error(result.error || "Submission failed");
    }

  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slideIn">
        {/* Header */}
        <div className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Talk to a Tax Expert
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Clear guidance • Transparent pricing • Fast response
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {success ? (
            <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="mb-4 h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-600">
                Thank you!
              </h3>
              <p className="mt-2 text-slate-600">
                We’ve received your details. Our expert will contact you shortly.
              </p>
              <a
                href="https://wa.me/918858118918"
                className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Message (optional)"
                rows="4"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
              />

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
              >
                {loading ? "Connecting you with an expert..." : "Submit Request"}
              </button>

              <p className="pt-2 text-center text-xs text-slate-500">
                🔒 100% confidential • No spam • No sales pressure
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.35s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
