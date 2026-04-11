import { blogs } from "../../data/blogs";

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  date: string;
  keywords: string[];
  category?: string;
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface BlogTag {
  name: string;
  count: number;
}

interface FilterOptions {
  tag?: string;
  category?: string;
}

interface BlogListHrefOptions {
  page?: number;
  tag?: string;
  category?: string;
}

const sourceBlogs = blogs as BlogPost[];

function toComparableDate(value: string): number {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function getAllBlogs(): BlogPost[] {
  return [...sourceBlogs].sort(
    (a, b) => toComparableDate(b.date) - toComparableDate(a.date)
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return sourceBlogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(limit = 5, excludeSlug?: string): BlogPost[] {
  return getAllBlogs()
    .filter((blog) => blog.slug !== excludeSlug)
    .slice(0, limit);
}

export function getBlogCategories(): BlogCategory[] {
  const counts = new Map<string, number>();

  getAllBlogs().forEach((blog) => {
    const category = blog.category ?? "General";
    counts.set(category, (counts.get(category) ?? 0) + 1);
  });

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count }));
}

export function getBlogTags(limit = 12): BlogTag[] {
  const counts = new Map<string, number>();

  getAllBlogs().forEach((blog) => {
    blog.keywords.forEach((keyword) => {
      const normalized = keyword.trim();
      if (!normalized) {
        return;
      }
      counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

export function filterBlogs({ tag, category }: FilterOptions): BlogPost[] {
  const normalizedTag = tag?.trim().toLowerCase();
  const normalizedCategory = category?.trim().toLowerCase();

  return getAllBlogs().filter((blog) => {
    const tagMatches = normalizedTag
      ? blog.keywords.some((keyword) => keyword.toLowerCase() === normalizedTag)
      : true;
    const categoryMatches = normalizedCategory
      ? (blog.category ?? "General").toLowerCase() === normalizedCategory
      : true;
    return tagMatches && categoryMatches;
  });
}

export function createBlogListHref({
  page,
  tag,
  category,
}: BlogListHrefOptions): string {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (tag) {
    params.set("tag", tag);
  }

  if (page && page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export function formatBlogDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getContentParagraphs(content: string): string[] {
  return content
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
