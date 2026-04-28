// Treinamentos avançados pré-cadastrados — usados como seed e fallback.
// Estrutura: cada training tem múltiplas etapas (steps) que podem ramificar
// com base nas respostas, e suportam mídia (imagem, áudio, vídeo).

export type StepMedia = {
  type: "image" | "audio" | "video";
  url: string;
  caption?: string;
};

export type StepOption = {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
  nextStepId?: string; // ramificação opcional
};

export type TrainingStep = {
  id: string;
  prompt: string;
  context?: string;
  media?: StepMedia;
  options: StepOption[];
};

export type AdvancedTraining = {
  id: string;
  title: string;
  description: string;
  level: "iniciante" | "intermediario" | "avancado";
  category: string;
  estimatedMinutes: number;
  steps: TrainingStep[];
};

export const seedTrainings: AdvancedTraining[] = [
  {
    id: "pix-falso-suporte",
    title: "Falso suporte do banco pedindo PIX",
    description: "Cenário multi-etapa simulando contato do golpista por WhatsApp se passando por gerente.",
    level: "intermediario",
    category: "PIX / Bancário",
    estimatedMinutes: 8,
    steps: [
      {
        id: "s1",
        prompt: "Você recebe esta mensagem. O que faz?",
        context: "Remetente: '+55 11 95555-1234' — não está em seus contatos.",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
          caption: "Print da conversa recebida",
        },
        options: [
          { id: "a", label: "Respondo confirmando meus dados", isCorrect: false, feedback: "Nunca confirme dados a partir de um contato não verificado.", nextStepId: "s2-erro" },
          { id: "b", label: "Ligo para o número oficial impresso no cartão", isCorrect: true, feedback: "Excelente! Sempre busque o canal oficial.", nextStepId: "s2-ok" },
          { id: "c", label: "Bloqueio o número e ignoro", isCorrect: false, feedback: "Bloquear é bom, mas você ainda precisa verificar se há fraude em curso.", nextStepId: "s2-ok" },
        ],
      },
      {
        id: "s2-ok",
        prompt: "Ao ligar pelo canal oficial, o atendente confirma que NÃO houve contato. Próximo passo?",
        options: [
          { id: "a", label: "Reporto o número como spam no WhatsApp e ao banco", isCorrect: true, feedback: "Perfeito. Reportar ajuda a proteger outras pessoas." },
          { id: "b", label: "Apago a conversa e esqueço", isCorrect: false, feedback: "Apagar pode descartar evidências úteis para denúncia." },
        ],
      },
      {
        id: "s2-erro",
        prompt: "Você confirmou seus dados. O 'gerente' agora pede um PIX 'de segurança'. O que fazer?",
        options: [
          { id: "a", label: "Faço o PIX para 'proteger' a conta", isCorrect: false, feedback: "É exatamente isso que o golpista quer. Banco nunca pede PIX." },
          { id: "b", label: "Paro tudo e ligo para o banco pelo número oficial", isCorrect: true, feedback: "Boa recuperação! Interromper é a melhor atitude." },
        ],
      },
    ],
  },
  {
    id: "audio-falso",
    title: "Áudio suspeito de 'familiar' pedindo dinheiro",
    description: "Treinamento avançado com análise de áudio falso (deepfake/clonagem).",
    level: "avancado",
    category: "Engenharia social",
    estimatedMinutes: 10,
    steps: [
      {
        id: "s1",
        prompt: "Você recebe um áudio de um número desconhecido dizendo ser seu sobrinho. Qual o primeiro sinal de alerta?",
        media: {
          type: "audio",
          url: "https://www.soundjay.com/buttons/sounds/beep-07a.mp3",
          caption: "Áudio recebido (simulação)",
        },
        options: [
          { id: "a", label: "A voz parecida é prova suficiente", isCorrect: false, feedback: "Vozes podem ser clonadas com IA hoje em dia." },
          { id: "b", label: "Número desconhecido + urgência financeira", isCorrect: true, feedback: "Correto. Combinação clássica de golpe." },
          { id: "c", label: "Não há sinal de alerta", isCorrect: false, feedback: "Sempre desconfie de pedidos urgentes de dinheiro." },
        ],
      },
      {
        id: "s2",
        prompt: "Como confirmar com segurança se é mesmo seu familiar?",
        options: [
          { id: "a", label: "Ligo para o número antigo que tenho salvo", isCorrect: true, feedback: "Perfeito. Use canais já conhecidos." },
          { id: "b", label: "Pergunto pelo WhatsApp mesmo", isCorrect: false, feedback: "O golpista responderá qualquer pergunta convincentemente." },
        ],
      },
    ],
  },
];
