import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "Dell OptiPlex 3000 Desktop", brand: "Dell", icon: "fa-desktop", image: "/images/brands/dell.jpg", desc: "Business desktop with Intel Core i5, 8GB RAM, 256GB SSD, Windows 11 Pro, and compact form factor." },
  { name: "HP ProDesk 400 G9 Desktop", brand: "HP", icon: "fa-desktop", image: "/images/brands/hp.jpg", desc: "Enterprise desktop PC with Intel i5 12th Gen, 8GB DDR4, 512GB SSD, and multiple display support." },
  { name: "Dell Latitude 3520 Laptop", brand: "Dell", icon: "fa-laptop", image: "/images/brands/dell.jpg", desc: "15.6-inch business laptop with Intel i5, 8GB RAM, 256GB SSD, HD webcam, and long battery life." },
  { name: "HP ProBook 450 G9 Laptop", brand: "HP", icon: "fa-laptop", image: "/images/brands/hp.jpg", desc: "15.6-inch professional laptop with Intel i5, 16GB RAM, 512GB SSD, fingerprint reader, and backlit keyboard." },
  { name: "Dell 24-inch Monitor E2423H", brand: "Dell", icon: "fa-tv", image: "/images/brands/dell.jpg", desc: "24-inch FHD IPS monitor with anti-glare coating, HDMI/VGA ports, tilt adjustable stand, and ComfortView." },
  { name: "HP LaserJet Pro M404n", brand: "HP", icon: "fa-print", image: "/images/brands/hp.jpg", desc: "Mono laser printer with fast 38ppm speed, network printing, 80,000 pages/month duty cycle, and toner save mode." },
  { name: "HP Color LaserJet Pro M255dw", brand: "HP", icon: "fa-print", image: "/images/brands/hp.jpg", desc: "Color laser printer with auto duplex, WiFi, mobile printing, 22ppm speed, and security features." },
  { name: "Dell Keyboard & Mouse Combo", brand: "Dell", icon: "fa-keyboard", image: "/images/brands/dell.jpg", desc: "Wireless keyboard and mouse combo with long battery life, full-size layout, and plug-and-play USB receiver." },
  { name: "Dell PowerEdge T140 Server", brand: "Dell", icon: "fa-server", image: "/images/brands/dell.jpg", desc: "Tower server with Intel Xeon E-2224, 16GB ECC RAM, 1TB HDD, RAID controller, ideal for small business." },
  { name: "HP UPS 600VA", brand: "HP", icon: "fa-car-battery", image: "/images/brands/hp.jpg", desc: "600VA/360W line-interactive UPS with AVR, surge protection, USB connectivity, and 4 outlets." },
];

export default function ComputersProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Computers & Laptops" breadcrumb="Computers & Laptops" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="Computers & Laptops"
          brandImages={["dell", "hp"]}
          products={products}
          helpText="Need bulk pricing for office setups? Contact us for special corporate rates."
        />
      </section>
      <Footer />
    </>
  );
}
