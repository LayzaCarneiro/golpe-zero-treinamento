import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MembersLayout from "@/components/members/MembersLayout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target, Clock, AlertCircle } from "lucide-react";

interface Attempt {
  id: string;
  training_id: string;
  score: number;
  total: number;
  percentage: number;
  completed_at: string;
}

const MembersDashboard = () => {
  const { user, isPending } = useAuth();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [trainingTitles, setTrainingTitles] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data: atts } = await supabase
        .from("training_attempts")
        .select("*")
        .order("completed_at", { ascending: false });

      setAttempts((atts as Attempt[]) ?? []);

      if (atts && atts.length > 0) {
        const ids = [...new Set(atts.map((a) => a.training_id))];
        const { data: trainings } = await supabase
          .from("advanced_trainings")
          .select("id, title")
          .in("id", ids);
        setTrainingTitles(Object.fromEntries((trainings ?? []).map((t) => [t.id, t.title])));
      }
      setLoading(false);
    })();
  }, [user]);

  const totalAttempts = attempts.length;
  const avgScore = totalAttempts ? attempts.reduce((s, a) => s + Number(a.percentage), 0) / totalAttempts : 0;
  const bestScore = totalAttempts ? Math.max(...attempts.map((a) => Number(a.percentage))) : 0;
  const uniqueTrainings = new Set(attempts.map((a) => a.training_id)).size;

  if (isPending) {
    return (
      <MembersLayout>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-warning" />
              <CardTitle>Aguardando aprovação</CardTitle>
            </div>
            <CardDescription>
              Sua conta foi criada com sucesso. Um administrador precisa aprovar seu acesso para que você possa
              acessar os treinamentos avançados e o dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Você receberá acesso assim que for aprovado. Enquanto isso, explore o conteúdo público.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/">Voltar ao site</Link>
            </Button>
          </CardContent>
        </Card>
      </MembersLayout>
    );
  }

  return (
    <MembersLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Seu Dashboard</h1>
          <p className="text-muted-foreground">Acompanhe sua evolução nos treinamentos.</p>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Carregando...</p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={Target} label="Tentativas" value={totalAttempts.toString()} />
              <StatCard icon={TrendingUp} label="Média de acertos" value={`${avgScore.toFixed(0)}%`} />
              <StatCard icon={Award} label="Melhor resultado" value={`${bestScore.toFixed(0)}%`} />
              <StatCard icon={Clock} label="Treinamentos únicos" value={uniqueTrainings.toString()} />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Histórico recente</CardTitle>
                <CardDescription>Suas últimas tentativas.</CardDescription>
              </CardHeader>
              <CardContent>
                {attempts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Você ainda não completou nenhum treinamento.</p>
                    <Button asChild>
                      <Link to="/members/trainings">Começar agora</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {attempts.slice(0, 10).map((a) => (
                      <div key={a.id} className="flex items-center gap-4 p-3 rounded-lg border border-border">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {trainingTitles[a.training_id] ?? "Treinamento"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(a.completed_at).toLocaleString("pt-BR")}
                          </p>
                        </div>
                        <div className="w-32">
                          <Progress value={Number(a.percentage)} />
                          <p className="text-xs text-right mt-1 font-semibold">
                            {a.score}/{a.total} ({Number(a.percentage).toFixed(0)}%)
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </MembersLayout>
  );
};

const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MembersDashboard;
