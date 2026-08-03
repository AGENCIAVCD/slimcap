import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CLINIC_WHATSAPP, WhatsAppLink } from "@/components/whatsapp-link";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog";

type BlogArticleProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.cover] },
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const currentIndex = blogPosts.findIndex((item) => item.slug === slug);
  const related = blogPosts.filter((item) => item.slug !== slug && item.category === post.category).slice(0, 3);
  const fallbackRelated = related.length === 3 ? related : blogPosts.filter((item) => item.slug !== slug).slice(currentIndex + 1, currentIndex + 4);

  return (
    <>
      <SiteHeader />
      <main className="article-page">
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <Link href="/blog" className="article-back"><ArrowLeft size={16} aria-hidden="true" /> Voltar ao blog</Link>
            <div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{formatBlogDate(post.date)}</time></div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </header>

        <div className="shell article-layout">
          <div className="article-cover"><Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 900px) 100vw, 74vw" /></div>
          <article className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <aside className="article-cta">
            <div><span>Precisa de orientação?</span><h2>Seu cuidado pode começar com uma conversa.</h2></div>
            <WhatsAppLink className="button button-gold" intent={`blog-${post.slug}`} phone={CLINIC_WHATSAPP} message={`Olá! Li o artigo “${post.title}” no site da Slimcap e gostaria de orientação.`}>
              Falar com a Slimcap <ArrowRight size={18} aria-hidden="true" />
            </WhatsAppLink>
          </aside>
        </div>

        <section className="article-related section-pad" aria-labelledby="related-title">
          <div className="shell">
            <div className="article-related-heading"><p className="eyebrow">Continue aprendendo</p><h2 id="related-title">Outros conteúdos para você.</h2></div>
            <div className="article-related-grid">
              {fallbackRelated.map((item) => (
                <article key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="article-related-media"><Image src={item.cover} alt={item.coverAlt} fill sizes="(max-width: 640px) 100vw, 33vw" /></Link>
                  <span>{item.category}</span>
                  <h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
