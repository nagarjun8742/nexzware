import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — NEXZWARE" },
      { name: "description", content: "Software, web, mobile, UI/UX, marketing, AI, cloud, security, support & training services." },
      { property: "og:title", content: "Services — NEXZWARE" },
      { property: "og:description", content: "End-to-end IT solutions for every business need." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Our Services</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[color:var(--dark)]">One stop. <span className="gradient-text">All solutions.</span></h1>
      </div>
      <ServicesGrid />
      <CTA />
    </div>
  ),
});
