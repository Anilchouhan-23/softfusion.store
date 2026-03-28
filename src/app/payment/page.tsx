"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const bankAccounts = [
  {
    bankName: "State Bank of India",
    bankIcon: "fa-building-columns",
    bankColor: "#22409a",
    fields: [
      { label: "Account Name", value: "TechSelection Store" },
      { label: "Account Number", value: "39876543210" },
      { label: "Bank", value: "State Bank of India" },
      { label: "IFSC Code", value: "SBIN0012345" },
      { label: "Branch", value: "Hyderabad, Telangana" },
    ],
  },
  {
    bankName: "HDFC Bank",
    bankIcon: "fa-university",
    bankColor: "#004b8d",
    fields: [
      { label: "Account Name", value: "TechSelection Store" },
      { label: "Account Number", value: "50200012345678" },
      { label: "Bank", value: "HDFC Bank" },
      { label: "IFSC Code", value: "HDFC0001234" },
      { label: "Branch", value: "Hyderabad, Telangana" },
    ],
  },
];

const paymentMethods = [
  {
    icon: "fa-qrcode",
    title: "UPI Payment",
    desc: "Pay instantly using any UPI app — Google Pay, PhonePe, Paytm, etc.",
    details: [
      "UPI ID: pay@techselection.store",
      "Scan QR code on invoice",
      "Instant confirmation",
      "No extra charges",
    ],
  },
  {
    icon: "fa-credit-card",
    title: "Credit / Debit Card",
    desc: "We accept all major credit and debit cards through our secure payment gateway.",
    details: [
      "Visa, MasterCard, RuPay",
      "Secure SSL encryption",
      "EMI options available",
      "Instant confirmation",
    ],
  },
  {
    icon: "fa-money-bill-wave",
    title: "Cash on Delivery",
    desc: "Pay in cash at the time of product delivery or service completion.",
    details: [
      "Available for local orders",
      "Pay after inspection",
      "No advance required",
      "Receipt provided",
    ],
  },
  {
    icon: "fa-file-invoice",
    title: "Cheque / DD",
    desc: "Pay via cheque or demand draft for large orders and corporate clients.",
    details: [
      "In favour of: TechSelection Store",
      "Subject to clearance",
      "Suitable for bulk orders",
      "Corporate invoicing available",
    ],
  },
  {
    icon: "fa-wallet",
    title: "EMI Options",
    desc: "Flexible EMI options available for large orders through our payment partners.",
    details: [
      "3/6/9/12 month EMI",
      "Low interest rates",
      "Bajaj Finserv, HDFC",
      "Quick approval process",
    ],
  },
];

const serviceOptions = [
  "CCTV Installation",
  "Networking / LAN",
  "Computer Repair",
  "Access Control / Attendance Machine",
  "EPABX / Intercom",
  "Bulk SMS Services",
  "Web Services",
  "Other",
];

export default function PaymentPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ service: "", name: "", phone: "", message: "" });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted. We will contact you shortly.");
    setFormData({ service: "", name: "", phone: "", message: "" });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Payment Options" breadcrumb="Payment Options" />

      {/* Bank Account Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Bank Account Details</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Transfer payment directly to our bank account using NEFT, RTGS, or IMPS.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bankAccounts.map((bank) => (
              <div
                key={bank.bankName}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                {/* Bank Header */}
                <div
                  className="px-8 py-5 flex items-center gap-4"
                  style={{ background: bank.bankColor }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className={`fas ${bank.bankIcon} text-xl text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{bank.bankName}</h3>
                </div>

                {/* Account Fields */}
                <div className="p-8">
                  {bank.fields.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider block">
                          {f.label}
                        </span>
                        <span className="text-[0.95rem] font-semibold text-navy">
                          {f.value}
                        </span>
                      </div>
                      {(f.label === "Account Number" || f.label === "IFSC Code") && (
                        <button
                          onClick={() => copyToClipboard(f.value, `${bank.bankName}-${f.label}`)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-cyan/10 text-cyan hover:bg-cyan hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <i
                            className={`fas ${
                              copied === `${bank.bankName}-${f.label}`
                                ? "fa-check"
                                : "fa-copy"
                            } text-[0.65rem]`}
                          />
                          {copied === `${bank.bankName}-${f.label}` ? "Copied!" : "Copy"}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Payment Methods */}
      <section className="py-16">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Other Payment Methods</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose from multiple convenient payment options.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all border-t-4 border-transparent hover:border-t-cyan"
              >
                <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`fas ${m.icon} text-xl text-cyan`} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{m.desc}</p>
                <ul className="space-y-2">
                  {m.details.map((d) => (
                    <li key={d} className="text-gray-600 text-sm flex items-center gap-2">
                      <i className="fas fa-check text-cyan text-xs" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Enquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Apply for Service</h2>
            <p className="text-gray-500 text-lg">
              Select a service and submit your enquiry. We&apos;ll get back to you shortly.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-5">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              >
                <option value="" disabled>
                  -- Select Service --
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              />
            </div>
            <div className="mb-5">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              />
            </div>
            <div className="mb-5">
              <textarea
                placeholder="Your Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan text-navy font-semibold rounded-xl hover:bg-cyan-dark transition-colors text-sm"
            >
              <i className="fas fa-paper-plane mr-2" />
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Need Help Banner */}
      <section className="py-14">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Need Help with Payment?</h3>
            <p className="text-blue-200/80 max-w-lg mx-auto mb-6">
              Contact our team for any payment-related queries, invoice requests,
              or to discuss custom payment plans for large orders.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors"
              >
                <i className="fas fa-phone" /> Call Us
              </a>
              <a
                href="/enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-cyan hover:text-cyan transition-colors"
              >
                <i className="fas fa-envelope" /> Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
