import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ───── data ───── */

const serviceCards = [
  {
    icon: "fa-laptop",
    title: "Laptop Repair",
    desc: "Chip-level repair, screen replacement, keyboard repair, battery replacement, and motherboard servicing for all laptop brands.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "fa-desktop",
    title: "Desktop Repair",
    desc: "Hardware diagnostics, component upgrades, power supply repair, branded and assembled desktop servicing.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "fa-server",
    title: "Server Maintenance",
    desc: "Windows Server, Linux server installation, RAID configuration, backup setup, and 24/7 server monitoring.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: "fa-hard-drive",
    title: "Data Recovery",
    desc: "Latest tools and software for data recovery from crashed hard drives, SSDs, RAID arrays, and pen drives at competitive prices.",
    color: "from-orange-500 to-orange-600",
  },
];

const repairServices = [
  { icon: "fa-tools", label: "Hardware Troubleshooting & Replacement" },
  { icon: "fa-window-restore", label: "OS Installation (Windows, Linux, macOS)" },
  { icon: "fa-shield-virus", label: "Virus & Malware Removal" },
  { icon: "fa-print", label: "Printer Setup & Repair" },
  { icon: "fa-download", label: "Software Installation & Updates" },
  { icon: "fa-file-contract", label: "Annual Maintenance Contracts (AMC)" },
  { icon: "fa-memory", label: "RAM & SSD Upgrades" },
  { icon: "fa-plug", label: "Power Supply & Battery Replacement" },
  { icon: "fa-display", label: "Monitor & Screen Repair" },
  { icon: "fa-ethernet", label: "Network Card & Wi-Fi Repair" },
  { icon: "fa-microchip", label: "Motherboard Chip-Level Repair" },
  { icon: "fa-database", label: "Backup & Cloud Setup" },
];

const processSteps = [
  { step: "01", icon: "fa-phone-volume", title: "Contact Us", desc: "Call us or fill the enquiry form to book a repair." },
  { step: "02", icon: "fa-magnifying-glass", title: "Diagnosis", desc: "Our expert technicians diagnose the issue thoroughly." },
  { step: "03", icon: "fa-indian-rupee-sign", title: "Get Quote", desc: "Receive a transparent, no-obligation repair quote." },
  { step: "04", icon: "fa-screwdriver-wrench", title: "Repair", desc: "Certified repair with genuine parts and quality checks." },
  { step: "05", icon: "fa-truck-fast", title: "Delivery", desc: "Pick up your device or get it delivered to your doorstep." },
];

const brands = [
  { icon: "fa-laptop", name: "Dell" },
  { icon: "fa-desktop", name: "HP" },
  { icon: "fa-computer", name: "Lenovo" },
  { icon: "fa-display", name: "Acer" },
  { icon: "fa-laptop-code", name: "Asus" },
  { icon: "fa-virus-slash", name: "Quick Heal" },
  { icon: "fa-calculator", name: "Tally" },
  { icon: "fa-server", name: "Dell Server" },
];

const features = [
  { icon: "fa-users-gear", title: "Expert Team", desc: "Certified technicians with 10+ years of hands-on experience in hardware & software repair." },
  { icon: "fa-bolt", title: "Fast Service", desc: "Quick turnaround — most repairs completed within 24–48 hours to minimize your downtime." },
  { icon: "fa-wallet", title: "Affordable Pricing", desc: "Transparent, competitive pricing with no hidden charges. Free diagnosis for walk-in customers." },
  { icon: "fa-shield-halved", title: "Warranty", desc: "All repairs come with a service warranty for your peace of mind." },
  { icon: "fa-truck-fast", title: "Doorstep Service", desc: "We offer pick-up and drop services for your convenience across Hyderabad." },
  { icon: "fa-headset", title: "24/7 Support", desc: "Round-the-clock customer support via phone, WhatsApp, and email." },
];

const stats = [
  { value: "5000+", label: "Repairs Done" },
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "AMC Clients" },
];

const faqs = [
  { q: "How long does a typical repair take?", a: "Most repairs are completed within 24–48 hours. Complex motherboard-level repairs may take 3–5 business days." },
  { q: "Do you provide doorstep repair services?", a: "Yes, we offer pick-up and delivery services across Hyderabad. You can also walk in to our service center." },
  { q: "What brands do you service?", a: "We service all major brands including Dell, HP, Lenovo, Acer, Asus, Apple (Mac), and assembled PCs." },
  { q: "Do you offer Annual Maintenance Contracts?", a: "Yes, we offer flexible AMC plans for businesses covering hardware, software, networking, and preventive maintenance." },
  { q: "Is there a warranty on repairs?", a: "All repairs come with a service warranty ranging from 30 days to 6 months depending on the type of repair." },
  { q: "How much does a repair cost?", a: "Costs vary by issue. We provide a free diagnosis and transparent quote before any work begins — no hidden charges." },
];

