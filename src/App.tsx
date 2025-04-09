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
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${pdfBase64}`;
    link.download = 'Your-Name-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className="">
      <Header />

      <div className='container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-11 font-mono gap-8 '>

        <div className='xs:col-span-1 sm:col-span-12 lg:col-span-3 flex flex-col items-center justify-center border-2 rounded-xl'>
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
                {' '}<span className="underline decoration-indigo-500">precision</span>{''} en cada
                {' '}<span className="underline decoration-indigo-500">linea de codigo</span>
              </p>
              
              <div className='mt-10 flex justify-center sm:justify-start'>
                <button onClick={downloadCV} className='bg-white text-black rounded-lg text-xl p-2'>Descargar CV</button>
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

      <div className='container mx-auto mt-8 grid grid-cols-1 font-mono'>

        <h3 className="text-white text-2xl mb-4 text-center">Habilidades</h3>
        
        <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-white'>
          <div className='border-2 rounded-lg p-5'>
            <p className='text-center text-2xl'>Tecnicas</p>
            <ul>
              <li>Angular</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>NestJs</li>
              <li>GraphQL</li>
              <li>CSS</li>
              <li>Firebase</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className='border-2 rounded-lg p-5'>
            <p className='text-center text-2xl'>Blandas</p>
            <ul>
              <li>Trabajo en equipo</li>
              <li>Resolucion de problemas</li>
              <li>Adaptabilidad</li>
              <li>Comunicación</li>
              <li>Creatividad</li>
              <li>Empatia</li>
              <li>Responsabilidad</li>
              <li>Proactividad</li>
              <li>Autogestion</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className='container mx-auto mt-8 font-mono'>
        <h3 className="text-white text-2xl mb-4 text-center">Trabajos y proyectos</h3>
        <p className='text-white text-center mx-auto'>
          Mira algunos de mis proyectos de practicas personales y algunos sitios en donde he trabajado, <br />
          proyectos realizados en mi tiempo libre y algunos proyectos profesionales. <br />
          Todos los proyectos fueron realizados con esfuerzo y dedicacion, buscando siempre a mejorar.
        </p>
        <Grid container justifyContent='center'>
          {
            projectData.map((project, index) => (
              <Grid item xs={10} sm={5} md={4} lg={3} xl={3} key={index}>
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
