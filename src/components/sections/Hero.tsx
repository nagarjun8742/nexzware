import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroScene } from "../HeroScene";

export function Hero() {
  return (
    <section className="relative bg-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Decorative background glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(800px 450px at 75% 30%, rgba(7,92,255,0.18), transparent 75%)" }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full text-xs font-medium text-[color:var(--brand)] mb-6 shadow-sm border border-white/50 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            We Code Solutions. You Grow Business.
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[color:var(--dark)]">
            Smart Solutions
            <br />
            For <span className="gradient-text">Real Growth</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From software development to cloud, cybersecurity, AI automation, digital marketing and IT support — we help businesses scale through modern technology.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold btn-primary shadow-[0_20px_50px_rgba(7,92,255,0.35)] hover:shadow-[0_25px_60px_rgba(7,92,255,0.55)] transition-shadow"
              >
                Get Free Consultation
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold glass-strong text-[color:var(--dark)] border border-white/60 hover:bg-white hover:shadow-lg transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}

