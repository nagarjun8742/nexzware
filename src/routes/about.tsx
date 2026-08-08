import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTA } from "@/components/sections/CTA";
import { TrustedStrip } from "@/components/sections/TrustedStrip";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NEXZWARE" },
      { name: "description", content: "Learn how Nexzware helps businesses build, automate and scale with modern technology." },
      { property: "og:title", content: "About NEXZWARE" },
      { property: "og:description", content: "Technology for tomorrow — built by experts, trusted by businesses." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">About Us</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[color:var(--dark)]">Your Business. <span className="gradient-text">Our Solutions.</span></h1>
      </div>
      <About />
      <TrustedStrip />
      <WhyChoose />
      <CTA />
    </div>
  ),
});
