# SecureLine - Plataforma de Treinamento Contra Golpes Digitais

Uma plataforma web moderna e interativa para conscientização e prevenção de fraudes digitais através de simulações realistas, educação comportamental e analytics corporativo.

### Preview do Projeto
Acesse e teste a versão web do projeto em: **[SecureLine](https://golpe-zero-treinamento.vercel.app/)**


---

## Visão Geral

SecureLine é uma solução completa para treinamento de segurança comportamental que combina simulações imersivas de WhatsApp, conteúdo educativo estruturado e dashboards de análise para empresas. A plataforma usa técnicas de gamificação e experiências práticas para aumentar a consciência sobre golpes digitais antes que eles aconteçam.

### Objetivo Principal

Transformar conscientização em comportamento através de:
- Simulações realistas de cenários de ataque
- Quizzes interativos que avaliam percepção de risco
- Artigos e referências educativas
- Analytics para monitoramento corporativo

---

## Tecnologias Principais

### Frontend
- **React 18.3** - Biblioteca UI moderna com hooks
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool ultrarrápido e otimizado
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animações fluidas e interativas
- **Recharts** - Gráficos e visualizações de dados

### UI e Componentes
- **Shadcn/ui** - Componentes acessíveis e customizáveis (50+ componentes)
- **Radix UI** - Primitivos acessíveis de baixo nível
- **Lucide React** - Biblioteca de ícones moderna

### Estado e Dados
- **TanStack React Query** - Gerenciamento de cache e sincronização
- **React Hook Form** - Gerenciamento eficiente de formulários
- **Zod** - Validação de schemas TypeScript

### Roteamento e Autenticação
- **React Router DOM** - Navegação entre páginas
- **Supabase** - Backend e autenticação em tempo real
- **JWT e verificação em duas etapas**

### Desenvolvimento
- **ESLint** - Linting e análise de código
- **Vitest** - Testing framework moderno
- **Playwright** - Testes end-to-end

---

## Funcionalidades Principais

### 1. Seção Pública
**Landing Page**
- Hero section com call-to-action
- Demonstração de como a plataforma funciona (3 etapas)
- Módulos destacados de simulação, educação e admin
- CTA final para começar treinamento ou acessar plataforma

### 2. Simulação de WhatsApp
- Conversa interativa simulando golpes reais
- Múltiplos cenários de ataque (suporte falso, links maliciosos, phishing)
- Sistema de feedback em tempo real
- Quiz com perguntas contextualizadas
- Tela de resultados com análise de desempenho

### 3. Centro Educativo
- Blog com 6+ artigos estruturados
- Categorias: Tipos de Golpe, Prevenção, Emergência
- Filtro por categoria
- Visualização detalhada com mídia (vídeos, imagens, links)
- Referências externas e recursos úteis
- Tempo de leitura estimado

### 4. Dashboard Corporativo
- Visualização de métricas de equipe
- Gráficos de progresso e vulnerabilidades
- Analytics de treinamento
- Controle de acesso administrativo

### 5. Autenticação e Proteção
- Login/Registro de usuários
- Rotas protegidas para membros
- Rotas exclusivas para administradores
- Sessões gerenciadas com Supabase

### 6. Tema Dark/Light
- Toggle de tema com persistência
- Paleta de cores: Roxo + Azul + Rosa
- Modo responsivo (Mobile, Tablet, Desktop)

---

## Paleta de Cores

```
Primário (Roxo):      #7C3AED
Secundário (Rosa):    #D60099
Accent (Azul Escuro): #0F172A
Background:           #060816
Card:                 #0B1020
```

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── common/              # Componentes compartilhados
│   ├── members/             # Componentes de membros
│   │   ├── MembersLayout
│   │   └── ProtectedRoute
│   ├── public/              # Componentes públicos
│   │   ├── Navbar
│   │   ├── HeroSection
│   │   ├── Home
│   │   ├── EducationalSection
│   │   ├── WhatsAppSimulation
│   │   ├── ResultsSection
│   │   └── Footer
│   └── ui/                  # 50+ componentes shadcn/ui
├── pages/
│   ├── Index                # Landing page pública
│   ├── Auth                 # Login/Registro
│   └── members/
│       ├── MembersDashboard
│       ├── TrainingsList
│       ├── TrainingPlayer
│       └── AdminPanel
├── services/
│   ├── auth.ts              # Autenticação
│   ├── trainings.ts         # Treinamentos
│   ├── quiz.ts              # Quiz e simulações
│   └── admin.ts             # Admin
├── hooks/
│   ├── useAuth              # Hook de autenticação
│   ├── useTrainings         # Hook de treinamentos
│   └── use-toast            # Hook de notificações
├── data/
│   ├── blogPosts.ts         # Posts educativos
│   ├── quizScenarios.ts     # Cenários de quiz
│   └── advancedTrainings.ts # Treinamentos avançados
├── lib/
│   ├── constants.ts         # Constantes
│   └── utils.ts             # Funções auxiliares
└── types/
    ├── auth.ts              # Tipos de autenticação
    ├── training.ts          # Tipos de treinamento
    └── quiz.ts              # Tipos de quiz
```

---

## Fluxo de Navegação

```
Landing Page (/)
├── [Não autenticado]
│   └── Hero + Modules → Direciona para Auth
│
├── [Autenticado - Usuário]
│   ├── Simulação → Quiz → Resultados
│   ├── Educação → Blog com filtros
│   └── Dashboard → Visualizar progresso
│
└── [Autenticado - Admin]
    └── AdminPanel → Gerenciar usuários e metrics
```

---

## Como Começar

### Pré-requisitos
- Node.js 18+
- npm ou bun
- Conta Supabase

### Instalação

```bash
# Clonar o repositório
git clone [seu-repo]
cd SecureLine

# Instalar dependências
npm install
# ou
bun install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais Supabase

# Executar em modo desenvolvimento
npm run dev
# ou
bun run dev
```

### Build para Produção

```bash
npm run build
npm run preview
```

---

## Funcionalidades de Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento com HMR
npm run build        # Build otimizado para produção
npm run preview      # Preview do build
npm run lint         # Análise de código com ESLint
npm run test         # Executa testes com Vitest
npm run test:watch   # Testes em modo watch
```

---

## Ambiente

### Variáveis Necessárias

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## API e Integrações

### Supabase
- Autenticação
- Banco de dados PostgreSQL
- Realtime subscriptions
- Edge Functions (opcional)

### Dados Estáticos
- Blog Posts (6+ artigos)
- Quiz Scenarios (múltiplos cenários)
- Advanced Trainings (conteúdos estruturados)

---

## Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

---

## Licença

Este projeto é privado e propriedade da equipe SecureLine.

---

## Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.
