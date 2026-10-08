import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { profile } from '../content/data';

export const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: FaLinkedin },
  { label: 'Telegram', href: profile.socials.telegram, icon: FaTelegram },
  { label: 'WhatsApp', href: profile.socials.whatsapp, icon: FaWhatsapp },
  { label: 'Email', href: `mailto:${profile.email}`, icon: HiOutlineEnvelope },
];

export default function Socials() {
  return (
    <ul className="flex items-center gap-1">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:text-mint-400"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
