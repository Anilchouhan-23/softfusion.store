import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Scaling Your Startup with Custom SaaS Solutions",
    excerpt:
      "Looking for scalable software? SoftFusion provides custom SaaS development, cloud deployment, and API integrations for modern businesses.",
    date: "24 Mar 2026",
    category: "Software",
    icon: "fa-cloud",
  },
  {
    id: 2,
    title: "Web App Security: Best Practices",
    excerpt:
      "Protect your user data with professional security implementation. We follow secure coding standards and modern authentication protocols.",
    date: "24 Mar 2026",
    category: "Security",
    icon: "fa-shield-halved",
  },
  {
    id: 3,
    title: "How to Choose the Right Digital Marketing Strategy",
    excerpt:
      "A complete guide to selecting the best social media and SEO strategies for your business. Compare organic growth vs paid advertising.",
    date: "16 Sep 2025",
    category: "Marketing",
    icon: "fa-bullhorn",
  },
  {
    id: 4,
    title: "Why Your Business Needs a Custom Web App",
    excerpt:
      "How to leverage custom software to automate workflows. Tips on selecting the right tech stack for web applications.",
    date: "12 Sep 2025",
    category: "Development",
    icon: "fa-code",
  },
  {
    id: 5,
    title: "Benefits of Cloud Infrastructure",
    excerpt:
      "Why your operations need scalable cloud architecture. Explore AWS, Google Cloud, and Azure benefits for enterprise tools.",
    date: "05 Aug 2025",
    category: "Cloud",
    icon: "fa-server",
  },
  {
    id: 6,
    title: "Email Marketing vs Social Media: Which is Better?",
    excerpt:
      "Compare different marketing channels. Understand ROI, campaign costs, and engagement metrics to make the right choice for your business.",
    date: "20 Jul 2025",
    category: "Marketing",
    icon: "fa-chart-line",
  },
];

const tags = [
  "SaaS",
  "Cloud Solutions",
  "Social Media",
  "Digital Marketing",
  "Web Development",
  "API Integrations",
  "SEO",
  "Startup Tools",
  "Email Campaigns",
  "Custom Software",
];

const recentPosts = posts.slice(0, 5);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Blog" breadcrumb="Blog" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-[2]">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all"
                >
                  {/* Image placeholder */}
                  <div className="bg-gradient-to-br from-navy-light to-navy-dark h-[250px] flex items-center justify-center relative">
                    <i
                      className={`fas ${post.icon} text-7xl text-white/15`}
                    />
                    <span className="absolute bottom-4 left-4 bg-cyan text-navy text-xs font-bold px-3 py-1.5 rounded">
                      {post.date}
                    </span>
                    <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-navy mb-3 hover:text-cyan transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-cyan font-medium text-sm cursor-pointer hover:gap-3 transition-all">
                      Read More <i className="fas fa-arrow-right text-xs" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-10 h-10 bg-cyan text-navy font-bold rounded-lg flex items-center justify-center">
                1
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                2
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                3
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                <i className="fas fa-chevron-right text-sm" />
              </span>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex-1 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-3 cursor-pointer group"
                  >
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-navy-light to-navy rounded-lg flex items-center justify-center shrink-0">
                      <i
                        className={`fas ${post.icon} text-white/30 text-lg`}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-navy group-hover:text-cyan transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-cyan hover:text-cyan hover:bg-cyan/5 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-center">
              <i className="fas fa-headset text-4xl text-cyan/40 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Need IT Support?
              </h3>
              <p className="text-blue-200/60 text-sm mb-4">
                Get in touch with our expert team for any IT needs.
              </p>
              <Link
                href="/enquiry"
                className="inline-block px-6 py-2.5 bg-cyan text-navy font-semibold rounded-full text-sm hover:bg-cyan-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
