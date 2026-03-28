import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Enquiry", href: "/enquiry" },
      { label: "Offers", href: "/offers" },
      { label: "Payment Options", href: "/payment" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "EPABX / Intercom", href: "/services/epabx" },
      { label: "Computer Repair", href: "/services/computer-repair" },
      { label: "CCTV Installation", href: "/services/cctv-installation" },
      { label: "Network Solutions", href: "/services/network-solutions" },
      { label: "Attendance Machines", href: "/services/attendance-machines" },
      { label: "Bulk SMS", href: "/services/bulk-sms" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "CCTV Cameras", href: "/products/cctv-cameras" },
      { label: "Networking Equipment", href: "/products/networking-equipment" },
      { label: "Computers & Laptops", href: "/products/computers-laptops" },
      { label: "Attendance Systems", href: "/products/attendance-systems" },
      { label: "EPABX Systems", href: "/products/epabx-systems" },
      { label: "Software & Licenses", href: "/products/software-licenses" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Returns & Refund Policy", href: "/returns-and-refund" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Site Map" breadcrumb="Site Map" />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h3 className="text-lg font-semibold text-navy mb-4 pb-2 border-b-2 border-cyan">
                  {sec.title}
                </h3>
                <ul className="space-y-3">
                  {sec.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-cyan transition-colors flex items-center gap-2 text-sm"
                      >
                        <i className="fas fa-chevron-right text-cyan text-[0.6rem]" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
