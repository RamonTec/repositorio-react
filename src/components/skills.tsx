import React from "react";
import { Title } from "./title";
import { useLanguage } from "../utils/LanguageContext";
import { translations } from "../utils/translations";

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const lang = translations[language];
  
  return (
    <div className="container mx-auto mt-12 px-4 text-center font-mono max-w-4xl">
      
      <Title title={ lang.skills } />
      
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-8">
        
        <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all group">
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-all">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <p className="text-2xl text-blue-400 font-medium"> { lang.tech } </p>
          </div>
          
            <div className="grid grid-cols-1 gap-4 text-start">
            {[
              { name: "Angular"},
              { name: "Next.js"},
              { name: "TypeScript" },
              { name: "MongoDB" },
              { name: "NestJS" },
              { name: "GraphQL" },
              { name: "CSS" },
              { name: "Firebase" },
              { name: "Tailwind" }
            ].map((skill, index) => (
              <div key={index} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-white/90">{skill.name}</span>
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
            <p className="text-2xl text-green-400 font-medium"> { lang.soft } </p>
          </div>
          
          <div className="space-y-4">
            {[
              lang.teamwork,
              lang.proactivity,
              lang.communication,
              lang.adaptability,
              lang.problemSolving,
              lang.creativity,
              lang.empathy,
              lang.responsibility,
              lang.timeManagement,
              lang.criticalThinking
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
  )
}