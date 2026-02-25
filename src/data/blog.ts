export interface BlogMeta {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
  readingTime: string;
}

/* Registry of all blog posts — add new entries here */
const modules = import.meta.glob("/content/blog/*.mdx", { eager: true }) as Record<
  string,
  { default: React.ComponentType; frontmatter: Record<string, unknown> }
>;

function estimateReadingTime(wordCount: number): string {
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function getAllPosts(): (BlogMeta & { Component: React.ComponentType })[] {
  const posts = Object.entries(modules).map(([filepath, mod]) => {
    const fm = mod.frontmatter || {};
    const slug = filepath.replace("/content/blog/", "").replace(".mdx", "");

    return {
      title: (fm.title as string) || slug,
      date: (fm.date as string) || "2026-01-01",
      tags: (fm.tags as string[]) || [],
      excerpt: (fm.excerpt as string) || "",
      slug,
      readingTime: estimateReadingTime((fm.wordCount as number) || 800),
      Component: mod.default,
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((p) => p.slug === slug) || null;
}
