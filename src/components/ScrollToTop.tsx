"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 w-12 h-12 bg-cyan text-navy rounded-full flex items-center justify-center text-lg cursor-pointer shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all z-50 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
}
