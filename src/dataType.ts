// @ts-ignore
import carolinaLogo from './assets/carolinaLogo.svg';
// @ts-ignore
import orinocoLogo from './assets/orinocoLogo.png';
// @ts-ignore
import qstLogo from './assets/qstLogo.svg';
// @ts-ignore
import promediosLogo from './assets/promediosLogo.png';
// @ts-ignore
import cobuildLogo from './assets/cobuildLogo.png';
// @ts-ignore
import reactLogo from './assets/logo.svg';
// @ts-ignore
import krakenLogo from './assets/kraken.png';
// @ts-ignore
import nuxtjsLogo from './assets/nuxtjs.png';
// @ts-ignore
import fanflexLogo from './assets/fanFlex.png';
// @ts-ignore
import manifestorLogo from './assets/logoManifestor.png';
// @ts-ignore
import vueLogo from './assets/vueLogo.png';


// @ts-ignore
import cypress from './assets/cypress.png';

// @ts-ignore
import css from './assets/css-3.svg';
// @ts-ignore
import angularLogo from './assets/angular.png';
// @ts-ignore
import laravelLogo from './assets/laravel.svg';

// @ts-ignore
import phpLogo from './assets/php-logo.svg';
// @ts-ignore
import graphqlLogo from './assets/graphql-logo.png';
// @ts-ignore
import nextjsLogo from './assets/nextjsLogo.png';
// @ts-ignore
import nodeLogo from './assets/nodeLogo.svg';
// @ts-ignore
import material from './assets/material.png';
// @ts-ignore
import typescript from './assets/typescript.png';
// @ts-ignore
import bootLogo from './assets/bootLogo.svg';

// @ts-ignore
import baseLogo from './assets/8base.svg';
// @ts-ignore
import mongo from './assets/mongo.svg';
// @ts-ignore
import firebase from './assets/firebaseLogo.png';

// @ts-ignore
import linux from './assets/linux.svg';
// @ts-ignore
import nestjs from './assets/nestjs.png';
// @ts-ignore
import redux from './assets/reduxLogo.png';
// @ts-ignore
import jest from './assets/jest.png';
import { useLanguage } from './utils/LanguageContext';
import { translations } from './components/translations';

export const useLanguageData = () => {
  const { language } = useLanguage();
  return translations[language];
};


export const ownProjectsData = [
  {
    title: 'Carolina Spa',
    description: 'Proyecto de practica',
    cargo: 'Front-end',
    skills: ['Quasar', 'Vue'],
    img: carolinaLogo,
    link: 'https://carolina-spa.vercel.app/#/'
  },
  {
    title: 'Todo Machine',
    description: 'Proyecto de practica',
    cargo: 'Front-end',
    skills: ['React', 'Html', 'Css'],
    img: reactLogo,
    link: 'https://todos-machine.vercel.app'
  },
  {
    title: 'Youtube Test',
    description: 'Proyecto de prueba tecnica',
    cargo: 'Front-end',
    skills: ['Nuxt', 'Vue', 'Tailwindcss'],
    img: nuxtjsLogo,
    link: 'https://youtube-test-orpin.vercel.app'
  },
  {
    title: 'Orion Studios',
    description: 'Agencia de desarrollo en Venezuela',
    cargo: 'Front-end',
    skills: ['Quasar', 'Vue'],
    img: vueLogo,
    link: 'https://orionstudio.tech/#/'
  },
  {
    title: 'Urano Jets',
    description: 'Proyecto Freelance',
    cargo: 'Front-end',
    skills: ['React', 'Material Ui', 'TypeScript'],
    img: reactLogo,
    link: 'https://urano-jets.vercel.app'
  },
  {
    title: 'FanFlex',
    description: 'Proyecto Freelance - Sitio web para reservas de restaurantes',
    cargo: 'Front-end',
    skills: ['React', 'Material Ui', 'TypeScript'],
    img: fanflexLogo,
    link: ''
  },
  {
    title: 'Manifestor',
    description: 'Proyecto Freelance - Sitio web con IA como asistente',
    cargo: 'Front-end',
    skills: ['React', 'Material Ui', 'TypeScript'],
    img: manifestorLogo,
    link: ''
  },
];

