import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useLanguage } from '../i18n';
import { useActiveSection } from '../hooks/useActiveSection';
import LangToggle from './LangToggle';

const sections = ['work', 'experience', 'stack', 'education', 'contact'] as const;
// Se observa también el hero para que ningún enlace quede activo arriba del todo.
const observed = ['top', ...sections];

export default function Nav() {
  const { ui } = useLanguage();
  const active = useActiveSection(observed);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-ink-800 bg-ink-950/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group font-mono text-sm text-zinc-300" aria-label="Elias Estrabao — inicio">
          <span className="text-mint-400">~/</span>
          <span className="transition-colors group-hover:text-white">elias</span>
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-mint-400" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-ink-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{ui.nav[id]}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            className="rounded-md p-1.5 text-zinc-300 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-page overflow-hidden md:hidden"
          >
            {sections.map((id, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.04 * i } }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-ink-800 py-3 text-zinc-300 last:border-0"
                >
                  <span className="font-mono text-xs text-mint-400">0{i + 1}</span>
                  {ui.nav[id]}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
