import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Rohan Mehta", company: "Cipla Logistics", rating: 5, text: "Nexzware rebuilt our internal ERP from scratch. The new system is fast, reliable and our team adopted it in days." },
  { name: "Sneha Kapoor", company: "BrightCart Retail", rating: 5, text: "Their e-commerce migration to AWS cut our infra cost by 40% while doubling page speed. Truly enterprise-grade." },
  { name: "Arjun Nair", company: "MediCore Health", rating: 5, text: "From UX research to HIPAA-compliant cloud delivery — they handled everything with absolute professionalism." },
  { name: "Priya Raman", company: "Lumen Studios", rating: 5, text: "Our AI chatbot now handles 70% of incoming queries. ROI in under 3 months. Exceptional team." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Loved by clients</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">
          Trusted by <span className="gradient-text">growing businesses</span>
        </h2>

        <div className="mt-14 relative h-[280px]">
          {REVIEWS.map((r, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: i === idx ? 1 : 0,
                y: i === idx ? 0 : 20,
                scale: i === idx ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 glass-strong rounded-3xl p-10 ${i === idx ? "" : "pointer-events-none"}`}
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="size-5 fill-[#FFC83D] text-[#FFC83D]" />)}
              </div>
              <p className="text-xl text-[color:var(--dark)]/90 leading-relaxed font-display">"{r.text}"</p>
              <div className="mt-6">
                <div className="font-semibold text-[color:var(--dark)]">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[color:var(--brand)]" : "w-1.5 bg-[color:var(--brand)]/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
