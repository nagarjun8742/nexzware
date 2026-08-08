import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
  { v: 50, suffix: "+", label: "Projects" },
  { v: 25, suffix: "+", label: "Clients" },
  { v: 10, suffix: "+", label: "Services" },
  { v: 99, suffix: "%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 bg-[radial-gradient(circle_at_top,_#eff6ff_0%,_#ffffff_40%)]">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(7,92,255,0.14),_transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.5fr_0.5fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 shadow-[0_30px_90px_-40px_rgba(7,92,255,0.25)]">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[rgba(7,92,255,0.12)] blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Cloud", color: "#075CFF" },
                  { label: "AI", color: "#6D5DFC" },
                  { label: "Security", color: "#3F8CFF" },
                  { label: "Code", color: "#75A8FF" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-[1.8rem] p-6 text-center"
                  >
                    <div className="text-3xl font-bold" style={{ color: item.color }}>
                      {item.label}
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Tomorrow-ready</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">About Nexzware</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)] leading-tight">
              Technology <span className="gradient-text">For Tomorrow</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Nexzware helps businesses build, automate and scale through software development, cloud solutions, AI automation, cybersecurity and digital transformation services.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {STATS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="rounded-[2rem] bg-white/85 p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.18)] border border-white/70"
                >
                  <div className="text-4xl font-semibold text-[color:var(--dark)]">{item.v}{item.suffix}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