export const projectData = [
  {
    title: 'Qst Digital',
    description: 'Agencia de desarrollo en Mexico',
    cargo: 'Front-end developer',
    skills: ['React', 'Nextjs', 'Material Ui', 'Angular'],
    img: qstLogo,
    link: 'https://qst-digital.vercel.app'
  },
  {
    title: 'Kraken Tech Studios',
    description: 'Consultora de desarrallo de software',
    cargo: 'Front-end developer',
    skills: ['Nextjs', 'React', 'Redux', 'api rest', 'Responsive Design', 'TypeScript'],
    img: krakenLogo,
    link: ''
  },
  {
    title: 'Cobuild',
    description: 'Empresa de desarrollo de software',
    cargo: 'Full Stack Developer',
    skills: ['React', 'React Native', '8base', 'Aws', 'Material UI', 'Native Base', 'TypeScript'],
    img: cobuildLogo,
    link: ''
  },
  {
    title: 'Orinoco Dev',
    description: 'Pasarelas de pago para intercambio de monedas fiat y cripto',
    cargo: 'Full Stack Developer',
    skills: ['Quasar', 'Vue', 'Nodejs', 'MongoDB', 'Aws'],
    img: orinocoLogo,
    link: 'https://orinoco.io/#/',
  },
  {
    title: 'Promedios Digitales',
    description: 'Agencia de desarrollo en Colombia',
    cargo: 'Front-end developer',
    skills: ['Quasar', 'Vue', 'C-Panel'],
    img: promediosLogo,
    link: 'https://promedios.vercel.app'
  },
  {
    title: 'Software Fish',
    description: 'Agencia de desarrollo en Venezuela',
    cargo: 'Front-end developer',
    skills: ['Laravel', 'Vue'],
    img: reactLogo,
    link: ''
  },
];

export const techData = [
  {
    title: 'Css',
    img: css,
  },
  {
    title: 'React',
    img: reactLogo,
  },
  {
    title: 'Vue',
    img: vueLogo,
  },
  {
    title: 'Angular',
    img: angularLogo,
  },  
  {
    title: 'Php',
    img: phpLogo,
  },
  {
    title: 'Laravel',
    img: laravelLogo,
  },
  {
    title: 'Graphql',
    img: graphqlLogo,
  },
  {
    title: 'Next-Js',
    img: nextjsLogo,
  },
  {
    title: 'Node-Js',
    img: nodeLogo,
  },
  {
    title: 'Material - Ui',
    img: material,
  },
  {
    title: 'BootStrap',
    img: bootLogo,
  },
  {
    title: 'Quasar',
    img: firebase,
  },
  {
    title: 'MongoDb',
    img: mongo,
  },
  {
    title: '8Base',
    img: baseLogo,
  },
  {
    title: 'TypeScript',
    img: typescript,
  },
  {
    title: 'Firebase',
    img: firebase,
  },
  {
    title: 'Linux',
    img: linux,
  },
  {
    title: 'Nest-Js',
    img: nestjs,
  },
  {
    title: 'Cypress',
    img: cypress,
  },
  {
    title: 'Jest',
    img: jest,
  },
  {
    title: 'Nuxt',
    img: nuxtjsLogo,
  },
  {
    title: 'Redux',
    img: redux,
  },
]

export const experienceData = [
  {
    siteName: 'QS digital',
    fromTo: '2024 - Presente',
    roles: [
      {
        title: 'Frontend Developer',
        description: 'Desarrollo de aplicaciones web con React, Next.js y TypeScript'
      },
      {
        title: 'Scrum Master',
        description: 'Facilitación de ceremonias ágiles y mejora de procesos'
      }
    ]
  },
  {
    siteName: 'Kraken Tech Studios',
    fromTo: '2023 - 2023',
    roles: [
      {
        title: 'Frontend Developer',
        description: 'Desarrollo de aplicaciones web con React, Next.js, TypeScript y MUI'
      },
    ]
  },
  {
    siteName: 'CobuilLab',
    fromTo: '2022 - 2023',
    roles: [
      {
        title: 'Frontend Developer',
        description: 'Desarrollo de aplicaciones web con React, Next.js y TypeScript, integración de APIs y desarrollo de aplicaciones móviles con React Native'
      },
      {
        title: 'Backend Developer',
        description: 'Desarrollo de API Graphql y modelado de base de datos relacionales'
      },
    ]
  },
  {
    siteName: 'Orinco Dev',
    fromTo: '2019 - 2022',
    roles: [
      {
        title: 'Frontend Developer',
        description: 'Desarrollo de aplicaciones web con Vue, Quasar, integración de APIs y desarrollo de sitios web responsive'
      },
      {
        title: 'Backend Developer',
        description: 'Desarrollo de API Graphql y modelado de base de datos con MongoDB, integracion de servicios como S3, Ec2 y SNS de AWS'
      },
    ]
  },
]

