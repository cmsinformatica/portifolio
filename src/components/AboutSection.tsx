import { motion } from "framer-motion";
import { Server, Bot, Workflow, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Servidores, redes, cloud e segurança.",
  },
  {
    icon: Bot,
    title: "Vibecoding",
    description: "ChatGPT, Claude, Gemini AI Studio, Cursor.",
  },
  {
    icon: Workflow,
    title: "Automação",
    description: "n8n, workflows e integrações inteligentes.",
  },
  {
    icon: Sparkles,
    title: "IA & Ferramentas",
    description: "Anti Gravity, GitHub e soluções modernas.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass glow-border text-sm font-medium text-primary mb-4">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Analista de Infraestrutura &{" "}
              <span className="text-gradient">Desenvolvedor Vibecoding</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Profissional com background sólido em infraestrutura de TI, diversos cursos 
              na área de desenvolvimento web e consultor técnico. Desenvolvo projetos 
              utilizando vibecoding com ferramentas de IA como Anti Gravity, Cursor, 
              ChatGPT, Google Gemini AI Studio, Claude, GitHub e n8n. Transformando 
              ideias em aplicações funcionais através da inteligência artificial.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Projetos IA" },
                { value: "8+", label: "Ferramentas" },
                { value: "5+", label: "Cursos Dev" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl glass glow-border"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl glass glow-border hover-glow group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
