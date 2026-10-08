import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { TbApi, TbDog } from 'react-icons/tb';
import {
  SiAngular,
  SiApachejmeter,
  SiBinance,
  SiCypress,
  SiEslint,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPython,
  SiQuasar,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReacttable,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiZod,
} from 'react-icons/si';

export type Lang = 'es' | 'en';
export type Text = Record<Lang, string>;

/* ───────────────────────── Perfil ───────────────────────── */

export const profile = {
  name: 'Elias Estrabao',
  /** Muestra el indicador "Abierto a oportunidades" en el hero. */
  available: true,
  email: 'eestrabao46@gmail.com',
  cv: { es: '/cv-elias-estrabao-es.pdf', en: '/cv-elias-estrabao-en.pdf' } satisfies Text,
  avatar: '/avatar.webp',
  socials: {
    github: 'https://github.com/RamonTec',
    linkedin: 'https://www.linkedin.com/in/el%C3%ADas-estrabao/',
    telegram: 'https://t.me/Ereq22',
    whatsapp: 'https://api.whatsapp.com/send?phone=584248850265',
  },
};

/* ───────────────────────── Experiencia ───────────────────────── */

export interface Job {
  company: string;
  role: Text;
  /** YYYY-MM */
  from: string;
  /** YYYY-MM; sin valor = trabajo actual */
  to?: string;
  /** Logros. Lo que va entre **asteriscos** se resalta como métrica. */
  highlights: Text[];
  stack: string[];
}

