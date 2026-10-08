import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { HiCheck, HiOutlineClipboard, HiOutlineEnvelope, HiPaperAirplane } from 'react-icons/hi2';
import { profile } from '../content/data';
import { useLanguage } from '../i18n';
import { reveal } from './Section';

const empty = { name: '', email: '', message: '', company: '' };

export default function Contact() {
  const { ui } = useLanguage();
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success(ui.contact.success);
      setForm(empty);
    } catch (error) {
      console.error(error);
      toast.error(ui.contact.error.replace('{email}', profile.email), { duration: 6000 });
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast.success(ui.contact.copied);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    { label: 'WhatsApp', href: profile.socials.whatsapp, icon: FaWhatsapp },
    { label: 'Telegram', href: profile.socials.telegram, icon: FaTelegram },
    { label: 'LinkedIn', href: profile.socials.linkedin, icon: FaLinkedin },
  ];

  return (
    <section id="contact" className="container-page py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="card relative grid gap-10 overflow-hidden p-6 sm:p-10 lg:grid-cols-2"
      >
        <div aria-hidden className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-mint-400/10 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />

        <div className="relative">
          <motion.p variants={reveal} className="mb-3 font-mono text-sm text-mint-400">
            <span className="text-zinc-600">{'// '}</span>05 · contact
          </motion.p>
          <motion.h2 variants={reveal} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {ui.contact.title}
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-zinc-400">
            {ui.contact.lead}
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-950/60 p-2 pl-4">
            <HiOutlineEnvelope className="h-5 w-5 shrink-0 text-mint-400" />
            <a href={`mailto:${profile.email}`} className="min-w-0 flex-1 truncate font-mono text-sm text-zinc-200 hover:text-white">
              {profile.email}
            </a>
            <button onClick={copyEmail} className="btn-ghost px-3 py-1.5" aria-label={ui.contact.copy} title={ui.contact.copy}>
              {copied ? <HiCheck className="h-4 w-4 text-mint-400" /> : <HiOutlineClipboard className="h-4 w-4" />}
            </button>
          </motion.div>

          <motion.p variants={reveal} className="mt-8 font-mono text-xs uppercase tracking-wider text-zinc-500">
            {ui.contact.direct}
          </motion.p>
          <motion.ul variants={reveal} className="mt-3 flex flex-wrap gap-2">
            {channels.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.form variants={reveal} onSubmit={onSubmit} className="relative space-y-4">
          {/* Honeypot anti-spam: invisible para personas */}
          <input type="text" name="company" value={form.company} onChange={onChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm text-zinc-400">{ui.contact.name}</span>
              <input name="name" value={form.name} onChange={onChange} required maxLength={100} autoComplete="name" className="input" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-zinc-400">{ui.contact.email}</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required maxLength={200} autoComplete="email" className="input" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm text-zinc-400">{ui.contact.message}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
              maxLength={5000}
              placeholder={ui.contact.placeholder}
              className="input resize-none"
            />
          </label>
          <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-wait disabled:opacity-70">
            {sending ? ui.contact.sending : ui.contact.send}
            <HiPaperAirplane className={`h-4 w-4 transition-transform ${sending ? 'translate-x-1 -translate-y-1' : ''}`} />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
