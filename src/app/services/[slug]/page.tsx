import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ServiceSection {
  title: string;
  content: string;
  image: string;
}

interface ServiceData {
  title: string;
  desc: string;
  icon: string;
  heroImg: string;
  intro: string;
  sections: ServiceSection[];
}

const serviceDetails: Record<string, ServiceData> = {
  "software-development": {
    title: "Software Development",
    desc: "Custom software engineering, web applications, and mobile app development to solve complex business challenges securely.",
    icon: "fa-code",
    heroImg: "/images/slides/slide1.png",
    intro: "Our bespoke software development services focus on building scalable, reliable, and secure applications tailored strictly for modern enterprises. We manage the entire lifecycle from ideation, architecture, to deployment.",
    sections: [
      {
        title: "Architecture & Strategy",
        content: "Before a single line of code is written, our senior engineering team drafts comprehensive architectural blueprints. We map out microservices, database schemas, and API gateways to ensure your system can handle massive scale and future integrations without technical debt. We leverage modern methodologies including Agile and DevOps pipelines.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "Custom Engineering",
        content: "We specialize in full-stack development using powerful, bleeding-edge frameworks such as React, Next.js, Node.js, and Python. Whether you need an internal enterprise portal, a customer-facing SaaS product, or a complex financial algorithm, our engineers deliver highly optimized, clean, and thoroughly documented code.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Quality Assurance & Testing",
        content: "Security and stability are non-negotiable. Our QA teams run rigorous automated and manual test suites including unit testing, integration testing, and penetration testing. We guarantee a 99.9% uptime for cloud deployments and bulletproof security against modern cyber threats and vulnerabilities.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Post-Launch Support",
        content: "Software is an evolving asset. We provide continuous maintenance, performance monitoring, and rapid feature upgrades. Our Service Level Agreements (SLAs) ensure that whenever a critical patch or an ecosystem update is needed, our development team executes it with zero downtime to your active users.",
        image: "/images/services/marketing_chart.png"
      }
    ]
  },
  "saas-solutions": {
    title: "SaaS Solutions",
    desc: "Scalable Software-as-a-Service platforms for your business needs, including cloud infrastructure setup and ongoing management.",
    icon: "fa-cloud",
    heroImg: "/images/slides/slide2.png",
    intro: "Launch, scale, and manage profitable SaaS applications. We build multi-tenant architectures engineered for high concurrency, reliable subscription billing integrations, and seamless user onboarding.",
    sections: [
      {
        title: "Multi-Tenant Architecture",
        content: "We engineer databases and application layers to securely separate customer data while running on a unified, extremely efficient codebase. This isolates active instances making it completely GDPR and SOC2 compliant, providing granular role-based access control out of the box.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Subscription & Billing",
        content: "We completely integrate robust payment systems like Stripe and PayPal. From handling prorated upgrades, managing failed payments, generating invoices, to setting up free trial logic—our SaaS engines handle the entire billing lifecycle without human intervention.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Scalable Cloud Hosting",
        content: "Our infrastructure is built over AWS, Google Cloud, and Vercel. We utilize auto-scaling containerized microservices managed via Kubernetes to guarantee that if traffic spikes ten-fold, your application effortlessly spins up resources to meet the demand seamlessly.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Analytics & Administration",
        content: "Every SaaS platform requires a master dashboard. We provide comprehensive admin panels tracking MRR, user churn, feature usage analytics, and deep business intelligence metrics allowing you to make instant, data-driven decisions regarding your platform's growth.",
        image: "/images/services/team_meeting.png"
      }
    ]
  },
  "digital-tools": {
    title: "Digital Tools",
    desc: "Productivity, collaboration, and comprehensive digital tools tailored to streamline your company's workflows and operations.",
    icon: "fa-toolbox",
    heroImg: "/images/slides/slide3.png",
    intro: "Optimize your corporate workflows by deploying bespoke digital tools. We replace messy spreadsheets with real-time, automated operational dashboards designed specifically for your company's processes.",
    sections: [
      {
        title: "Workflow Automation",
        content: "By analyzing how your employees execute tasks, we design and build tools that automate repetitive tasks. From automated data entry scripts to real-time syncs across different proprietary systems, our tools save thousands of manual working hours.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Team Collaboration Hubs",
        content: "We deploy highly customized project management models that fit your exact workflow. Forget struggling against generic tools; we build the exact Kanban boards, real-time messaging, and shared repositories your operations actively require.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "Data Visualization",
        content: "Transform thousands of unreadable raw data points into stunning visual graphs. Our digital visualization tools render complex data into intuitive, real-time metrics dashboards so executives can instantly grasp the tactical state of the company.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Seamless Tool Integration",
        content: "We build APIs to connect legacy tools securely with modern digital ecosystems. Whether integrating your localized inventory software with a modern CRM or linking HR data to security databases, we make disparate systems talk flawlessly.",
        image: "/images/services/cloud_server.png"
      }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    desc: "Data-driven social media management and ad campaigns designed to increase brand visibility, engagement, and conversion rates.",
    icon: "fa-bullhorn",
    heroImg: "/images/slides/slide3.png",
    intro: "Capture your audience where they spend their time. Our social media marketing engines combine elite creative content with aggressive, algorithm-driven scaling to generate highly qualified leads.",
    sections: [
      {
        title: "Content & Branding Strategy",
        content: "We don't just post; we engineer viral potential. Our creative directors analyze your brand identity to develop a highly engaging visual language. We produce premium short-form videos, high-fidelity graphics, and compelling copywriting that algorithms actively favor.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "Paid Advertising Management",
        content: "Maximize ROI through granular paid media targeting on Meta, LinkedIn, and X. We allocate budget dynamically using AI models that identify your most profitable demographics and retarget visitors until they finally convert.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Community Management",
        content: "Turn passive followers into vocal brand evangelists. Our teams actively moderate comments, handle real-time customer support via social channels, and stimulate meaningful engagement to organically amplify your page's internal trust metrics.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Analytics & ROI Reporting",
        content: "Transparency is our promise. You receive dynamic, real-time tracking dashboards that break down cost-per-click, conversion rates, and exact ad spend efficiency. Every decision we make is backed by indisputable raw data.",
        image: "/images/slides/slide4.png"
      }
    ]
  },
  "email-marketing": {
    title: "Email Marketing",
    desc: "Automated, personalized email marketing campaigns to nurture leads, retain customers, and drive recurring revenue.",
    icon: "fa-envelope-open-text",
    heroImg: "/images/slides/slide4.png",
    intro: "Unlock the highest converting channel on the internet. We build hyper-personalized, automated email marketing systems designed to aggressively nurture prospects while maximizing customer lifetime value.",
    sections: [
      {
        title: "Automated Drip Sequences",
        content: "We map out intricate customer journeys. From the welcome sequence to the post-purchase upsell pitch, our automated logic flows deliver the exact right message precisely when the customer is statistically most likely to buy.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Segmentation & Personalization",
        content: "We dissect your audience into highly specific cohorts based on their behavior, past purchases, and engagement metrics. Mass-blasting is dead; we send dynamically personalized emails that feel like a 1-on-1 direct conversation with your brand.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "A/B Testing & Optimization",
        content: "We refuse to guess what works. Our email marketers rigorously test everything—subject lines, CTA button colors, optimal send times, and payload types. We mathematically refine formulas to guarantee the absolute highest open rates possible.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Deliverability Engineering",
        content: "The best design means nothing if it hits the spam folder. We handle complex DNS authentications (DMARC, DKIM, SPF) and IP warming protocols to meticulously protect your domain reputation, ensuring your marketing hits the primary inbox 99% of the time.",
        image: "/images/services/team_meeting.png"
      }
    ]
  },
  "it-consulting": {
    title: "IT Consulting",
    desc: "Strategic IT consulting, infrastructure planning, technical audits, and digital transformation roadmaps for modern enterprises.",
    icon: "fa-server",
    heroImg: "/images/slides/slide1.png",
    intro: "Navigate complex technological decisions with confidence. Our enterprise IT consultants partner with your leadership to audit, restructure, and aggressively modernize your corporate technical infrastructure.",
    sections: [
      {
        title: "Digital Transformation",
        content: "We map the exact path from legacy corporate systems to agile, cloud-native frameworks. Our consultants handle change management, helping large enterprises transition to new technologies without alienating staff or interrupting massive revenue streams.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "Security & Compliance Audits",
        content: "Identify vulnerabilities before hackers do. We run intensive penetration tests and verify complete protocol compliance (HIPAA, GDPR, ISO 27001). We then enforce strict zero-trust architectures and mandatory biometric authentication standards across your organization.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Infrastructure Optimization",
        content: "Stop wasting thousands on unused computational power. We deeply audit your AWS/Azure usage to completely eliminate ghost servers, optimize database querying, and introduce load balancers that often slash corporate IT overhead by up to 40%.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Disaster Recovery Planning",
        content: "Hope is not a strategy. We engineer resilient architecture with automated cross-region database backups and strict failover redundancy limits. If a disaster completely wipes out a physical hub, your virtual operations will resume within minutes seamlessly.",
        image: "/images/services/marketing_chart.png"
      }
    ]
  },
  "web-services": {
    title: "Web Services",
    desc: "Comprehensive web presence solutions ranging from ultra-fast hosting configurations to bespoke corporate web applications.",
    icon: "fa-globe",
    heroImg: "/images/slides/slide2.png",
    intro: "Establish absolute dominance online. Our comprehensive Web Services bundle everything from elite, ultra-fast hosting architecture to high-converting bespoke website builds tailored for aggressive growth.",
    sections: [
      {
        title: "High-Performance Web Design",
        content: "First impressions are permanent. We design and develop highly responsive, accessible web properties built specifically to convert traffic into revenue. Every animation and micro-interaction is engineered for optimal user retention.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "Enterprise Hosting & Cloud",
        content: "Generic shared hosting destroys search rankings. We provision dedicated, auto-scaling private servers connected directly through global edge networks (CDNs). We guarantee 150-millisecond global load speeds and 99.99% corporate stability.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Search Engine Optimization (SEO)",
        content: "Dominating Google Search is mandatory. We don't just optimize code; we generate intensive content clusters, build high authority backlinks, and mathematically optimize semantic HTML structures to ruthlessly capture your core industry keywords.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Custom API & Automation",
        content: "Transform a simple website into a fully functioning corporate brain. We integrate secure APIs allowing your website to pull inventory numbers in real time, trigger internal warehousing emails, and completely synchronize multi-platform data.",
        image: "/images/services/coding_screen.png"
      }
    ]
  },
  // Sub-services from the Web Services dropdown to ensure no 404s
  "domain-hosting": {
    title: "Domain & Hosting",
    desc: "Premium domain registration and secure, high-speed hosting solutions tailored for enterprise requirements.",
    icon: "fa-server",
    heroImg: "/images/slides/slide1.png",
    intro: "Premium enterprise hosting architecture tailored for absolute 99.99% uptime and intense traffic loads.",
    sections: [
      {
        title: "Dedicated Resources",
        content: "Never share processing power again. Your infrastructure gets dedicated computing bandwidth specifically provisioned to handle your traffic spikes.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Security Layers",
        content: "Built-in DDoS protection and Web Application Firewalls block malicious packets before they ever reach your core servers.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Global CDN",
        content: "We distribute your visual assets across edges in 150+ countries. Users load your assets locally from the proxy nearest to them.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Automated Backups",
        content: "Daily, encrypted cold-storage backups mean you can instantly rollback an entire infrastructure snapshot in under three minutes.",
        image: "/images/services/team_meeting.png"
      }
    ]
  },
  "web-applications": {
    title: "Web Applications",
    desc: "High-performance, responsive web applications built with modern frameworks like React and Next.js.",
    icon: "fa-laptop-code",
    heroImg: "/images/slides/slide2.png",
    intro: "From internal operations panels to commercial multi-tenant software, we build robust web applications.",
    sections: [
      {
        title: "React & Next.js Ecosystem",
        content: "Built on bleeding edge JavaScript architecture offering Server Side Rendering for lightning fast SEO-friendly performance.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Responsive Progressive Design",
        content: "PWA standards mean your web application behaves like a native mobile app when accessed via an iPhone or Android browser.",
        image: "/images/services/team_meeting.png"
      },
      {
        title: "State Management",
        content: "We engineer Redux and custom React Hooks to heavily optimize rendering cycles to maintain 60FPS graphical performance.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Secure Authentication",
        content: "Integrating deep security with JWT tokens, OAuth, and custom encrypted cookie strategies to protect user endpoints completely.",
        image: "/images/services/marketing_chart.png"
      }
    ]
  },
  "cloud-services": {
    title: "Cloud Services",
    desc: "Advanced cloud architecture, deployment, and migration services on AWS, Azure, and Google Cloud.",
    icon: "fa-cloud-upload-alt",
    heroImg: "/images/slides/slide3.png",
    intro: "Modernize your company with intelligent cloud deployments designed for low-cost, high-velocity iteration.",
    sections: [
      {
        title: "Kubernetes Orchestration",
        content: "Containerizing software ensures deployments are identical across development, staging, and elite production environments.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "CI/CD Pipelines",
        content: "Deploy code automatically. We build GitHub actions that test, compile, and aggressively trigger builds upon every code push.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "Serverless Deployments",
        content: "Eliminate traditional server costs utilizing AWS Lambda functions that only charge you per exact millisecond of computational executing time.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Storage & Archiving",
        content: "Tiered cloud storage ensures hot data is rapidly accessible while cold corporate backup data uses ultra-cheap deep storage buckets.",
        image: "/images/services/team_meeting.png"
      }
    ]
  },
  "custom-api-integrations": {
    title: "Custom API Integrations",
    desc: "Seamless third-party API integrations and custom robust backend development for your platforms.",
    icon: "fa-network-wired",
    heroImg: "/images/slides/slide4.png",
    intro: "Connect systems intelligently to eliminate data silos and automate vast portions of logic execution.",
    sections: [
      {
        title: "RESTful Endpoints",
        content: "Standardized lightweight logical architectures designed heavily around conventional HTTP protocol standards allowing universally easy access.",
        image: "/images/services/coding_screen.png"
      },
      {
        title: "GraphQL Capabilities",
        content: "Giving front-end systems the exact power to demand massive customized data shapes with incredibly low API latency and round-trips.",
        image: "/images/services/cloud_server.png"
      },
      {
        title: "Webhooks & WebSockets",
        content: "Implementing entirely real-time streaming architectures where systems update live pushing data actively rather than relying on endless server polling.",
        image: "/images/services/marketing_chart.png"
      },
      {
        title: "Third-Party Synching",
        content: "Connecting ERPs, CRMs (Salesforce), Payment Gateways (Stripe), and complex financial ledgers without dropping a single byte.",
        image: "/images/services/team_meeting.png"
      }
    ]
  }
};

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      {/* Dynamic Hero Area */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center mb-10 md:mb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.heroImg}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto pt-24 pb-12 text-center md:text-left">
           <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan/10 border border-cyan/20 backdrop-blur-sm shadow-xl">
             <i className={`fas ${service.icon} text-cyan text-xl`} />
             <span className="text-cyan font-bold uppercase tracking-wider text-sm">{service.title}</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
             Elevating your <br className="hidden md:block"/> {service.title}
           </h1>
           <p className="text-lg md:text-2xl text-blue-100 max-w-3xl leading-relaxed drop-shadow-lg md:mx-0 mx-auto">
             {service.intro}
           </p>
        </div>
      </section>

      {/* Main Extensive Body Content */}
      <section className="py-12 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Comprehensive Strategy & Execution</h2>
             <div className="w-24 h-1.5 bg-cyan mx-auto rounded-full mb-6"></div>
             <p className="text-gray-500 text-lg leading-relaxed">
               {service.desc} We partner with highly driven enterprises to push boundaries and orchestrate massive ROI. Let's delve deeply into how we architect your success.
             </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {service.sections.map((section, idx) => (
              <div key={section.title} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-xl bg-navy text-white font-bold flex items-center justify-center text-xl shadow-lg">0{idx + 1}</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-navy">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {section.content}
                  </p>
                  
                  <ul className="space-y-4 font-medium text-gray-700">
                    <li className="flex gap-3 items-center">
                      <i className="fas fa-check-circle text-cyan"></i> Expert implementation methodology
                    </li>
                    <li className="flex gap-3 items-center">
                      <i className="fas fa-check-circle text-cyan"></i> Guaranteed security protocols
                    </li>
                    <li className="flex gap-3 items-center">
                      <i className="fas fa-check-circle text-cyan"></i> 24/7 strategic monitoring & SLA
                    </li>
                  </ul>
                </div>
                
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                     {/* Modern image effects */}
                     <Image 
                       src={section.image}
                       alt={section.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10"></div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CTA Area */}
          <div className="mt-32 bg-gradient-to-br from-navy to-navy-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/20 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to initiate your next major project?</h3>
               <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
                 Schedule a completely free technical architecture consultation with our senior development and marketing strategist team.
               </p>
               <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/enquiry"
                    className="px-10 py-5 bg-cyan text-navy font-bold text-lg rounded-full hover:bg-cyan-dark hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    Start Your Project <i className="fas fa-rocket" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full hover:border-cyan hover:text-cyan transition-all flex items-center justify-center gap-3"
                  >
                    Contact Support <i className="fas fa-headset" />
                  </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
