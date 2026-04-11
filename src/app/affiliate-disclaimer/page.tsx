import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer | SoftFusion",
  description:
    "Read SoftFusion's affiliate disclaimer to understand how affiliate partnerships may influence recommendations and links.",
  keywords: [
    "affiliate disclaimer",
    "SoftFusion policy",
    "affiliate links",
    "disclosure",
  ],
};

export default function AffiliateDisclaimerPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Affiliate Disclaimer" breadcrumb="Affiliate Disclaimer" />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto w-[90%] max-w-[900px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:p-10">
          <h1 className="text-3xl font-bold text-navy">Affiliate Disclaimer</h1>
          <p className="mt-5 leading-relaxed text-slate-600">
            Some links published on this website may be affiliate links. This
            means SoftFusion may earn a small commission if you click a link and
            complete a purchase, at no additional cost to you.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            We only recommend products, platforms, and services that are relevant
            to our audience and aligned with our quality standards. Affiliate
            relationships do not influence our commitment to honest,
            experience-based recommendations.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            All opinions expressed on this website are our own unless otherwise
            stated. You should independently evaluate any product or service
            before making a business decision.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            How Affiliate Links Work
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            If you follow an affiliate link on our website and later purchase a
            product or service, the provider may report that referral to us and
            pay a commission. These commissions help us maintain our content,
            educational resources, and product comparison pages.
          </p>

          <h2 className="mt-7 text-xl font-semibold text-navy">
            Editorial Independence
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            We do not accept payment in exchange for guaranteed positive reviews.
            We assess tools and services using relevance, quality, security,
            usability, and long-term value for our audience. Any sponsored or
            promotional collaboration is clearly disclosed.
          </p>

          <h2 className="mt-7 text-xl font-semibold text-navy">
            No Extra Cost to You
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Clicking affiliate links does not increase your purchase price in
            normal circumstances. Pricing, terms, and final billing are always
            controlled by the third-party provider.
          </p>

          <h2 className="mt-7 text-xl font-semibold text-navy">
            Important Notes
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Availability, pricing, and features can change without notice.</li>
            <li>
              We recommend verifying official product terms before purchasing.
            </li>
            <li>
              We are not responsible for third-party websites, billing systems,
              or service performance.
            </li>
            <li>
              Affiliate partnerships do not modify our commitment to transparent
              and accurate information.
            </li>
          </ul>

          <h2 className="mt-7 text-xl font-semibold text-navy">
            Contact and Clarifications
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            If you have questions about this disclaimer or any affiliate
            relationship, please contact us through our Contact page. We value
            transparency and will provide clarification whenever needed.
          </p>

          <div className="mt-8 rounded-xl border border-cyan/20 bg-cyan/5 p-5">
            <h2 className="text-lg font-semibold text-navy">Transparency Commitment</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We disclose material affiliate relationships where appropriate and
              strive to keep our content transparent, accurate, and useful for
              every visitor.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Last reviewed: April 11, 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
