import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export const useLanguageData = () => {
  const { language } = useLanguage();
  return translations[language];
};


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
    },
    {
      title: languageData.freeProjects.arrayCourse.title,
      skills: languageData.freeProjects.arrayCourse.skills,
      description: languageData.freeProjects.arrayCourse.description,
      link: languageData.freeProjects.arrayCourse.link,
      isFeatured: languageData.freeProjects.arrayCourse.isFeatured,
      githubUrl: languageData.freeProjects.arrayCourse.githubUrl,
    },
    {
      title: languageData.freeProjects.apiSales.title,
      skills: languageData.freeProjects.apiSales.skills,
      description: languageData.freeProjects.apiSales.description,
      link: languageData.freeProjects.apiSales.link,
      isFeatured: languageData.freeProjects.apiSales.isFeatured,
      githubUrl: languageData.freeProjects.apiSales.githubUrl,
    },
  ];
}

