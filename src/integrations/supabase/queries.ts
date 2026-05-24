import { supabase } from "./client";

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
  if (error) throw error;
  return data;
}

export async function getTrainingProgress(userId: string) {
  const { data, error } = await supabase.from("training_progress").select("*").eq("user_id", userId);
  if (error) throw error;
  return data ?? [];
}
