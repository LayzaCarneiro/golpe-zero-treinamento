import {
  useEffect,
  useState,
} from "react";

import MembersLayout from "@/components/members/MembersLayout";

import { supabase } from "@/integrations/supabase/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ShieldCheck } from "lucide-react";

interface UserRow {
  id: string;

  full_name: string | null;

  email: string;

  created_at: string;

  role: "admin" | "subscriber";
}

const AdminPanel = () => {
  const [rows, setRows] = useState<
    UserRow[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const load = async () => {
    setLoading(true);

    const {
      data,
      error,
    } = await supabase.auth.admin.listUsers();

    if (!error) {
      setRows(
        data.users.map((u) => ({
          id: u.id,

          full_name:
            u.user_metadata
              ?.full_name || null,

          email: u.email || "—",

          created_at:
            u.created_at,

          role:
            u.user_metadata
              ?.role ||
            "subscriber",
        }))
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <MembersLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <h1
            className="
              text-3xl
              font-black
              flex items-center gap-3
            "
          >
            <ShieldCheck
              className="
                w-7 h-7
                text-primary
              "
            />

            Painel admin
          </h1>

          <p className="text-zinc-400 mt-1">
            Gerencie os usuários da
            plataforma.
          </p>
        </div>

        {/* USERS */}
        <Card
          className="
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >
          <CardHeader>
            <CardTitle>
              Usuários cadastrados
            </CardTitle>

            <CardDescription>
              Lista de acessos da
              plataforma.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {loading ? (
              <p className="text-zinc-400">
                Carregando...
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      Nome
                    </TableHead>

                    <TableHead>
                      E-mail
                    </TableHead>

                    <TableHead>
                      Cargo
                    </TableHead>

                    <TableHead>
                      Criado em
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {rows.map((r) => {
                    const isAdmin =
                      r.role === "admin";

                    return (
                      <TableRow
                        key={r.id}
                      >
                        <TableCell>
                          {r.full_name ||
                            "—"}
                        </TableCell>

                        <TableCell>
                          {r.email}
                        </TableCell>

                        <TableCell>
                          <span
                            className={`
                              text-xs
                              px-3 py-1
                              rounded-full
                              font-semibold
                              ${
                                isAdmin
                                  ? "bg-violet-500/15 text-violet-300"
                                  : "bg-cyan-500/15 text-cyan-300"
                              }
                            `}
                          >
                            {isAdmin
                              ? "ADMIN"
                              : "MEMBRO"}
                          </span>
                        </TableCell>

                        <TableCell className="text-zinc-400 text-sm">
                          {new Date(
                            r.created_at
                          ).toLocaleDateString(
                            "pt-BR"
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
      </div>
    </MembersLayout>
  );
};

export default AdminPanel;