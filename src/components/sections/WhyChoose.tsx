import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Heart, Lightbulb, IndianRupee, Headphones, Lock } from "lucide-react";

const ITEMS = [
  { i: Award, t: "Expert Team", d: "Skilled & certified professionals" },
  { i: Clock, t: "On-Time Delivery", d: "Always on time, every time" },
  { i: ShieldCheck, t: "Quality Assured", d: "High quality, delivered" },
  { i: Heart, t: "Customer Focused", d: "Your success is our priority" },
  { i: Lightbulb, t: "Innovative", d: "Modern tech for maximum impact" },
  { i: IndianRupee, t: "Affordable", d: "Best value for your investment" },
  { i: Headphones, t: "24/7 Support", d: "We're here when you need us" },
  { i: Lock, t: "Secure & Reliable", d: "Solutions you can trust" },
];

export function WhyChoose() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Why Nexzware</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">Built to be your <span className="gradient-text">long-term partner</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it, idx) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6"
            >
              <div className="grid place-items-center size-11 rounded-xl text-white mb-4" style={{ background: "var(--gradient-primary)" }}>
                <it.i className="size-5" />
              </div>
              <h3 className="font-semibold text-[color:var(--dark)]">{it.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
