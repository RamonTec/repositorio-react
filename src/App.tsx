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

      <div className="container mx-auto mt-12 px-4 text-center font-mono max-w-4xl">
        <h3 className="text-white text-3xl mb-10 font-semibold relative inline-block mx-auto">
          <span className="relative z-10 px-4">Habilidades</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-2xl text-blue-400 font-medium">Técnicas</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-start">
              {[
                { name: "Angular", level: "90%" },
                { name: "Next.js", level: "85%" },
                { name: "TypeScript", level: "95%" },
                { name: "MongoDB", level: "80%" },
                { name: "NestJS", level: "75%" },
                { name: "GraphQL", level: "70%" },
                { name: "CSS", level: "90%" },
                { name: "Firebase", level: "85%" },
                { name: "Tailwind", level: "95%" }
              ].map((skill, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-white/90">{skill.name}</span>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="bg-blue-400 h-1.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="p-2 bg-green-900/30 rounded-lg group-hover:bg-green-900/50 transition-all">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-2xl text-green-400 font-medium">Blandas</p>
            </div>
            
            <div className="space-y-4">
              {[
                "Trabajo en equipo",
                "Resolución de problemas",
                "Adaptabilidad",
                "Comunicación efectiva",
                "Creatividad",
                "Empatía",
                "Responsabilidad",
                "Proactividad",
                "Autogestión"
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-white/90">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-8 font-mono'>
        <h3 className="text-white text-2xl mb-4 text-center mt-10">Trabajos y proyectos</h3>
        <p className='text-white text-center mx-auto'>
          Mira algunos de mis proyectos de practicas personales y algunos sitios en donde he trabajado, <br />
          proyectos realizados en mi tiempo libre y algunos proyectos profesionales. <br />
          Todos los proyectos fueron realizados con esfuerzo y dedicacion, buscando siempre a mejorar.
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

    </div>
  );
}

export default App;
