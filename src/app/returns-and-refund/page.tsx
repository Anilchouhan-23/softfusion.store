import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Returns & Refund Policy" breadcrumb="Returns & Refund" />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Returns & Refund Policy</h2>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">1. Return Policy</h3>
          <p className="text-gray-600 mb-4">
            Products may be returned within 7 days of delivery if they are defective or
            damaged during transit. Items must be returned in their original packaging with
            all accessories and documentation.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">2. Non-Returnable Items</h3>
          <p className="text-gray-600 mb-4">
            Software licenses, activated antivirus subscriptions, customized products,
            and services already rendered are not eligible for returns.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">3. Refund Process</h3>
          <p className="text-gray-600 mb-4">
            Once the returned product is received and inspected, we will process the refund
            within 7-10 business days. Refunds will be credited to the original payment method.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">4. Service Cancellation</h3>
          <p className="text-gray-600 mb-4">
            Service orders may be cancelled before work commences for a full refund. If work
            has partially been completed, a proportional refund will be provided after deducting
            the cost of work already done.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-8 mb-3">5. Contact for Returns</h3>
          <p className="text-gray-600 mb-4">
            To initiate a return or refund request, please contact us at{" "}
            <strong>support@softfusion.store</strong> or call <strong>+91 98765 43210</strong> with
            your order details and reason for return.
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
