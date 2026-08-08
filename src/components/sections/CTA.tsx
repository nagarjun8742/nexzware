import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTA() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-12 lg:p-20 text-center text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.3), transparent 50%)" }} />
          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Let's Build Your Next<br />Big Solution</h2>
            <p className="mt-5 text-white/85 max-w-xl mx-auto">Your vision. Our technology. Limitless possibilities.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-white text-[color:var(--brand)] hover:scale-105 transition-transform">
                <Phone className="size-4" /> Call Now
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:scale-105 transition-transform">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
