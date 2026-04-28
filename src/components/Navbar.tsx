import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate: (section: "home" | "education" | "simulation") => void;
  currentView: string;
}

const Navbar = ({ onNavigate, currentView }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Início", section: "home" as const },
    { label: "Aprender", section: "education" as const },
    { label: "Simulação", section: "simulation" as const },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-hero">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">SecureLine</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.section}
              onClick={() => onNavigate(link.section)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === link.section
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button
          onClick={() => onNavigate("simulation")}
          size="sm"
          className="hidden md:flex bg-gradient-hero text-primary-foreground font-semibold rounded-lg"
        >
          Iniciar Quiz
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-background p-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.section}
              onClick={() => { onNavigate(link.section); setMobileOpen(false); }}
              className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