export const useEducationData = () => {
  const languageData = useLanguageData();
  return [
    {
      title: 'TSU en Informatica',
      fromTo: '2020 - 2023',
      description: languageData.descriptionStudiesTsu
    }
  ];
};

export const useCoursesData = () => {
  const languageData = useLanguageData();
  return [
    {
      title: languageData.coursesTitles.course1.title,
      fromTo: languageData.coursesTitles.course1.fromTo,
    },
    {
      title: languageData.coursesTitles.course2.title,
      fromTo: languageData.coursesTitles.course2.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course3.title,
      fromTo: languageData.coursesTitles.course3.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course4.title,
      fromTo: languageData.coursesTitles.course4.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course5.title,
      fromTo: languageData.coursesTitles.course5.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course6.title,
      fromTo: languageData.coursesTitles.course6.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course7.title,
      fromTo: languageData.coursesTitles.course7.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course8.title,
      fromTo: languageData.coursesTitles.course8.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course9.title,
      fromTo: languageData.coursesTitles.course9.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course10.title,
      fromTo: languageData.coursesTitles.course10.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course11.title,
      fromTo: languageData.coursesTitles.course11.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course12.title,
      fromTo: languageData.coursesTitles.course12.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course13.title,
      fromTo: languageData.coursesTitles.course13.fromTo,
      
    },
    {
      title: languageData.coursesTitles.course14.title,
      fromTo: languageData.coursesTitles.course14.fromTo,
      
    },
  ];
}

export const projectsData = [
  {
    title: 'Orion Studios',
    description: 'Empresa de desarrollo de software en Venezuela',
    skills: ['VueJS', 'Quasar'],
    link: 'https://orion-studios-ramontec.vercel.app/#/'
  },
  {
    title: 'Youtube Clone',
    description: 'Proyecto de practica, clon inicial de Youtube',
    skills: ['TailwindCss', 'React'],
    link: 'https://youtube-test-orpin.vercel.app/',
    githubUrl: 'https://github.com/RamonTec/youtube-test',
  },
  {
    title: 'Practicas Promedios digitales',
    description: 'Proyecto de practica',
    skills: ['Vue', 'Quasar'],
    link: 'https://promedios.vercel.app/#/'
  },
  {
    title: 'Todo machine',
    description: 'Proyecto de practica con React',
    skills: ['React', 'HTML', 'CSS'],
    link: 'https://todos-machine.vercel.app/',
    githubUrl: 'https://github.com/RamonTec/todo-machine/tree/master'
  },
  {
    title: 'Urano Jets',
    description: 'Proyecto Freelance',
    skills: ['React', 'Material Ui', 'TypeScript'],
    link: 'https://urano-jets.vercel.app/'
  },
  {
    title: 'Elias Estrabao',
    description: 'Portafolio Web',
    skills: ['React', 'TailwindCss', 'TypeScript'],
    link: 'https://repositorio-react-seven.vercel.app/',
    githubUrl: 'https://github.com/RamonTec/repositorio-react',
    isFeatured: true,
  },
  {
    title: 'Camera Test',
    description: 'Prueba tecnica para el uso de la camara en react native',
    skills: ['React', 'React Native', 'TypeScript'],
    link: 'https://github.com/RamonTec/cameratest',
    githubUrl: 'https://github.com/RamonTec/cameratest',
    isFeatured: false,
  }
]
