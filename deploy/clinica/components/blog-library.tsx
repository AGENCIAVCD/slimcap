"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { formatBlogDate } from "@/lib/blog";

type BlogSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  coverAlt: string;
};

const INITIAL_POSTS = 12;

export function BlogLibrary({ posts }: { posts: BlogSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [visible, setVisible] = useState(INITIAL_POSTS);
  const categories = useMemo(() => ["Todos", ...Array.from(new Set(posts.map((post) => post.category))).sort()], [posts]);
  const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = category === "Todos" || post.category === category;
    const matchesQuery = !normalizedQuery || `${post.title} ${post.excerpt}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  const updateCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    setVisible(INITIAL_POSTS);
  };

  return (
    <>
      <div className="blog-toolbar">
        <label className="blog-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Buscar no blog</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setVisible(INITIAL_POSTS); }} placeholder="Busque por queda, caspa, cuidados..." />
        </label>
        <div className="blog-categories" aria-label="Filtrar artigos por categoria">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "is-active" : ""} onClick={() => updateCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-card-grid">
        {filteredPosts.slice(0, visible).map((post) => (
          <article key={post.slug} className="blog-card">
            <Link href={`/blog/${post.slug}`} className="blog-card-media" aria-label={`Ler ${post.title}`}>
              <Image src={post.cover} alt={post.coverAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            </Link>
            <div className="blog-card-copy">
              <div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.date}>{formatBlogDate(post.date)}</time></div>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">Ler artigo <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 ? <p className="blog-empty">Nenhum artigo encontrado para esta busca.</p> : null}
      {visible < filteredPosts.length ? (
        <button type="button" className="button button-dark blog-load-more" onClick={() => setVisible((current) => current + INITIAL_POSTS)}>
          Ver mais artigos
        </button>
      ) : null}
    </>
  );
}
