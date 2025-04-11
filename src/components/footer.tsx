import { translations } from '../utils/translations';
import { useLanguage } from '../utils/LanguageContext';

function Footer() {

  const { language } = useLanguage();
  const lang = translations[language];
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/elias-estrabao-1ba902140/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/Ereq22"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            Telegram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=584248850265"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            WhatsApp
          </a>
          <a
            href="mailto:elias.estrabao@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400"
          >
            Gmail
          </a>
        </div>
  
        <p className="text-sm text-gray-400">
          {lang.developedBy} <span className="text-white font-bold">Elias Estrabao</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;