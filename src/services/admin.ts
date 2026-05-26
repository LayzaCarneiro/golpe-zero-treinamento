// Admin metrics placeholders — backend tables not yet defined.
export async function fetchAdminMetrics() {
  return { total_users: 0, active_trainings: 0 };
}

export async function fetchPendingApprovals(): Promise<Array<{ id: string; email: string }>> {
  return [];
}
