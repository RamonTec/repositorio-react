import React, { useState } from 'react';
import Card from './components/Card';
import CardTech from './components/CardTech';
import { projectData, techData } from './dataType';
// @ts-ignore
import eliasDev from './assets/eliasDev.png';

function App() {

  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'skillsTech'>('about');

  const handleTabClick = (tab: 'about' | 'projects' | 'skillsTech') => {
    setActiveTab(tab);
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
  

  const Navbar = () => {
    return (
      <nav className="bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" style={{ color: '#BEBFBD' }} className="mt-5 text-lg font-bold">Elias Estrabao</a>
        </div>
      </nav>
    );
  };

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="flex space-x-4">
          <Tab label="About" onClick={() => handleTabClick('about')} isActive={activeTab === 'about'} />
          <Tab
            label="Projects"
            onClick={() => handleTabClick('projects')}
            isActive={activeTab === 'projects'}
          />
          <Tab
            label="Skills Tech"
            onClick={() => handleTabClick('skillsTech')}
            isActive={activeTab === 'skillsTech'}
          />
        </div>

        <div className="transition-all duration-300">
          <TabContent label="" isActive={activeTab === 'about'}>

          <div className="grid grid-cols-2 justify-items-center items-center gap-2 mt-20">
            <div>
              <img className="hover:shadow-cyan-500/50 shadow-lg rounded-full w-60 h-60 object-center mb-4 md:mb-0 md:mr-4 lg:mr-4 xl:mr-4" src={eliasDev} alt='elias dev' />
            </div>

            <div className='text-white'>
              <p>
                Como{' '}
                <span className="font-bold underline decoration-indigo-500">desarrollador de software</span> apasionado y dedicado, me
                especializo en la creación de soluciones{' '}
                <span className="font-bold underline decoration-sky-500">robustas</span> y{' '}
                <span className="font-bold underline decoration-sky-500">eficientes</span>. Mi experiencia abarca diversas
                tecnologías, incluyendo{' '}
                <span className="font-bold underline decoration-sky-500">PHP</span> y{' '}
                <span className="font-bold underline decoration-sky-500">JavaScript</span>, así como frameworks como{' '}
                <span className="font-bold underline decoration-sky-500">Bootstrap</span>,{' '}
                <span className="font-bold underline decoration-sky-500">React</span>,{' '}
                <span className="font-bold underline decoration-sky-500">Vue</span> y{' '}
                <span className="font-bold underline decoration-sky-500">Angular</span>.
              </p>
              <br />
              <p>
                En mi trayectoria, he destacado en el ámbito de{' '}
                <span className="font-bold underline decoration-pink-500">testing</span> y{' '}
                <span className="font-bold underline decoration-pink-500">calidad</span>, con habilidades tanto en{' '}
                <span className="font-bold underline decoration-pink-500">QA</span> manual como en{' '}
                <span className="font-bold underline decoration-pink-500">automatización</span>. Mi enfoque es enfrentar retos de
                manera proactiva, siempre comprometido con la{' '}
                <span className="font-bold decoration-indigo-500">excelencia</span> en cada proyecto que abordo.
                </p>
                <br />
                <p>
                  Con una ética de trabajo basada en la{' '}
                  <span className="font-bold underline decoration-pink-500">dedicación</span> y el{' '}
                  <span className="font-bold underline decoration-pink-500">compromiso</span>, estoy constantemente buscando aprender
                  y crecer profesionalmente. Abordo cada proyecto con entusiasmo, enfrentando desafíos
                  con determinación y entregando soluciones de alta calidad.
                </p>
                <br />
                <p>
                  ¡Estoy emocionado por explorar nuevas oportunidades y contribuir al éxito de proyectos
                  innovadores!
                </p>
            </div>

          </div>
            
          </TabContent>

          <TabContent label="" isActive={activeTab === 'projects'}>
            <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {
                projectData.map((item, key) => (
                  <Card
                    key={key} // Make sure to provide a unique key for each Card
                    imgSrc={item.img} // Use the actual image source from your data
                    title={item.title}
                    description={item.description}
                    technologies={item.skills}
                  />
                ))
              }
            </div>
          </TabContent>

          <TabContent label="" isActive={activeTab === 'skillsTech'}>
            <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
              {
                techData.map((item, key) => (
                  <CardTech
                    key={key} // Make sure to provide a unique key for each Card
                    imgSrc={item.img} // Use the actual image source from your data
                    title={item.title}
                  />
                ))
              }
            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default App;