/* ───── page ───── */

export default function ComputerRepairPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Computer Repair Services" breadcrumb="Computer Repair" />

      {/* ── Hero / Intro ── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 leading-tight">
              Expert Computer Repair &amp; Maintenance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TechSelection Store offers fast, reliable, and affordable computer repair services for desktops, laptops, and servers. Our experienced technicians can diagnose and fix any hardware or software issue efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We service all major brands including <strong>Dell</strong>, <strong>HP</strong>, <strong>Lenovo</strong>, <strong>Acer</strong>, and more. With quick turnaround times and competitive pricing, we ensure minimum downtime for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-colors">
                <i className="fas fa-calendar-check" /> Book a Repair
              </Link>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors">
                <i className="fas fa-phone" /> Call Now
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-10 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-8 text-6xl text-cyan"><i className="fas fa-laptop" /></div>
                <div className="absolute top-10 right-10 text-5xl text-cyan"><i className="fas fa-desktop" /></div>
                <div className="absolute bottom-12 left-12 text-5xl text-cyan"><i className="fas fa-server" /></div>
                <div className="absolute bottom-8 right-8 text-4xl text-cyan"><i className="fas fa-hard-drive" /></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-cyan"><i className="fas fa-memory" /></div>
              </div>
              <div className="text-center relative z-10">
                <i className="fas fa-laptop-medical text-[5rem] text-cyan mb-4 block" />
                <p className="text-white text-xl font-bold">Computer Repair</p>
                <p className="text-cyan text-sm mt-1">Fast &bull; Reliable &bull; Affordable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Cards (Laptop, Desktop, Server, Data Recovery) ── */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Our Specializations</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Comprehensive repair and maintenance for all types of computing devices.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all group">
                <div className={`bg-gradient-to-r ${s.color} p-6 flex items-center justify-center`}>
                  <i className={`fas ${s.icon} text-5xl text-white group-hover:scale-110 transition-transform`} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Repair Services Grid ── */}
      <section className="py-16">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Complete Repair Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Everything you need to keep your systems running smoothly.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repairServices.map((r) => (
              <div key={r.label} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className={`fas ${r.icon} text-lg text-cyan`} />
                </div>
                <span className="text-[0.95rem] font-medium text-navy">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works / Process ── */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-dark">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">Easy and effective way to get your device repaired.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="text-center relative">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <i className={`fas ${s.icon} text-2xl text-cyan`} />
                  <span className="absolute -top-1 -right-1 w-7 h-7 bg-cyan text-navy text-xs font-bold rounded-full flex items-center justify-center">{s.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                <p className="text-blue-200/60 text-sm">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <i className="fas fa-arrow-right text-cyan/30 text-xl hidden lg:block absolute top-8 -right-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us / Features ── */}
      <section className="py-16">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Why Choose TechSelection?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We combine expertise, speed, and affordability to deliver the best repair experience.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all border-l-4 border-cyan">
                <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`fas ${f.icon} text-xl text-cyan`} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="py-14 bg-cyan">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-4xl md:text-5xl font-bold text-navy">{s.value}</h3>
                <p className="text-navy/70 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands We Service ── */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Brands We Service</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We repair and maintain devices from all major brands.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((b) => (
              <div key={b.name} className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                <i className={`fas ${b.icon} text-2xl text-navy/60`} />
                <span className="text-sm font-semibold text-navy text-center">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Got questions? We have answers.</p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-navy hover:text-cyan transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <i className="fas fa-circle-question text-cyan" />
                    {f.q}
                  </span>
                  <i className="fas fa-chevron-down text-xs text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Your Computer Fixed?</h3>
              <p className="text-blue-200/70 max-w-lg">
                Contact us today for a free diagnosis. Our technicians are ready to help you get back to work quickly.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-navy font-semibold rounded-full hover:bg-cyan-dark transition-colors">
                <i className="fas fa-paper-plane" /> Get Free Quote
              </Link>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-cyan hover:text-cyan transition-colors">
                <i className="fas fa-phone" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
