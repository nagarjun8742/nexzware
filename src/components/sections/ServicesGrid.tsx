import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Globe, Smartphone, Palette, TrendingUp, Bot, Cloud, ShieldCheck, Headphones, GraduationCap } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { SpotlightCard } from "../ui/SpotlightCard";

const ICONS: Record<string, any> = { Code2, Globe, Smartphone, Palette, TrendingUp, Bot, Cloud, ShieldCheck, Headphones, GraduationCap };

export function ServicesGrid({ compact = false, featuredSlugs }: { compact?: boolean; featuredSlugs?: string[] }) {
  const servicesToShow = featuredSlugs
    ? featuredSlugs.map((slug) => SERVICES.find((service) => service.slug === slug)).filter(Boolean)
    : SERVICES.slice(0, compact ? 5 : SERVICES.length);

  return (
    <section id="services" className="py-28 relative">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(109,93,252,0.12), transparent 60%)" }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">
            End-to-end <span className="gradient-text">IT solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">One stop. All solutions. Built to help your business build, secure, grow and succeed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {servicesToShow.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Code2;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex"
              >
                <SpotlightCard className="group flex-1 flex flex-col p-6 glass-strong cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(7,92,255,0.25)]">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="grid place-items-center size-12 rounded-xl text-white mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(7,92,255,0.4)]"
                      style={{ background: "var(--gradient-primary)", boxShadow: "0 10px 25px -8px rgba(7,92,255,0.5)" }}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-[color:var(--dark)] group-hover:text-[color:var(--brand)] transition-colors duration-300">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand)] group-hover:gap-2.5 transition-all"
                    >
                      Learn More <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

