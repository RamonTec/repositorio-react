import React from 'react';
import CardTech from './components/CardTech';
import Header from './components/Header';
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
import { pdfBase64 } from './const';
import { projectData } from './dataType';
import Card from './components/Card';
import { Grid } from '@mui/material';
import { Experience } from './components/experience';
import { Education } from './components/education';
import { Course } from './components/course';
import { Skills } from './components/skills';

function App() {

  const titles = ['Frontend', 'Scrum master', 'Backend', 'Fullstack'];

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
  

  return (
    <div className="p-2">
      <Header />

      <div className='container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-11 font-mono gap-8 '>

        <div className='xs:col-span-1 p-2 sm:col-span-12 lg:col-span-3 flex flex-col items-center justify-center bg-blue-900/30 bg-gradient-to-br hover:shadow-cyan-500/50 from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700'>
          <img className="hover:shadow-cyan-500/50 shadow-lg rounded-full w-60 h-60 mb-4 md:mb-0" src={eliasDev} alt='elias dev' />
          <p className="text-white font-bold text-xl mb-2 mt-5">Elias Estrabao</p>
          <AnimatedTitleList titles={titles} delay={2000} />
          <p className="text-white text-justify">
            Haciendo tus ideas realidad.
          </p>
        </div>

        <div className="xs:col-span-12 sm:col-span-12 lg:col-span-8 flex flex-col justify-start text-white text-3xl ">
          
          <div className='container mx-auto grid grid-cols-1 gap-4'>
            
            <div className='lg:col-span-12 p-5 text-base sm:text-justify bg-blue-900/30 bg-gradient-to-br hover:shadow-cyan-500/50 from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700'>
              <h3 className="text-white text-2xl mb-4">Hola!</h3>
              <p>
              Soy {''}
                <span className="underline decoration-indigo-500">Elias Estrabao</span>{' '}un {''}
                <span className="underline decoration-indigo-500">desarrollador de software.</span>{''}
                {' '}<span>Creando sistemas a medida con</span>
                {' '}<span className="underline decoration-indigo-500">precision</span>{''} en cada
                {' '}<span className="underline decoration-indigo-500">linea de codigo</span>
              </p>
              
              <div className='mt-10 flex justify-center sm:justify-start'>
                <button onClick={downloadCV} className='bg-white text-black rounded-lg text-xl p-2'>Descargar CV</button>
              </div>
            </div>

            <div className='lg:col-span-12 p-5 bg-blue-900/30 bg-gradient-to-br hover:shadow-cyan-500/50 from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700'>
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

      <Skills />

      <div className='container mx-auto text-center mt-8 font-mono'>
        <h3 className="text-white text-3xl mb-10 font-semibold relative inline-block mx-auto">
          <span className="relative z-10 px-4">Empresas</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
        </h3>
        <p className='text-white mx-auto'>
          Lugares donde he trabajado y aprendido.
        </p>
        <Grid container justifyContent='center'>
          {
            projectData.map((project, index) => (
              <Grid item xs={12} sm={5} md={4} lg={3} xl={3} key={index}>
                <Card
                  imgSrc={project.img} 
                  title={project.title} 
                  key={index} 
                  description={project.description} 
                  technologies={project.skills}
                />
              </Grid>
            ))
          }
          
        </Grid>
      </div>

      <Experience />
      <Education />
      <Course />

    </div>
  );
}

export default App;
