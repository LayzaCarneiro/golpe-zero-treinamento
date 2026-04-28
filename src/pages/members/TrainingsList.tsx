import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MembersLayout from "@/components/members/MembersLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Sparkles } from "lucide-react";
import { seedTrainings } from "@/data/advancedTrainings";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

interface Training {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  estimated_minutes: number;
  content: any;
}

const levelColors: Record<string, string> = {
  iniciante: "bg-success/10 text-success",
  intermediario: "bg-warning/10 text-warning-foreground",
  avancado: "bg-destructive/10 text-destructive",
};

const TrainingsList = () => {
  const { isAdmin, isPending } = useAuth();
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase.from("advanced_trainings").select("*").order("created_at", { ascending: false });
    setTrainings((data as Training[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const seedDefaults = async () => {
    const rows = seedTrainings.map((t) => ({
      title: t.title,
      description: t.description,
      level: t.level,
      category: t.category,
      estimated_minutes: t.estimatedMinutes,
      content: { steps: t.steps },
    }));
    const { error } = await supabase.from("advanced_trainings").insert(rows);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Treinamentos carregados!" });
      load();
    }
  };

  if (isPending) {
    return (
      <MembersLayout>
        <Card>
          <CardHeader>
            <CardTitle>Aguardando aprovação</CardTitle>
            <CardDescription>Você terá acesso aos treinamentos assim que for aprovado.</CardDescription>
          </CardHeader>
        </Card>
      </MembersLayout>
    );
  }

  return (
    <MembersLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-3xl font-bold">Treinamentos avançados</h1>
            <p className="text-muted-foreground">Cenários multi-etapa, mídia rica e trilhas por nível.</p>
          </div>
          {isAdmin && trainings.length === 0 && (
            <Button onClick={seedDefaults} variant="outline">
              <Sparkles className="w-4 h-4 mr-2" /> Carregar treinamentos exemplo
            </Button>
          )}
        </div>

        {loading ? (
          <p className="text-muted-foreground">Carregando...</p>
        ) : trainings.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <GraduationCap className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Nenhum treinamento disponível ainda.</p>
              {isAdmin && (
                <Button onClick={seedDefaults} className="mt-4">
                  <Sparkles className="w-4 h-4 mr-2" /> Carregar exemplos
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trainings.map((t) => (
              <Card key={t.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs px-2 py-1 rounded font-semibold uppercase ${levelColors[t.level] ?? "bg-muted"}`}>
                      {t.level}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {t.estimated_minutes} min
                    </span>
                  </div>
                  <CardTitle className="text-lg">{t.title}</CardTitle>
                  <CardDescription>{t.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground flex-1">{t.description}</p>
                  <Button asChild className="mt-4 w-full">
                    <Link to={`/members/trainings/${t.id}`}>Iniciar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MembersLayout>
  );
};

export default TrainingsList;
