import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "HD & IP Camera Systems (2MP, 4MP, 8MP)",
  "Night Vision & Infrared Cameras",
  "PTZ (Pan-Tilt-Zoom) Cameras",
  "DVR & NVR Setup and Configuration",
  "Remote Viewing via Mobile & Desktop",
  "Cloud Storage & Local Storage Options",
  "Motion Detection & Smart Alerts",
  "Annual Maintenance Contracts (AMC)",
];

const sectors = [
  { icon: "fa-building", title: "Corporate Offices" },
  { icon: "fa-industry", title: "Industrial" },
  { icon: "fa-house", title: "Residential" },
  { icon: "fa-graduation-cap", title: "Educational" },
  { icon: "fa-hospital", title: "Healthcare" },
  { icon: "fa-store", title: "Retail & Malls" },
  { icon: "fa-gem", title: "Jewelry Stores" },
  { icon: "fa-landmark", title: "Banking" },
];

export default function CCTVInstallationPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="CCTV Installation" breadcrumb="CCTV Installation" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Professional CCTV Surveillance Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechSelection Store specializes in designing, installing, and
                maintaining state-of-the-art CCTV surveillance systems. We work
                with top brands like <strong>Hikvision</strong>,{" "}
                <strong>CP Plus</strong>, and <strong>HoneyWell</strong> to
                deliver reliable security solutions for every environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need a single camera for your home or a
                comprehensive multi-location setup for your enterprise, our team
                of certified engineers will design the perfect surveillance
                solution tailored to your security needs.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Our CCTV Services Include:
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
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-10 flex items-center justify-center aspect-[4/3] mb-8">
                <i className="fas fa-video text-8xl text-cyan/30" />
              </div>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Sectors We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {sectors.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center gap-3"
                  >
                    <i className={`fas ${s.icon} text-cyan text-lg`} />
                    <span className="text-sm font-medium text-gray-700">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
