import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import CoursePage from './pages/course';
import ProjectsPage from './pages/projects';
import { LanguageProvider } from './utils/LanguageContext';
import Footer from './components/footer';
import ContactForm from './components/contactForm';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="p-2">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <ContactForm />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;