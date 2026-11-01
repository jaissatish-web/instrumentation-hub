"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const CATEGORIES = ["All", "Signals & calibration", "Flow & process", "Temperature", "Electrical", "Commissioning", "Safety logic", "Calibration", "Signal", "Process", "Safety"];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");

  const cats = Array.from(new Set(["All", ...blogPosts.map((p) => p.category)]));
  const posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <div className="page-enter max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
          <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{ fontFamily: "var(--font-mono)" }}>
            Field knowledge, clearly explained
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Engineering <span className="gradient-blue">Blog</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          Practical articles on instrumentation, commissioning, maintenance, control systems, and lessons from major industrial projects.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[.1em] border transition-all ${
              filter === c
                ? "text-black border-transparent"
                : "text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-blue)]/40"
            }`}
            style={{ background: filter === c ? "var(--color-accent-blue)" : "transparent", fontFamily: "var(--font-mono)" }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="article-card block">
            <div className="art-cat">{p.category}</div>
            <div className="art-title">{p.title}</div>
            <div className="art-meta">
              <span>🕐 {p.blocks.length > 12 ? "5 min read" : "2 min read"}</span>
              <span>📅 {p.date}</span>
            </div>
            <div className="art-excerpt">{p.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}