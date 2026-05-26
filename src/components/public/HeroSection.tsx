import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  AlertTriangle,
  PersonStanding,
  ContactRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartSimulation: () => void;
  onLearnMore: () => void;
}

const HeroSection = ({
  onStartSimulation,
  onLearnMore,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Glow */}
      <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-[-250px] left-[-140px] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/15
                bg-primary/5
                px-4 py-2
                mb-8
              "
            >
              <ShieldCheck className="w-4 h-4 text-primary" />

              <span className="text-sm text-primary font-medium">
                Plataforma de conscientização contra golpes digitais
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                text-5xl md:text-6xl xl:text-7xl
                font-black
                tracking-tight
                leading-[1.02]
                mb-6
              "
            >
              Treine usuários para identificar
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                golpes antes do clique
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                text-lg md:text-xl
                text-muted-foreground
                leading-relaxed
                max-w-2xl
                mb-10
              "
            >
              Simulações interativas no WhatsApp, quizzes de engenharia
              social e conteúdo educativo para capacitar pessoas e equipes
              contra fraudes digitais.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              {[
                "Simulações baseadas em golpes reais",
                "Treinamento rápido e acessível",
                "Feedback educativo imediato",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />

                  <span className="text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={onStartSimulation}
                className="
                  h-14 px-8 rounded-xl
                  text-base font-semibold
                  bg-gradient-to-r from-primary to-secondary
                  hover:opacity-90
                  shadow-lg shadow-primary/20
                "
              >
                Iniciar Simulação
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onLearnMore}
                className="
                  h-14 px-8 rounded-xl
                  text-base font-semibold
                  border-border/60
                  bg-background/40
                  backdrop-blur-sm
                "
              >
                Explorar Conteúdo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Panel */}
            <div
              className="
                relative
                rounded-3xl
                border border-border/60
                bg-card/60
                backdrop-blur-xl
                overflow-hidden
                shadow-2xl
              "
            >
              {/* Header */}
              <div className="border-b border-border/60 px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    Ambiente de treinamento
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Simulações • Quizzes • Educação
                  </p>
                </div>

                <div
                  className="
                    px-3 py-1 rounded-full
                    bg-primary/10
                    text-primary
                    text-xs font-medium
                  "
                >
                  Online
                </div>
              </div>

              {/* Modules */}
              <div className="p-6 space-y-5">
                {/* WhatsApp */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                    rounded-2xl
                    border border-border/60
                    bg-background/60
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        w-12 h-12 rounded-2xl
                        bg-secondary/10
                        flex items-center justify-center
                      "
                    >
                      <Smartphone className="w-6 h-6 text-secondary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold">
                          Simulação WhatsApp
                        </p>

                        <div
                          className="
                            text-xs
                            rounded-full
                            bg-secondary/10
                            text-primary
                            px-2 py-1
                          "
                        >
                          Interativo
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Conversas simuladas reproduzindo golpes reais,
                        engenharia social e tentativas de fraude.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Quiz */}
                <motion.div
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="
                    rounded-2xl
                    border border-border/60
                    bg-background/60
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        w-12 h-12 rounded-2xl
                        bg-secondary/10
                        flex items-center justify-center
                      "
                    >
                      <BrainCircuit className="w-6 h-6 text-secondary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold">
                          Quiz de engenharia social
                        </p>

                        <div
                          className="
                            text-xs
                            rounded-full
                            bg-secondary/10
                            text-primary
                            px-2 py-1
                          "
                        >
                          Avaliação
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Cenários interativos para testar percepção,
                        comportamento e tomada de decisão.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Articles */}
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  className="
                    rounded-2xl
                    border border-border/60
                    bg-background/60
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        w-12 h-12 rounded-2xl
                        bg-secondary/10
                        flex items-center justify-center
                      "
                    >
                      <BookOpen className="w-6 h-6 text-secondary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold">
                          Conteúdo educativo
                        </p>

                        <div
                          className="
                            text-xs
                            rounded-full
                            bg-secondary/10
                            text-primary
                            px-2 py-1
                          "
                        >
                          Educação
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Artigos, explicações e materiais educativos sobre
                        golpes digitais e segurança comportamental.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Footer Card */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-gradient-to-r from-primary/10 to-secondary/10
                    p-5
                    mt-2
                  "
                >
                  <div className="flex items-start gap-3">
                    <ContactRound className="w-5 h-5 text-primary mt-0.5" />

                    <div>
                      <p className="font-medium mb-1">
                        Foco em comportamento humano
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A maioria dos golpes explora confiança, urgência
                        e distração, não vulnerabilidades técnicas.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;