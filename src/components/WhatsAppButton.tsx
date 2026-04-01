"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = "919876543210";
  const message = encodeURIComponent(
    "Hi SoftFusion! I'm interested in your IT services. Please share more details."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
        <i className="fab fa-whatsapp text-white text-3xl" />
      </div>
      <span
        className={`bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg transition-all ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us!
      </span>
    </a>
  );
}
