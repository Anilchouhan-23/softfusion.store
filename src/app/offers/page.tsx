import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Offers" breadcrumb="Offers" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Special Offers &amp; Deals
            </h2>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>

          {/* Offer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all">
              <div className="bg-gradient-to-br from-cyan to-navy-dark p-8 text-center">
                <i className="fas fa-globe text-5xl text-white/80 mb-3" />
                <h3 className="text-xl font-bold text-white">Startup Web Pack</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-navy">20% OFF</span>
                  <span className="text-sm text-gray-400 line-through">Regular Price</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Custom 5-Page Website
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Mobile Responsive
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Free Domain (1 Yr)
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Basic SEO Setup
                  </li>
                </ul>
                <a
                  href="/enquiry"
                  className="block text-center py-3 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all">
              <div className="bg-gradient-to-br from-navy to-navy-dark p-8 text-center relative">
                <span className="absolute top-3 right-3 bg-yellow-400 text-navy text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                <i className="fas fa-bullhorn text-5xl text-white/80 mb-3" />
                <h3 className="text-xl font-bold text-white">Marketing Bundle</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-navy">15% OFF</span>
                  <span className="text-sm text-gray-400 line-through">Regular Price</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Social Media Management
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Google Ads Setup
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Monthly Analytics Report
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Email Marketing (Standard)
                  </li>
                </ul>
                <a
                  href="/enquiry"
                  className="block text-center py-3 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all">
              <div className="bg-gradient-to-br from-navy-light to-cyan p-8 text-center">
                <i className="fas fa-cloud text-5xl text-white/80 mb-3" />
                <h3 className="text-xl font-bold text-white">SaaS Starter Kit</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-navy">10% OFF</span>
                  <span className="text-sm text-gray-400 line-through">Regular Price</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> AWS/Azure Architecture Setup
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Authentication Configured
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> Stripe Payment Integration
                  </li>
                  <li className="text-gray-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check text-cyan text-xs" /> DevOps Automation
                  </li>
                </ul>
                <a
                  href="/enquiry"
                  className="block text-center py-3 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>

          {/* More offers coming soon */}
          <div className="text-center bg-[#f0faff] rounded-2xl p-12">
            <i className="fas fa-gift text-5xl text-cyan/40 mb-4" />
            <h3 className="text-2xl font-bold text-navy mb-2">
              More Offers Coming Soon!
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Stay tuned for exciting new deals and discounts on our IT services
              and products. Contact us for custom quotes.
            </p>
            <a
              href="/enquiry"
              className="inline-block mt-6 px-8 py-3 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors"
            >
              Contact for Custom Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
