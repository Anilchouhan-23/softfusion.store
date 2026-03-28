import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "Tally Prime - Single User", brand: "Tally", icon: "fa-calculator", image: "/images/brands/tally.jpg", desc: "India's leading business accounting software with GST billing, inventory management, and banking integration." },
  { name: "Tally Prime - Multi User", brand: "Tally", icon: "fa-calculator", image: "/images/brands/tally.jpg", desc: "Multi-user Tally Prime license for concurrent access, data synchronization, and remote access capabilities." },
  { name: "Quick Heal Total Security", brand: "Quick Heal", icon: "fa-shield-halved", image: "/images/brands/quickheal.jpg", desc: "Complete endpoint protection with antivirus, firewall, web security, ransomware protection, and parental control." },
  { name: "Quick Heal Internet Security", brand: "Quick Heal", icon: "fa-shield-halved", image: "/images/brands/quickheal.jpg", desc: "Internet security suite with safe banking, email security, phishing protection, and real-time threat detection." },
  { name: "Quick Heal Endpoint Security", brand: "Quick Heal", icon: "fa-building-shield", image: "/images/brands/quickheal.jpg", desc: "Enterprise antivirus for businesses with centralized management console, policy deployment, and asset tracking." },
  { name: "Windows 11 Pro License", brand: "Microsoft", icon: "fa-windows", image: "/images/brands/hp.jpg", desc: "Genuine Windows 11 Professional license with BitLocker, Remote Desktop, Hyper-V, and business features." },
  { name: "Microsoft Office 365 Business", brand: "Microsoft", icon: "fa-file-word", image: "/images/brands/dell.jpg", desc: "Office 365 subscription with Word, Excel, PowerPoint, Outlook, Teams, 1TB OneDrive, and business email." },
  { name: "Windows Server 2022 Standard", brand: "Microsoft", icon: "fa-server", image: "/images/brands/hp.jpg", desc: "Server OS license with Active Directory, file sharing, DHCP, DNS, Hyper-V, and 16-core licensing." },
  { name: "Tally Prime Server", brand: "Tally", icon: "fa-database", image: "/images/brands/tally.jpg", desc: "Tally server license for large businesses with high-speed data access, concurrent users, and data security." },
  { name: "Quick Heal Seqrite EPS", brand: "Quick Heal", icon: "fa-lock", image: "/images/brands/quickheal.jpg", desc: "Seqrite Endpoint Protection Standard with DLP, device control, IDS/IPS, application control, and cloud console." },
];

export default function SoftwareProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Software & Licenses" breadcrumb="Software & Licenses" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="Software & Licenses"
          brandImages={["tally", "quickheal"]}
          products={products}
          helpText="Need volume licensing or renewal help? We handle all the paperwork."
        />
      </section>
      <Footer />
    </>
  );
}
