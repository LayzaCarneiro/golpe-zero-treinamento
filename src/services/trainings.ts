import type { Training } from "@/types/trainings";

const mockTrainings: Training[] = [
  {
    id: "1",
    title: "Identificando golpes no WhatsApp",
    description: "Aprenda os sinais mais comuns de fraudes e mensagens suspeitas.",
    duration: 12,
    type: "interactive",
    completedBy: [],
  },
  {
    id: "2",
    title: "Proteja sua empresa com boas práticas",
    description: "Checklists e ações rápidas para reduzir riscos no dia a dia.",
    duration: 20,
    type: "video",
    completedBy: [],
  },
];

export async function fetchTrainings(): Promise<Training[]> {
  return new Promise((resolve) => setTimeout(() => resolve(mockTrainings), 200));
}

export async function getTrainingById(id: string): Promise<Training | null> {
  const training = mockTrainings.find((item) => item.id === id);
  return training ?? null;
}
