"use client";

import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    text: "SmartSoftHub has been instrumental in designing our software architecture. Their web app development was professional and the quality of code is outstanding. Highly recommended!",
    name: "Rajesh Kumar",
    company: "TechVista Pvt. Ltd",
    image: "/images/clients/client1.jpg",
    rating: 5,
  },
  {
    text: "We have multiple custom SaaS tools built by SmartSoftHub. Their support team is responsive and the deployment service is exceptional. Great partnership!",
    name: "Priya Sharma",
    company: "InnoTech Solutions",
    image: "/images/clients/client2.jpg",
    rating: 5,
  },
  {
    text: "From API integrations to digital marketing, SmartSoftHub handles all our IT needs. Their team is knowledgeable, punctual, and delivers quality work every time. A trusted technology partner.",
    name: "Anil Reddy",
    company: "Global Enterprises",
    image: "/images/clients/client3.jpg",
    rating: 5,
  },
  {
    text: "Excellent service and pricing. SmartSoftHub set up our complete cloud infrastructure and email campaigns within the committed timeline. Very satisfied with their professionalism.",
    name: "Sanjay Mehta",
    company: "Bright Education Group",
    image: "/images/clients/client1.jpg",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fas fa-star text-sm ${
            i < count ? "text-yellow-400" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20">
      <div ref={ref} className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">
            What Clients Say?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Trusted by hundreds of businesses across various industries.
          </p>
          <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="absolute top-3 left-5 text-6xl text-cyan/20 font-serif leading-none">
                &ldquo;
              </span>
              <div className="relative z-10">
                <Stars count={t.rating} />
                <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-5">
                  {t.text}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 ring-2 ring-cyan/20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-[0.95rem] font-semibold text-navy">
                    {t.name}
                  </h5>
                  <span className="text-xs text-gray-400">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
