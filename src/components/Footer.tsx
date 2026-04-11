import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "SaaS Solutions", href: "/services/saas-solutions" },
  { label: "Digital Tools", href: "/services/digital-tools" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const resourceLinks = [
  { label: "Products", href: "/products" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Support", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Returns & Refund Policy", href: "/returns-and-refund" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Affiliate Disclaimer", href: "/affiliate-disclaimer" },
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 border-b border-white/10 pb-2.5 text-base font-semibold text-white md:text-lg">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan"
            >
              <i className="fas fa-chevron-right text-[0.6rem] text-cyan" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      <div className="mx-auto w-[90%] max-w-[1200px] py-16 md:py-20">
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Soft<span className="text-cyan">Fusion</span>
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                Your trusted partner for software development, SaaS solutions,
                digital marketing, and end-to-end IT services.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                We partner with{" "}
                <strong className="font-semibold text-gray-300">
                  AWS, Google Cloud, Microsoft Azure, Vercel, Stripe, and
                  HubSpot
                </strong>
                .
              </p>
              <div className="mt-5 flex gap-4">
                {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm text-gray-400 transition-colors hover:border-cyan/40 hover:text-cyan"
                      aria-label={icon}
                    >
                      <i className={`fab fa-${icon}`} />
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-navy-light/40 p-5 md:p-6">
              <h4 className="mb-4 text-base font-semibold text-white">
                Contact Info
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <i className="fas fa-map-marker-alt mr-2 text-cyan" />
                  Hyderabad, Telangana, India
                </p>
                <p>
                  <i className="fas fa-phone mr-2 text-cyan" />
                  +91 98765 43210
                </p>
                <p>
                  <i className="fas fa-envelope mr-2 text-cyan" />
                  support@softfusion.store
                </p>
                <p>
                  <i className="fas fa-globe mr-2 text-cyan" />
                  www.softfusion.store
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          <FooterLinkList title="Company" links={companyLinks} />
          <FooterLinkList title="Services" links={serviceLinks} />
          <FooterLinkList title="Resources" links={resourceLinks} />
          <FooterLinkList title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm sm:flex-row">
          <span>&copy; 2026 SoftFusion. All Rights Reserved.</span>
          <span className="flex flex-wrap justify-center gap-2">
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
