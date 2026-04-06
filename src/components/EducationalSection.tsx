import { motion } from "framer-motion";
import {
  MessageSquareWarning,
  Link2Off,
  UserX,
  ShieldAlert,
  Eye,
  BookOpen,
  PhoneOff,
  Lock,
} from "lucide-react";

const scamTypes = [
  {
    icon: UserX,
    title: "Falso Suporte Técnico",
    description: "Criminosos se passam por funcionários de bancos ou empresas para roubar seus dados.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Link2Off,
    title: "Links Maliciosos",
    description: "Mensagens com links que instalam vírus ou redirecionam para sites falsos.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: MessageSquareWarning,
    title: "Phishing por Mensagem",
    description: "Mensagens falsas que imitam promoções, cobranças ou notificações para enganar você.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldAlert,
    title: "Clonagem de WhatsApp",
    description: "Golpistas clonam seu número e pedem dinheiro aos seus contatos.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const warningSignals = [
  { icon: Eye, text: "Mensagens com senso de urgência extrema" },
  { icon: BookOpen, text: "Erros de português e formatação estranha" },
  { icon: Link2Off, text: "Links encurtados ou com domínios suspeitos" },
  { icon: PhoneOff, text: "Pedidos para não ligar ou confirmar por outro meio" },
  { icon: UserX, text: "Contato desconhecido se passando por alguém" },
  { icon: Lock, text: "Solicitação de códigos de verificação" },
];

const preventionTips = [
  "Ative a verificação em duas etapas no WhatsApp",
  "Nunca compartilhe códigos de verificação",
  "Desconfie de ofertas muito boas para ser verdade",
  "Confirme a identidade por ligação antes de transferir dinheiro",
  "Mantenha o WhatsApp e celular sempre atualizados",
  "Não clique em links de remetentes desconhecidos",
];

const afterScam = [
  "Registre um Boletim de Ocorrência (B.O.)",
  "Entre em contato com seu banco imediatamente",
  "Avise amigos e familiares sobre a fraude",
  "Denuncie o número no WhatsApp",
  "Altere todas as senhas comprometidas",
];

const EducationalSection = () => {
  return (
    <section id="educacional" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Conteúdo Educativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça os golpes mais comuns
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entender como os golpistas agem é o primeiro passo para se proteger.
          </p>
        </motion.div>

        {/* Scam Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {scamTypes.map((scam, i) => (
            <motion.div
              key={scam.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl ${scam.bg} mb-4`}>
                <scam.icon className={`w-6 h-6 ${scam.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{scam.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{scam.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Warning Signs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">🚨 Sinais de Alerta</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {warningSignals.map((signal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card"
              >
                <div className="p-2 rounded-lg bg-warning/10">
                  <signal.icon className="w-5 h-5 text-warning" />
                </div>
                <span className="text-sm font-medium">{signal.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prevention & After Scam */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="inline-flex p-3 rounded-xl bg-success/10 mb-4">
              <Lock className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-4">Como se Prevenir</h3>
            <ul className="space-y-3">
              {preventionTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-success flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="inline-flex p-3 rounded-xl bg-destructive/10 mb-4">
              <ShieldAlert className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold mb-4">Caiu em um Golpe?</h3>
            <ul className="space-y-3">
              {afterScam.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-destructive/10 text-destructive flex-shrink-0 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
