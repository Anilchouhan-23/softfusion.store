import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "fa-video",
    title: "CCTV Installation",
    href: "/services/cctv-installation",
    desc: "Professional CCTV surveillance solutions for corporate, industrial, domestic, and commercial establishments with HD and IP camera systems.",
  },
  {
    icon: "fa-network-wired",
    title: "Networking Solutions",
    href: "/services/network-solutions",
    desc: "Complete LAN/WAN networking infrastructure including structured cabling, router configuration, firewall setup, and network management.",
  },
  {
    icon: "fa-laptop-medical",
    title: "Computer Repair",
    href: "/services/computer-repair",
    desc: "Expert repair services for desktops, laptops, and servers. Hardware troubleshooting, OS installation, data recovery, and AMC.",
  },
  {
    icon: "fa-phone-volume",
    title: "EPABX / Intercom",
    href: "/services/epabx",
    desc: "Enterprise communication systems with EPABX and intercom installation, configuration, and maintenance for seamless connectivity.",
  },
  {
    icon: "fa-fingerprint",
    title: "Attendance Machines",
    href: "/services/attendance-machines",
    desc: "Biometric and RFID attendance systems with software integration, access control solutions for offices, factories, and institutions.",
  },
  {
    icon: "fa-comment-sms",
    title: "Bulk SMS",
    href: "/services/bulk-sms",
    desc: "Affordable bulk SMS and RCS messaging services for marketing campaigns, notifications, OTP delivery, and business communication.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Our Services" breadcrumb="Services" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              TechSelection Store provides comprehensive IT and security solutions
              tailored for businesses of all sizes across India.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-t-4 border-transparent hover:border-t-cyan hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all block"
              >
                <i className={`fas ${s.icon} text-5xl text-cyan mb-5`} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-block mt-4 text-cyan font-medium text-sm">
                  Learn More <i className="fas fa-arrow-right ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
