import React, { useState } from 'react';
import Card from './components/Card';
import CardTech from './components/CardTech';
import Header from './components/Header';
import { projectData, techData } from './dataType';
// @ts-ignore
import eliasDev from './assets/eliasDev.png';
import Slider from "react-slick";
// @ts-ignore
// @ts-ignore
import css from './assets/css-3.svg';
// @ts-ignore
import angularLogo from './assets/angular.png';
// @ts-ignore
import graphqlLogo from './assets/graphql-logo.png';
// @ts-ignore
import nextjsLogo from './assets/nextjsLogo.png';

// @ts-ignore
import typescript from './assets/typescript.png';
// @ts-ignore
import nestjs from './assets/nestjs.png';
// @ts-ignore
import mongo from './assets/mongo.svg';
// @ts-ignore
import firebase from './assets/firebaseLogo.png';
import AnimatedTitleList from './components/AnimatedTitleList';

function App() {

  const titles = ['Frontend', 'Scrum master', 'Backend', 'Fullstack'];

  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'skillsTech' | 'contact'>('about');

  const handleTabClick = (tab: 'about' | 'projects' | 'skillsTech' | 'contact') => {
    setActiveTab(tab);
  };

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

  interface TabProps {
    label: string;
    onClick: () => void;
    isActive: boolean;
  }
  
  const Tab: React.FC<TabProps> = ({ label, onClick, isActive }) => {
    return (
      <button
        className={`px-4 py-2 transition-all duration-300 ${
          isActive
            ? 'bg-blue-500 text-white'
            : 'text-blue-500 hover:bg-blue-100 hover:text-blue-700'
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  interface TabContentProps {
    label: string;
    children: React.ReactNode;
    isActive: boolean;
  }
  
  const TabContent: React.FC<TabContentProps> = ({ label, children, isActive }) => {
    return (
      <div
        className={`mt-4 transition-all duration-300 ${
          isActive ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        {children}
      </div>
    );
  };
  

  return (
    <div className="">
      <Header />

      <div className='container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-11 font-mono gap-8 p-2'>

        <div className='xs:col-span-1 sm:col-span-12 lg:col-span-3 flex flex-col items-center justify-center border-2 rounded-xl p-5'>
          <img className="hover:shadow-cyan-500/50 shadow-lg rounded-full w-60 h-60 mb-4 md:mb-0 " src={eliasDev} alt='elias dev' />
          <p className="text-white font-bold text-xl mb-2 mt-5">Elias Estrabao</p>
          <AnimatedTitleList titles={titles} delay={2000} />
          <p className="text-white text-justify">
            Haciendo tus ideas realidad.
          </p>
        </div>

        <div className="xs:col-span-12 sm:col-span-12 lg:col-span-8 flex flex-col justify-start text-white text-3xl ">
          
          <div className='container mx-auto grid grid-cols-1 gap-4'>
            
            <div className='lg:col-span-12 border-2 rounded-lg p-5 text-base sm:text-justify'>
              <h3 className="text-white text-2xl mb-4">Hola!</h3>
              <p>
              Soy {''}
                <span className="underline decoration-indigo-500">Elias Estrabao</span>{' '}un {''}
                <span className="underline decoration-indigo-500">desarrollador de software.</span>{''}
                {' '}<span>Creando sistemas a medida con</span>
                {' '}<span className="underline decoration-indigo-500">precision</span>{''} y en cada
                {' '}<span className="underline decoration-indigo-500">linea de codigo</span>
              </p>
              
              <div className='mt-10 flex justify-center sm:justify-start'>
                <button className='bg-white text-black rounded-lg text-xl p-2'>Descargar CV</button>
              </div>
            </div>

            <div className='lg:col-span-12 border-2 rounded-lg p-5'>
              <Slider className='slider-container' {...settings}>
                <div>
                  <CardTech imgSrc={angularLogo} title='Angular' />
                </div>
                <div>
                  <CardTech imgSrc={nextjsLogo} title='NextJs' />
                </div>
                <div>
                  <CardTech imgSrc={typescript} title='TypeScript' />
                </div>
                <div>
                  <CardTech imgSrc={mongo} title='Mongo' />
                </div>
                <div>
                  <CardTech imgSrc={nestjs} title='NestJs' />
                </div>
                <div>
                  <CardTech imgSrc={graphqlLogo} title='GraphQl' />
                </div>
                <div>
                  <CardTech imgSrc={css} title='Css' />
                </div>
                <div>
                  <CardTech imgSrc={firebase} title='Firebases' />
                </div>
              </Slider>
            </div>

          </div>

        </div>
        
      </div>

    </div>
  );
}

export default App;
