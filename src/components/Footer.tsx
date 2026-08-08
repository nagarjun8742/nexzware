import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[color:var(--dark)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 0%, rgba(7,92,255,0.35), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(109,93,252,0.3), transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="[&_*]:!text-white">
            <Logo />
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
            End-to-end IT solutions to help businesses build, secure, scale and succeed in the digital world.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-full bg-white/8 hover:bg-white/15 transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/90">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            {["About", "Projects", "Technologies", "Contact"].map((l) => (
              <li key={l}><Link to={`/${l.toLowerCase()}`} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/90">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/90">Contact</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 shrink-0" /> {SITE.phoneDisplay}</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 shrink-0" /> {SITE.email}</li>
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 shrink-0" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} NEXZWARE. All rights reserved.</p>
          <p>Your Vision. Our Technology. Limitless Possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
