import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "Matrix ETERNITY GENX12S", brand: "Matrix", icon: "fa-phone-volume", image: "/images/brands/matrix.jpg", desc: "Digital EPABX system supporting 12 ports (CO + Extensions), caller ID, auto-attendant, and music on hold." },
  { name: "Matrix ETERNITY GENX8S", brand: "Matrix", icon: "fa-phone-volume", image: "/images/brands/matrix.jpg", desc: "Compact 8-port EPABX with CLIP, voicemail, conference calling, and flexible CO/extension configuration." },
  { name: "Matrix SPARSH VP510E", brand: "Matrix", icon: "fa-phone", image: "/images/brands/matrix.jpg", desc: "IP phone with 4.3-inch color display, HD voice, PoE support, 6 SIP lines, and BLF keys." },
  { name: "Matrix SARVAM UCS", brand: "Matrix", icon: "fa-server", image: "/images/brands/matrix.jpg", desc: "Unified communication server supporting IP-PBX, video calling, chat, presence, and mobile UC client." },
  { name: "Matrix NAVAN CNX200", brand: "Matrix", icon: "fa-phone-volume", image: "/images/brands/matrix.jpg", desc: "IP-PBX for SMBs with 200 users, SIP trunking, auto-attendant, call recording, and web management." },
  { name: "Analog Telephone Instrument", brand: "Generic", icon: "fa-phone-flip", image: "/images/products/dvr-4ch.jpg", desc: "Standard analog telephone with caller ID display, speed dial, redial, hands-free speaker, and wall mountable." },
  { name: "Matrix COSEC Door Phone", brand: "Matrix", icon: "fa-bell", image: "/images/brands/matrix.jpg", desc: "IP video door phone with 2MP camera, night vision, touch buttons, and integration with COSEC access control." },
  { name: "Conference Phone - Matrix", brand: "Matrix", icon: "fa-users", image: "/images/brands/matrix.jpg", desc: "Full-duplex conference phone with 360-degree microphone pickup, noise reduction, and daisy-chain support." },
  { name: "Matrix ETERNITY NENX", brand: "Matrix", icon: "fa-phone-volume", image: "/images/brands/matrix.jpg", desc: "Next-gen hybrid EPABX supporting analog, digital, and IP extensions with expandable architecture." },
  { name: "Cordless DECT Phone", brand: "Generic", icon: "fa-mobile-screen", image: "/images/products/nvr-8ch.jpg", desc: "DECT cordless phone with 300m range, intercom, call transfer, 10-hour talk time, and ECO mode." },
];

export default function EPABXProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="EPABX & Intercom Systems" breadcrumb="EPABX Systems" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="EPABX Systems"
          brandImages={["matrix"]}
          products={products}
          helpText="Need a telecom solution for your office? Get a free site survey."
        />
      </section>
      <Footer />
    </>
  );
}
