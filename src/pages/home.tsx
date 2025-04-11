

// @ts-ignore
import eliasDev from '../assets/eliasDev.png';

import AnimatedTitleList from '../components/AnimatedTitleList';
import { pdfBase64 } from '../const';
import { useCoursesData, useEducationData, usePrjectdata, useExperienceData } from '../utils/dataType';
import { Experience } from '../components/experience';
import { Education } from '../components/education';
import { Course } from '../components/course';
import { Skills } from '../components/skills';
import { Title } from '../components/title';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';
import { useEffect } from 'react';
import { CardProjects } from '../components/cardProjects';

export default function Home() {
  const { language } = useLanguage();
  const lang = translations[language];
  
  const titles = [lang.javascript, lang.frontend, lang.backend, lang.fullstack];

  const downloadCV = (): void => {
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${pdfBase64}`;
    link.download = 'Your-Name-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono">
        
        <div className="lg:col-span-4 flex flex-col items-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all rounded-xl border-2 border-gray-700 shadow-lg group">
          <div className="relative mb-6">
            <img 
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-600 group-hover:border-cyan-400 transition-all shadow-lg group-hover:shadow-cyan-500/40"
              src={eliasDev} 
              alt="Elias Estrabao - Software Developer" 
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-full border border-gray-600">
              <AnimatedTitleList 
                titles={titles} 
                delay={2000} 
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2 text-center">Elias Estrabao</h1>
          
          <p className="text-gray-300 text-center mb-6">
            {lang.makingYourIdeas}
          </p>
          
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all rounded-xl border-2 border-gray-700 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">
              {lang.welcome}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {lang.iM}{' '}
              <span className="text-cyan-400 font-semibold">Elias Estrabao</span>{' '}
              {' '}
              <span className="text-cyan-400 font-semibold">{lang.aboutMe}</span>,{' '}
              {lang.creatingSystems}{' '}
              <span className="text-cyan-400 font-semibold">precision</span>{' '}
              {lang.inEach}{' '}
              <span className="text-cyan-400 font-semibold">{lang.line}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={downloadCV}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {lang.download}
              </button>
              
            </div>
          </div>
      
        </div>
      </div>

      <Skills />
    
      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">

        <Title title={ lang.experience } />

        {
          useExperienceData().map((exp, index) => ((
            <Experience 
              key={index}
              siteName={exp.siteName}
              roles={exp.roles}            
              fromTo={exp.fromTo} 
            />
          )))
        }

      </div>

      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">

        <Title title={lang.education} />
        
        {

          useEducationData().map((edc: { title: string; fromTo: string; description: string; }, index: number) => ((
            <Education 
              key={index}
              title={edc.title}  
              fromTo={edc.fromTo} 
              description={edc.description}
            />
          )))

        }

      </div>

      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">

        <Title title={lang.courses} />
        
        <Course 
          title={useCoursesData()[0].title}  
          fromTo={useCoursesData()[0].fromTo} 
        />

        <Link to='/courses'>
          <p className='text-white/80 mt-5 text-sm cursor-pointer hover:text-amber-400'>
            {lang.viewMoreCourses}
          </p>
        </Link>
        

      </div>

      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">

        <Title title={lang.projects} />
        <p className='text-white mt-5'>{lang.projectDescription}</p>
        
        <CardProjects 
          title={usePrjectdata()[0].title}  
          url={usePrjectdata()[0].link} 
          description={usePrjectdata()[0].description}
          skills={usePrjectdata()[0].skills}
        />

        <Link to='/projects'>
          <p className='text-white/80 mt-5 text-sm cursor-pointer hover:text-amber-400'>
            {lang.viewMoreProjects}
          </p>
        </Link>
        

      </div>
    

    </div>
  );
}
