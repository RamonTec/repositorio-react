import { experienceData } from "../dataType"

export const Experience: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">
      <h3 className="text-white text-3xl mb-10  font-semibold relative inline-block mx-auto">
        <span className="relative z-10 px-4">Experiencia</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
      </h3>
      
      <div className="space-y-6 text-start">

        {
          experienceData.map((experience, index) => (
            <div key={index} className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-all w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl text-purple-400 font-medium">{experience.siteName}</h4>
                  <p className="text-white/80">{experience.fromTo}</p>
                </div>
              </div>

              {
                experience.roles.map((role, index) => (
                  <div key={index} className="space-y-3 pl-16">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-purple-400"></div>
                      <div>
                        <p className="font-medium text-white">{role.title}</p>
                        <p className="text-white/80 text-sm">{role.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              
              
            </div>
          ))
        }

      </div>
    </div>
  )
}