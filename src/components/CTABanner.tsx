"use client";

import Link from "next/link";
import { useScrollReveal } from "./useScrollReveal";

export default function CTABanner() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan/5 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan/5 rounded-full" />

      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto text-center relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block bg-cyan/15 text-cyan text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-cyan/25">
          <i className="fas fa-headset mr-2" />
          Ready to Get Started?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          Let&apos;s Build Your Digital Future
          <br />
          <span className="text-cyan">Together</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          From custom software solutions to comprehensive digital marketing, our expert
          team is ready to deliver tailored digital solutions for your business.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all"
          >
            Get Free Quote
            <i className="fas fa-arrow-right text-sm" />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white/10 text-white border-2 border-white/20 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all backdrop-blur-sm"
          >
            <i className="fas fa-phone text-sm" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
