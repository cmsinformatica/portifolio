import { motion } from "framer-motion";
import { Code2, User, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { label: "Início", href: "#hero", icon: Code2 },
  { label: "Sobre", href: "#about", icon: User },
  { label: "Projetos", href: "#projects", icon: FolderOpen },
  { label: "Contato", href: "#contact", icon: Mail },
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass glow-border rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">
              Dev<span className="text-gradient">Folio</span>
            </span>
          </motion.a>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover-glow"
          >
            <Mail className="w-4 h-4" />
            Contato
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
