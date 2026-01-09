import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glassmorphism rounded-xl p-6 glow-border">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Cookie className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Shield className="h-4 w-4 text-accent" />
                    Aviso de Cookies - LGPD
                  </h3>
                  <button
                    onClick={handleDecline}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Este site utiliza cookies para melhorar sua experiência de navegação.
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), solicitamos seu
                  consentimento para armazenar cookies em seu dispositivo.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={handleAccept}
                    className="flex-1 bg-accent hover:bg-accent/80 text-background font-medium"
                  >
                    Aceitar
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="flex-1 border-border/50 hover:bg-muted/50"
                  >
                    Recusar
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Saiba mais em nossa{" "}
                  <a href="/privacy" className="text-accent hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
