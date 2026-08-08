import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, type Service } from "@/lib/site";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} — NEXZWARE` },
      { name: "description", content: loaderData?.long ?? "" },
      { property: "og:title", content: `${loaderData?.title ?? "Service"} — NEXZWARE` },
      { property: "og:description", content: loaderData?.long ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-[color:var(--brand)]">Back to services</Link>
    </div>
  ),
  errorComponent: () => <div className="pt-40 text-center">Something went wrong.</div>,
  component: ServicePage,
});

function ServicePage() {
  const svc = Route.useLoaderData() as Service;
  return (
    <div className="pt-32">
      <section className="bg-hero py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link to="/services" className="text-sm text-[color:var(--brand)] font-medium">← All Services</Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-5xl lg:text-7xl font-bold text-[color:var(--dark)]">
            {svc.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{svc.title.split(" ").slice(-1)}</span>
          </motion.h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">{svc.long}</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold btn-primary">
            Discuss your project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--dark)] mb-6">What we deliver</h2>
            <ul className="space-y-3">
              {svc.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="grid place-items-center size-6 rounded-full mt-0.5 text-white shrink-0" style={{ background: "var(--gradient-primary)" }}>
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-[color:var(--dark)]/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[color:var(--dark)] mb-6">Technologies & tools</h2>
            <div className="flex flex-wrap gap-2">
              {svc.technologies.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-sm bg-white border border-[color:var(--brand)]/15 text-[color:var(--dark)]/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[color:var(--dark)] mb-6">Other services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="glass-strong rounded-2xl p-5 hover:shadow-lg transition-shadow">
                <div className="font-semibold text-[color:var(--dark)]">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
