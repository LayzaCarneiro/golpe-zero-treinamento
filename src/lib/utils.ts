import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QuizResult } from "@/types/training";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate percentage from score and total
 */
export function calculatePercentage(score: number, total: number): number {
  return Math.round((score / total) * 100);
}

/**
 * Calculate quiz result level based on percentage
 */
export function getQuizLevel(percentage: number): QuizResult["level"] {
  if (percentage >= 80) return "excelente";
  if (percentage >= 60) return "bom";
  return "atencao";
}
