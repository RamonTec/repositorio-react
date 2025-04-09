import React from 'react';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, technologies }) => {
  return (
    <div className="relative sm:w-80 md:w-80 lg:w-3/3 xl:w-3/3 p-4">
      <div className="bg-transparent hover:shadow-cyan-500/50 shadow-lg rounded-lg overflow-hidden border-2">
        <div className="group relative">
          <img className="w-full h-60 object-scale-down object-center p-2" src={imgSrc} alt={title} />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white p-4">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="mt-2 text-ellipsis text-white">{description}</p>
                <div className="mt-4">
                  <h2 className="text-sm font-semibold text-white">Technologies used:</h2>
                  <ul className="mt-1">
                    {technologies.map((tech, index) => (
                      <li key={index} className="text-xs text-white">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;