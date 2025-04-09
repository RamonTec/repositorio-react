export interface ItitleProps {
  title: string
}

export const Title: React.FC<ItitleProps> = ({ title }) => {
  return (
    <h3 className="text-white text-3xl font-semibold relative inline-block mx-auto">
      <span className="relative z-10 px-4"> {title} </span>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
    </h3>
  )
}