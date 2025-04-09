import React from 'react';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, technologies }) => {
  return (
    <div className=" sm:w-80 md:w-80 lg:w-3/3 xl:w-3/3 p-4">
      <div className="bg-blue-900/30 bg-gradient-to-br hover:shadow-cyan-500/50 from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group shadow-lg rounded-lg overflow-hidden border-2 border-gray-700">
        <img className="w-full h-60 object-scale-down object-center p-2" src={imgSrc} alt={title} />
        <div className=" inset-0 ">
          <div className=" inset-0 flex items-center justify-center">
            <div className="text-white p-4">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="mt-2 text-ellipsis text-white">{description}</p>
              <div className="mt-4">
                <h2 className="text-sm font-semibold text-white">Technologies used:</h2>
                <ul className="mt-1">
                  {technologies.map((tech, index) => (
                    <li key={index} className="text-md text-white">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;