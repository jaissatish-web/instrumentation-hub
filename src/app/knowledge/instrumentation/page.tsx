"use client";

import Link from "next/link";

const featuredTopics = [
  {
    id: "pressure-gauges",
    title: "Pressure Gauges: Complete Engineering Guide",
    slug: "pressure-gauges",
    excerpt: "Master industrial pressure gauges — from Bourdon tube principles to NAMUR NE43 compliance. Covers selection criteria, accuracy classes (Class 0.1–2.5), installation best practices, calibration procedures, failure mode analysis, and specialized types including sanitary, differential, and digital gauges.",
    heroImage: "/pressure-gauge-diagram.png",
    heroAlt: "Cross-section of a Bourdon tube pressure gauge showing internal components: Bourdon tube, linkage, sector gear, pinion, pointer, and dial",
    category: "Instrumentation Fundamentals",
    readTime: "12 min read",
    author: "Satish Kumar Jaiswal",
    authorRole: "Lead I&C Commissioning Engineer",
    authorExperience: "15+ years · NEOM · NSRP · ADNOC",
    tags: [
      { label: "Bourdon Tube", color: "amber" },
      { label: "Diaphragm", color: "amber" },
      { label: "Digital Gauges", color: "amber" },
      { label: "Calibration", color: "green" },
      { label: "NAMUR NE43", color: "blue" },
      { label: "EN 837 / ASME B40.100", color: "purple" },
    ],
    keyTakeaways: [
      "Select range so normal operation sits at 50–75% of full scale",
      "Liquid-filled gauges (glycerin/silicone) essential for vibration service",
      "Class 1.0 for general industrial, Class 0.6 for control/safety",
      "Verify zero before trusting any reading — fogged window = failed seal",
    ],
    seoKeywords: "pressure gauge, Bourdon tube, diaphragm pressure gauge, pressure gauge calibration, pressure gauge accuracy class, pressure gauge selection, NAMUR NE43, EN 837, ASME B40.100, industrial instrumentation",
  },
  {
    id: "pressure-transmitters",
    title: "Pressure Transmitters: Smart Measurement Guide",
    slug: "pressure-transmitters",
    excerpt: "Smart pressure transmitters with 4–20 mA HART output — covering sensing principles (piezoresistive, capacitive, resonant), calibration procedures, NAMUR NE43 fault levels, and troubleshooting common faults in DP, absolute, and gauge pressure applications.",
    heroImage: "/pressure-transmitter-diagram.svg",
    heroAlt: "Cross-section of a smart pressure transmitter showing process seal, silicon diaphragm sensing element, and electronics housing with HART communication",
    category: "Pressure Instrumentation",
    readTime: "15 min read",
    author: "Satish Kumar Jaiswal",
    authorRole: "Lead I&C Commissioning Engineer",
    authorExperience: "15+ years · NEOM · NSRP · ADNOC",
    tags: [
      { label: "4-20mA", color: "amber" },
      { label: "HART", color: "blue" },
      { label: "Piezoresistive", color: "cyan" },
      { label: "Calibration", color: "green" },
      { label: "NAMUR NE43", color: "blue" },
      { label: "DP Flow", color: "purple" },
    ],
    keyTakeaways: [
      "Sensing elements: piezoresistive (most common), capacitive, resonant",
      "NAMUR NE43 fault zones: < 3.6 mA and > 21 mA signal limits",
      "Install needle + ball valve for service without process shutdown",
      "Zero before span calibration — check impulse line blockages first",
    ],
    seoKeywords: "pressure transmitter, smart transmitter, HART, Foundation Fieldbus, piezoresistive, capacitive, NAMUR NE43, calibration, differential pressure, 4-20mA, industrial instrumentation",
  },
  {
    id: "temperature-gauges",
    title: "Temperature Gauges: Bimetallic & Filled-System Guide",
    slug: "temperature-gauges",
    excerpt: "Master industrial temperature gauges — bimetallic thermometers, filled-system and gas-actuated types. Covers thermal expansion principles, accuracy classes (Class 1.0–2.0), stem selection, thermowell installation, calibration, and failure modes.",
    heroImage: "/bimetallic-thermometer-diagram.svg",
    heroAlt: "Cross-section of a bimetallic dial thermometer showing dial face, pointer, stainless steel stem, and internal bimetallic coil sensing element",
    category: "Temperature Instrumentation",
    readTime: "15 min read",
    author: "Satish Kumar Jaiswal",
    authorRole: "Lead I&C Commissioning Engineer",
    authorExperience: "15+ years · NEOM · NSRP · ADNOC",
    tags: [
      { label: "Bimetallic", color: "amber" },
      { label: "Filled System", color: "blue" },
      { label: "Gas-Actuated", color: "cyan" },
      { label: "Thermowell", color: "green" },
      { label: "ASME B40.200", color: "purple" },
      { label: "DIN 16195", color: "purple" },
    ],
    keyTakeaways: [
      "Mechanical gauges require no external power — intrinsically safe by design",
      "Select range so normal operating temp sits at 50–75% of full scale",
      "Always use a thermowell above 250°C or 50 bar process pressure",
      "Stem immersion depth: min 75mm in liquids, 150mm in gases",
    ],
    seoKeywords: "temperature gauge, bimetallic thermometer, filled system thermometer, dial thermometer, thermal expansion, ASME B40.200, DIN 16195, industrial temperature measurement, thermometer calibration, thermowell",
  },
];

