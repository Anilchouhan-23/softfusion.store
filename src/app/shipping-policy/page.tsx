import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function ShippingPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Shipping Policy" breadcrumb="Shipping Policy" />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Shipping Policy</h2>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">1. Delivery Areas</h3>
          <p className="text-gray-600 mb-4">
            TechSelection Store delivers products and provides installation services primarily
            in Hyderabad and surrounding areas. For other locations, please contact us to
            check availability and shipping charges.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">2. Delivery Time</h3>
          <p className="text-gray-600 mb-4">
            Standard delivery within Hyderabad takes 1-3 business days. For outstation
            deliveries, shipping may take 5-7 business days depending on the location.
            Installation services are scheduled based on mutual convenience.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">3. Shipping Charges</h3>
          <p className="text-gray-600 mb-4">
            Local delivery within Hyderabad is free for orders above INR 5,000. For smaller
            orders and outstation shipping, charges will be communicated at the time of order
            confirmation.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">4. Order Tracking</h3>
          <p className="text-gray-600 mb-4">
            Once your order is shipped, you will receive a tracking number via SMS/email
            to track your shipment status.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">5. Damaged Products</h3>
          <p className="text-gray-600 mb-4">
            If you receive a damaged product, please contact us within 24 hours of delivery
            with photographs. We will arrange for replacement or refund as per our returns policy.
          </p>

          <p className="text-gray-500 text-sm mt-10 italic">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
