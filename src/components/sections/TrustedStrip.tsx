const LOGOS = ["AWS", "Microsoft", "Google Cloud", "ZOHO", "TATA"];

export function TrustedStrip() {
  return (
    <section className="py-10 bg-white/85 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by leading brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LOGOS.map((logo) => (
            <div key={logo} className="rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-sm font-semibold text-[color:var(--dark)]/80 shadow-sm">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
