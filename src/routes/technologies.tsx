import { createFileRoute } from "@tanstack/react-router";
import { Technologies } from "@/components/sections/Technologies";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — NEXZWARE" },
      { name: "description", content: "Modern stack: React, Java, Node, Python, AWS, Azure, Flutter and more." },
      { property: "og:title", content: "Technologies — NEXZWARE" },
      { property: "og:description", content: "Built with the right tools for the job." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Our Stack</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[color:var(--dark)]">Modern <span className="gradient-text">technologies</span></h1>
      </div>
      <Technologies />
      <CTA />
    </div>
  ),
});
