import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Smartphone,
  BrainCircuit,
  BookOpen,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface HomeSectionsProps {
  onStartSimulation?: () => void;
  onLearnMore?: () => void;
}

export default function HomeSections({ onStartSimulation, onLearnMore }: HomeSectionsProps) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#060816] text-white">
      {/* TRUST BAR */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm text-zinc-400">
            {[
              "Treinamento interativo",
              "Simulações realistas",
              "Segurança comportamental",
              "Analytics corporativo",
              "Conscientização contínua",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* COMO FUNCIONA */}
    <section className="relative py-32 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%)]" />

    {/* Grid */}
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

    <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mb-20">
        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Como funciona
        </p>

        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Transforme conscientização em comportamento
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed">
            Experiências práticas inspiradas em ataques reais para treinar
            pessoas antes que fraudes digitais aconteçam.
        </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
        {[
            {
            number: "01",
            title: "Simule ameaças reais",
            description:
                "Cenários inspirados em golpes modernos utilizados diariamente em aplicativos de mensagem.",
            glow: "from-violet-500/20 to-blue-500/10",
            },
            {
            number: "02",
            title: "Teste decisões",
            description:
                "Quizzes e interações avaliam percepção de risco e comportamento humano.",
            glow: "from-blue-500/20 to-cyan-500/10",
            },
            {
            number: "03",
            title: "Monitore evolução",
            description:
                "Empresas acompanham métricas, vulnerabilidades e progresso contínuo da equipe.",
            glow: "from-fuchsia-500/20 to-violet-500/10",
            },
        ].map((step, index) => (
            <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.12,
                duration: 0.5,
            }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
            }}
            className="
                group
                relative
                rounded-[32px]
                border border-white/10
                bg-[#0B1023]
                overflow-hidden
                p-8
                transition-all
                duration-500
                hover:border-primary/30
                hover:shadow-[0_20px_80px_rgba(124,58,237,0.15)]
            "
            >
            {/* Glow */}
            <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-gradient-to-br ${step.glow}
                `}
            />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

            {/* Border glow */}
            <div className="absolute inset-[1px] rounded-[31px] border border-white/[0.03]" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                <div
                    className="
                    w-16 h-16 rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                    flex items-center justify-center
                    backdrop-blur-xl
                    "
                >
                    <span className="text-2xl font-black text-primary">
                    {step.number}
                    </span>
                </div>

                <div className="h-px flex-1 mx-4 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>

                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-primary transition-colors">
                {step.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-[15px]">
                {step.description}
                </p>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>

    {/* MÓDULOS */}
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_30%)]" />

    {/* Grid */}
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

    <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mb-20">
        <p className="text-primary font-medium mb-4 tracking-[0.2em] uppercase text-sm">
            Plataforma
        </p>

        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Módulos criados para
            <span className="block text-transparent bg-gradient-to-r from-primary via-violet-400 to-secondary bg-clip-text">
            comportamento humano
            </span>
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed">
            Simulações, educação e analytics corporativo conectados em uma experiência moderna de conscientização digital.
        </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
        {[
            {
            icon: Smartphone,
            title: "Simulação WhatsApp",
            description:
                "Converse com cenários inspirados em golpes reais, mensagens falsas e tentativas de engenharia social.",
            color:
                "from-emerald-500/20 via-emerald-400/10 to-transparent",
            border: "hover:border-emerald-400/30",
            shadow:
                "hover:shadow-[0_20px_80px_rgba(16,185,129,0.15)]",
            iconBg:
                "bg-emerald-500/10 border-emerald-400/20",
            iconColor: "text-emerald-400",
            accent: "bg-emerald-400",
            action: onStartSimulation || (() => navigate("simulation")),
            },
            {
            icon: BrainCircuit,
            title: "Quiz interativo",
            description:
                "Teste percepção, urgência emocional e tomada de decisão em cenários críticos.",
            color:
                "from-yellow-500/20 via-amber-400/10 to-transparent",
            border: "hover:border-yellow-400/30",
            shadow:
                "hover:shadow-[0_20px_80px_rgba(250,204,21,0.15)]",
            iconBg:
                "bg-yellow-500/10 border-yellow-400/20",
            iconColor: "text-yellow-300",
            accent: "bg-yellow-400",
            action: onStartSimulation || (() => navigate("simulation")),
            },
            {
            icon: BookOpen,
            title: "Conteúdo educativo",
            description:
                "Artigos e materiais sobre phishing, golpes digitais e segurança comportamental.",
            color:
                "from-violet-500/20 via-fuchsia-400/10 to-transparent",
            border: "hover:border-violet-400/30",
            shadow:
                "hover:shadow-[0_20px_80px_rgba(139,92,246,0.18)]",
            iconBg:
                "bg-violet-500/10 border-violet-400/20",
            iconColor: "text-violet-300",
            accent: "bg-violet-400",
            action: onLearnMore || (() => navigate("education")),
            },
            {
            icon: LayoutDashboard,
            title: "Dashboard corporativo",
            description:
                "Visualize métricas, vulnerabilidades e evolução da conscientização da equipe.",
            color:
                "from-red-500/20 via-rose-400/10 to-transparent",
            border: "hover:border-red-400/30",
            shadow:
                "hover:shadow-[0_20px_80px_rgba(248,113,113,0.16)]",
            iconBg:
                "bg-red-500/10 border-red-400/20",
            iconColor: "text-red-300",
            accent: "bg-red-400",
            action: () => navigate("/members/admin"),
            route: "/members/",
            },
        ].map((module, index) => {
            const Icon = module.icon;

            return (
            <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: index * 0.08,
                duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                y: -10,
                }}
                onClick={() => module.action?.()}
                className={`
                group
                relative
                overflow-hidden
                rounded-[34px]
                border border-white/10
                bg-[#0A0F1F]
                p-8
                transition-all
                duration-500
                cursor-pointer
                ${module.border}
                ${module.shadow}
                `}
            >
                {/* Gradient overlay */}
                <div
                className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${module.color}
                `}
                />

                {/* Ambient glow */}
                <div
                className={`
                    absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                    ${module.accent}
                `}
                />

                {/* Top border */}
                <div
                className={`
                    absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700
                    ${module.accent}
                `}
                />

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

                <div className="relative z-10">
                {/* Icon */}
                <div
                    className={`
                    w-16 h-16 rounded-2xl
                    border
                    flex items-center justify-center
                    backdrop-blur-xl
                    mb-8
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${module.iconBg}
                    `}
                >
                    <Icon className={`w-8 h-8 ${module.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-5 text-white transition-colors duration-300">
                    {module.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-[15px] mb-10">
                    {module.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <div
                        className={`
                        w-2 h-2 rounded-full animate-pulse
                        ${module.accent}
                        `}
                    />

                    <span className="text-xs uppercase tracking-wider text-zinc-500">
                        ativo
                    </span>
                    </div>

                    <div
                    className={`
                        flex items-center gap-2
                        text-sm font-medium
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300
                        ${module.iconColor}
                    `}
                    >
                    Explorar
                    <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
                </div>
            </motion.div>
            );
        })}
        </div>
    </div>
    </section>

      {/* CTA FINAL */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_40%)]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-primary font-medium mb-6">
              SecureLine
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8">
              Treine pessoas antes que o próximo golpe funcione
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Capacite usuários e equipes através de experiências práticas,
              simulações realistas e conscientização contínua.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-secondary shadow-[0_10px_40px_rgba(124,58,237,0.35)]"
                onClick={() => (onStartSimulation || (() => navigate("simulation")))()}
              >
                Começar treinamento
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-2xl text-base font-semibold border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-white"
                onClick={() => navigate("/members/admin")}
              >
                Ver plataforma
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}