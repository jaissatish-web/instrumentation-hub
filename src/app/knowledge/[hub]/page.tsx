import Link from "next/link";

export default async function HubPage({ params }: { params: Promise<{ hub: string }> }) {
  const { hub } = await params;

  return (
    <div className="page-enter min-h-screen flex items-center justify-center px-4">
      <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-lg mx-auto text-center" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>
          Coming Soon
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          The <strong className="text-amber-400">{hub.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</strong> hub is under development and will be published soon.
        </p>
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-[.08em] text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
          style={{fontFamily: "var(--font-mono)"}}
        >
          ← Back to Knowledge Base
        </Link>
      </div>
    </div>
  );
}