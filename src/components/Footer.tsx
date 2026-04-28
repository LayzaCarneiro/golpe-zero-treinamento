import { Shield, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 bg-muted/30">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="p-1 rounded-md bg-gradient-hero">
          <Shield className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold">SecureLine</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Plataforma educativa para prevenção de golpes no WhatsApp.
      </p>
      <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
        Feito com <Heart className="w-3 h-3 text-destructive" /> para proteger pequenos negócios
      </p>
      <p className="text-xs text-muted-foreground mt-4">
        ⚠️ Este é um ambiente de simulação educativa. Nenhum dado sensível é coletado.
      </p>
    </div>
  </footer>
);

export default Footer;
