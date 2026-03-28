"use client";

import Image from "next/image";
import { useScrollReveal, useCountUp } from "./useScrollReveal";

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(end);
  return (
    <div ref={ref}>
      <h3 className="text-3xl font-bold text-cyan">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex-1 min-w-[280px]">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/slides/slide1.jpg"
              alt="TechSelection Store - IT Solutions"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-cyan text-navy font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
              <i className="fas fa-award mr-2" />
              10+ Years of Excellence
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy mb-2">
            We are Leading Company
          </h2>
          <p className="text-cyan text-lg font-medium mb-5">
            Fastest repair service with best price!
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We at TechSelection Store are a group of dedicated engineers with more
            than a decade of experience in project designing, planning,
            execution, and maintenance. Specializing in CCTV installation,
            networking, and IT infrastructure, we have worked on a wide range of
            major projects involving safety systems, access control, burglar
            alarm systems, and surveillance solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From corporate offices to residential buildings, educational
            institutions to healthcare facilities, we provide end-to-end IT
            solutions tailored to your specific needs.
          </p>
          <div className="flex gap-10 mt-7">
            <Counter end={500} suffix="+" label="Projects Completed" />
            <Counter end={200} suffix="+" label="Happy Clients" />
            <Counter end={10} suffix="+" label="Years Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
