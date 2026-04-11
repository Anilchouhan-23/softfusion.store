import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  formatBlogDate,
  getAllBlogs,
  getBlogBySlug,
  getContentParagraphs,
} from "@/lib/blogs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | SoftFusion",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | SoftFusion Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = getContentParagraphs(post.content);

  return (
    <>
      <Navbar />
      <PageBanner title={post.title} breadcrumb="Blog Details" />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:p-8">
            <div className="relative mb-6 h-72 w-full overflow-hidden rounded-xl md:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <time
                dateTime={post.date}
                className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan"
              >
                {formatBlogDate(post.date)}
              </time>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {post.category ?? "General"}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
              {post.title}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-slate-600">
              {post.description}
            </p>

            <div className="space-y-5 text-base leading-relaxed text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <Link
                    key={keyword}
                    href={`/blog?tag=${encodeURIComponent(keyword)}`}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-cyan/40 hover:text-cyan"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-all hover:gap-3"
            >
              Back to all posts <span aria-hidden="true">-&gt;</span>
            </Link>
          </article>

          <BlogSidebar currentSlug={post.slug} />
        </div>
      </section>

      <Footer />
    </>
  );
}
