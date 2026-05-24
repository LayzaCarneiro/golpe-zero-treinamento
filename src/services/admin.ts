import { supabase } from "@/integrations/supabase/client";

export async function fetchAdminMetrics() {
  const response = await supabase.from("admin_metrics").select("*").limit(1).single();
  return response.data ?? { total_users: 0, active_trainings: 0 };
}

export async function fetchPendingApprovals() {
  const { data, error } = await supabase.from("pending_approvals").select("*");
  if (error) {
    throw error;
  }
  return data ?? [];
}
