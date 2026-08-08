import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("nxz_loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("nxz_loaded", "1");
      setDone(true);
    }, 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-hero"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0, rotateY: 0 }}
              animate={{ scale: 1, rotateY: 720 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{ background: "radial-gradient(circle,#075CFF,transparent 70%)", transform: "scale(1.5)" }}
              />
              <div
                className="relative grid place-items-center size-24 rounded-3xl text-white font-display font-bold text-5xl"
                style={{ background: "linear-gradient(135deg,#075CFF,#6D5DFC)", boxShadow: "0 30px 80px -20px rgba(7,92,255,0.7)" }}
              >
                N
              </div>
            </motion.div>
            <div className="w-56 h-1 rounded-full bg-[color:var(--brand)]/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full"
                style={{ background: "linear-gradient(90deg,#075CFF,#6D5DFC)" }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--dark)]/60">Technology For Tomorrow</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
