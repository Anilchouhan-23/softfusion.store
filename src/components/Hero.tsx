export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white py-24 md:py-28 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-1/2 -right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] rounded-full" />

      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-[2.8rem] font-bold leading-tight mb-5">
            Building Smarter{" "}
            <span className="text-cyan">IT Infrastructure</span> For Your
            Business
          </h1>
          <p className="text-lg text-blue-200/80 mb-8 leading-relaxed">
            SmartSoftHub is your trusted partner for Software Development,
            SaaS Applications, Digital Tools, and comprehensive Digital Marketing
            services. We deliver reliable, secure, and cost-effective technology
            solutions.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#services"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-cyan text-navy hover:bg-cyan-dark hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all"
            >
              Our Services
            </a>
            <a
              href="#enquiry"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-transparent text-white border-2 border-white/30 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
            >
              Get Free Quote
            </a>
          </div>
        </div>

        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div className="w-[400px] h-[400px] bg-cyan/5 border-2 border-cyan/15 rounded-full flex items-center justify-center relative">
            <i className="fas fa-shield-halved text-[8rem] text-cyan/30" />
            <div className="absolute w-80 h-80 border border-dashed border-cyan/20 rounded-full animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
