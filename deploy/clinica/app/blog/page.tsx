import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogLibrary } from "@/components/blog-library";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPostSummaries, formatBlogDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de saúde e terapia capilar",
  description: "Conteúdos da Slimcap sobre queda, couro cabeludo, tratamentos e cuidados capilares para sua rotina.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Slimcap | Conhecimento para cuidar pela raiz",
    description: "Informação sobre saúde capilar com a experiência de mais de 40 anos do Método Slimcap.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const [featured, ...posts] = blogPostSummaries;

  return (
    <>
      <SiteHeader />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="shell blog-hero-grid">
            <div className="blog-hero-copy">
              <p className="eyebrow">Conteúdo Slimcap</p>
              <h1>Conhecimento para cuidar <em>pela raiz.</em></h1>
              <p>Informação clara sobre queda, couro cabeludo, tratamentos e hábitos que fazem diferença na rotina capilar.</p>
              <span>{blogPostSummaries.length} artigos do acervo Slimcap</span>
            </div>
            <article className="blog-featured">
              <Link href={`/blog/${featured.slug}`} className="blog-featured-media">
                <Image src={featured.cover} alt={featured.coverAlt} fill priority sizes="(max-width: 900px) 100vw, 56vw" />
              </Link>
              <div className="blog-featured-copy">
                <div><span>{featured.category}</span><time dateTime={featured.date}>{formatBlogDate(featured.date)}</time></div>
                <h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
                <Link href={`/blog/${featured.slug}`} className="text-link">Ler destaque <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="blog-library-section section-pad" aria-labelledby="blog-library-title">
          <div className="shell">
            <div className="blog-library-heading">
              <div><p className="eyebrow">Acervo completo</p><h2 id="blog-library-title">Explore todos os conteúdos.</h2></div>
              <p>Use a busca ou selecione um tema para encontrar a orientação que procura.</p>
            </div>
            <BlogLibrary posts={posts} />
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
