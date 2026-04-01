import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Enquiry" breadcrumb="Enquiry" />
      <EnquiryForm />
      <Footer />
    </>
  );
}
