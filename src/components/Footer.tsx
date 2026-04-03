import Link from "next/link";

const serviceLinks = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "SaaS Solutions", href: "/services/saas-solutions" },
  { label: "Digital Tools", href: "/services/digital-tools" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const additionalLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Condition", href: "/terms-and-conditions" },
  { label: "Returns & Refund Policy", href: "/returns-and-refund" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Site Map", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400 pt-16 pb-5">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              SoftFusion
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              We Partner with <strong className="text-gray-300">AWS, Google Cloud, Microsoft Azure,
              Vercel, Stripe, HubSpot</strong>
            </p>
            <p className="text-sm leading-relaxed mb-3">
              Your trusted partner for software development, SaaS solutions,
              digital marketing, and comprehensive IT services.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="text-gray-400 text-lg hover:text-cyan transition-colors"
                    aria-label={icon}
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Additional Links
            </h4>
            <ul className="space-y-2.5">
              {additionalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-cyan transition-colors"
                  >
                    <i className="fas fa-chevron-right text-cyan text-xs mr-2" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-500 hover:text-cyan transition-colors"
                  >
                    <i className="fas fa-chevron-right text-cyan text-xs mr-2" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <i className="fas fa-map-marker-alt text-cyan mr-2" />
                Hyderabad, Telangana, India
              </p>
              <p>
                <i className="fas fa-phone text-cyan mr-2" />
                +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope text-cyan mr-2" />
                support@softfusion.store
              </p>
              <p>
                <i className="fas fa-globe text-cyan mr-2" />
                www.softfusion.store
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <span>&copy; 2026 SoftFusion. All Rights Reserved.</span>
          <span className="flex gap-2 flex-wrap justify-center">
            <Link href="/terms-and-conditions" className="text-cyan hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="text-cyan hover:underline">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/sitemap" className="text-cyan hover:underline">
              Sitemap
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
