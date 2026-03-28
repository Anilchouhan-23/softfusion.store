import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    category: "CCTV Cameras",
    href: "/products/cctv-cameras",
    icon: "fa-video",
    image: "/images/brands/hikvision.jpg",
    brands: "Hikvision, CP Plus, HoneyWell",
    items: ["Dome Cameras", "Bullet Cameras", "PTZ Cameras", "IP Cameras", "DVR & NVR Systems"],
  },
  {
    category: "Networking Equipment",
    href: "/products/networking-equipment",
    icon: "fa-network-wired",
    image: "/images/brands/tplink.jpg",
    brands: "TP-Link, SonicWall, Dell",
    items: ["Routers & Switches", "Firewalls", "Access Points", "Network Cables", "Server Racks"],
  },
  {
    category: "Computers & Laptops",
    href: "/products/computers-laptops",
    icon: "fa-laptop",
    image: "/images/brands/dell.jpg",
    brands: "Dell, HP",
    items: ["Desktop Computers", "Laptops", "Monitors", "Printers", "Accessories"],
  },
  {
    category: "Attendance Systems",
    href: "/products/attendance-systems",
    icon: "fa-fingerprint",
    image: "/images/brands/realtime.jpg",
    brands: "RealTime, TimeWatch, ESSL",
    items: ["Biometric Machines", "Face Recognition", "RFID Card Readers", "Access Control", "Door Locks"],
  },
  {
    category: "EPABX Systems",
    href: "/products/epabx-systems",
    icon: "fa-phone-volume",
    image: "/images/brands/matrix.jpg",
    brands: "Matrix",
    items: ["EPABX Systems", "IP-PBX Systems", "Intercom Units", "Telephones", "Conference Phones"],
  },
  {
    category: "Software & Licenses",
    href: "/products/software-licenses",
    icon: "fa-compact-disc",
    image: "/images/brands/tally.jpg",
    brands: "Tally, Quick Heal",
    items: ["Tally Software", "Quick Heal Antivirus", "Windows Licenses", "Office 365", "Server Software"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Our Products" breadcrumb="Products" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Products We Deal In
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We deal with top brands including{" "}
              <strong>Hikvision, CP Plus, HoneyWell, RealTime, TimeWatch, Dell, HP</strong>{" "}
              and more.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p.category}
                href={p.href}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all group block"
              >
                {/* Card image header */}
                <div className="relative h-[160px] bg-gradient-to-br from-navy-light to-navy-dark overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.category}
                      width={150}
                      height={100}
                      className="object-contain opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-cyan text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {p.brands.split(",")[0]}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center">
                      <i className={`fas ${p.icon} text-cyan`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">
                        {p.category}
                      </h3>
                      <p className="text-xs text-cyan font-medium">{p.brands}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 text-sm flex items-center gap-2"
                      >
                        <i className="fas fa-chevron-right text-cyan text-[0.6rem]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-cyan font-semibold text-sm group-hover:gap-3 transition-all">
                    View Products <i className="fas fa-arrow-right text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
