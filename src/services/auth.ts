import { User } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client";

/**
 * Authenticate user with email and password
 */
export async function loginWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { success: true, data: data.user };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Register new user
 */
export async function registerUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return { success: true, data: data.user };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Logout current user
 */
export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
