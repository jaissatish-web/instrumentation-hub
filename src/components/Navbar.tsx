"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/knowledge", label: "Knowledge Base" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-md bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/30 flex items-center justify-center text-xs font-bold text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>IH</span>
            <div>
              <span className="text-sm font-bold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>Instrumentation Hub</span>
              <span className="text-[9px] text-[var(--color-text-muted)] block uppercase tracking-[.12em]" style={{fontFamily: "var(--font-mono)"}}>Engineering Knowledge Base</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/knowledge"
              className="ml-4 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-[.08em]"
              style={{
                background: "var(--color-accent-blue)",
                color: "#000",
                fontFamily: "var(--font-mono)",
                boxShadow: "0 0 20px rgba(0,180,255,0.3)",
              }}
            >
              Explore Hub
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,14,23,0.95)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-2xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
              style={{fontFamily: "var(--font-display)"}}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            className="absolute top-6 right-6 text-2xl text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] bg-none border-none"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
}
