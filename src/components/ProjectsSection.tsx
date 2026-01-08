import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Pão Diário",
    description:
      "Projeto de Landing Page do Devocional diário e leitura bíblica em uma interface moderna e acessível.",
    url: "https://paodiario.lovable.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Landing Page",
  },
  {
    id: "2",
    title: "Daily Devotionals",
    description:
      "Devocionais diários com reflexões espirituais e meditações. Inclui Bíblia NVI com guia de leitura anual, marcação de textos e IA para reflexões teológicas e aplicações práticas.",
    url: "https://daily-devotionals-one.vercel.app/",
    technologies: ["React", "Vercel", "Tailwind CSS", "TypeScript"],
    category: "Web App",
  },
  {
    id: "3",
    title: "Boardzen",
    description:
      "Gerenciador de tarefas com quadros Kanban, checklists e interface minimalista. Organize projetos com tranquilidade e foco no essencial.",
    url: "https://taskflow-eta-orpin.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Web App",
  },
  {
    id: "4",
    title: "Book Translator PRO",
    description:
      "Tradutor de PDFs com IA (GPT-4, Gemini, Groq). Divide documentos grandes automaticamente e processa no navegador com total privacidade.",
    url: "https://thebooktranslator.netlify.app/",
    technologies: ["React", "OpenAI API", "Google Gemini", "PDF.js"],
    category: "IA",
  },
  {
    id: "5",
    title: "EstoqueFácil",
    description:
      "Landing Page do sistema de gerenciamento de estoque. Interface moderna para apresentar as funcionalidades do sistema de controle de inventário.",
    url: "https://landingestoque.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Landing Page",
  },
  {
    id: "6",
    title: "Sistema EstoqueFácil",
    description:
      "Sistema completo de gerenciamento de estoque com controle de produtos, entrada/saída, relatórios e dashboard. Interface intuitiva para pequenas e médias empresas.",
    url: "https://estoque-facil-novo.vercel.app/",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Web App",
  },
  {
    id: "7",
    title: "CriativeArt - Gestão de Brindes",
    description:
      "Sistema de gestão para empresa de brindes personalizados. Controle de produção, estoque e pedidos com dashboard interativo.",
    url: "https://criative-art-management-system.vercel.app/#/",
    technologies: ["React", "Tailwind CSS", "Recharts", "PWA"],
    category: "Gestão",
  },
  {
    id: "8",
    title: "Cloud Infrastructure Manager",
    description:
      "Gerenciador de infraestrutura cloud com provisionamento automatizado, controle de custos e gestão de recursos. Suporte multi-cloud AWS, Azure e GCP.",
    url: "https://netlify.com",
    technologies: ["Terraform", "React", "AWS SDK", "TypeScript"],
    category: "Infraestrutura",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass glow-border text-sm font-medium text-primary mb-4"
          >
            Portfólio
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projetos em{" "}
            <span className="text-gradient">Tempo Real</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore meus projetos diretamente aqui. Cada card renderiza a
            aplicação real através de iframe para uma experiência imersiva.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
