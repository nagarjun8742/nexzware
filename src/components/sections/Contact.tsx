import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "" });
  const onChange = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  const waMessage = () =>
    encodeURIComponent(
      `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\nBudget: ${f.budget}\nTimeline: ${f.timeline}\nMessage: ${f.message}`
    );

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Get in touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">
            Let's build your <span className="gradient-text">next big solution</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">Tell us about your project. We'll get back within 24 hours.</p>

          <div className="mt-10 space-y-5">
            {[
              { i: Phone, l: "Call / WhatsApp", v: SITE.phoneDisplay, h: `tel:${SITE.phone.replace(/\s/g, "")}` },
              { i: Mail, l: "Email", v: SITE.email, h: `mailto:${SITE.email}` },
              { i: MapPin, l: "Office", v: SITE.address },
            ].map((c) => (
              <a key={c.l} href={c.h ?? "#"} className="flex items-start gap-4 glass-strong rounded-2xl p-5 hover:shadow-lg transition-shadow">
                <div className="grid place-items-center size-11 rounded-xl text-white shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  <c.i className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                  <div className="font-semibold text-[color:var(--dark)] mt-1">{c.v}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${SITE.whatsapp}?text=${waMessage()}`, "_blank");
          }}
          className="glass-strong rounded-3xl p-7 lg:p-9 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name *" value={f.name} onChange={(v) => onChange("name", v)} required />
            <Field label="Email *" type="email" value={f.email} onChange={(v) => onChange("email", v)} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Phone *" value={f.phone} onChange={(v) => onChange("phone", v)} required />
            <Select label="Service Required *" value={f.service} onChange={(v) => onChange("service", v)} options={SERVICES.map((s) => s.title)} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Select label="Project Budget *" value={f.budget} onChange={(v) => onChange("budget", v)} options={["< ₹50K", "₹50K – ₹2L", "₹2L – ₹10L", "₹10L+"]} />
            <Select label="Project Timeline *" value={f.timeline} onChange={(v) => onChange("timeline", v)} options={["ASAP", "1 month", "1–3 months", "3+ months"]} />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</label>
            <textarea required rows={4} value={f.message} onChange={(e) => onChange("message", e.target.value)}
              className="mt-1.5 w-full rounded-xl bg-white/70 border border-[color:var(--brand)]/15 px-4 py-3 text-sm outline-none focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Attachment (optional)</label>
            <input type="file" className="mt-1.5 block w-full text-sm text-muted-foreground file:mr-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[color:var(--brand)]/10 file:text-[color:var(--brand)] hover:file:bg-[color:var(--brand)]/15" />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary">
              <Send className="size-4" /> Submit Inquiry
            </button>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waMessage()}`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:scale-105 transition-transform">
              Send via WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange, required }: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl bg-white/70 border border-[color:var(--brand)]/15 px-4 py-3 text-sm outline-none focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20" />
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <select required value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl bg-white/70 border border-[color:var(--brand)]/15 px-4 py-3 text-sm outline-none focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
