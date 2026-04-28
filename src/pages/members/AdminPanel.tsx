import { useEffect, useState } from "react";
import MembersLayout from "@/components/members/MembersLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { Check, X, ShieldCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface UserRow {
  id: string;
  full_name: string | null;
  email: string;
  created_at: string;
  roles: string[];
}

const AdminPanel = () => {
  const { user, refreshRoles } = useAuth();
  const [rows, setRows] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, full_name, email, created_at")
      .order("created_at", { ascending: false });

    const { data: rolesData } = await supabase.from("user_roles").select("user_id, role");
    const rolesByUser: Record<string, string[]> = {};
    (rolesData ?? []).forEach((r: any) => {
      rolesByUser[r.user_id] = [...(rolesByUser[r.user_id] ?? []), r.role];
    });

    setRows(
      (profiles ?? []).map((p: any) => ({
        ...p,
        roles: rolesByUser[p.id] ?? [],
      })),
    );
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const setRole = async (userId: string, newRole: "subscriber" | "admin", removeRoles: string[]) => {
    // Remover roles antigas
    if (removeRoles.length > 0) {
      await supabase.from("user_roles").delete().eq("user_id", userId).in("role", removeRoles as any);
    }
    // Adicionar nova
    const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: newRole });
    if (error && !error.message.includes("duplicate")) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Atualizado!" });
    if (userId === user?.id) await refreshRoles();
    load();
  };

  const reject = async (userId: string) => {
    await supabase.from("user_roles").delete().eq("user_id", userId);
    await supabase.from("profiles").delete().eq("id", userId);
    toast({ title: "Usuário removido" });
    load();
  };

  return (
    <MembersLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-primary" /> Painel admin
          </h1>
          <p className="text-muted-foreground">Aprove novos cadastros e gerencie permissões.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usuários</CardTitle>
            <CardDescription>Pendentes precisam ser aprovados para acessar o conteúdo.</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-muted-foreground">Carregando...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => {
                    const isPending = r.roles.includes("pending") && !r.roles.includes("subscriber") && !r.roles.includes("admin");
                    const isSubscriber = r.roles.includes("subscriber");
                    const isAdmin = r.roles.includes("admin");
                    return (
                      <TableRow key={r.id}>
                        <TableCell>{r.full_name || "—"}</TableCell>
                        <TableCell className="text-sm">{r.email}</TableCell>
                        <TableCell>
                          <span
                            className={`text-xs px-2 py-1 rounded font-semibold ${
                              isAdmin
                                ? "bg-primary/10 text-primary"
                                : isSubscriber
                                ? "bg-success/10 text-success"
                                : "bg-warning/10 text-warning-foreground"
                            }`}
                          >
                            {isAdmin ? "Admin" : isSubscriber ? "Assinante" : "Pendente"}
                          </span>
                        </TableCell>
                        <TableCell className="text-right space-x-1">
                          {isPending && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => setRole(r.id, "subscriber", ["pending"])}>
                                <Check className="w-4 h-4 mr-1" /> Aprovar
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => reject(r.id)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          {isSubscriber && !isAdmin && (
                            <Button size="sm" variant="outline" onClick={() => setRole(r.id, "admin", ["subscriber", "pending"])}>
                              Tornar admin
                            </Button>
                          )}
                          {isAdmin && r.id !== user?.id && (
                            <Button size="sm" variant="ghost" onClick={() => setRole(r.id, "subscriber", ["admin"])}>
                              Remover admin
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Primeiro admin</CardTitle>
            <CardDescription>
              Como o cadastro inicial cria todos como "pendente", você pode se promover ao primeiro admin abaixo (apenas
              enquanto não houver nenhum admin no sistema).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PromoteSelf onDone={load} />
          </CardContent>
        </Card>
      </div>
    </MembersLayout>
  );
};

const PromoteSelf = ({ onDone }: { onDone: () => void }) => {
  const { user, refreshRoles } = useAuth();
  const [loading, setLoading] = useState(false);

  const promote = async () => {
    if (!user) return;
    setLoading(true);
    const { count } = await supabase.from("user_roles").select("*", { count: "exact", head: true }).eq("role", "admin");
    if ((count ?? 0) > 0) {
      toast({ title: "Já existe admin", description: "Peça para um admin existente promover você.", variant: "destructive" });
      setLoading(false);
      return;
    }
    await supabase.from("user_roles").delete().eq("user_id", user.id).in("role", ["pending", "subscriber"] as any);
    await supabase.from("user_roles").insert({ user_id: user.id, role: "admin" });
    toast({ title: "Você é admin!" });
    await refreshRoles();
    onDone();
    setLoading(false);
  };

  return (
    <Button onClick={promote} disabled={loading} variant="outline">
      Tornar-me o primeiro admin
    </Button>
  );
};

export default AdminPanel;
