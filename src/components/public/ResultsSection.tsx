import { motion } from "framer-motion";

import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import type { AnswerRecord } from "@/components/public/WhatsAppSimulation";

interface ResultsProps {
  score: number;
  total: number;
  answers: AnswerRecord[];
  onRestart: () => void;
  onGoToEducation: () => void;
}

const getLevel = (pct: number) => {
  if (pct >= 80)
    return {
      label: "Excelente!",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-400/20",
      glow:
        "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
      icon: Shield,
      message:
        "Você demonstrou ótima percepção contra golpes digitais.",
    };

  if (pct >= 60)
    return {
      label: "Bom desempenho",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-400/20",
      glow:
        "shadow-[0_20px_80px_rgba(124,58,237,0.18)]",
      icon: CheckCircle2,
      message:
        "Você possui bons conhecimentos, mas ainda pode evoluir.",
    };

  return {
    label: "Atenção necessária",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-400/20",
    glow:
      "shadow-[0_20px_80px_rgba(248,113,113,0.15)]",
    icon: AlertTriangle,
    message:
      "Alguns sinais importantes de golpe passaram despercebidos.",
  };
};

const ResultsSection = ({
  score,
  total,
  answers,
  onRestart,
  onGoToEducation,
}: ResultsProps) => {
  const pct = Math.round((score / total) * 100);

  const level = getLevel(pct);

  const LevelIcon = level.icon;

  return (
    <section className="relative py-24 overflow-hidden bg-[#060816] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border
              backdrop-blur-xl
              mb-8
              ${level.bg}
              ${level.border}
            `}
          >
            <Sparkles
              className={`w-4 h-4 ${level.color}`}
            />

            <span
              className={`text-sm font-semibold ${level.color}`}
            >
              Resultado Final
            </span>
          </div>

          {/* Icon */}
          <div
            className={`
              relative
              w-28 h-28
              mx-auto mb-8
              rounded-[32px]
              border
              flex items-center justify-center
              backdrop-blur-2xl
              ${level.bg}
              ${level.border}
              ${level.glow}
            `}
          >
            <div className="absolute inset-0 rounded-[32px] bg-white/[0.02]" />

            <LevelIcon
              className={`relative z-10 w-12 h-12 ${level.color}`}
            />
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            {level.label}
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {level.message}
          </p>

          {/* Score Circle */}
          <div className="relative w-52 h-52 mx-auto">
            {/* Glow */}
            <div
              className={`
                absolute inset-0
                rounded-full
                blur-3xl
                opacity-30
                ${level.bg}
              `}
            />

            <svg
              className="relative z-10 w-full h-full -rotate-90"
              viewBox="0 0 120 120"
            >
              {/* Track */}
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="8"
              />

              {/* Progress */}
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke={
                  pct >= 80
                    ? "#34D399"
                    : pct >= 60
                    ? "#8B5CF6"
                    : "#F87171"
                }
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 52}
                initial={{
                  strokeDashoffset: 2 * Math.PI * 52,
                }}
                animate={{
                  strokeDashoffset:
                    2 *
                    Math.PI *
                    52 *
                    (1 - pct / 100),
                }}
                transition={{
                  duration: 1.6,
                  ease: "easeOut",
                }}
              />
            </svg>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-black tracking-tight">
                {pct}%
              </span>

              <span className="text-sm text-zinc-500 mt-1">
                {score}/{total} acertos
              </span>
            </div>
          </div>
        </motion.div>

        {/* REVIEW */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Revisão das respostas
              </h3>

              <p className="text-sm text-zinc-500">
                Veja onde acertou e onde pode melhorar.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {answers.map((answer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${
                    answer.selectedOption.isCorrect
                      ? `
                        border-emerald-400/15
                        bg-emerald-500/[0.05]
                        hover:border-emerald-400/30
                      `
                      : `
                        border-red-400/15
                        bg-red-500/[0.05]
                        hover:border-red-400/30
                      `
                  }
                `}
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${
                      answer.selectedOption.isCorrect
                        ? "bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]"
                        : "bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.10),transparent_55%)]"
                    }
                  `}
                />

                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`
                        w-10 h-10
                        rounded-2xl
                        flex items-center justify-center
                        border
                        ${
                          answer.selectedOption.isCorrect
                            ? "bg-emerald-500/10 border-emerald-400/20"
                            : "bg-red-500/10 border-red-400/20"
                        }
                      `}
                    >
                      <span
                        className={`font-bold ${
                          answer.selectedOption.isCorrect
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {answer.selectedOption.isCorrect
                          ? "✓"
                          : "✕"}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-bold text-white">
                          {answer.scenarioTitle}
                        </h4>

                        <span className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide bg-white/[0.04] text-zinc-400 border border-white/5">
                          {answer.scamType}
                        </span>
                      </div>

                      <p className="text-sm text-zinc-500">
                        Sua resposta:
                      </p>

                      <p className="text-sm text-zinc-300 mt-1">
                        {answer.selectedOption.text}
                      </p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {answer.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {pct < 80 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border border-yellow-400/15
              bg-yellow-500/[0.05]
              p-8
              mb-10
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.10),transparent_55%)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-300" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    Recomendações
                  </h4>

                  <p className="text-sm text-zinc-500">
                    Algumas ações para melhorar sua segurança.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Revise os golpes que você errou.",
                  "Ative a verificação em duas etapas.",
                  "Desconfie de mensagens urgentes.",
                  "Nunca compartilhe códigos recebidos.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ACTIONS */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Button
            onClick={onRestart}
            variant="outline"
            className="
              h-14
              rounded-2xl
              border-white/10
              bg-white/[0.03]
              hover:bg-white/[0.06]
              text-white
              text-sm font-semibold
              backdrop-blur-xl
            "
          >
            <RotateCcw className="w-4 h-4 mr-2" />

            Refazer Simulação
          </Button>

          <Button
            onClick={onGoToEducation}
            className="
              h-14
              rounded-2xl
              text-sm font-semibold
              bg-gradient-to-r
              from-primary
              to-secondary
              shadow-[0_10px_40px_rgba(124,58,237,0.35)]
              hover:opacity-90
            "
          >
            <BookOpen className="w-4 h-4 mr-2" />

            Revisar Conteúdo

            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;