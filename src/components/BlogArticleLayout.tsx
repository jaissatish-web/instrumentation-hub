"use client";

import Link from "next/link";
import { blogPosts, type BlogBlock } from "@/data/blog";

// ─── Inline markdown-ish renderer: [text](href) links ─────────
function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const href = m[2];
    if (href.startsWith("http")) {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-blue)] hover:underline font-medium">
          {m[1]}
        </a>
      );
    } else {
      parts.push(
        <Link key={key++} href={href} className="text-[var(--color-accent-blue)] hover:underline font-medium">
          {m[1]}
        </Link>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-2xl font-black text-[var(--color-text-primary)] mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          {block.html}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          {block.html}
        </h3>
      );
    case "p":
      return (
        <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] my-4">
          {renderInline(block.html || "")}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol className="list-decimal pl-6 my-4 space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {(block.items || []).map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc pl-6 my-4 space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {(block.items || []).map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="rounded-xl p-4 my-6 text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.25)" }}>
          <span className="text-[9px] font-bold uppercase tracking-[.15em] text-[var(--color-accent-orange)] block mb-2" style={{ fontFamily: "var(--font-mono)" }}>⚠ Caution</span>
          {renderInline(block.html || "")}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl p-5 my-6" style={{ background: "rgba(0,180,255,0.06)", border: "1px solid rgba(0,180,255,0.22)" }}>
          <div className="text-[9px] font-bold uppercase tracking-[.15em] text-[var(--color-accent-blue)] mb-2" style={{ fontFamily: "var(--font-mono)" }}>
            {block.label || "Worked example"}
          </div>
          <div className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{renderInline(block.body || "")}</div>
        </div>
      );
    case "tool-links":
      return (
        <div className="flex flex-wrap gap-3 my-6">
          {(block.links || []).map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[.08em] text-black transition-all hover:shadow-lg"
              style={{ background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)" }}
            >
              🛠 {l.label || "Open tool"} →
            </Link>
          ))}
        </div>
      );
    case "tool-cta":
      return (
        <div className="my-6">
          <Link
            href={block.href || "/tools"}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-[.08em] text-black transition-all hover:shadow-lg"
            style={{ background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)" }}
          >
            🛠 {block.label || "Open tool"} →
          </Link>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto my-6 rounded-xl border border-[var(--color-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--color-bg-raise)" }}>
                {(block.head || []).map((h, i) => (
                  <th key={i} className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.08em] text-[var(--color-accent-blue)] whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(block.rows || []).map((row, i) => (
                <tr key={i} className="border-t border-[var(--color-border)]">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 text-[var(--color-text-secondary)] ${j === 0 ? "font-semibold text-[var(--color-text-primary)]" : ""}`}>
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticleLayout({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  return (
    <div className="page-enter min-h-screen pb-16">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[var(--color-text-muted)]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--color-accent-blue)] transition-colors">Home</Link>
          <span className="text-[var(--color-text-muted)]/40">/</span>
          <Link href="/blog" className="hover:text-[var(--color-accent-blue)] transition-colors">Blog</Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-5">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{ fontFamily: "var(--font-mono)" }}>
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">{post.description}</p>
          <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[.1em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            <span>✍️ Satish Kumar Jaiswal</span>
            <span className="text-[var(--color-text-muted)]/40">|</span>
            <span>📅 {post.date}</span>
            <span className="text-[var(--color-text-muted)]/40">|</span>
            <span>🕐 {post.blocks.length > 12 ? "5 min read" : "2 min read"}</span>
          </div>
        </header>

        {/* Body */}
        <article className="glass-card rounded-2xl p-6 sm:p-10" style={{ border: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}>
          {post.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </article>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[.08em] text-[var(--color-accent-blue)] bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/20 hover:bg-[var(--color-accent-blue)]/20 transition-all"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ← All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}