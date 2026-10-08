import { HiArrowUp } from 'react-icons/hi2';
import { profile } from '../content/data';
import { useLanguage } from '../i18n';
import Socials from './Socials';

export default function Footer() {
  const { ui } = useLanguage();

  return (
    <footer className="border-t border-ink-800">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500">
          {ui.footer.built} <span className="text-zinc-300">{profile.name}</span> · {new Date().getFullYear()}
        </p>
        <Socials />
        <a href="#top" className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-mint-400">
          {ui.footer.top}
          <HiArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
