import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Promotional SMS Campaigns",
  "Transactional SMS (OTP, Alerts)",
  "RCS Messaging Services",
  "Bulk WhatsApp Messaging",
  "DLT Registration Assistance",
  "Custom Sender ID",
  "Detailed Delivery Reports & Analytics",
  "API Integration for Developers",
];

export default function BulkSMSPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Bulk SMS Services" breadcrumb="Bulk SMS" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Affordable Bulk SMS & Messaging Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechSelection Store offers reliable and affordable bulk SMS
                services for businesses looking to reach their customers
                effectively. Whether it&apos;s promotional campaigns,
                transactional alerts, or OTP delivery, we have you covered.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our platform supports high-volume messaging with real-time
                delivery reports, DLT compliance, and easy API integration
                for seamless automation with your existing systems.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-4">
                Our Messaging Services:
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
                Get Started
              </a>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-10 flex items-center justify-center aspect-[4/3]">
                <i className="fas fa-comment-sms text-8xl text-cyan/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
