import { AnswerRecord } from "@/components/public/WhatsAppSimulation";

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  answers: AnswerRecord[];
  level: "excelente" | "bom" | "atencao";
  completedAt: Date;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: "video" | "interactive" | "quiz";
  completedBy?: string[];
}
