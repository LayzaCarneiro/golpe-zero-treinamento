export interface QuizOption {
  id: number;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface QuizScenario {
  id: number;
  title: string;
  scamType: string;
  contactName: string;
  contactAvatar: string;
  question: string;
  explanation: string;
  messages: Array<{ id: string; text: string; time: string }>;
  options: QuizOption[];
}
