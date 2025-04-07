import React from 'react';

interface CardProps {
  imgSrc: string;
  title: string;
}

const CardTech: React.FC<CardProps> = ({ imgSrc, title }) => {
  return (
    <div className="relative sm:w-40 md:w-40 lg:w-3/3 xl:w-3/3 p-2 sm:p-0">
      <div className="bg-transparent rounded-lg overflow-hidden">
        <div className="group relative">
          <img className="w-40 h-40 object-scale-down object-center" src={imgSrc} alt={title} />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white p-4">
                <h1 className="text-xl font-bold">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTech;