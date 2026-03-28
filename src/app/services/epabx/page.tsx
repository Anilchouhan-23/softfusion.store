import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "EPABX System Installation & Configuration",
  "IP-PBX & VoIP Solutions",
  "Intercom System Setup",
  "Multi-line Telephone Systems",
  "Call Recording & Monitoring",
  "Auto-Attendant & IVR Setup",
  "Extension Management",
  "Maintenance & Support Contracts",
];

export default function EPABXPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="EPABX / Intercom" breadcrumb="EPABX / Intercom" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Enterprise Communication Systems
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechSelection Store provides comprehensive EPABX and intercom
                solutions for seamless internal and external communication. We
                partner with <strong>Matrix</strong> and other leading brands
                to deliver reliable telecom infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From small offices needing a basic intercom to large
                enterprises requiring multi-location PBX systems, we design
                and deploy communication solutions that scale with your business.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Our EPABX Services:
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
                <i className="fas fa-phone-volume text-8xl text-cyan/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
