
import { Link } from "react-router-dom";
import { translations } from "./translations";
import { useLanguage } from '../utils/LanguageContext';

function Header() {
  const { language, setLanguage } = useLanguage();

  const lang = translations[language];
  const Navbar = () => {
    return (
      <header>
        <nav className="bg-transparent mt-4 p-5">
          
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    
    
            <div className="md:order-1">
              <Link to="/" className="text-white text-lg font-bold">EE</Link>
            </div>
    
            <div className="md:order-2 mt-4 md:mt-0 flex sm:flex-row space-x-4">

              <div className="flex justify-end">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                  className="bg-gray-800 text-white rounded"
                >
                  <option value="en">{lang.english}</option>
                  <option value="es">{lang.spanish}</option>
                </select>
              </div>

              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/elias-estrabao-1ba902140/" className="text-white underline decoration-blue-500 hover:text-gray-300">
                Linkedin
              </a>
    
              <a rel="noreferrer" target="_blank" href="https://t.me/Ereq22" className="text-white hover:text-gray-300 underline decoration-pink-500">
                Telegram
              </a>
    
              <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=584248850265" className="text-white hover:text-gray-300 underline decoration-blue-500">
                WhatsApp
              </a>
    
              <a rel="noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqgkHTFWpZwZZfNTxjnKXXJCHGmKrBGFlNzdrfrRsKwbxbQRWLvGGDmpKWxLRpMmgFvVnl" className="text-white hover:text-gray-300 underline decoration-pink-500">
                Gmail
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default Header;
