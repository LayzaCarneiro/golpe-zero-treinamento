import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle2, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AnswerRecord } from "@/components/WhatsAppSimulation";

interface ResultsProps {
  score: number;
  total: number;
  answers: AnswerRecord[];
  onRestart: () => void;
  onGoToEducation: () => void;
}

const getLevel = (pct: number) => {
  if (pct >= 80) return { label: "Excelente!", color: "text-success", bg: "bg-success/10", icon: Shield, message: "Você está bem preparado contra golpes digitais. Continue atento!" };
  if (pct >= 60) return { label: "Bom", color: "text-primary", bg: "bg-primary/10", icon: CheckCircle2, message: "Você tem bons conhecimentos, mas pode melhorar em alguns pontos." };
  return { label: "Atenção!", color: "text-destructive", bg: "bg-destructive/10", icon: AlertTriangle, message: "Você está vulnerável a golpes. Revise o conteúdo educativo!" };
};

const ResultsSection = ({ score, total, answers, onRestart, onGoToEducation }: ResultsProps) => {
  const pct = Math.round((score / total) * 100);
  const level = getLevel(pct);
  const LevelIcon = level.icon;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-10">
          <div className={`inline-flex p-6 rounded-full ${level.bg} mb-6`}>
            <LevelIcon className={`w-12 h-12 ${level.color}`} />
          </div>
          <h2 className="text-3xl font-bold mb-2">{level.label}</h2>
          <p className="text-muted-foreground mb-6">{level.message}</p>

          {/* Score circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
              <motion.circle
                cx="60" cy="60" r="52" fill="none"
                stroke={pct >= 80 ? "hsl(var(--success))" : pct >= 60 ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - pct / 100) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold">{pct}%</span>
              <span className="text-sm text-muted-foreground">{score}/{total} acertos</span>
            </div>
          </div>
        </motion.div>

        {/* Answer review */}
        <div className="space-y-4 mb-10">
          <h3 className="text-xl font-bold">Revisão das Respostas</h3>
          {answers.map((answer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-xl border ${
                answer.selectedOption.isCorrect
                  ? "bg-success/5 border-success/20"
                  : "bg-destructive/5 border-destructive/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-bold ${answer.selectedOption.isCorrect ? "text-success" : "text-destructive"}`}>
                  {answer.selectedOption.isCorrect ? "✓" : "✗"}
                </span>
                <span className="font-semibold text-sm">{answer.scenarioTitle}</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{answer.scamType}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Sua resposta:</strong> {answer.selectedOption.text}
              </p>
              <p className="text-xs text-muted-foreground">{answer.explanation}</p>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        {pct < 80 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 rounded-xl bg-warning/10 border border-warning/20 mb-8"
          >
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-warning" />
              Recomendações
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Revise a seção educativa sobre os tipos de golpe que você errou</li>
              <li>• Ative a verificação em duas etapas no seu WhatsApp</li>
              <li>• Compartilhe este quiz com sua equipe de trabalho</li>
              <li>• Desconfie sempre de mensagens com urgência ou pedidos de dinheiro</li>
            </ul>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={onRestart} variant="outline" className="flex-1 py-5 rounded-xl font-semibold">
            <RotateCcw className="w-4 h-4 mr-2" />
            Refazer Simulação
          </Button>
          <Button onClick={onGoToEducation} className="flex-1 py-5 rounded-xl font-semibold bg-gradient-hero text-primary-foreground">
            <BookOpen className="w-4 h-4 mr-2" />
            Revisar Conteúdo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
