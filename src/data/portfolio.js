import projBi from '../assets/proj-bi.svg'
import projEtl from '../assets/proj-etl.svg'
import projWeb from '../assets/proj-web.svg'
import projApi from '../assets/proj-api.svg'
import projPower from '../assets/proj-power.svg'
import projAutomate from '../assets/proj-automate.svg'
import profileImg from '../assets/profile.svg'

export const profile = {
  name: 'Seu Nome',
  role: 'Full Stack Developer & Data Engineer',
  heroImageUrl: profileImg,
  bio: 'Desenvolvedor Full Stack e Engenheiro de Dados com foco em soluções corporativas robustas. Especialista em transformar dados brutos em insights estratégicos e ideias em produtos digitais escaláveis.',
  email: 'seuemail@email.com',
  linkedin: 'linkedin.com/in/seuperfil',
  github: 'github.com/seuusuario',
}

export const expertises = [
  {
    id: '1',
    title: 'Business Intelligence & Dados',
    description: 'Criação de dashboards interativos e relatórios estratégicos que transformam dados em decisões.',
    icon: 'BarChart3',
    num: '01',
  },
  {
    id: '2',
    title: 'Power Platform',
    description: 'Apps sob medida utilizando Power Apps e automações complexas com Power Automate.',
    icon: 'Blocks',
    num: '02',
  },
  {
    id: '3',
    title: 'Desenvolvimento Full Stack',
    description: 'Sistemas web completos e APIs REST robustas com React, Node.js e TypeScript.',
    icon: 'Code2',
    num: '03',
  },
  {
    id: '4',
    title: 'Engenharia de Dados (ETL)',
    description: 'Pipelines de extração, transformação e carga com Python, SQL e Linguagem M.',
    icon: 'Database',
    num: '04',
  },
  {
    id: '5',
    title: 'UI/UX & Prototipagem',
    description: 'Interfaces focadas em experiência do usuário, do wireframe ao código final.',
    icon: 'Palette',
    num: '05',
  },
]

export const techStack = [
  {
    category: 'Linguagens & Frameworks',
    items: ['Python', 'TypeScript', 'React', 'Node.js', 'SQL'],
  },
  {
    category: 'Dados & BI',
    items: ['Power BI', 'Looker Studio', 'PostgreSQL', 'SQL Server', 'Oracle', 'Linguagem M'],
  },
  {
    category: 'Ecossistema Microsoft',
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Azure AD'],
  },
  {
    category: 'Infra & DevOps',
    items: ['Docker', 'Git', 'Vercel', 'Prisma ORM', 'REST APIs'],
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
    description: 'Dashboard interativo com filtros dinâmicos, KPIs em tempo real e drill-down por região. Integra dados de múltiplas fontes via ETL automatizado.',
    imageUrl: projBi,
    githubUrl: '#',
    demoUrl: '#',
    tech: ['Power BI', 'DAX', 'SQL Server', 'Python'],
    categoryId: 'data',
    featured: true,
  },
  {
    id: '2',
    title: 'Pipeline ETL Automatizado',
    description: 'Pipeline de extração, transformação e carga de dados de múltiplas fontes para data warehouse centralizado com agendamento e monitoramento.',
    imageUrl: projEtl,
    githubUrl: '#',
    demoUrl: null,
    tech: ['Python', 'PostgreSQL', 'Linguagem M', 'Airflow'],
    categoryId: 'data',
    featured: true,
  },
  {
    id: '3',
    title: 'Portfólio Dinâmico',
    description: 'Portfólio pessoal com CMS próprio, painel admin completo, animações Framer Motion e design brutalista com dark/light mode.',
    imageUrl: projWeb,
    githubUrl: '#',
    demoUrl: '#',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Prisma'],
    categoryId: 'web',
    featured: true,
  },
  {
    id: '4',
    title: 'API REST Completa',
    description: 'API RESTful com autenticação JWT, rate limiting, documentação Swagger, testes automatizados e deploy contínuo com Docker.',
    imageUrl: projApi,
    githubUrl: '#',
    demoUrl: null,
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    categoryId: 'web',
    featured: true,
  },
  {
    id: '5',
    title: 'App de Aprovações',
    description: 'Aplicativo corporativo de aprovações multi-nível com notificações push, fluxo condicional e integração com SharePoint.',
    imageUrl: projPower,
    githubUrl: null,
    demoUrl: '#',
    tech: ['Power Apps', 'Power Automate', 'SharePoint'],
    categoryId: 'power',
    featured: true,
  },
  {
    id: '6',
    title: 'Automação de Onboarding',
    description: 'Fluxo automatizado de onboarding que cria contas no Azure AD, envia documentos via SharePoint e convida para o Teams automaticamente.',
    imageUrl: projAutomate,
    githubUrl: null,
    demoUrl: '#',
    tech: ['Power Automate', 'Azure AD', 'Teams', 'Outlook'],
    categoryId: 'power',
    featured: false,
  },
]
