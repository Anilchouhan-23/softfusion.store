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
      { label: "Software Development", href: "/services" },
      { label: "SaaS Solutions", href: "/services" },
      { label: "Digital Tools", href: "/services" },
      { label: "Social Media Marketing", href: "/services" },
      { label: "Email Marketing", href: "/services" },
      { label: "IT Consulting", href: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Software & Licenses", href: "/products" },
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
