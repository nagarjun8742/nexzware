import { motion } from "framer-motion";

const TECHS = {
  Frontend: ["React", "Angular", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  Backend: ["Java", "Spring Boot", "Node.js", "PHP", "Python", "Laravel"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
  Cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  Mobile: ["Kotlin", "Swift", "Flutter", "React Native"],
  "AI & Tools": ["OpenAI", "Python", "Zapier", "Twilio", "Dialogflow"],
};

export function Technologies() {
  return (
    <section id="technologies" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-3">Tech Stack</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[color:var(--dark)]">
            Built with <span className="gradient-text">modern technologies</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(TECHS).map(([cat, list], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-3xl p-7"
            >
              <h3 className="font-display font-semibold text-[color:var(--dark)] mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-white border border-[color:var(--brand)]/15 text-[color:var(--dark)]/80 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
