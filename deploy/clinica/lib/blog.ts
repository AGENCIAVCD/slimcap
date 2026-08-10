import postsData from "@/content/blog-posts.json";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  category: string;
  cover: string;
  coverAlt: string;
  legacyUrl: string;
};

export const blogPosts = postsData as BlogPost[];

export const blogPostSummaries = blogPosts.map((post) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  modified: post.modified,
  category: post.category,
  cover: post.cover,
  coverAlt: post.coverAlt,
}));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(date));
}
