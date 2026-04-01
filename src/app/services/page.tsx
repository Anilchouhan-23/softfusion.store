import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "fa-code",
    title: "Software Development",
    href: "/services",
    desc: "Custom software engineering, web applications, and mobile app development to solve complex business challenges securely.",
  },
  {
    icon: "fa-cloud",
    title: "SaaS Solutions",
    href: "/services",
    desc: "Scalable Software-as-a-Service platforms for your business needs, including cloud infrastructure setup and ongoing management.",
  },
  {
    icon: "fa-toolbox",
    title: "Digital Tools",
    href: "/services",
    desc: "Productivity, collaboration, and comprehensive digital tools tailored to streamline your company's workflows and operations.",
  },
  {
    icon: "fa-bullhorn",
    title: "Social Media Marketing",
    href: "/services",
    desc: "Data-driven social media management and ad campaigns designed to increase brand visibility, engagement, and conversion rates.",
  },
  {
    icon: "fa-envelope-open-text",
    title: "Email Marketing",
    href: "/services",
    desc: "Automated, personalized email marketing campaigns to nurture leads, retain customers, and drive recurring revenue.",
  },
  {
    icon: "fa-server",
    title: "IT Consulting",
    href: "/services",
    desc: "Strategic IT consulting, infrastructure planning, technical audits, and digital transformation roadmaps for modern enterprises.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Our Services" breadcrumb="Services" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              SoftFusion provides comprehensive software development, marketing,
              and IT solutions tailored for businesses of all sizes across India.
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
