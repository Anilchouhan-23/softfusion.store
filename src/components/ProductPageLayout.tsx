import Image from "next/image";
import Link from "next/link";

export interface Product {
  name: string;
  brand: string;
  icon: string;
  desc: string;
  image?: string;
}

const categories = [
  { label: "CCTV Cameras", href: "/products/cctv-cameras" },
  { label: "Networking Equipment", href: "/products/networking-equipment" },
  { label: "Computers & Laptops", href: "/products/computers-laptops" },
  { label: "Attendance Systems", href: "/products/attendance-systems" },
  { label: "EPABX Systems", href: "/products/epabx-systems" },
  { label: "Software & Licenses", href: "/products/software-licenses" },
];

export default function ProductPageLayout({
  activeCategory,
  brandImages,
  products,
  helpText,
}: {
  activeCategory: string;
  brandImages: string[];
  products: Product[];
  helpText: string;
}) {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
      {/* Main content */}
      <div className="flex-[3]">
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {brandImages.map((b) => (
            <Image
              key={b}
              src={`/images/brands/${b}.jpg`}
              alt={b}
              width={80}
              height={40}
              className="object-contain"
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">& more</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all"
            >
              <div className="bg-gradient-to-br from-navy-light to-navy-dark h-[160px] flex items-center justify-center relative overflow-hidden">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={180}
                    height={120}
                    className="object-contain opacity-90 hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <i className={`fas ${p.icon} text-5xl text-white/15`} />
                )}
                <span className="absolute top-3 left-3 bg-cyan/90 text-navy text-[0.65rem] font-bold px-2.5 py-1 rounded-full">
                  {p.brand}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-navy mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <a
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-cyan text-navy text-sm font-semibold px-5 py-2 rounded-full hover:bg-cyan-dark transition-colors"
                >
                  Enquire Now <i className="fas fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="flex-1 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <h3 className="text-lg font-bold text-navy mb-4 pb-3 border-b-2 border-cyan">
            Product Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className={`flex items-center gap-2 text-sm py-2 px-3 rounded-lg transition-colors ${
                    c.label === activeCategory
                      ? "bg-cyan/10 text-cyan font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-cyan"
                  }`}
                >
                  <i className="fas fa-chevron-right text-[0.55rem]" />
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <h3 className="text-lg font-bold text-navy mb-4 pb-3 border-b-2 border-cyan">
            Brands
          </h3>
          <div className="space-y-3">
            {brandImages.map((b) => (
              <div key={b} className="h-[50px] relative">
                <Image
                  src={`/images/brands/${b}.jpg`}
                  alt={b}
                  fill
                  className="object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-center">
          <i className="fas fa-headset text-4xl text-cyan/40 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Need Help?</h3>
          <p className="text-blue-200/60 text-sm mb-4">{helpText}</p>
          <Link
            href="/enquiry"
            className="inline-block px-6 py-2.5 bg-cyan text-navy font-semibold rounded-full text-sm hover:bg-cyan-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </div>
  );
}
