"use client";

import { useScrollReveal } from "./useScrollReveal";

const highlights = [
  { icon: "fa-bolt", title: "Fast Service", color: "from-cyan to-blue-500" },
  { icon: "fa-trophy", title: "Award Winning", color: "from-yellow-400 to-orange-500" },
  { icon: "fa-users-cog", title: "Expert Team", color: "from-purple-500 to-indigo-500" },
  { icon: "fa-tags", title: "Affordable Services", color: "from-green-400 to-emerald-600" },
  { icon: "fa-shield-alt", title: "1 Year Warranty", color: "from-cyan to-teal-500" },
  { icon: "fa-lock", title: "Secure Payments", color: "from-blue-500 to-navy" },
];

export default function Highlights() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-[#f8fbff]">
      <div ref={ref} className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">
            Easy and effective way to get your Work Done
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We combine expertise, speed, and affordability to deliver the best
            IT solutions.
          </p>
          <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`bg-white rounded-xl py-8 px-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center shadow-lg`}
              >
                <i className={`fas ${h.icon} text-white text-2xl`} />
              </div>
              <h4 className="text-sm font-semibold text-navy">{h.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
