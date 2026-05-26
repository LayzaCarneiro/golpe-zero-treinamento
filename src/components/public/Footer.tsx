import { Heart, ShieldCheck } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-[#060816] overflow-hidden">
    {/* Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.10),transparent_35%)]" />

    <div className="container relative z-10 mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/logo.svg"
            alt="SecureLine"
            className="w-8 h-8"
          />

          <span className="text-lg font-bold text-white">
            SecureLine
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 mb-3 max-w-md leading-relaxed">
          Plataforma educativa para prevenção de golpes digitais
          e conscientização sobre segurança no WhatsApp.
        </p>

        {/* Love */}
        <p className="text-xs text-zinc-500 flex items-center gap-1.5 mb-5">
          Feito com
          <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
          para proteger pequenos negócios
        </p>

        {/* Warning */}
        <div
          className="
            flex items-center gap-2
            rounded-full
            border border-white/10
            bg-white/[0.03]
            px-4 py-2
            text-xs text-zinc-400
          "
        >
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />

          <span>
            Ambiente de simulação educativa. Nenhum dado sensível é coletado.
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;