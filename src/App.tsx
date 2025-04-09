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
          <span className="relative z-10 px-4">Experiencia</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
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

      <div className='container mx-auto text-center mt-8 font-mono'>
        <h3 className="text-white text-3xl mb-10 font-semibold relative inline-block mx-auto">
          <span className="relative z-10 px-4">Proyectos</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
        </h3>
        <p className='text-white mx-auto'>
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

      <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">
  
        <h3 className="text-white text-3xl mb-10  font-semibold relative inline-block mx-auto">
          <span className="relative z-10 px-4">Experiencia</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
        </h3>
        
        <div className="space-y-6 text-start">

          <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-all w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl text-purple-400 font-medium">QS Digital</h4>
                <p className="text-white/80">2022 - Presente</p>
              </div>
            </div>
            
            <div className="space-y-3 pl-16">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-purple-400"></div>
                <div>
                  <p className="font-medium text-white">Frontend Developer</p>
                  <p className="text-white/80 text-sm">Desarrollo de aplicaciones web con React, Next.js y TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-purple-400"></div>
                <div>
                  <p className="font-medium text-white">Scrum Master</p>
                  <p className="text-white/80 text-sm">Facilitación de ceremonias ágiles y mejora de procesos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="p-3 bg-pink-900/30 rounded-lg group-hover:bg-pink-900/50 transition-all w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl text-pink-400 font-medium">Kraken Tech Studios</h4>
                <p className="text-white/80">2020 - 2022</p>
              </div>
            </div>
            
            <div className="space-y-3 pl-16">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-pink-400"></div>
                <div>
                  <p className="font-medium text-white">Frontend Developer</p>
                  <p className="text-white/80 text-sm">Desarrollo de interfaces con Angular y Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-white text-3xl mt-16 mb-10 font-semibold relative inline-block mx-auto">
          <span className="relative z-10 px-4">Educación</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></span>
        </h3>
        
        <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="p-3 bg-orange-900/30 rounded-lg group-hover:bg-orange-900/50 transition-all w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl text-amber-400 font-medium">TSU en Informática</h4>
              <p className="text-white/80">2018 - 2020</p>
              <p className="text-white/80 mt-2">Especialización en desarrollo de software y sistemas informáticos</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
