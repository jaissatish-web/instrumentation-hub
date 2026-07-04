# Agent Instructions — Instrumentation Hub

This is a Next.js + TypeScript + CSS project deployed to Vercel via GitHub.
Do NOT assume a specific Next.js API version from training data alone —
this repo may use a newer Next.js release with changed conventions
(App Router, routing, config format, etc).

Before writing code:
1. Inspect `package.json` to confirm the exact Next.js version in use.
2. Inspect 2–3 existing files in `src/` that resemble the type of page/component
   you're about to create, and MATCH their existing patterns exactly
   (folder structure, naming, styling approach, import style).
3. Do not invent a new architecture pattern if an existing one already
   handles this case — extend the existing pattern.
4. After any change, run the project's build/lint command locally if available,
   and confirm no TypeScript or build errors before committing/pushing.

For the day-to-day content-authoring workflow (adding Knowledge Base items
and Tools), see the "STANDING WORKFLOW" instructions the user provides in chat —
these take priority over ad-hoc interpretation.

## Knowledge Base Article Standard

All instrument knowledge base articles MUST be rendered through the shared
`InstrumentArticleLayout` component at `src/components/InstrumentArticleLayout.tsx`.
Do NOT create one-off page layouts for new instrument entries. The component
enforces: auto-generated sticky table-of-contents sidebar with IntersectionObserver
active-state highlighting, per-section cards (never a single long wall of text),
inline image placement inside the relevant section, at least one chart per
article, and a mobile-responsive layout (sidebar collapses to a dropdown below
900px). Every new instrument entry builds content by supplying section data to
this same component — never by writing a new page layout from scratch.

## SEO Requirements

Every knowledge base article page must render through InstrumentArticleLayout AND generate unique per-page SEO metadata (title, description, OG tags, canonical URL, keywords) via the PageMeta component, plus JSON-LD structured data (TechArticle + BreadcrumbList). No article may use generic site-wide meta tags or lack structured data.