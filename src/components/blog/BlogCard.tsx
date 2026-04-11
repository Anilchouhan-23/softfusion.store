import Image from "next/image";
import Link from "next/link";
import { BlogPost, formatBlogDate } from "@/lib/blogs";

export default function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.12)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
          <time
            dateTime={post.date}
            className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy"
          >
            {formatBlogDate(post.date)}
          </time>
        </div>
      </Link>

      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-cyan">
          <span className="rounded-full bg-cyan/10 px-2 py-1">
            {post.category ?? "General"}
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight text-navy">
          <Link href={`/blog/${post.slug}`} className="hover:text-cyan">
            {post.title}
          </Link>
        </h2>

        <p className="text-sm leading-relaxed text-slate-600">{post.description}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-all hover:gap-3"
        >
          Read More <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
