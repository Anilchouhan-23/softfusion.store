import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Structured LAN/WAN Cabling",
  "Router & Switch Configuration",
  "Firewall Setup & Management",
  "Wi-Fi Network Design & Deployment",
  "Network Security & Monitoring",
  "VPN Setup for Remote Access",
  "Server Rack Installation",
  "Network AMC (Annual Maintenance Contract)",
];

export default function NetworkSolutionsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Networking Solutions" breadcrumb="Networking Solutions" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Complete Networking Infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechSelection Store provides end-to-end networking solutions for
                businesses of all sizes. From small office setups to large
                enterprise networks, our certified engineers design, deploy,
                and manage robust network infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We partner with industry leaders like <strong>SonicWall</strong>,{" "}
                <strong>TP-Link</strong>, and <strong>Dell</strong> to deliver
                high-performance, secure, and scalable networking solutions.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Our Networking Services:
              </h3>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-600">
                    <i className="fas fa-check-circle text-cyan mt-1 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-colors"
              >
                Get a Free Quote
              </a>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-10 flex items-center justify-center aspect-[4/3]">
                <i className="fas fa-network-wired text-8xl text-cyan/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
