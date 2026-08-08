import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NEXZWARE" },
      { name: "description", content: "Get in touch with Nexzware. Free consultation within 24 hours." },
      { property: "og:title", content: "Contact NEXZWARE" },
      { property: "og:description", content: "Let's build your next big solution." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Contact />
    </div>
  ),
});
