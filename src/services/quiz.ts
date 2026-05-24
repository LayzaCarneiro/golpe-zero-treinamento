import { AnswerRecord } from "@/components/public/WhatsAppSimulation";
import { QuizResult } from "@/types/training";
import { calculatePercentage, getQuizLevel } from "@/lib/utils";

/**
 * Process quiz answers and generate result
 */
export function processQuizAnswers(
  answers: AnswerRecord[],
  totalScenarios: number
): QuizResult {
  const score = answers.filter((a) => a.selectedOption.isCorrect).length;
  const percentage = calculatePercentage(score, totalScenarios);
  const level = getQuizLevel(percentage);

  return {
    score,
    total: totalScenarios,
    percentage,
    answers,
    level,
    completedAt: new Date(),
  };
}
