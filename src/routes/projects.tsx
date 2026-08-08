import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NEXZWARE" },
      { name: "description", content: "Selected work from our portfolio — ERPs, e-commerce, healthcare, AI and cloud projects." },
      { property: "og:title", content: "Projects — NEXZWARE" },
      { property: "og:description", content: "Projects that deliver real results." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Portfolio</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[color:var(--dark)]">Work we're <span className="gradient-text">proud of</span></h1>
      </div>
      <Projects />
      <CTA />
    </div>
  ),
});
