import Image from "next/image";
import Link from "next/link";
import {
  createBlogListHref,
  formatBlogDate,
  getBlogCategories,
  getBlogTags,
  getRecentBlogs,
} from "@/lib/blogs";

interface BlogSidebarProps {
  currentSlug?: string;
  selectedTag?: string;
  selectedCategory?: string;
}

export default function BlogSidebar({
  currentSlug,
  selectedTag,
  selectedCategory,
}: BlogSidebarProps) {
  const recentPosts = getRecentBlogs(5, currentSlug);
  const categories = getBlogCategories();
  const tags = getBlogTags(14);

  return (
    <aside className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <h3 className="mb-5 border-b border-slate-200 pb-3 text-lg font-bold text-navy">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-3 rounded-xl p-1 transition-colors hover:bg-slate-50"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-cyan">
                  {post.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {formatBlogDate(post.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <h3 className="mb-5 border-b border-slate-200 pb-3 text-lg font-bold text-navy">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category.name;
            const href = createBlogListHref({
              category: isActive ? undefined : category.name,
              tag: selectedTag,
            });

            return (
              <Link
                key={category.name}
                href={href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-cyan/10 font-semibold text-cyan"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                }`}
              >
                <span>{category.name}</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                  {category.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <h3 className="mb-5 border-b border-slate-200 pb-3 text-lg font-bold text-navy">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = selectedTag === tag.name;
            const href = createBlogListHref({
              category: selectedCategory,
              tag: isActive ? undefined : tag.name,
            });

            return (
              <Link
                key={tag.name}
                href={href}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-cyan bg-cyan/10 text-cyan"
                    : "border-slate-200 text-slate-600 hover:border-cyan/40 hover:text-cyan"
                }`}
              >
                {tag.name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
