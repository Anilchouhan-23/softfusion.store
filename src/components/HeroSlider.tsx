"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/slides/slide1.png",
    title: "Custom Software Engineering",
    subtitle: "Power Your Business Growth",
    desc: "Scalable web applications, mobile apps, and robust SaaS solutions tailored perfectly to your unique enterprise needs.",
    btn: { text: "Software Services", href: "/services/software-development" },
  },
  {
    image: "/images/slides/slide2.png",
    title: "Complete Digital Tools",
    subtitle: "Streamline Operations",
    desc: "Integrate powerful digital tools seamlessly to automate workflows, encourage team collaboration, and boost internal productivity.",
    btn: { text: "Digital Tools", href: "/services/digital-tools" },
  },
  {
    image: "/images/slides/slide3.png",
    title: "Social Media Dominance",
    subtitle: "Engage Your Audience",
    desc: "Strategic social media marketing campaigns across all platforms to amplify brand awareness and drive tangible ROI.",
    btn: { text: "Marketing Services", href: "/services/social-media-marketing" },
  },
  {
    image: "/images/slides/slide4.png",
    title: "Data-Driven Campaigns",
    subtitle: "Email Marketing & More",
    desc: "Targeted, automated email marketing strategies designed to nurture leads and convert prospects into loyal long-term customers.",
    btn: { text: "All Services", href: "/services" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" id="home">
      {/* Background Image */}
      <div className="relative min-h-[520px] md:min-h-[560px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/70 z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20 md:py-28 min-h-[520px]">
          <div
            key={current}
            className="flex-1 max-w-xl text-center lg:text-left animate-fadeSlideIn"
          >
            <span className="inline-block bg-cyan/15 text-cyan text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-cyan/25 backdrop-blur-sm">
              <i className="fas fa-star mr-2 text-yellow-400" />
              {slide.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href={slide.btn.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all"
              >
                {slide.btn.text}
                <i className="fas fa-arrow-right text-sm" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white/10 text-white border-2 border-white/20 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all backdrop-blur-sm"
              >
                <i className="fas fa-phone text-sm" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Stats on right */}
          <div className="flex-1 hidden lg:flex flex-col items-center gap-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Projects", icon: "fa-check-circle" },
                { num: "200+", label: "Clients", icon: "fa-users" },
                { num: "10+", label: "Years", icon: "fa-clock" },
                { num: "24/7", label: "Support", icon: "fa-headset" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
                >
                  <i className={`fas ${s.icon} text-cyan text-xl mb-2`} />
                  <h3 className="text-2xl font-bold text-white">{s.num}</h3>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all rounded-full ${
                i === current
                  ? "w-8 h-3 bg-cyan"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </section>
  );
}
