"use client";

import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

const brands = [
  { image: "/images/brands/hikvision.jpg", name: "Hikvision" },
  { image: "/images/brands/hp.jpg", name: "HP" },
  { image: "/images/brands/sonicwall.jpg", name: "SonicWall" },
  { image: "/images/brands/quickheal.jpg", name: "Quick Heal" },
  { image: "/images/brands/cpplus.jpg", name: "CP Plus" },
  { image: "/images/brands/matrix.jpg", name: "Matrix" },
  { image: "/images/brands/tally.jpg", name: "Tally" },
  { image: "/images/brands/dell.jpg", name: "Dell" },
  { image: "/images/brands/tplink.jpg", name: "TP-Link" },
  { image: "/images/brands/timewatch.jpg", name: "TimeWatch" },
  { image: "/images/brands/realtime.jpg", name: "RealTime" },
  { image: "/images/brands/essl.jpg", name: "ESSL" },
];

export default function Brands() {
  const allBrands = [...brands, ...brands];
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-[#f8fbff]">
      <div ref={ref} className="w-[90%] max-w-[1200px] mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-navy mb-3">
            Brands We Deal With
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We deal with <strong>Hikvision, CPPlus, HoneyWell, Realtime,
            TimeWatch, Dell, HP</strong> and more.
          </p>
          <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
        </div>

        {/* Scrolling marquee */}
        <div className="brand-marquee overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {allBrands.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="flex-shrink-0 w-[180px] mx-3 bg-white rounded-xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all"
              >
                <div className="w-full h-[100px] relative mb-2">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-gray-600 text-sm">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
