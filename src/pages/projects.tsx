
import { courseData, projectsData } from '../dataType';
import { Course } from '../components/course';
import { Title } from '../components/title';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../components/translations';
import { useEffect } from 'react';
import { CardProjects } from '../components/cardProjects';

export default function ProjectsPage() {

  const { language } = useLanguage();
  const lang = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-2">
      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">
        <Title title={lang.projects} />
        <p className='text-white mt-5'>{lang.projectDescription}</p>
        {
          projectsData.map((edc, index) => ((
            <CardProjects 
              key={index}
              title={edc.title}  
              url={edc.link} 
              description={edc.description}
              skills={edc.skills}
            />
          )))
        }
      </div>
      <Link to='/'>
        <p className='text-white/80 text-center mt-5 text-sm cursor-pointer hover:text-amber-400'>
          {lang.home}
        </p>
      </Link>
    </div>
  );
}

