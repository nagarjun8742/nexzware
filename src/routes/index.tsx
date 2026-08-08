import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustedStrip } from "@/components/sections/TrustedStrip";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXZWARE — Smart Solutions For Real Growth" },
      { name: "description", content: "Premium software, cloud, AI, cybersecurity & marketing solutions for growing businesses." },
      { property: "og:title", content: "NEXZWARE — Smart Solutions For Real Growth" },
      { property: "og:description", content: "Premium software, cloud, AI, cybersecurity & marketing solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedStrip />
      <About />
      <ServicesGrid compact />
      <Projects />
      <Technologies />
      <Testimonials />
      <WhyChoose />
      <CTA />
      <Contact />
    </>
  );
}
