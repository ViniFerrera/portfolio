# Portfolio Pessoal Dinâmico + CMS Admin

## Visão Geral

Portfólio profissional com design brutalista limpo, inspirado no estilo **dunks1980.com** — minimalista, tipografia premium, espaçamento compacto — acoplado a um painel de administração (CMS próprio) para gestão de conteúdo.

**Stack:** React 19 + Vite 8 + Tailwind CSS 4 + Framer Motion + React Router DOM + Prisma ORM + Lucide React

---

## Comandos

```bash
npm run dev       # Dev server (http://localhost:5173)
npm run build     # Build de produção em dist/
npm run preview   # Preview do build
npm run lint      # ESLint
```

### Prisma (quando backend estiver conectado)

```bash
npx prisma migrate dev     # Rodar migrations
npx prisma studio          # Abrir painel visual do banco
npx prisma db seed         # Seed do banco
```

---

## Arquitetura do Projeto

```
src/
├── main.jsx                          # Entry point React
├── App.jsx                           # Router principal (public + admin)
├── index.css                         # Tailwind + design tokens + tema
│
├── contexts/
│   ├── ThemeContext.jsx               # Dark/Light mode (localStorage)
│   └── AuthContext.jsx                # Auth simples para admin
│
├── data/
│   └── portfolio.js                  # Dados estáticos (payload inicial)
│
├── hooks/
│   └── useScrollReveal.js            # Hook para scroll-triggered animations
│
├── pages/
│   └── PortfolioPage.jsx             # Página pública (todas as seções)
│
├── components/
│   ├── ui/                           # Componentes reutilizáveis
│   │   ├── Navbar.jsx                # Navbar fixa com menu mobile
│   │   ├── ThemeToggle.jsx           # Botão dark/light
│   │   ├── SectionWrapper.jsx        # Wrapper com fade-in ao scroll
│   │   └── BrandIcons.jsx            # SVG icons (GitHub, LinkedIn)
│   │
│   ├── sections/                     # Seções do portfólio público
│   │   ├── Hero.jsx                  # Hero com foto, badge, CTAs
│   │   ├── About.jsx                 # Sobre mim + stats
│   │   ├── Expertise.jsx             # Cards de áreas de atuação
│   │   ├── TechStack.jsx             # Stack tecnológico por categoria
│   │   ├── Projects.jsx              # Galeria com filtros por tema/aba
│   │   ├── Contact.jsx               # Links de contato
│   │   └── Footer.jsx                # Rodapé
│   │
│   └── admin/                        # Módulo admin (CMS)
│       ├── AdminLogin.jsx            # Tela de login /admin/login
│       ├── AdminLayout.jsx           # Layout sidebar + outlet
│       ├── ProtectedRoute.jsx        # Guard de rota autenticada
│       ├── ProfileEditor.jsx         # Editor de perfil, bio, expertise
│       ├── ProjectsManager.jsx       # CRUD completo de projetos
│       └── ImageUploader.jsx         # Upload drag-and-drop com preview
│
├── assets/                           # Imagens estáticas
│   ├── dev-hero.jpg
│   └── hero.png
│
prisma/
└── schema.prisma                     # Schema do banco PostgreSQL

.env                                  # DATABASE_URL (não committar)
```

---

## Módulos

### MÓDULO 1 — Frontend Público (Portfólio)

**Rota:** `/`

| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Hero | `Hero.jsx` | Nome, cargo, foto de perfil (placeholder com inicial se sem imagem), badge "Disponível", CTAs |
| Sobre | `About.jsx` | Bio profissional + 4 cards de estatísticas |
| Expertise | `Expertise.jsx` | 5 cards com ícones: BI, Power Platform, Full Stack, ETL, UI/UX |
| Stack | `TechStack.jsx` | Linguagens & Frameworks, Dados & BI, Ecossistema Microsoft |
| Projetos | `Projects.jsx` | Galeria com filtro por abas: Todos, Data & Analytics, Web Dev, Power Platform |
| Contato | `Contact.jsx` | Email, LinkedIn, GitHub |
| Footer | `Footer.jsx` | Copyright com nome e ano |

### MÓDULO 2 — Dashboard Admin (CMS)

**Rotas:** `/admin/login`, `/admin`, `/admin/projetos`

