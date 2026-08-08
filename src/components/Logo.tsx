export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative grid place-items-center rounded-xl"
        style={{
          width: size,
          height: size,
          background: "var(--gradient-primary)",
          boxShadow: "0 10px 30px -10px rgba(7,92,255,0.6)",
        }}
      >
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full p-1.5" fill="none">
          <circle cx="20" cy="20" r="17" stroke="white" strokeWidth="2.5" />
          <path d="M13 28 L13 12 L27 28 L27 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display font-bold tracking-tight text-[color:var(--dark)] text-lg">NEXZWARE</div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Technology For Tomorrow</div>
      </div>
    </div>
  );
}
