
function Header() {

  const Navbar = () => {
    return (
      <header>
        <nav className="bg-transparent mt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    
            <div className="md:order-1">
              <a href="/" className="text-white text-lg font-bold">EE</a>
            </div>
    
            <div className="md:order-2 mt-4 md:mt-0 flex sm:flex-row space-x-4">

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
