import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-3 inset-x-3 z-50"
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-15px_rgba(7,20,56,0.2)]" : "glass"
        }`}
      >
        <Link to="/"><Logo /></Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="px-4 py-2 rounded-full text-sm font-medium text-[color:var(--dark)]/80 hover:text-[color:var(--brand)] hover:bg-[color:var(--brand)]/8 transition-colors"
                activeProps={{ className: "text-[color:var(--brand)] bg-[color:var(--brand)]/10" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm text-[color:var(--dark)]/70 hover:text-[color:var(--brand)]"
          >
            <Phone className="size-4" /> {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold btn-primary hover:[transform:translateY(-2px)] transition-transform"
          >
            Book a Call
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mt-2 mx-auto max-w-7xl glass-strong rounded-2xl p-3"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-[color:var(--brand)]/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
