export interface User {
  id: string;
  email: string;
  role: "admin" | "member" | "guest";
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
