"use client";

import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  publishedDate?: string;
  author?: string;
  keywords?: string;
}

export default function PageMeta({
  title,
  description,
  canonical,
  image = "/pressure-gauge-diagram.png",
  publishedDate = "2025-01-15",
  author = "Satish Kumar Jaiswal",
  keywords = "instrumentation, industrial automation, pressure measurement",
}: PageMetaProps) {
  const fullTitle = `${title} – Instrumentation Hub`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    setMeta("description", description);

    // OG
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:type", "article");
    setMeta("og:image", image);
    setMeta("og:url", canonical || window.location.href);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // Canonical
    setLink("canonical", canonical || window.location.href);

    // Keywords
    setMeta("keywords", keywords);

    // Article meta
    setMeta("article:published_time", publishedDate);
    setMeta("article:author", author);

    return () => {
      // Cleanup isn't usually needed but we could reset to defaults
    };
  }, [fullTitle, description, canonical, image, publishedDate, author, keywords]);

  return null;
}

function setMeta(name: string, content: string) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      el.setAttribute("property", name);
    } else {
      el.setAttribute("name", name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}