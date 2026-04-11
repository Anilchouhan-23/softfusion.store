import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  createBlogListHref,
  filterBlogs,
  getAllBlogs,
  getBlogCategories,
  getBlogTags,
} from "@/lib/blogs";

const PAGE_SIZE = 4;

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    tag?: string;
    category?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Blog | SoftFusion Insights",
  description:
    "Read practical insights on SaaS, automation, cloud engineering, security, growth, and digital marketing from the SoftFusion team.",
  keywords: [
    "SoftFusion blog",
    "SaaS insights",
    "software development blog",
    "cloud and automation",
    "digital marketing insights",
  ],
};

function resolveFilterValue(value?: string): string | undefined {
  if (!value) {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function resolveCurrentPage(value?: string): number {
  const parsed = Number.parseInt(value ?? "1", 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    return 1;
  }
  return parsed;
}

function sanitizeFilter(
  requestedValue: string | undefined,
  allowedValues: string[]
): string | undefined {
  if (!requestedValue) {
    return undefined;
  }

  return allowedValues.find(
    (allowedValue) =>
      allowedValue.toLowerCase() === requestedValue.toLowerCase()
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedTag = resolveFilterValue(resolvedSearchParams.tag);
  const requestedCategory = resolveFilterValue(resolvedSearchParams.category);

  const allowedTags = getBlogTags(200).map((tag) => tag.name);
  const allowedCategories = getBlogCategories().map((category) => category.name);

  const selectedTag = sanitizeFilter(requestedTag, allowedTags);
  const selectedCategory = sanitizeFilter(requestedCategory, allowedCategories);

  const filteredBlogs = filterBlogs({
    tag: selectedTag,
    category: selectedCategory,
  });
  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.max(1, Math.ceil(totalBlogs / PAGE_SIZE));
  const requestedPage = resolveCurrentPage(resolvedSearchParams.page);
  const currentPage = Math.min(requestedPage, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pagedBlogs = filteredBlogs.slice(startIndex, startIndex + PAGE_SIZE);

  const totalBlogCount = getAllBlogs().length;

  return (
    <>
      <Navbar />
      <PageBanner title="Insights & Blog" breadcrumb="Blog" />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <main>
            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <h1 className="text-2xl font-bold text-navy md:text-3xl">
                Latest Articles
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {selectedTag || selectedCategory
                  ? `Showing ${totalBlogs} result${totalBlogs === 1 ? "" : "s"} for your selected filters.`
                  : `Showing ${totalBlogs} of ${totalBlogCount} published posts.`}
              </p>

              {(selectedTag || selectedCategory) && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {selectedCategory && (
                    <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                      Category: {selectedCategory}
                    </span>
                  )}
                  {selectedTag && (
                    <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                      Tag: {selectedTag}
                    </span>
                  )}
                  <Link
                    href="/blog"
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-cyan/40 hover:text-cyan"
                  >
                    Clear filters
                  </Link>
                </div>
              )}
            </div>

            {pagedBlogs.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                <h2 className="text-xl font-bold text-navy">No posts found</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Try removing filters or explore all recent articles.
                </p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-navy hover:bg-cyan-dark"
                >
                  View all blogs
                </Link>
              </div>
            ) : (
              <div className="space-y-7">
                {pagedBlogs.map((post, index) => (
                  <BlogCard key={post.slug} post={post} priority={index === 0} />
                ))}
              </div>
            )}

            <BlogPagination
              totalItems={totalBlogs}
              currentPage={currentPage}
              pageSize={PAGE_SIZE}
              selectedTag={selectedTag}
              selectedCategory={selectedCategory}
            />

            {totalPages > 1 && (
              <p className="mt-3 text-xs text-slate-500">
                Page {currentPage} of {totalPages}{" "}
                <Link
                  href={createBlogListHref({
                    category: selectedCategory,
                    tag: selectedTag,
                    page: totalPages,
                  })}
                  className="font-semibold text-cyan hover:underline"
                >
                  (jump to last page)
                </Link>
              </p>
            )}
          </main>

          <BlogSidebar
            selectedTag={selectedTag}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
