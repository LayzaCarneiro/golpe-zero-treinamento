import { useEffect, useState } from "react";
import { fetchTrainings } from "@/services/trainings";
import type { Training } from "@/types/trainings";

export function useTrainings() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrainings()
      .then(setTrainings)
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return { trainings, loading, error };
}
