"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "./useScrollReveal";

const serviceOptions = [
  "Software Development",
  "SaaS Solutions",
  "Digital Tools",
  "Social Media Marketing",
  "Email Marketing",
  "IT Consulting",
  "Other",
];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useScrollReveal();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="enquiry" className="py-20 bg-[#f8fbff]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Info Side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Have a project in mind or need IT support? Fill out the enquiry form
            and our team will get back to you within 24 hours with a customized
            solution.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: "fa-map-marker-alt", text: "Hyderabad, Telangana, India", label: "Location" },
              { icon: "fa-phone", text: "+91 98765 43210", label: "Phone" },
              { icon: "fa-envelope", text: "info@smartsofthub.online", label: "Email" },
              { icon: "fa-clock", text: "Mon - Sat: 9:00 AM - 7:00 PM", label: "Hours" },
            ].map((item) => (
              <div key={item.icon} className="flex items-center gap-3.5 group">
                <div className="w-11 h-11 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan shrink-0 group-hover:bg-cyan group-hover:text-navy transition-colors">
                  <i className={`fas ${item.icon}`} />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">{item.label}</span>
                  <span className="text-gray-600 text-[0.95rem]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex gap-6 mt-8 pt-6 border-t border-gray-200">
            {[
              { icon: "fa-shield-alt", text: "Secure" },
              { icon: "fa-clock", text: "24hr Response" },
              { icon: "fa-check-circle", text: "Free Quote" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-gray-500">
                <i className={`fas ${b.icon} text-cyan`} />
                {b.text}
              </div>
            ))}
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-xl font-semibold text-navy mb-6">
            Send Us an Enquiry
          </h3>
          {submitted && (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
              <i className="fas fa-check-circle" />
              Thank you! We will get back to you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:border-cyan focus:bg-white transition-colors"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:border-cyan focus:bg-white transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:border-cyan focus:bg-white transition-colors"
              />
            </div>
            <select
              required
              defaultValue=""
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:border-cyan focus:bg-white transition-colors"
            >
              <option value="" disabled>
                Select Service
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:border-cyan focus:bg-white transition-colors resize-y"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-cyan text-navy font-semibold rounded-full text-base hover:bg-cyan-dark hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
            >
              <i className="fas fa-paper-plane mr-2" />
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
