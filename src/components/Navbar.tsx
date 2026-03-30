"use client";

import { useState } from "react";
import Link from "next/link";

const serviceDropdown = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "SaaS Solutions", href: "/services/saas-solutions" },
  { label: "Digital Tools", href: "/services/digital-tools" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const webServicesDropdown = [
  { label: "Domain & Hosting", href: "/services/domain-hosting" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "Cloud Services", href: "/services/cloud-services" },
  { label: "Custom API Integrations", href: "/services/custom-api-integrations" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Offers", href: "/offers" },
  { label: "Payment Options", href: "/payment" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(false);

  const close = () => {
    setMobileOpen(false);
    setServiceOpen(false);
    setWebOpen(false);
  };

  return (
    <nav className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center py-3">
        <Link href="/" className="text-[1.7rem] font-bold text-navy shrink-0">
          Smart<span className="text-cyan">Soft</span>Hub
        </Link>

        {/* Nav */}
        <div
          className={`${
            mobileOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-5 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-5 md:p-0 z-50 max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible`}
        >
          {/* Home */}
          <Link
            href="/"
            onClick={close}
            className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors whitespace-nowrap"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group w-full md:w-auto">
            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setServiceOpen(!serviceOpen);
                }
              }}
              className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors flex items-center gap-1 w-full md:w-auto whitespace-nowrap"
            >
              Service <i className="fas fa-chevron-down text-[0.6rem]" />
            </button>
            <div
              className={`${
                serviceOpen ? "block" : "hidden"
              } md:hidden md:group-hover:block md:absolute top-full left-0 bg-white md:shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:rounded-lg md:min-w-[240px] py-0 md:py-2 pl-4 md:pl-0 z-50`}
            >
              {serviceDropdown.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onClick={close}
                  className="block py-2.5 md:px-5 text-sm text-gray-600 hover:text-cyan hover:bg-blue-50/50 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
              {/* Web Services sub-dropdown */}
              <div className="relative group/web">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.innerWidth < 768) setWebOpen(!webOpen);
                  }}
                  className="w-full text-left py-2.5 md:px-5 text-sm text-gray-600 hover:text-cyan hover:bg-blue-50/50 transition-colors flex items-center justify-between"
                >
                  Web Services
                  <i className="fas fa-chevron-right text-[0.55rem] ml-2" />
                </button>
                <div
                  className={`${
                    webOpen ? "block" : "hidden"
                  } md:hidden md:group-hover/web:block md:absolute md:top-0 md:left-full bg-white md:shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:rounded-lg md:min-w-[200px] py-0 md:py-2 pl-4 md:pl-0`}
                >
                  {webServicesDropdown.map((w) => (
                    <Link
                      key={w.label}
                      href={w.href}
                      onClick={close}
                      className="block py-2.5 md:px-5 text-sm text-gray-600 hover:text-cyan hover:bg-blue-50/50 transition-colors"
                    >
                      {w.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry */}
          <Link
            href="/enquiry"
            onClick={close}
            className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors whitespace-nowrap"
          >
            Enquiry
          </Link>

          {/* Offers */}
          <Link
            href="/offers"
            onClick={close}
            className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors whitespace-nowrap"
          >
            Offers
          </Link>

          {/* Payment Options */}
          <Link
            href="/payment"
            onClick={close}
            className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors whitespace-nowrap"
          >
            Payment Options
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            onClick={close}
            className="py-3 md:py-1 font-medium text-[0.9rem] text-gray-700 hover:text-cyan transition-colors whitespace-nowrap"
          >
            Blog
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-[26px] h-[3px] bg-navy rounded-sm transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[3px] bg-navy rounded-sm transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[3px] bg-navy rounded-sm transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
