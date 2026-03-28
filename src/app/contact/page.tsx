import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />
      <EnquiryForm />
      <MapSection />
      <Footer />
    </>
  );
}
