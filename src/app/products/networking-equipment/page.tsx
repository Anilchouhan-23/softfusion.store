import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "TP-Link Gigabit Router", brand: "TP-Link", icon: "fa-wifi", image: "/images/brands/tplink.jpg", desc: "Dual-band AC1200 wireless router with 4 Gigabit LAN ports, MU-MIMO technology, and parental controls." },
  { name: "TP-Link 8-Port Gigabit Switch", brand: "TP-Link", icon: "fa-network-wired", image: "/images/brands/tplink.jpg", desc: "Unmanaged 8-port desktop switch with 10/100/1000Mbps, auto-MDI/MDIX, and fanless quiet design." },
  { name: "TP-Link 16-Port Rack Switch", brand: "TP-Link", icon: "fa-network-wired", image: "/images/brands/tplink.jpg", desc: "Rackmount 16-port Gigabit switch for offices, with 19-inch rack design and steel casing." },
  { name: "SonicWall TZ270 Firewall", brand: "SonicWall", icon: "fa-shield-halved", image: "/images/brands/sonicwall.jpg", desc: "Next-gen firewall with deep packet inspection, VPN, malware protection, and advanced threat intelligence." },
  { name: "SonicWall TZ370 Firewall", brand: "SonicWall", icon: "fa-shield-halved", image: "/images/brands/sonicwall.jpg", desc: "Enterprise-grade firewall supporting up to 100 users, SSL VPN, content filtering, and multi-WAN failover." },
  { name: "TP-Link EAP245 Access Point", brand: "TP-Link", icon: "fa-wifi", image: "/images/brands/tplink.jpg", desc: "AC1750 ceiling-mount PoE access point with seamless roaming, band steering, and Omada SDN management." },
  { name: "Dell Server Rack 42U", brand: "Dell", icon: "fa-server", image: "/images/brands/dell.jpg", desc: "42U server rack enclosure with perforated doors, cable management, adjustable mounting rails, and lockable doors." },
  { name: "Cat6 UTP Cable Box (305m)", brand: "Generic", icon: "fa-ethernet", image: "/images/products/nvr-4ch.jpg", desc: "Cat6 unshielded twisted pair cable, 305m pull box, 23AWG copper conductors, tested to 250MHz." },
  { name: "TP-Link 24-Port PoE Switch", brand: "TP-Link", icon: "fa-network-wired", image: "/images/brands/tplink.jpg", desc: "24-port managed PoE+ switch with 192W budget, VLAN, QoS, and Omada SDN cloud management." },
  { name: "Network Tool Kit", brand: "Generic", icon: "fa-toolbox", image: "/images/products/dvr-4ch.jpg", desc: "Professional networking tool kit with crimping tool, cable tester, punch down tool, RJ45 connectors, and carrying case." },
];

export default function NetworkingProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Networking Equipment" breadcrumb="Networking Equipment" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="Networking Equipment"
          brandImages={["tplink", "sonicwall", "dell"]}
          products={products}
          helpText="Need help designing your network? Get a free consultation."
        />
      </section>
      <Footer />
    </>
  );
}