| Funcionalidade | Componente | Descrição |
|----------------|-----------|-----------|
| Login | `AdminLogin.jsx` | Auth por senha (demo: `admin123`) |
| Proteção | `ProtectedRoute.jsx` | Redireciona para login se não autenticado |
| Layout | `AdminLayout.jsx` | Sidebar com navegação: Perfil, Projetos, Ver Site, Sair |
| Editor Perfil | `ProfileEditor.jsx` | Edita nome, cargo, bio, contatos, expertises + upload foto hero |
| CRUD Projetos | `ProjectsManager.jsx` | Criar, editar, excluir projetos com seleção de categoria e tags de tech |
| Upload Imagens | `ImageUploader.jsx` | Drag-and-drop, preview, suporte a PNG/JPG/WebP |

---

## Design System

### Estética

- **Estilo:** Brutalismo limpo + minimalismo — alto contraste, bordas finas, elevação sutil
- **Tipografia:** Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (código/números)
- **Espaçamento:** Seções com `py-16 md:py-20` — compacto, sem "buracos brancos"
- **Tema:** Dark mode (default) + Light mode com toggle persistido em localStorage

### Cores (definidas em `index.css` via `@theme`)

| Token | Dark | Light |
|-------|------|-------|
| Background | `#08090c` (base-900) | `#f8fafc` (light-900) |
| Surface | `#0e1117` (base-800) | `#f1f5f9` (light-800) |
| Text Primary | `#f1f5f9` (base-50) | `#0f172a` (light-50) |
| Text Secondary | `#94a3b8` (base-200) | `#475569` (light-300) |
| Accent | `#60a5fa` | `#60a5fa` |
| Borders | `#1c222d` (base-600) | `#e2e8f0` (light-700) |

### Animações (Framer Motion)

- **Entrada:** `fadeIn` com `y: 20→0`, duração 400-500ms, easing `[0.16, 1, 0.3, 1]`
- **Stagger:** Elementos filhos aparecem com delay de 40-120ms entre si
- **Scroll Reveal:** Via `useInView` com `once: true`
- **Filter (Projetos):** `AnimatePresence` com `mode="popLayout"` para transição suave ao filtrar
- **Reduced Motion:** Respeitado via CSS `prefers-reduced-motion: reduce`

---

## Schema do Banco (Prisma)

```prisma
Profile     → id, name, role, heroImageUrl, bio, email, linkedin, github
Expertise   → id, title, description, icon, order
TechCategory→ id, name, items[], order
Category    → id, name, slug, order, projects[]
Project     → id, title, description, imageUrl, githubUrl, demoUrl, tech[], featured, order, categoryId
Admin       → id, email, password
```

**Relações:** `Project` → `Category` (many-to-one via `categoryId`)

---

## Dados Iniciais (Seed)

Os dados de seed estão em `src/data/portfolio.js`. Áreas de atuação:

1. Business Intelligence & Análise de Dados
2. Soluções Corporativas (Power Platform)
3. Desenvolvimento Full Stack
4. Engenharia de Dados (ETL)
5. Prototipagem e UI/UX

Stack: Python, React, Node.js, TypeScript, Power BI, Looker Studio, Oracle, PostgreSQL, SQL Server, Power Apps, Power Automate

Temas de projetos: Data & Analytics, Web Development, Power Platform

---

## Convenções

- **Ícones:** Lucide React para ícones genéricos; `BrandIcons.jsx` para ícones de marca (GitHub, LinkedIn)
- **Classes light mode:** Prefixo `light:` nas classes Tailwind (ativado pela classe `light` no `<body>`)
- **Componentização:** Cada seção é um componente isolado em `components/sections/`
- **Estado admin:** Dados mantidos em state local (React) — preparado para integração com API REST
- **Responsividade:** Mobile-first com breakpoints sm (640px), md (768px), lg (1024px)

---

## Próximos Passos (Integração Backend)

1. Configurar `DATABASE_URL` no `.env` e rodar `npx prisma migrate dev`
2. Criar API routes (Express/Next.js) para CRUD de Profile, Expertise, Projects
3. Conectar formulários admin aos endpoints da API
4. Integrar upload de imagens com Vercel Blob ou Supabase Storage
5. Substituir auth demo por autenticação real (JWT/OAuth)
6. Fazer deploy (Vercel recomendado)
