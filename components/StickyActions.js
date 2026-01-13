"use client";

const WHATSAPP = "https://wa.me/918858118918";
const CALL = "tel:8858118918";

export default function StickyActions() {
  return (
    <>
      {/* WhatsApp Floating */}
      <a
        href={WHATSAPP}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-black shadow-lg hover:bg-emerald-400 transition"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Mobile Call Sticky */}
      <a
        href={CALL}
        className="fixed bottom-5 left-5 z-50 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg md:hidden"
      >
        📞 Call
      </a>
    </>
  );
}