export const jobs: Job[] = [
  {
    company: 'QS Digital',
    role: { es: 'Frontend Developer & Project Manager', en: 'Frontend Developer & Project Manager' },
    from: '2024-02',
    to: '2025-09',
    highlights: [
      {
        es: 'Arquitecté y gestioné **monorepos con Angular 16 y Next.js** para aplicaciones enterprise, facilitando la escalabilidad y la organización modular del código.',
        en: 'Architected and managed **Angular 16 and Next.js monorepos** for enterprise apps, enabling frontend scalability and a modular codebase.',
      },
      {
        es: 'Optimicé la performance en React, **reduciendo los tiempos de carga un 30%** mediante optimización de renderizado y manejo eficiente del estado.',
        en: 'Optimized React performance, **cutting load times by 30%** through render optimization and efficient state management.',
      },
      {
        es: 'Implementé Husky + ESLint, **resolviendo más de 120 incidencias** antes del despliegue.',
        en: 'Introduced Husky + ESLint, **fixing 120+ issues** before they reached deployment.',
      },
      {
        es: 'Lideré code reviews y pair programming, **reduciendo defectos un 15%**.',
        en: 'Led code reviews and pair programming, **reducing defects by 15%**.',
      },
      {
        es: 'Dirigí la planificación ágil de sprints con **entregas quincenales consistentes** alineadas al negocio.',
        en: 'Ran agile sprint planning, delivering **consistent bi-weekly releases** aligned with business goals.',
      },
    ],
    stack: ['Angular 16', 'Next.js', 'React', 'TypeScript', 'Monorepo', 'Husky', 'ESLint', 'Scrum'],
  },
  {
    company: 'Kraken Tech Studios',
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    from: '2023-06',
    to: '2023-09',
    highlights: [
      {
        es: 'Implementé pagos en tiempo real (PSE / ePayco) sobre APIs REST, procesando **más de 500 transacciones diarias** de forma estable.',
        en: 'Implemented real-time payments (PSE / ePayco) over REST APIs, reliably processing **500+ transactions per day**.',
      },
      {
        es: 'Desarrollé **más de 15 componentes reutilizables** en Next.js y TypeScript, acelerando las entregas **~40%**.',
        en: 'Built **15+ reusable components** in Next.js and TypeScript, speeding up delivery by **~40%**.',
      },
      {
        es: 'Apliqué Tailwind CSS para dar consistencia visual y escalabilidad al design system.',
        en: 'Used Tailwind CSS to bring visual consistency and scalability to the design system.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'REST', 'PSE / ePayco'],
  },
  {
    company: 'Cobuild Lab',
    role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    from: '2022-03',
    to: '2023-03',
    highlights: [
      {
        es: 'Refactoricé código en React y React Native, mejorando la mantenibilidad y **reduciendo tiempos de carga hasta un 88%**.',
        en: 'Refactored React and React Native code, improving maintainability and **cutting load times by up to 88%**.',
      },
      {
        es: 'Rediseñé endpoints con NestJS, optimizando la recuperación de datos y reforzando la seguridad de las APIs REST.',
        en: 'Redesigned NestJS endpoints, optimizing data retrieval and hardening REST API security.',
      },
      {
        es: 'Colaboré en la arquitectura de componentes UI escalables para productos SaaS.',
        en: 'Contributed to a scalable UI component architecture for SaaS products.',
      },
    ],
    stack: ['React', 'React Native', 'Next.js', 'NestJS', 'GraphQL', 'REST'],
  },
  {
    company: 'Orinoco Dev',
    role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    from: '2019-03',
    to: '2022-02',
    highlights: [
      {
        es: 'Desarrollé flujos de cambio de divisas en tiempo real con Node.js y Vue.js, con **99.9% de uptime**.',
        en: 'Built real-time currency exchange flows with Node.js and Vue.js, achieving **99.9% uptime**.',
      },
      {
        es: 'Implementé pruebas E2E con Cypress y JMeter, **reduciendo errores en producción un 30%**.',
        en: 'Implemented E2E and load tests with Cypress and JMeter, **reducing production errors by 30%**.',
      },
      {
        es: 'Gestioné despliegues en entornos Linux de alta disponibilidad, integrando servicios de AWS.',
        en: 'Managed high-availability deployments on Linux, integrating AWS services.',
      },
    ],
    stack: ['Vue', 'Quasar', 'Node.js', 'GraphQL', 'MongoDB', 'Cypress', 'JMeter', 'AWS'],
  },
];

const monthsBetween = (from: string, to?: string) => {
  const [fy, fm] = from.split('-').map(Number);
  const end = to ? to.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1];
  return (end[0] - fy) * 12 + (end[1] - fm) + 1;
};

/** Años completos de experiencia sumando los periodos trabajados. */
export const yearsOfExperience = Math.floor(jobs.reduce((sum, j) => sum + monthsBetween(j.from, j.to), 0) / 12);

/* ───────────────────────── Impacto ───────────────────────── */

export const impact: { value: number; decimals?: number; prefix?: string; suffix: string; label: Text; company: string }[] = [
  {
    value: 88,
    prefix: '−',
    suffix: '%',
    label: { es: 'en tiempos de carga tras refactorizar React y React Native', en: 'load time after refactoring React and React Native' },
    company: 'Cobuild Lab',
  },
  {
    value: 500,
    suffix: '+',
    label: { es: 'transacciones diarias con pagos en tiempo real', en: 'daily transactions through real-time payments' },
    company: 'Kraken Tech Studios',
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: { es: 'de uptime en flujos de cambio de divisas', en: 'uptime on currency exchange flows' },
    company: 'Orinoco Dev',
  },
  {
    value: 120,
    suffix: '+',
    label: { es: 'incidencias resueltas antes de producción con Husky + ESLint', en: 'issues caught before production with Husky + ESLint' },
    company: 'QS Digital',
  },
];

/* ───────────────────────── Proyectos ───────────────────────── */

export type ProjectKind = 'fullstack' | 'frontend' | 'backend' | 'ai' | 'mobile' | 'client' | 'learning';

export interface Project {
  id: string;
  title: Text;
  description: Text;
  /** Puntos técnicos destacados (solo se muestran en proyectos destacados). */
  highlights?: Text[];
  kind: ProjectKind;
  stack: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'altamar',
    title: { es: 'Pescadería Altamar — ERP', en: 'Altamar Sea Food — ERP' },
    description: {
      es: 'ERP interno y sistema de inventario para mayoristas y minoristas de productos del mar en Venezuela: compra, pesaje, procesamiento, venta por peso y cobranza.',
      en: 'Internal ERP and inventory system for seafood wholesalers and retailers in Venezuela: purchasing, weighing, processing, sales by weight and collections.',
    },
    highlights: [
      {
        es: 'Doble moneda USD / Bs con tasa BCV y paralela congelada por transacción, y cálculo de diferencial cambiario.',
        en: 'Dual currency USD / Bs with BCV and parallel rates snapshotted per transaction, plus FX gain/loss tracking.',
      },
      {
        es: 'Inventario costeado por lote físico con asignación PEPS (FIFO) y control de merma en el procesamiento.',
        en: 'Inventory costed per physical lot with FIFO allocation and processing shrinkage control.',
      },
      {
        es: 'Next.js App Router con Server Actions, Supabase (PostgreSQL) y tipado estricto de dominio.',
        en: 'Next.js App Router with Server Actions, Supabase (PostgreSQL) and a strictly typed domain.',
      },
    ],
    kind: 'fullstack',
    stack: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'MUI', 'Zod', 'React Hook Form'],
    demo: 'https://pescaderia-altamar.vercel.app',
    repo: 'https://github.com/RamonTec/pescaderia-altamar',
    featured: true,
  },
  {
    id: 'typify',
    title: { es: 'Typify', en: 'Typify' },
    description: {
      es: 'Herramienta para developers que convierte JSON en interfaces estrictas de TypeScript y esquemas Zod, en tiempo real.',
      en: 'Developer tool that turns JSON into strict TypeScript interfaces and Zod schemas in real time.',
    },
    highlights: [
      {
        es: 'Detección de tipos unión en arrays heterogéneos y protección contra referencias circulares.',
        en: 'Union type detection for mixed arrays and circular reference protection.',
      },
      {
        es: 'Editor Monaco, formateo/minificado de JSON y lógica de tipado cubierta con Jest.',
        en: 'Monaco editor, JSON format/minify and typing logic covered by Jest tests.',
      },
    ],
    kind: 'frontend',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Zod', 'Monaco', 'Jest'],
    demo: 'https://typify-tawny.vercel.app',
    repo: 'https://github.com/RamonTec/typify',
    featured: true,
  },
  {
    id: 'trading-bot',
    title: { es: 'Trading Bot con IA', en: 'AI Trading Bot' },
    description: {
      es: 'Bot de trading en Python que usa un LLM local (Ollama) para analizar cálculos de mercado y decidir órdenes de compra y venta en Binance Testnet.',
      en: 'Python trading bot that uses a local LLM (Ollama) to analyze market calculations and place buy/sell orders on Binance Testnet.',
    },
    highlights: [
      {
        es: 'El LLM interpreta los resultados calculados en Python y decide la operación.',
        en: 'The LLM interprets the indicators computed in Python and decides the trade.',
      },
      {
        es: 'Lógica separada en piezas pequeñas siguiendo el principio de responsabilidad única.',
        en: 'Logic split into small pieces following the single responsibility principle.',
      },
    ],
    kind: 'ai',
    stack: ['Python', 'Ollama', 'LLM', 'Binance API'],
    repo: 'https://github.com/RamonTec/trading_bot',
    featured: true,
  },
  {
    id: 'pokedex',
    title: { es: 'Pokédex', en: 'Pokédex' },
    description: {
      es: 'Explorador de Pokémon con Next.js enfocado en optimizar la carga de imágenes para evitar sobrecarga.',
      en: 'Next.js Pokémon explorer focused on optimizing image loading to avoid overload.',
    },
    highlights: [
      {
        es: 'Loader de imágenes personalizado con next/image y scroll infinito.',
        en: 'Custom image loader with next/image and infinite scroll.',
      },
    ],
    kind: 'frontend',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MUI'],
    demo: 'https://pokedex-nextjs-rust.vercel.app',
    repo: 'https://github.com/RamonTec/pokedex-nextjs',
    featured: true,
  },
  {
    id: 'urano-jets',
    title: { es: 'Urano Jets', en: 'Urano Jets' },
    description: {
      es: 'Proyecto freelance para cliente real: sitio web construido con React, Material UI y TypeScript.',
      en: 'Freelance project for a real client: website built with React, Material UI and TypeScript.',
    },
    kind: 'client',
    stack: ['React', 'Material UI', 'TypeScript'],
    demo: 'https://urano-jets.vercel.app/',
    featured: true,
  },
  {
    id: 'wheelers',
    title: { es: 'Wheelers', en: 'Wheelers' },
    description: {
      es: 'API REST para gestionar colecciones de autos, con Clean Architecture, esquemas de base de datos propios y lógica de negocio desacoplada.',
      en: 'REST API to manage collectible cars, built with Clean Architecture, custom database schemas and decoupled business logic.',
    },
    kind: 'backend',
    stack: ['NestJS', 'TypeScript', 'Clean Architecture'],
  },
  {
    id: 'api-sales',
    title: { es: 'API de tienda virtual', en: 'Online store API' },
    description: {
      es: 'API REST para una tienda virtual con NestJS y MongoDB: módulos, validación y modelado de datos.',
      en: 'REST API for an online store with NestJS and MongoDB: modules, validation and data modeling.',
    },
    kind: 'backend',
    stack: ['NestJS', 'MongoDB', 'TypeScript', 'REST'],
    repo: 'https://github.com/RamonTec/api-sales',
  },
  {
    id: 'ruleta',
    title: { es: 'Ruleta', en: 'Roulette' },
    description: {
      es: 'Juego de ruleta interactivo con animación de giro y celebración con confetti.',
      en: 'Interactive roulette game with spin animation and a confetti celebration.',
    },
    kind: 'frontend',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind', 'canvas-confetti'],
    demo: 'https://ruleta-two.vercel.app/',
    repo: 'https://github.com/RamonTec/ruleta',
  },
  {
    id: 'orion-studios',
    title: { es: 'Orion Studios', en: 'Orion Studios' },
    description: {
      es: 'Sitio institucional para una empresa de desarrollo de software en Venezuela.',
      en: 'Company website for a software development studio in Venezuela.',
    },
    kind: 'client',
    stack: ['Vue', 'Quasar'],
    demo: 'https://orion-studios-ramontec.vercel.app/#/',
  },
  {
    id: 'camera-test',
    title: { es: 'Camera Test', en: 'Camera Test' },
    description: {
      es: 'Prueba técnica de uso de la cámara del dispositivo en React Native.',
      en: 'Technical test using the device camera in React Native.',
    },
    kind: 'mobile',
    stack: ['React Native', 'TypeScript'],
    repo: 'https://github.com/RamonTec/cameratest',
  },
  {
    id: 'youtube-clone',
    title: { es: 'YouTube Clone', en: 'YouTube Clone' },
    description: {
      es: 'Maquetación de la interfaz de YouTube con React y Tailwind.',
      en: 'YouTube interface layout built with React and Tailwind.',
    },
    kind: 'learning',
    stack: ['React', 'Tailwind'],
    demo: 'https://youtube-test-orpin.vercel.app/',
    repo: 'https://github.com/RamonTec/youtube-test',
  },
  {
    id: 'promedios',
    title: { es: 'Promedios Digitales', en: 'Digital Averages' },
    description: {
      es: 'Aplicación para calcular promedios académicos.',
      en: 'App to calculate academic grade averages.',
    },
    kind: 'learning',
    stack: ['Vue', 'Quasar'],
    demo: 'https://promedios.vercel.app/#/',
  },
  {
    id: 'todo-machine',
    title: { es: 'Todo Machine', en: 'Todo Machine' },
    description: {
      es: 'Gestor de tareas construido con React y componentes reutilizables.',
      en: 'Task manager built with React and reusable components.',
    },
    kind: 'learning',
    stack: ['React', 'CSS'],
    demo: 'https://todos-machine.vercel.app/',
    repo: 'https://github.com/RamonTec/todo-machine/tree/master',
  },
  {
    id: 'array-course',
    title: { es: 'Curso de arrays', en: 'Arrays course' },
    description: {
      es: 'Ejercicios prácticos con los métodos de arrays de JavaScript.',
      en: 'Hands-on exercises with JavaScript array methods.',
    },
    kind: 'learning',
    stack: ['JavaScript'],
    repo: 'https://github.com/RamonTec/array-course/tree/main',
  },
];

