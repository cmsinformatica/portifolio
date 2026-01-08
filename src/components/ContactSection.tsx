import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Github, href: "https://github.com/cmsinformatica", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/cmsinformatica/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:cristiano@cristianomartins.net",
    label: "Email",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const subject = `Novo contato de: ${formData.name}`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    const mailtoLink = `mailto:cristiano@cristianomartins.net?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    toast.success("Abrindo cliente de email...");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/10 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass glow-border text-sm font-medium text-primary mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">trabalhar juntos</span>?
          </h2>
          <p className="text-muted-foreground">
            Tem um projeto em mente? Adoraria ouvir suas ideias e ajudar a
            transformá-las em realidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass glow-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass glow-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 rounded-xl glass glow-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 hover-glow"
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-xl glass glow-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
