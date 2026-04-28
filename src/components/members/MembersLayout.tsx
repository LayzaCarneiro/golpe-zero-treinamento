import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield, LogOut, LayoutDashboard, GraduationCap, Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const MembersLayout = ({ children }: { children: ReactNode }) => {
  const { user, signOut, isAdmin, isPending } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navItems = [
    { to: "/members", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/members/trainings", label: "Treinamentos", icon: GraduationCap },
    ...(isAdmin ? [{ to: "/members/admin", label: "Admin", icon: Users }] : []),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/members" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">SecureLine</span>
            <span className="text-xs px-2 py-0.5 rounded bg-accent/20 text-accent-foreground font-semibold">
              {isAdmin ? "ADMIN" : isPending ? "PENDENTE" : "MEMBRO"}
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <nav className="container mx-auto px-4 flex gap-1 overflow-x-auto">
          {navItems.map(({ to, label, icon: Icon, end }) => {
            const active = end ? pathname === to : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  active
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default MembersLayout;
