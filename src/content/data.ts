import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import {
  SiAngular,
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiQuasar,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

export type Lang = 'es' | 'en';
export type Text = Record<Lang, string>;

/* ───────────────────────── Perfil ───────────────────────── */

export const profile = {
  name: 'Elias Estrabao',
  /** Año en que empezó a trabajar profesionalmente (Orinoco Dev). */
  careerStart: 2019,
  /** Muestra el indicador "Abierto a oportunidades" en el hero. */
  available: true,
  email: 'elias.estrabao@gmail.com',
  cv: '/cv-elias-estrabao.pdf',
  avatar: '/avatar.webp',
  socials: {
    github: 'https://github.com/RamonTec',
    linkedin: 'https://www.linkedin.com/in/elias-estrabao-1ba902140/',
    telegram: 'https://t.me/Ereq22',
    whatsapp: 'https://api.whatsapp.com/send?phone=584248850265',
  },
};

export const yearsOfExperience = new Date().getFullYear() - profile.careerStart;

/* ───────────────────────── Proyectos ───────────────────────── */

export type ProjectKind = 'client' | 'frontend' | 'backend' | 'mobile' | 'learning';

export interface Project {
  id: string;
  title: Text;
  description: Text;
  kind: ProjectKind;
  stack: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
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
    id: 'api-sales',
    title: { es: 'API de tienda virtual', en: 'Online store API' },
    description: {
      es: 'API REST para una tienda virtual con NestJS y MongoDB: módulos, validación y modelado de datos.',
      en: 'REST API for an online store with NestJS and MongoDB: modules, validation and data modeling.',
    },
    kind: 'backend',
    stack: ['NestJS', 'MongoDB', 'TypeScript', 'REST'],
    repo: 'https://github.com/RamonTec/api-sales',
    featured: true,
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
    featured: true,
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
    kind: 'frontend',
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
    kind: 'frontend',
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

/* ───────────────────────── Experiencia ───────────────────────── */

export interface Job {
  company: string;
  from: number;
  to?: number;
  roles: { title: Text; description: Text }[];
  stack: string[];
}

export const jobs: Job[] = [
  {
    company: 'QS Digital',
    from: 2024,
    roles: [
      {
        title: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
        description: {
          es: 'Desarrollo de aplicaciones web con React, Angular, Next.js, Bootstrap y TypeScript.',
          en: 'Web application development with React, Angular, Next.js, Bootstrap and TypeScript.',
        },
      },
      {
        title: { es: 'Scrum Master', en: 'Scrum Master' },
        description: {
          es: 'Facilitación de ceremonias ágiles y mejora continua de procesos del equipo.',
          en: 'Facilitating agile ceremonies and continuously improving team processes.',
        },
      },
    ],
    stack: ['React', 'Angular', 'Next.js', 'TypeScript', 'Bootstrap', 'Scrum'],
  },
  {
    company: 'Kraken Tech Studios',
    from: 2023,
    to: 2023,
    roles: [
      {
        title: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
        description: {
          es: 'Desarrollo de aplicaciones web con React, Next.js, TypeScript y MUI.',
          en: 'Web application development with React, Next.js, TypeScript and MUI.',
        },
      },
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'MUI'],
  },
  {
    company: 'Cobuild Lab',
    from: 2022,
    to: 2023,
    roles: [
      {
        title: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
        description: {
          es: 'Aplicaciones web con React, Next.js y TypeScript, integración de APIs y apps móviles con React Native.',
          en: 'Web apps with React, Next.js and TypeScript, API integration and mobile apps with React Native.',
        },
      },
      {
        title: { es: 'Desarrollador Backend', en: 'Backend Developer' },
        description: {
          es: 'Desarrollo de APIs GraphQL y modelado de bases de datos relacionales.',
          en: 'GraphQL API development and relational database modeling.',
        },
      },
    ],
    stack: ['React', 'Next.js', 'React Native', 'GraphQL', 'SQL'],
  },
  {
    company: 'Orinoco Dev',
    from: 2019,
    to: 2022,
    roles: [
      {
        title: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
        description: {
          es: 'Aplicaciones web con Vue y Quasar, integración de APIs y sitios responsivos.',
          en: 'Web apps with Vue and Quasar, API integration and responsive websites.',
        },
      },
      {
        title: { es: 'Desarrollador Backend', en: 'Backend Developer' },
        description: {
          es: 'APIs GraphQL y modelado con MongoDB, integrando servicios de AWS (S3, EC2, SNS).',
          en: 'GraphQL APIs and MongoDB modeling, integrating AWS services (S3, EC2, SNS).',
        },
      },
    ],
    stack: ['Vue', 'Quasar', 'GraphQL', 'MongoDB', 'AWS'],
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
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Material UI', icon: SiMui, color: '#007fff' },
      { name: 'Quasar', icon: SiQuasar, color: '#1976d2' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend & datos', en: 'Backend & data' },
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
    ],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tooling' },
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Vite', icon: SiVite, color: '#a855f7' },
    ],
  },
];

export const softSkills: Text[] = [
  { es: 'Trabajo en equipo', en: 'Teamwork' },
  { es: 'Comunicación efectiva', en: 'Clear communication' },
  { es: 'Resolución de problemas', en: 'Problem solving' },
  { es: 'Proactividad', en: 'Proactivity' },
  { es: 'Adaptabilidad', en: 'Adaptability' },
  { es: 'Pensamiento crítico', en: 'Critical thinking' },
  { es: 'Manejo del tiempo', en: 'Time management' },
  { es: 'Empatía', en: 'Empathy' },
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
