import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Fingerprint Biometric Systems",
  "Face Recognition Attendance",
  "RFID Card-Based Systems",
  "Access Control & Door Locks",
  "Attendance Software Integration",
  "Cloud-Based Attendance Management",
  "Multi-Location Centralized Tracking",
  "Installation, Training & AMC Support",
];

export default function AttendanceMachinesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Attendance Machines" breadcrumb="Attendance Machines" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Biometric & Access Control Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechSelection Store provides advanced biometric attendance and
                access control systems from trusted brands like{" "}
                <strong>RealTime</strong>, <strong>TimeWatch</strong>, and{" "}
                <strong>ESSL</strong>. Our solutions help businesses automate
                attendance tracking and enhance security.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We handle end-to-end deployment including hardware installation,
                software configuration, employee enrollment, and ongoing
                technical support.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Our Attendance Solutions:
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
                <i className="fas fa-fingerprint text-8xl text-cyan/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
