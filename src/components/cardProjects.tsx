

export interface ICardProjectsProps {
  title: string;
  url: string;
  description?: string;
  skills: string[];
  imageUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export const CardProjects: React.FC<ICardProjectsProps> = ({ 
  description, 
  url, 
  title, 
  skills, 
  imageUrl,
  githubUrl,
  isFeatured
}) => {
  return (
    <div className={`text-start border mt-5 border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group relative overflow-hidden ${
      isFeatured ? "ring-2 ring-amber-400/30" : ""
    }`}>
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-bl-lg">
          Featured
        </div>
      )}
      
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {imageUrl ? (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-700">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-all w-12 h-12 flex items-center justify-center">
              
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          )}
          
          <div>
            <h4 className="text-xl text-blue-400 font-medium group-hover:text-blue-300 transition-colors">{title}</h4>
            <div className="flex gap-3 mt-1">
              <a 
                href={url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/80 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Live Demo
              </a>
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/80 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
        
        {description && (
          <p className="text-white/80 mt-2">{description}</p>
        )}
        
        {skills.length > 0 && (
          <div className="mt-4">
            <h5 className="text-sm font-medium text-white/70 mb-2">Built with:</h5>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-700/50 text-blue-400/90 text-xs rounded-full border border-gray-600 hover:bg-blue-900/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}