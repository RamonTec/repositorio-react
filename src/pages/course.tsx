
import { courseData } from '../dataType';
import { Course } from '../components/course';
import { Title } from '../components/title';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../components/translations';

export default function CoursePage() {

  const { language } = useLanguage();
  const lang = translations[language];

  return (
    <div className="p-2">
      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">
        <Title title={lang.courses} />
        {
          courseData.map((edc, index) => ((
            <Course 
              key={index}
              title={edc.title}  
              fromTo={edc.fromTo} 
              description={edc.description}
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

