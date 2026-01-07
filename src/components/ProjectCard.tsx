import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  RefreshCw,
  Info,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const reloadIframe = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = project.url;
    }
  };

  // Mobile version - simple card with link
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass glow-border rounded-2xl overflow-hidden hover-glow"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge variant="tech" className="mb-2">
                {project.category}
              </Badge>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop version - iframe with browser chrome
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass glow-border rounded-2xl overflow-hidden hover-glow group"
    >
      {/* Browser Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
        {/* Traffic Lights */}
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>

        {/* URL Bar */}
        <div className="flex-1 mx-4 max-w-md">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-xs font-mono text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            <span className="truncate">{project.url}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={reloadIframe}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            title="Recarregar"
          >
            <RefreshCw className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-lg transition-all ${showInfo
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            title="Informações"
          >
            {showInfo ? <X className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </motion.button>
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            title="Abrir em nova aba"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative aspect-[16/10] bg-background">
        {/* Iframe */}
        <iframe
          ref={iframeRef}
          src={project.url}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full border-0 transition-opacity duration-300 ${isLoading || hasError ? "opacity-0" : "opacity-100"
            }`}
          sandbox="allow-scripts allow-same-origin allow-popups"
          title={project.title}
        />

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && !hasError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background"
            >
              <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground text-sm">
                Carregando preview...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error State */}
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background"
            >
              <AlertCircle className="w-10 h-10 text-destructive mb-4" />
              <p className="text-muted-foreground text-sm mb-4 text-center px-4">
                Este site bloqueou a renderização em iframe.
              </p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={reloadIframe}
                  className="px-4 py-2 rounded-lg glass glow-border text-sm font-medium flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Tentar novamente
                </motion.button>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir site
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Overlay */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-y-0 right-0 w-full sm:w-96 glass-strong p-6 overflow-y-auto"
            >
              <Badge variant="tech" className="mb-3">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Visitar Projeto
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Info Below */}
      <div className="p-4 border-t border-border">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </motion.div>
  );
}
