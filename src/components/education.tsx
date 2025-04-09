export const Education: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 px-4 text-center font-mono max-w-4xl">
      <h3 className="text-white text-3xl mt-16 mb-10 font-semibold relative inline-block mx-auto">
        <span className="relative z-10 px-4">Educación</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
      </h3>
      
      <div className="text-start border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
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
            <p className="text-white/80 mt-2">Bases y fundamentos en desarrollo de sistemas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
