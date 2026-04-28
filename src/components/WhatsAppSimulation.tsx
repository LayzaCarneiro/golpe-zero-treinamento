import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import scenarios, { QuizScenario, QuizOption } from "@/data/quizScenarios";

interface SimulationProps {
  onComplete: (score: number, total: number, answers: AnswerRecord[]) => void;
}

export interface AnswerRecord {
  scenarioId: number;
  scenarioTitle: string;
  scamType: string;
  selectedOption: QuizOption;
  explanation: string;
}

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-whatsapp-bubble-received rounded-2xl rounded-tl-sm w-fit shadow-sm">
    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: "0s" }} />
    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: "0.2s" }} />
    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: "0.4s" }} />
  </div>
);

const WhatsAppSimulation = ({ onComplete }: SimulationProps) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<QuizOption | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const scenario = scenarios[currentScenario];

  useEffect(() => {
    setVisibleMessages(0);
    setShowOptions(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsTyping(true);

    let timeout: NodeJS.Timeout;
    const showMessagesSequentially = (index: number) => {
      if (index < scenario.messages.length) {
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(index + 1);
          if (index + 1 < scenario.messages.length) {
            setTimeout(() => showMessagesSequentially(index + 1), 300);
          } else {
            setTimeout(() => setShowOptions(true), 500);
          }
        }, 800 + Math.random() * 400);
      }
    };

    setTimeout(() => showMessagesSequentially(0), 500);
    return () => clearTimeout(timeout);
  }, [currentScenario, scenario.messages.length]);

  const handleAnswer = (option: QuizOption) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    setAnswers((prev) => [
      ...prev,
      {
        scenarioId: scenario.id,
        scenarioTitle: scenario.title,
        scamType: scenario.scamType,
        selectedOption: option,
        explanation: scenario.explanation,
      },
    ]);
  };

  const handleNext = () => {
    if (currentScenario + 1 >= scenarios.length) {
      const score = answers.filter((a) => a.selectedOption.isCorrect).length;
      onComplete(score, scenarios.length, answers);
    } else {
      setCurrentScenario((prev) => prev + 1);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Progress */}
          <div className="mb-6 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Cenário {currentScenario + 1} de {scenarios.length}
            </span>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-hero rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentScenario + (showFeedback ? 1 : 0)) / scenarios.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-4 px-4 py-2 rounded-lg bg-warning/10 text-center">
            <p className="text-xs text-warning-foreground font-medium">
              ⚠️ Simulação educativa — as mensagens abaixo são fictícias
            </p>
          </div>

          {/* WhatsApp Phone Frame */}
          <div className="bg-foreground/5 rounded-3xl overflow-hidden shadow-elevated border border-border">
            {/* Header */}
            <div className="bg-whatsapp-header px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-whatsapp-bg flex items-center justify-center text-lg">
                {scenario.contactAvatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">{scenario.contactName}</p>
                <p className="text-xs text-primary-foreground/70">online</p>
              </div>
              <div className="ml-auto px-2 py-0.5 rounded bg-primary-foreground/20">
                <span className="text-xs font-medium text-primary-foreground">{scenario.scamType}</span>
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-whatsapp-bg min-h-[300px] p-4 space-y-2">
              <AnimatePresence>
                {scenario.messages.slice(0, visibleMessages).map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex"
                  >
                    <div className="bg-whatsapp-bubble-received rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] shadow-sm">
                      <p className="text-sm text-foreground whitespace-pre-wrap break-all">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-secondary" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && visibleMessages < scenario.messages.length && (
                <TypingIndicator />
              )}
            </div>
          </div>

          {/* Question & Options */}
          <AnimatePresence>
            {showOptions && !showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-3"
              >
                <h3 className="text-lg font-bold text-center">{scenario.question}</h3>
                <div className="space-y-2">
                  {scenario.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left px-5 py-4 rounded-xl bg-card shadow-card border border-border hover:border-primary hover:shadow-elevated transition-all text-sm font-medium"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && selectedAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-4"
              >
                <div
                  className={`p-5 rounded-xl ${
                    selectedAnswer.isCorrect
                      ? "bg-success/10 border border-success/30"
                      : "bg-destructive/10 border border-destructive/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {selectedAnswer.isCorrect ? (
                      <Check className="w-5 h-5 text-success" />
                    ) : (
                      <span className="text-destructive text-lg">✗</span>
                    )}
                    <span className={`font-bold ${selectedAnswer.isCorrect ? "text-success" : "text-destructive"}`}>
                      {selectedAnswer.isCorrect ? "Resposta Correta!" : "Resposta Incorreta"}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">{selectedAnswer.feedback}</p>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm font-semibold text-primary mb-1">💡 Explicação</p>
                  <p className="text-sm text-muted-foreground">{scenario.explanation}</p>
                </div>

                <Button onClick={handleNext} className="w-full bg-gradient-hero text-primary-foreground py-5 rounded-xl font-semibold">
                  {currentScenario + 1 >= scenarios.length ? "Ver Resultados" : "Próximo Cenário"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSimulation;
