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

export const useExperienceData = () => {
  const languageData = useLanguageData();
  return [
    {
      siteName: languageData.workExperience.qsDigtial.siteName,
      fromTo: languageData.workExperience.qsDigtial.fromTo,
      roles: [
        {
          title: languageData.workExperience.qsDigtial.roles[0].title,
          description: languageData.workExperience.qsDigtial.roles[0].description,
        },
        {
          title: languageData.workExperience.qsDigtial.roles[1].title,
          description: languageData.workExperience.qsDigtial.roles[1].description,
        }
      ]
    },
    {
      siteName: languageData.workExperience.krakenTech.siteName,
      fromTo: languageData.workExperience.krakenTech.fromTo,
      roles: [
        {
          title: languageData.workExperience.krakenTech.roles[0].title,
          description: languageData.workExperience.krakenTech.roles[0].description,
        },
      ]
    },
    {
      siteName: languageData.workExperience.cobuildLab.siteName,
      fromTo: languageData.workExperience.cobuildLab.fromTo,
      roles: [
        {
          title: languageData.workExperience.cobuildLab.roles[0].title,
          description: languageData.workExperience.cobuildLab.roles[0].description,
        },
        {
          title: languageData.workExperience.cobuildLab.roles[1].title,
          description: languageData.workExperience.cobuildLab.roles[1].description,
        },
      ]
    },
    {
      siteName: languageData.workExperience.orinocoDev.siteName,
      fromTo: languageData.workExperience.orinocoDev.fromTo,
      roles: [
        {
          title: languageData.workExperience.orinocoDev.roles[0].title,
          description: languageData.workExperience.orinocoDev.roles[0].description,
        },
        {
          title: languageData.workExperience.orinocoDev.roles[1].title,
          description: languageData.workExperience.orinocoDev.roles[1].description,
        },
      ]
    },
  ];
};

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

export const usePrjectdata = () => {
  const languageData = useLanguageData();
  return [
    {
      title: languageData.freeProjects.projectOrion.title,
      skills: languageData.freeProjects.projectOrion.skills,
      description: languageData.freeProjects.projectOrion.description,
      link: languageData.freeProjects.projectOrion.link,
    },
    {
      title: languageData.freeProjects.projectYoutube.title,
      skills: languageData.freeProjects.projectYoutube.skills,
      description: languageData.freeProjects.projectYoutube.description,
      link: languageData.freeProjects.projectYoutube.link,
    },
    {
      title: languageData.freeProjects.projectPromedios.title,
      skills: languageData.freeProjects.projectPromedios.skills,
      description: languageData.freeProjects.projectPromedios.description,
      link: languageData.freeProjects.projectPromedios.link,
    },
    {
      title: languageData.freeProjects.projectTodoMachine.title,
      skills: languageData.freeProjects.projectTodoMachine.skills,
      description: languageData.freeProjects.projectTodoMachine.description,
      link: languageData.freeProjects.projectTodoMachine.link,
      githubUrl: languageData.freeProjects.projectTodoMachine.githubUrl,
    },
    {
      title: languageData.freeProjects.projectTodoMachine.title,
      skills: languageData.freeProjects.projectTodoMachine.skills,
      description: languageData.freeProjects.projectTodoMachine.description,
      link: languageData.freeProjects.projectTodoMachine.link,
      githubUrl: languageData.freeProjects.projectTodoMachine.githubUrl,
    },
    {
      title: languageData.freeProjects.projectUrano.title,
      skills: languageData.freeProjects.projectUrano.skills,
      description: languageData.freeProjects.projectUrano.description,
      link: languageData.freeProjects.projectUrano.link,
    },
    {
      title: languageData.freeProjects.repoElias.title,
      skills: languageData.freeProjects.repoElias.skills,
      description: languageData.freeProjects.repoElias.description,
      link: languageData.freeProjects.repoElias.link,
      githubUrl: languageData.freeProjects.repoElias.githubUrl,
      isFeatured: languageData.freeProjects.repoElias.isFeatured,
    },
    {
      title: languageData.freeProjects.projectCameraTest.title,
      skills: languageData.freeProjects.projectCameraTest.skills,
      description: languageData.freeProjects.projectCameraTest.description,
      link: languageData.freeProjects.projectCameraTest.link,
      githubUrl: languageData.freeProjects.projectCameraTest.githubUrl,
    },
    {
      title: languageData.freeProjects.projectRuleta.title,
      skills: languageData.freeProjects.projectRuleta.skills,
      description: languageData.freeProjects.projectRuleta.description,
      link: languageData.freeProjects.projectRuleta.link,
      githubUrl: languageData.freeProjects.projectRuleta.githubUrl,
      isFeatured: languageData.freeProjects.projectRuleta.isFeatured,
    }
  ];
}

