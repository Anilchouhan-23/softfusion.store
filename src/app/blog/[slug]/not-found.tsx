import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BlogPostNotFound() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto w-[90%] max-w-[760px] rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy">Post not found</h1>
          <p className="mt-3 text-slate-600">
            The article you requested may have been moved or removed.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark"
          >
            Go back to Blog
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
