import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  { name: "RealTime T28 Fingerprint", brand: "RealTime", icon: "fa-fingerprint", image: "/images/brands/realtime.jpg", desc: "Biometric fingerprint attendance machine with 3000 user capacity, USB communication, and battery backup." },
  { name: "RealTime RS20 Plus", brand: "RealTime", icon: "fa-fingerprint", image: "/images/brands/realtime.jpg", desc: "Advanced biometric device with fingerprint + RFID, WiFi/4G connectivity, cloud software, and push data." },
  { name: "TimeWatch AT-300 Face", brand: "TimeWatch", icon: "fa-face-smile", image: "/images/brands/timewatch.jpg", desc: "Face recognition attendance system with 1000 face capacity, 4.3-inch screen, mask detection, and WiFi." },
  { name: "ESSL X990 Fingerprint", brand: "ESSL", icon: "fa-fingerprint", image: "/images/brands/essl.jpg", desc: "Professional biometric device with 10,000 fingerprint capacity, TCP/IP, USB, and access control relay." },
  { name: "ESSL iFace302 Face+Finger", brand: "ESSL", icon: "fa-face-smile", image: "/images/brands/essl.jpg", desc: "Multi-biometric device with face + fingerprint recognition, 4.3-inch touchscreen, and 2000 face capacity." },
  { name: "RFID Proximity Card Reader", brand: "Generic", icon: "fa-id-card", image: "/images/brands/essl.jpg", desc: "125KHz RFID card reader for attendance and access control, supports EM cards, Wiegand output." },
  { name: "EM Lock (600 lbs)", brand: "Generic", icon: "fa-lock", image: "/images/products/dvr-4ch.jpg", desc: "Electromagnetic door lock with 600lbs holding force, LED indicator, fail-safe mode, and mounting bracket." },
  { name: "Access Control Panel", brand: "Generic", icon: "fa-microchip", image: "/images/products/nvr-4ch.jpg", desc: "4-door access control board with TCP/IP, Wiegand input, relay outputs, and software management." },
  { name: "TimeWatch Bio Plus", brand: "TimeWatch", icon: "fa-fingerprint", image: "/images/brands/timewatch.jpg", desc: "Budget biometric machine with 1000 users, USB download, battery backup, and simple attendance reports." },
  { name: "ESSL Tripod Turnstile", brand: "ESSL", icon: "fa-door-open", image: "/images/brands/essl.jpg", desc: "Semi-automatic tripod turnstile gate with bi-directional access, LED indicators, and anti-tailgating." },
];

export default function AttendanceProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Attendance Systems" breadcrumb="Attendance Systems" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="Attendance Systems"
          brandImages={["realtime", "timewatch", "essl"]}
          products={products}
          helpText="Need help choosing the right attendance system? Get a free demo."
        />
      </section>
      <Footer />
    </>
  );
}
