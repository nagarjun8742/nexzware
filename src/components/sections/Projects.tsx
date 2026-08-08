import { motion } from "framer-motion";
import { SpotlightCard } from "../ui/SpotlightCard";

const PROJECTS = [
  { title: "ERP Management System", stack: ["React", "Spring Boot", "MySQL"], industry: "Manufacturing", result: "+38% ops efficiency", grad: "linear-gradient(135deg,#075CFF,#6D5DFC)" },
  { title: "E-Commerce Platform", stack: ["React", "Node.js", "MongoDB"], industry: "Retail", result: "3x conversion lift", grad: "linear-gradient(135deg,#3F8CFF,#9A6BFF)" },
  { title: "Healthcare Management", stack: ["React", "Java", "AWS"], industry: "Healthcare", result: "HIPAA compliant", grad: "linear-gradient(135deg,#6D5DFC,#3F8CFF)" },
  { title: "AI Chatbot", stack: ["OpenAI", "Python", "Twilio"], industry: "SaaS", result: "24/7 auto-support", grad: "linear-gradient(135deg,#7B6BFF,#075CFF)" },
  { title: "AWS Cloud Migration", stack: ["AWS", "Terraform", "Docker"], industry: "Fintech", result: "-42% infra cost", grad: "linear-gradient(135deg,#075CFF,#3F8CFF)" },
  { title: "Mobile Banking App", stack: ["Flutter", "Firebase"], industry: "Finance", result: "4.8★ App Store", grad: "linear-gradient(135deg,#6D5DFC,#9A6BFF)" },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-transparent via-[color:var(--brand)]/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Selected Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">Projects that <span className="gradient-text">deliver results</span></h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex"
            >
              <SpotlightCard className="group flex-1 flex flex-col overflow-hidden glass-strong cursor-pointer hover:shadow-[0_20px_50px_rgba(7,92,255,0.25)] transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: p.grad }}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 50%)" }} />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-xs uppercase tracking-widest opacity-80">{p.industry}</div>
                    <div className="text-sm mt-1 opacity-90">{p.result}</div>
                  </div>
                  <div className="absolute top-4 right-4 size-12 rounded-2xl glass grid place-items-center text-white text-xl font-bold z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">N</div>
                </div>
                <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
                  <h3 className="font-display font-semibold text-lg text-[color:var(--dark)] group-hover:text-[color:var(--brand)] transition-colors duration-300">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)] font-medium group-hover:bg-[color:var(--brand)] group-hover:text-white transition-colors duration-300">{t}</span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

