import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

/** Las rutas antiguas (/projects, /courses) ahora son secciones de una sola página. */
const legacyRoutes: Record<string, string> = {
  '/projects': 'work',
  '/courses': 'education',
};

export default function App() {
  useEffect(() => {
    const section = legacyRoutes[window.location.pathname];
    if (!section) return;
    window.history.replaceState(null, '', `/#${section}`);
    requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView());
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#111516',
            color: '#e4e4e7',
            border: '1px solid #232a2b',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#4eecb9', secondary: '#07090a' } },
        }}
      />
    </MotionConfig>
  );
}
