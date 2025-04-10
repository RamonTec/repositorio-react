
import CardTech from '../components/CardTech';
// @ts-ignore
import eliasDev from '../assets/eliasDev.png';
import Slider from "react-slick";
// @ts-ignore
// @ts-ignore
import css from '../assets/css-3.svg';
// @ts-ignore
import angularLogo from '../assets/angular.png';
// @ts-ignore
import graphqlLogo from '../assets/graphql-logo.png';
// @ts-ignore
import nextjsLogo from '../assets/nextjsLogo.png';

// @ts-ignore
import typescript from '../assets/typescript.png';
// @ts-ignore
import nestjs from '../assets/nestjs.png';
// @ts-ignore
import firebase from '../assets/firebaseLogo.png';

import AnimatedTitleList from '../components/AnimatedTitleList';
import { pdfBase64 } from '../const';
import { useCoursesData, useEducationData, experienceData, projectsData } from '../dataType';
import { Experience } from '../components/experience';
import { Education } from '../components/education';
import { Course } from '../components/course';
import { Skills } from '../components/skills';
import { Title } from '../components/title';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../components/translations';
import { useEffect } from 'react';
import { CardProjects } from '../components/cardProjects';

export default function Home() {
  const { language } = useLanguage();
  const lang = translations[language];
  
  const titles = [lang.javascript, lang.frontend, lang.backend, lang.fullstack];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
  };

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
    <div className="p-2">

      <div className='container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-11 font-mono gap-8 '>

        <div className='xs:col-span-1 p-2 sm:col-span-12 lg:col-span-3 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700'>
          <img className="hover:shadow-cyan-500/50 shadow-lg rounded-full w-60 h-60 mb-4 md:mb-0" src={eliasDev} alt='elias dev' />
          <p className="text-white font-bold text-xl mb-2 mt-5">Elias Estrabao</p>
          <AnimatedTitleList titles={titles} delay={2000} />
          <p className="text-white text-justify">
            { lang.makingYourIdeas }
          </p>
        </div>

        <div className="xs:col-span-12 sm:col-span-12 lg:col-span-8 flex flex-col justify-start text-white text-3xl ">
          
          <div className='container mx-auto grid grid-cols-1 gap-4'>
            
            <div className='lg:col-span-12 p-5 text-base sm:text-justify bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700'>
              <h3 className="text-white text-2xl mb-4"> { lang.welcome } </h3>
              <p>
              { lang.iM } {''}
                <span className="underline decoration-indigo-500">Elias Estrabao</span>{' '} { lang.a } {''}
                <span className="underline decoration-indigo-500">{ lang.aboutMe },</span>{  ' '}
                {' '}<span> {lang.creatingSystems}</span>
                {' '}<span className="underline decoration-indigo-500">precision</span>{''} {lang.inEach}
                {' '}<span className="underline decoration-indigo-500">{lang.line}</span>
              </p>
              
              <div className='mt-10 flex justify-center sm:justify-start'>
                <button onClick={downloadCV} className='bg-white text-black rounded-lg text-xl p-2'> { lang.download } </button>
              </div>
            </div>


          </div>

        </div>
        
      </div>

      <Skills />
    
      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">

        <Title title={ lang.experience } />

        {
          experienceData.map((exp, index) => ((
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
          title={projectsData[0].title}  
          url={projectsData[0].link} 
          description={projectsData[0].description}
          skills={projectsData[0].skills}
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
