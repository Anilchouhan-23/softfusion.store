import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductFeature {
  title: string;
  desc: string;
}

interface ProductData {
  title: string;
  subtitle: string;
  heroImg: string;
  icon: string;
  brands: string;
  features: ProductFeature[];
  pricingLead: string;
}

const productDetails: Record<string, ProductData> = {
  "software-licenses": {
    title: "Enterprise Software Licenses",
    subtitle: "Procure official cloud, development, and operational software licenses.",
    heroImg: "/images/slides/slide1.png",
    icon: "fa-compact-disc",
    brands: "Microsoft, AWS, Google Cloud, JetBrains",
    features: [
      { title: "Volume Licensing", desc: "Discounted bulk organizational licenses for Office 365, Google Workspace, and Azure." },
      { title: "Developer Tools", desc: "Official keys for JetBrains IDEs, Visual Studio Enterprise, and premium DevOps environments." },
      { title: "Cybersecurity Suites", desc: "Enterprise AV, local endpoint protection, and VPN networks from standard industry leaders." },
      { title: "Instant Provisioning", desc: "License keys allocated immediately via secure dashboards with centralized billing." }
    ],
    pricingLead: "Get a custom quote based on your company seat count."
  },
  "saas-subscriptions": {
    title: "Premium SaaS Subscriptions",
    subtitle: "Fully managed corporate subscriptions for the world's leading web tools.",
    heroImg: "/images/slides/slide2.png",
    icon: "fa-cloud",
    brands: "Vercel, Shopify, HubSpot, Salesforce",
    features: [
      { title: "Unified Billing", desc: "Consolidate all your monthly SaaS subscriptions into a single corporate invoice." },
      { title: "CRM & Marketing", desc: "Discounted enterprise setups for HubSpot or Salesforce instances." },
      { title: "E-Commerce", desc: "Advanced Shopify Plus access including premium application discounts." },
      { title: "Analytics & Data", desc: "Seats for Mixpanel, Tableau, and Google Analytics 360 infrastructures." }
    ],
    pricingLead: "Consolidate your SaaS structure and save up to 15% annually."
  },
  "digital-assets": {
    title: "Digital Assets & Templates",
    subtitle: "High-fidelity UI kits, website templates, and vast graphic resources.",
    heroImg: "/images/slides/slide3.png",
    icon: "fa-code",
    brands: "Envato, UI8, Figma",
    features: [
      { title: "Premium UI/UX Kits", desc: "Thousands of pre-built React components, Tailwind layouts, and Figma source files." },
      { title: "Website Templates", desc: "Fully structured Next.js, WordPress, and Shopify starter templates tuned for massive conversions." },
      { title: "Email Architectures", desc: "Responsive, dark-mode ready HTML email templates tested against all major clients." },
      { title: "Brand Assets", desc: "Vector icon bundles, high-resolution stock photography, and 3D rendering collections." }
    ],
    pricingLead: "Unlock our entire digital asset vault for your creative team."
  }
};

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = productDetails[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      {/* Product Hero */}
      <section className="bg-navy relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image src={product.heroImg} alt={product.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-transparent" />
        </div>
        
        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto text-white flex flex-col items-start">
          <div className="flex items-center gap-3 bg-cyan/20 px-4 py-2 rounded-full border border-cyan/30 mb-6">
            <i className={`fas ${product.icon} text-cyan`} />
            <span className="text-cyan font-bold uppercase tracking-wider text-xs">Official Partner Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            {product.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
            {product.subtitle} Supported by {product.brands}.
          </p>
          <div className="flex gap-4">
            <Link href="/enquiry" className="px-8 py-4 bg-cyan text-navy font-bold rounded-full hover:bg-cyan-dark transition-all">
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-8">
               <h2 className="text-3xl font-bold text-navy mb-8 border-b pb-4">Key Features & Inclusions</h2>
               <div className="space-y-6">
                 {product.features.map((feature, idx) => (
                   <div key={idx} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                         <i className="fas fa-check text-cyan text-xl" />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                         <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-navy rounded-3xl p-8 text-white shadow-xl">
               <h3 className="text-2xl font-bold text-white mb-2">Pricing Structure</h3>
               <div className="w-12 h-1 bg-cyan rounded-full mb-6"></div>
               <p className="text-blue-100 mb-6 font-medium leading-relaxed">
                 {product.pricingLead}
               </p>
               <Link href="/contact" className="block text-center w-full px-6 py-4 border-2 border-cyan text-cyan rounded-xl font-bold hover:bg-cyan hover:text-navy transition-all">
                 Contact Sales
               </Link>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
               <h3 className="text-lg font-bold text-navy mb-4">Brands Provided</h3>
               <div className="flex flex-wrap gap-2">
                 {product.brands.split(",").map(brand => (
                   <span key={brand} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg">
                     {brand.trim()}
                   </span>
                 ))}
               </div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
