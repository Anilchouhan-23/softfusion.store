import Link from "next/link";

export default function PageBanner({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
}) {
  return (
    <section className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white py-20 relative overflow-hidden">
      <div className="absolute -top-1/2 -right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] rounded-full" />
      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-blue-200/80">
          <Link href="/" className="hover:text-cyan transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-cyan">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
