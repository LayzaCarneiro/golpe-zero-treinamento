import { motion } from "framer-motion";
import { Shield, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartSimulation: () => void;
  onLearnMore: () => void;
}

const HeroSection = ({ onStartSimulation, onLearnMore }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.03]" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-8"
          >
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Mais de 500 mil golpes por dia no Brasil</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Proteja seu negócio contra{" "}
            <span className="text-gradient-hero">golpes no WhatsApp</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Aprenda a identificar e se proteger de fraudes digitais com simulações 
            realistas e conteúdo educativo. Feito especialmente para pequenos 
            empresários e autônomos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={onStartSimulation}
              className="bg-gradient-hero text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-elevated hover:opacity-90 transition-opacity"
            >
              <Shield className="w-5 h-5 mr-2" />
              Iniciar Simulação
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onLearnMore}
              className="font-semibold text-lg px-8 py-6 rounded-xl border-2"
            >
              Aprender Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "100%", label: "Gratuito" },
              { value: "5 min", label: "Simulação" },
              { value: "6+", label: "Tipos de golpes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
