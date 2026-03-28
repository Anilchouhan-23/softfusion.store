import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSlider />
      <About />
      <Highlights />
      <Services />
      <CTABanner />
      <Brands />
      <Testimonials />
      <EnquiryForm />
      <MapSection />
      <Footer />
    </>
  );
}