/* ───────────────────────── Stack ───────────────────────── */

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

export const stackGroups: { id: string; title: Text; items: Tech[] }[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'Vue', icon: SiVuedotjs, color: '#42b883' },
      { name: 'React Native', icon: SiReact, color: '#61dafb' },
      { name: 'React Query', icon: SiReactquery, color: '#ff4154' },
      { name: 'React Table', icon: SiReacttable, color: '#ff4154' },
      { name: 'React Hook Form', icon: SiReacthookform, color: '#ec5990' },
      { name: 'Zod', icon: SiZod, color: '#3e67b1' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Material UI', icon: SiMui, color: '#007fff' },
      { name: 'Quasar', icon: SiQuasar, color: '#1976d2' },
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend & datos', en: 'Backend & data' },
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'REST APIs', icon: TbApi, color: '#4eecb9' },
      { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
    ],
  },
  {
    id: 'quality',
    title: { es: 'Calidad & testing', en: 'Quality & testing' },
    items: [
      { name: 'Jest', icon: SiJest, color: '#c21325' },
      { name: 'Cypress', icon: SiCypress, color: '#69d3a7' },
      { name: 'JMeter', icon: SiApachejmeter, color: '#d22128' },
      { name: 'ESLint', icon: SiEslint, color: '#4b32c3' },
      { name: 'Husky', icon: TbDog, color: '#e5e5e5' },
    ],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas & IA', en: 'Tooling & AI' },
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Vite', icon: SiVite, color: '#a855f7' },
      { name: 'Linux', icon: SiLinux, color: '#fcc624' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Ollama', icon: SiOllama, color: '#ffffff' },
      { name: 'Binance API', icon: SiBinance, color: '#f0b90b' },
    ],
  },
];

