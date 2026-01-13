"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/918858118918";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("exit_intent_shown");
    if (already) return;

    const onMouseLeave = (e) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem("exit_intent_shown", "1");
        setOpen(true);
      }
    };

    document.addEventListener("mouseout", onMouseLeave);
    return () => document.removeEventListener("mouseout", onMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 p-4">
      <div className="mx-auto mt-24 max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="text-lg font-bold text-slate-900">
          Need help choosing the right service?
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Chat with our expert on WhatsApp and get a clear, simple plan.
        </p>

        <div className="mt-5 flex gap-3">
          <a
            href={WHATSAPP}
            className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 text-center font-semibold text-black hover:bg-emerald-400 transition"
          >
            WhatsApp Now
          </a>
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