function Tag({ label, color }: { label: string; color: string }) {
  const colorMap: Record<string, string> = {
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[.08em] border ${colorMap[color] || colorMap.amber}`} style={{fontFamily: "var(--font-mono)"}}>
      {label}
    </span>
  );
}

function FeaturedArticleCard({ topic }: { topic: typeof featuredTopics[0] }) {
  const { title, slug, excerpt, heroImage, heroAlt, category, readTime, author, authorRole, authorExperience, tags, keyTakeaways } = topic;

  return (
    <article className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
      style={{ border: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}
      itemScope itemType="https://schema.org/TechArticle"
    >
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "description": excerpt,
        "image": heroImage,
        "author": {
          "@type": "Person",
          "name": author,
          "jobTitle": authorRole,
          "description": authorExperience,
          "url": "https://linkedin.com/in/satish-jaiswal-ic",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Instrumentation Hub",
          "logo": { "@type": "ImageObject", "url": "https://ihub-eta.vercel.app/favicon.ico" },
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "keywords": topic.seoKeywords,
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://ihub-eta.vercel.app/knowledge/instrumentation/${slug}` },
      }, null, 2) }} />

      {/* Hero Image Section */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
        <Link href={`/knowledge/instrumentation/${slug}`} className="block relative" aria-label={`Read full article: ${title}`}>
          <img
            src={heroImage}
            alt={heroAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
            fetchPriority="high"
            width={800}
            height={450}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[.1em] bg-amber-500/90 text-black backdrop-blur-sm"
              style={{fontFamily: "var(--font-mono)"}}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[.1em] bg-black/80 text-white backdrop-blur-sm border border-white/10"
              style={{fontFamily: "var(--font-mono)"}}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {readTime}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <span className="text-xl">👨‍🔧</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{author}</p>
              <p className="text-[10px] text-amber-400/90 uppercase tracking-[.08em]" style={{fontFamily: "var(--font-mono)"}}>{authorRole}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-6 sm:p-8">
        <header className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] leading-tight mb-4 group-hover:text-amber-400 transition-colors" style={{fontFamily: "var(--font-display)"}}>
            <Link href={`/knowledge/instrumentation/${slug}`} className="hover:underline underline-offset-4" itemProp="headline">
              {title}
            </Link>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed" itemProp="description">
            {excerpt}
          </p>
        </header>
        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Article tags">
          {tags.map((tag) => (
            <li key={tag.label} role="listitem">
              <Tag label={tag.label} color={tag.color} />
            </li>
          ))}
        </div>
        <div className="bg-[var(--color-bg-raise)]/50 rounded-xl p-5 border border-[var(--color-border)]/50">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[.1em] text-amber-400 mb-4" style={{fontFamily: "var(--font-mono)"}}>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Key Takeaways
          </h3>
          <ul className="space-y-2.5" role="list">
            {keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-amber-500" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/knowledge/instrumentation/${slug}`}
          className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-[.08em] text-black bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20"
          style={{fontFamily: "var(--font-mono)"}}
          itemProp="url"
        >
          Read Full Guide
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </article>
  );
}

export default function InstrumentationPage() {
  return (
    <div className="page-enter min-h-screen pb-16">
      {/* JSON-LD for the page itself */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Instrumentation Knowledge Base",
        "description": "Pressure gauges and pressure transmitters reference guides for I&C engineers.",
        "url": "https://ihub-eta.vercel.app/knowledge/instrumentation",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": featuredTopics.map((topic, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "TechArticle",
              "name": topic.title,
              "url": `https://ihub-eta.vercel.app/knowledge/instrumentation/${topic.slug}`,
              "description": topic.excerpt,
            }
          }))
        }
      }, null, 2) }} />

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-amber-500" style={{fontFamily: "var(--font-mono)"}}>
              Instrumentation Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6" style={{fontFamily: "var(--font-display)"}}>
            Instrumentation <span className="gradient-amber">Guides</span>
          </h1>
                  </header>

        <section className="mb-12 sm:mb-16" aria-labelledby="featured-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="featured-heading" className="text-2xl font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>
              <span className="gradient-amber">Featured</span> Guides
            </h2>
            <Link
              href="/knowledge/instrumentation/pressure-gauges"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[.1em] text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
              style={{fontFamily: "var(--font-mono)"}}
            >
              View Articles
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredTopics.map((topic) => (
              <FeaturedArticleCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl sm:text-2xl font-black text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>
              Need Calculations Now?
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
              Try our engineering calculators for real-time 4-20mA conversion, DP flow, cable sizing, and more.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-[.08em] text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
              style={{fontFamily: "var(--font-mono)"}}
            >
              Open Tools Suite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}