export const APP_NAME = "SecureLine";
export const APP_DESCRIPTION = "Plataforma educativa para prevenção de golpes no WhatsApp";

export const ROUTES = {
  HOME: "/",
  AUTH: "/auth",
  MEMBERS: "/members",
  TRAININGS: "/members/trainings",
  TRAINING_PLAYER: "/members/trainings/:id",
  ADMIN: "/members/admin",
} as const;

export const QUIZ_CONFIG = {
  TOTAL_SCENARIOS: 6,
  MIN_PASS_SCORE: 60,
  GOOD_SCORE: 80,
} as const;

export const ERROR_MESSAGES = {
  AUTHENTICATION_REQUIRED: "Autenticação necessária para acessar esta página",
  UNAUTHORIZED: "Você não tem permissão para acessar este recurso",
  NOT_FOUND: "Recurso não encontrado",
  INTERNAL_ERROR: "Erro interno do servidor",
} as const;
