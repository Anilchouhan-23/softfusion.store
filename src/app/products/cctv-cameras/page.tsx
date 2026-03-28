import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "Hikvision 2 MP Dome Camera", brand: "Hikvision", icon: "fa-video", image: "/images/products/cctv-dome.jpg", desc: "Indoor dome camera with 2MP resolution, IR night vision up to 20m, and wide-angle lens for complete room coverage." },
  { name: "Hikvision 2 MP Bullet Camera", brand: "Hikvision", icon: "fa-video", image: "/images/products/cctv-bullet.jpg", desc: "Outdoor bullet camera with 2MP HD, IP67 weatherproof rating, IR range up to 40m, and metal housing." },
  { name: "Hikvision 4 Channel DVR", brand: "Hikvision", icon: "fa-server", image: "/images/products/dvr-4ch.jpg", desc: "4-channel Turbo HD DVR supporting up to 2MP recording, H.265+ compression, remote viewing via Hik-Connect." },
  { name: "Hikvision 8 Channel DVR", brand: "Hikvision", icon: "fa-server", image: "/images/products/dvr-8ch.jpg", desc: "8-channel DVR with dual-stream recording, HDMI/VGA output, motion detection alerts, and mobile app support." },
  { name: "CP Plus 2 MP Dome Camera", brand: "CP Plus", icon: "fa-video", image: "/images/products/cctv-dome.jpg", desc: "Indoor dome camera with 2.4MP resolution, IR LEDs, wide dynamic range, and smart IR technology." },
  { name: "CP Plus 2 MP Bullet Camera", brand: "CP Plus", icon: "fa-video", image: "/images/products/cctv-bullet.jpg", desc: "Outdoor bullet camera with metal body, 2.4MP sensor, IR up to 30m, and IP66 weather resistance." },
  { name: "Hikvision 2 MP IP Dome", brand: "Hikvision", icon: "fa-globe", image: "/images/products/ip-dome.jpg", desc: "Network IP dome camera with PoE support, 2MP resolution, H.265+ codec, and cloud access." },
  { name: "Hikvision 2 MP IP Bullet", brand: "Hikvision", icon: "fa-globe", image: "/images/products/ip-bullet.jpg", desc: "IP bullet camera with built-in mic, 2MP sensor, WDR, PoE power, and ONVIF compatibility." },
  { name: "Hikvision 4 Channel NVR", brand: "Hikvision", icon: "fa-database", image: "/images/products/nvr-4ch.jpg", desc: "4-channel network video recorder for IP cameras, up to 6TB HDD, H.265+ decoding, 4K output." },
  { name: "Hikvision 8 Channel NVR", brand: "Hikvision", icon: "fa-database", image: "/images/products/nvr-8ch.jpg", desc: "8-channel NVR with PoE ports, 8MP recording support, smart playback, and remote access." },
  { name: "HoneyWell 2 MP Dome Camera", brand: "HoneyWell", icon: "fa-video", image: "/images/products/cctv-dome.jpg", desc: "Performance series dome camera with true WDR, smart IR, 2MP resolution, and vandal-resistant housing." },
  { name: "HoneyWell 4 Channel DVR", brand: "HoneyWell", icon: "fa-server", image: "/images/products/dvr-4ch.jpg", desc: "4-channel embedded DVR with H.265 compression, dual streaming, USB backup, and mobile monitoring." },
];

export default function CCTVProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="CCTV Cameras & Surveillance" breadcrumb="CCTV Cameras" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="CCTV Cameras"
          brandImages={["hikvision", "cpplus"]}
          products={products}
          helpText="Get expert advice on choosing the right CCTV system for your needs."
        />
      </section>
      <Footer />
    </>
  );
}
