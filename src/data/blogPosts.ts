export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  icon: string;
  content: string;
  references: { label: string; url: string }[];
  media?: { type: "image" | "video" | "link"; url: string; caption?: string }[];
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "falso-suporte",
    title: "Falso Suporte Técnico: Como Funciona e Como se Proteger",
    summary: "Criminosos se passam por funcionários de bancos ou empresas para roubar seus dados pessoais e financeiros.",
    category: "Tipos de Golpe",
    icon: "UserX",
    content: `O golpe do falso suporte técnico é uma das fraudes mais comuns no WhatsApp. Os criminosos entram em contato se passando por funcionários de bancos, operadoras de telefonia ou grandes empresas de tecnologia.

**Como funciona:**
- O golpista envia uma mensagem dizendo que há um problema com sua conta
- Solicita dados pessoais como CPF, senha ou código de verificação
- Pode pedir que você instale um aplicativo de "suporte remoto"
- Usa linguagem profissional para parecer legítimo

**Sinais de alerta:**
- Bancos nunca pedem senha ou código por WhatsApp
- Desconfie de contatos não solicitados
- Verifique sempre o número oficial da empresa
- Nunca instale apps por solicitação de desconhecidos`,
    references: [
      { label: "Guia do Banco Central sobre fraudes", url: "https://www.bcb.gov.br/cidadaniafinanceira" },
      { label: "CERT.br - Golpes na Internet", url: "https://cartilha.cert.br/golpes/" },
    ],
    media: [
      { type: "link", url: "https://cartilha.cert.br/golpes/", caption: "Cartilha de Segurança do CERT.br" },
    ],
    readTime: "4 min",
    date: "2024-12-01",
  },
  {
    id: "links-maliciosos",
    title: "Links Maliciosos: Identificando Armadilhas Digitais",
    summary: "Mensagens com links que instalam vírus ou redirecionam para sites falsos projetados para roubar informações.",
    category: "Tipos de Golpe",
    icon: "Link2Off",
    content: `Links maliciosos são uma das ferramentas favoritas dos golpistas. Eles podem chegar por mensagens de contatos conhecidos (com WhatsApp clonado) ou números desconhecidos.

**Tipos de links perigosos:**
- Links encurtados (bit.ly, tinyurl) que escondem o destino real
- URLs que imitam sites conhecidos (ex: "banc0dobrasil.com")
- Links para download de aplicativos fora das lojas oficiais
- Formulários falsos que imitam páginas de login

**Como se proteger:**
- Passe o dedo sobre o link antes de clicar para ver o URL completo
- Verifique se o site usa HTTPS (cadeado na barra)
- Na dúvida, acesse o site diretamente pelo navegador
- Mantenha um antivírus atualizado no celular`,
    references: [
      { label: "SaferNet - Dicas de Segurança", url: "https://new.safernet.org.br/" },
      { label: "Google Phishing Quiz", url: "https://phishingquiz.withgoogle.com/" },
    ],
    media: [
      { type: "video", url: "https://www.youtube.com/embed/XBkzo6xnSxE", caption: "Como identificar links falsos" },
    ],
    readTime: "5 min",
    date: "2024-11-15",
  },
  {
    id: "phishing-mensagem",
    title: "Phishing por Mensagem: Promoções e Cobranças Falsas",
    summary: "Mensagens falsas que imitam promoções, cobranças ou notificações para enganar e roubar dados.",
    category: "Tipos de Golpe",
    icon: "MessageSquareWarning",
    content: `O phishing por mensagem é uma técnica onde criminosos enviam mensagens em massa imitando empresas conhecidas, com promoções irresistíveis ou cobranças urgentes.

**Exemplos comuns:**
- "Você ganhou um prêmio! Clique aqui para resgatar"
- "Sua fatura está vencida. Pague agora para evitar bloqueio"
- "Oferta exclusiva: produto X por apenas R$ 9,90"
- "Atualize seus dados cadastrais para não perder o acesso"

**Por que funciona:**
- Explora o senso de urgência
- Usa logos e identidade visual de marcas reais
- Oferece algo muito bom para ser verdade
- Ameaça com consequências se não agir rápido

**Defesa:**
- Empresas sérias não fazem cobranças por WhatsApp
- Desconfie de promoções com preços muito abaixo do mercado
- Confirme diretamente com a empresa pelos canais oficiais`,
    references: [
      { label: "Procon - Direitos do Consumidor", url: "https://www.procon.sp.gov.br/" },
      { label: "Anti-Phishing Working Group", url: "https://apwg.org/" },
    ],
    readTime: "4 min",
    date: "2024-11-01",
  },
  {
    id: "clonagem-whatsapp",
    title: "Clonagem de WhatsApp: Proteja Sua Conta",
    summary: "Golpistas clonam seu número e pedem dinheiro aos seus contatos se passando por você.",
    category: "Tipos de Golpe",
    icon: "ShieldAlert",
    content: `A clonagem de WhatsApp acontece quando um criminoso consegue transferir sua conta para outro aparelho. A partir daí, ele se passa por você para pedir dinheiro a amigos e familiares.

**Como clonam seu WhatsApp:**
1. O golpista tenta registrar seu número em outro celular
2. O WhatsApp envia um código de verificação por SMS para você
3. O criminoso liga ou manda mensagem pedindo esse código
4. Com o código, ele assume o controle da sua conta

**Como se proteger:**
- Ative a verificação em duas etapas (PIN de 6 dígitos)
- Nunca compartilhe códigos recebidos por SMS
- Desconfie de pedidos de código, mesmo de "amigos"
- Ative notificações de segurança do WhatsApp

**Se foi clonado:**
1. Tente recuperar registrando novamente seu número
2. Avise todos os contatos imediatamente
3. Envie e-mail para support@whatsapp.com
4. Registre um Boletim de Ocorrência`,
    references: [
      { label: "WhatsApp FAQ - Conta Roubada", url: "https://faq.whatsapp.com/1131652977717250/" },
      { label: "Delegacia Online", url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/" },
    ],
    readTime: "6 min",
    date: "2024-10-20",
  },
  {
    id: "prevencao-geral",
    title: "Guia Completo de Prevenção contra Golpes Digitais",
    summary: "Boas práticas essenciais de segurança digital para proteger você e seu negócio.",
    category: "Prevenção",
    icon: "Lock",
    content: `A prevenção é a melhor arma contra golpes digitais. Adotar boas práticas de segurança reduz drasticamente o risco de ser vítima.

**Checklist de Segurança:**
- ✅ Verificação em duas etapas ativada
- ✅ WhatsApp e sistema operacional atualizados
- ✅ Antivírus instalado e ativo
- ✅ Backup automático configurado
- ✅ Confirmação por ligação antes de transferências

**Para seu negócio:**
- Treine funcionários sobre golpes comuns
- Estabeleça protocolos para transações financeiras
- Use contas comerciais verificadas
- Mantenha canais oficiais de comunicação claros

**Senhas seguras:**
- Use senhas longas (12+ caracteres)
- Combine letras, números e símbolos
- Nunca reutilize senhas
- Use um gerenciador de senhas`,
    references: [
      { label: "CERT.br - Cartilha de Segurança", url: "https://cartilha.cert.br/" },
      { label: "Kaspersky - Dicas de Segurança", url: "https://www.kaspersky.com.br/resource-center" },
      { label: "SEBRAE - Segurança Digital para PMEs", url: "https://sebrae.com.br/" },
    ],
    readTime: "7 min",
    date: "2024-10-10",
  },
  {
    id: "caiu-golpe",
    title: "Caiu em um Golpe? Saiba Exatamente o que Fazer",
    summary: "Passos imediatos e práticos para minimizar danos após ser vítima de um golpe no WhatsApp.",
    category: "Emergência",
    icon: "ShieldAlert",
    content: `Se você foi vítima de um golpe, agir rápido é fundamental para minimizar os danos. Siga estes passos imediatamente:

**Primeiros 30 minutos:**
1. Entre em contato com seu banco e bloqueie transações
2. Altere a senha do WhatsApp e ative verificação em duas etapas
3. Avise contatos mais próximos sobre o golpe

**Nas primeiras 24 horas:**
4. Registre um Boletim de Ocorrência (pode ser online)
5. Denuncie o número no WhatsApp
6. Altere senhas de e-mail e redes sociais
7. Verifique movimentações bancárias suspeitas

**Na primeira semana:**
8. Monitore suas contas bancárias diariamente
9. Verifique se há empréstimos ou cartões abertos em seu nome
10. Considere alertar o Serasa/SPC sobre possível uso indevido

**Onde denunciar:**
- Delegacia de Crimes Cibernéticos
- Procon
- Banco Central (em caso de fraude bancária)
- WhatsApp (pelo próprio app)`,
    references: [
      { label: "Delegacia Eletrônica SP", url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/" },
      { label: "Procon Online", url: "https://www.procon.sp.gov.br/" },
      { label: "Banco Central - Reclamações", url: "https://www.bcb.gov.br/acessoinformacao/registrar_reclamacao" },
    ],
    readTime: "5 min",
    date: "2024-09-25",
  },
];
