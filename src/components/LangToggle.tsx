import { motion } from 'framer-motion';
import type { Lang } from '../content/data';
import { useLanguage } from '../i18n';

const options: Lang[] = ['es', 'en'];

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div role="radiogroup" aria-label="Language" className="flex rounded-lg border border-ink-700 bg-ink-900 p-0.5 font-mono text-xs">
      {options.map((option) => (
        <button
          key={option}
          role="radio"
          aria-checked={lang === option}
          onClick={() => setLang(option)}
          className={`relative rounded-md px-2.5 py-1 uppercase transition-colors ${
            lang === option ? 'text-ink-950' : 'text-zinc-400 hover:text-white'
          }`}
        >
          {lang === option && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 rounded-md bg-mint-400"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative">{option}</span>
        </button>
      ))}
    </div>
  );
}
