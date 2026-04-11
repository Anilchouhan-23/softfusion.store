import Link from "next/link";
import { createBlogListHref } from "@/lib/blogs";

interface BlogPaginationProps {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  selectedTag?: string;
  selectedCategory?: string;
}

export default function BlogPagination({
  totalItems,
  currentPage,
  pageSize,
  selectedTag,
  selectedCategory,
}: BlogPaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  if (totalPages <= 1) {
    return null;
  }

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 2);
  const visiblePages = [];

  for (let page = startPage; page <= endPage; page += 1) {
    visiblePages.push(page);
  }

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-10 flex flex-wrap items-center gap-2"
    >
      <Link
        href={createBlogListHref({
          page: currentPage - 1,
          tag: selectedTag,
          category: selectedCategory,
        })}
        aria-disabled={currentPage === 1}
        className={`rounded-lg border px-3 py-2 text-sm font-medium ${
          currentPage === 1
            ? "pointer-events-none border-slate-200 text-slate-300"
            : "border-slate-200 text-slate-600 hover:border-cyan/50 hover:text-cyan"
        }`}
      >
        Previous
      </Link>

      {visiblePages.map((page) => (
        <Link
          key={page}
          href={createBlogListHref({
            page,
            tag: selectedTag,
            category: selectedCategory,
          })}
          aria-current={page === currentPage ? "page" : undefined}
          className={`min-w-10 rounded-lg border px-3 py-2 text-center text-sm font-semibold transition-colors ${
            page === currentPage
              ? "border-cyan bg-cyan text-navy"
              : "border-slate-200 text-slate-600 hover:border-cyan/50 hover:text-cyan"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createBlogListHref({
          page: currentPage + 1,
          tag: selectedTag,
          category: selectedCategory,
        })}
        aria-disabled={currentPage >= totalPages}
        className={`rounded-lg border px-3 py-2 text-sm font-medium ${
          currentPage >= totalPages
            ? "pointer-events-none border-slate-200 text-slate-300"
            : "border-slate-200 text-slate-600 hover:border-cyan/50 hover:text-cyan"
        }`}
      >
        Next
      </Link>
    </nav>
  );
}
