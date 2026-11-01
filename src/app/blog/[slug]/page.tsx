import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} – Instrumentation Hub`,
      description: post.description,
      type: "article",
      siteName: "Instrumentation Hub",
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!blogPosts.some((p) => p.slug === slug)) notFound();
  return <BlogArticleLayout slug={slug} />;
}