export const softSkills: Text[] = [
  { es: 'Code review', en: 'Code review' },
  { es: 'Pair programming', en: 'Pair programming' },
  { es: 'Planificación de sprints', en: 'Sprint planning' },
  { es: 'Scrum', en: 'Scrum' },
  { es: 'Comunicación efectiva', en: 'Clear communication' },
  { es: 'Resolución de problemas', en: 'Problem solving' },
  { es: 'Pensamiento crítico', en: 'Critical thinking' },
  { es: 'Proactividad', en: 'Proactivity' },
];

/* ───────────────────────── Formación ───────────────────────── */

export const degree = {
  title: { es: 'TSU en Informática', en: 'Associate Degree in Computer Science' },
  period: '2020 — 2023',
  description: {
    es: 'Desarrollo y análisis de sistemas, programación orientada a objetos, bases de datos y redes.',
    en: 'Systems development and analysis, object-oriented programming, databases and networking.',
  },
};

export interface Course {
  title: Text;
  date: string; // YYYY-MM
  area: 'tech' | 'english';
}

export const courses: Course[] = [
  { area: 'tech', date: '2025-03', title: { es: 'TypeScript: POO y asincronía', en: 'TypeScript: OOP and async' } },
  { area: 'tech', date: '2025-03', title: { es: 'Curso de TypeScript', en: 'TypeScript course' } },
  { area: 'tech', date: '2025-02', title: { es: 'TypeScript: tipos y funciones avanzadas', en: 'TypeScript: advanced types and functions' } },
  { area: 'tech', date: '2023-04', title: { es: 'Frontend Developer', en: 'Frontend Developer' } },
  { area: 'tech', date: '2022-03', title: { es: 'Backend con Node.js: API REST con Express', en: 'Backend with Node.js: REST API with Express' } },
  { area: 'english', date: '2025-03', title: { es: 'Inglés A1 para principiantes', en: 'English A1 for beginners' } },
  { area: 'english', date: '2025-03', title: { es: 'Inglés A1: presente simple y vocabulario', en: 'English A1: present simple and vocabulary' } },
  { area: 'english', date: '2025-03', title: { es: 'Inglés A2: conectores y artículos', en: 'English A2: connectors and articles' } },
  { area: 'english', date: '2025-03', title: { es: 'Vocabulario y expresiones básicas', en: 'Basic vocabulary and expressions' } },
  { area: 'english', date: '2025-02', title: { es: 'Inglés A2: preguntas y respuestas comunes', en: 'English A2: common questions and answers' } },
  { area: 'english', date: '2025-01', title: { es: 'Inglés para usar preposiciones', en: 'English prepositions' } },
  { area: 'english', date: '2025-01', title: { es: 'Inglés para viajar', en: 'English for travel' } },
  { area: 'english', date: '2024-03', title: { es: 'Inglés práctico: entorno laboral', en: 'Practical English: the workplace' } },
  { area: 'english', date: '2024-03', title: { es: 'Inglés práctico: familia', en: 'Practical English: family' } },
];
