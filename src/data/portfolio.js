export const profile = {
  name: 'Seu Nome',
  role: 'Full Stack Developer',
  heroImageUrl: null,
  bio: 'Sou um desenvolvedor Full Stack com paixão por criar soluções digitais que fazem a diferença. Tenho experiência construindo desde pequenas landing pages até sistemas complexos em produção. Trabalho principalmente com React, Node.js e bancos de dados relacionais e NoSQL.',
  email: 'seuemail@email.com',
  linkedin: 'linkedin.com/in/seuperfil',
  github: 'github.com/seuusuario',
}

export const expertises = [
  {
    id: '1',
    title: 'Business Intelligence & Análise de Dados',
    description: 'Criação de dashboards interativos e relatórios estratégicos.',
    icon: 'BarChart3',
  },
  {
    id: '2',
    title: 'Soluções Corporativas (Power Platform)',
    description: 'Apps sob medida utilizando Power Apps e automações com Power Automate.',
    icon: 'Blocks',
  },
  {
    id: '3',
    title: 'Desenvolvimento Full Stack',
    description: 'Sistemas web e APIs REST robustas utilizando React, Node.js e TypeScript.',
    icon: 'Code2',
  },
  {
    id: '4',
    title: 'Engenharia de Dados (ETL)',
    description: 'Estruturação em bancos relacionais. ETL com Python e Linguagem M.',
    icon: 'Database',
  },
  {
    id: '5',
    title: 'Prototipagem e UI/UX',
    description: 'Interfaces atraentes focadas na experiência do usuário (Figma).',
    icon: 'Palette',
  },
]

export const techStack = [
  {
    category: 'Linguagens & Frameworks',
    items: ['Python', 'React', 'Node.js', 'TypeScript'],
  },
  {
    category: 'Dados & BI',
    items: ['Power BI', 'Looker Studio', 'Oracle', 'PostgreSQL', 'SQL Server'],
  },
  {
    category: 'Ecossistema Microsoft',
    items: ['Power Apps', 'Power Automate'],
  },
]

export const categories = [
  { id: 'all', name: 'Todos', slug: 'all' },
  { id: 'data', name: 'Data & Analytics', slug: 'data-analytics' },
  { id: 'web', name: 'Web Development', slug: 'web-development' },
  { id: 'power', name: 'Power Platform', slug: 'power-platform' },
]

export const projects = [
  {
    id: '1',
    title: 'Dashboard de Vendas',
    description: 'Dashboard interativo de análise de vendas com filtros dinâmicos, KPIs em tempo real e drill-down por região.',
    imageUrl: null,
    githubUrl: '#',
    demoUrl: '#',
    tech: ['Power BI', 'DAX', 'SQL Server'],
    categoryId: 'data',
    featured: true,
  },
  {
    id: '2',
    title: 'Pipeline ETL Automatizado',
    description: 'Pipeline de extração, transformação e carga de dados de múltiplas fontes para data warehouse centralizado.',
    imageUrl: null,
    githubUrl: '#',
    demoUrl: null,
    tech: ['Python', 'PostgreSQL', 'Linguagem M'],
    categoryId: 'data',
    featured: true,
  },
  {
    id: '3',
    title: 'Portfolio Dinâmico',
    description: 'Portfólio pessoal com CMS próprio, painel admin, animações Framer Motion e design brutalista limpo.',
    imageUrl: null,
    githubUrl: '#',
    demoUrl: '#',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    categoryId: 'web',
    featured: true,
  },
  {
    id: '4',
    title: 'API REST Completa',
    description: 'API RESTful com autenticação JWT, rate limiting, documentação Swagger e testes automatizados.',
    imageUrl: null,
    githubUrl: '#',
    demoUrl: null,
    tech: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    categoryId: 'web',
    featured: false,
  },
  {
    id: '5',
    title: 'App de Aprovações',
    description: 'Aplicativo de aprovações multi-nível com notificações push e integração com SharePoint.',
    imageUrl: null,
    githubUrl: null,
    demoUrl: '#',
    tech: ['Power Apps', 'Power Automate', 'SharePoint'],
    categoryId: 'power',
    featured: true,
  },
  {
    id: '6',
    title: 'Automação de Onboarding',
    description: 'Fluxo automatizado de onboarding de colaboradores com criação de contas e envio de documentos.',
    imageUrl: null,
    githubUrl: null,
    demoUrl: '#',
    tech: ['Power Automate', 'Power Apps', 'Outlook'],
    categoryId: 'power',
    featured: false,
  },
]
