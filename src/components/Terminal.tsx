import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../content/data';
import { useLanguage } from '../i18n';

type Step = { cmd: string; out: React.ReactNode };

export default function Terminal() {
  const { lang, ui } = useLanguage();

  const steps: Step[] = [
    {
      cmd: 'whoami',
      out: (
        <div className="flex items-center gap-3 py-1">
          <img
            src={profile.avatar}
            alt={profile.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg border border-ink-600 object-cover"
          />
          <div>
            <p className="text-white">{profile.name}</p>
            <p className="text-zinc-500">{ui.hero.roles[0]} · Venezuela</p>
          </div>
        </div>
      ),
    },
    {
      cmd: 'cat stack.json',
      out: (
        <pre className="whitespace-pre-wrap text-zinc-400">
          {'{\n  '}
          <span className="text-rose-400">"core"</span>
          {': ['}
          <span className="text-mint-300">"React", "Next.js", "TypeScript"</span>
          {'],\n  '}
          <span className="text-rose-400">"backend"</span>
          {': ['}
          <span className="text-mint-300">"NestJS", "Node.js", "PostgreSQL"</span>
          {'],\n  '}
          <span className="text-rose-400">"agile"</span>
          {': '}
          <span className="text-mint-300">"Scrum · PM"</span>
          {'\n}'}
        </pre>
      ),
    },
    {
      cmd: './say-hi.sh',
      out: (
        <a href="#contact" className="text-mint-400 underline-offset-4 hover:underline">
          → {lang === 'es' ? '¿Hablamos? Estoy a un mensaje de distancia' : "Let's talk — I'm one message away"}
        </a>
      ),
    },
  ];

  const reduce = useReducedMotion();
  const [step, setStep] = useState(0); // comando que se está escribiendo
  const [typed, setTyped] = useState(0); // caracteres escritos de ese comando
  const done = reduce || step >= steps.length;

  useEffect(() => {
    if (done) return;
    const cmd = steps[step].cmd;
    const id =
      typed < cmd.length
        ? window.setTimeout(() => setTyped(typed + 1), 55 + Math.random() * 60)
        : window.setTimeout(() => {
            setStep(step + 1);
            setTyped(0);
          }, 650);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, typed, done]);

  const visible = reduce ? steps.length : step + 1;

  return (
    <div className="card overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-850 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">~/elias — zsh</span>
      </div>
      <div className="min-h-[340px] space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        {steps.slice(0, visible).map((s, i) => {
          const isCurrent = !done && i === step;
          return (
            <div key={s.cmd}>
              <p>
                <span className="text-mint-400">➜</span> <span className="text-sky-400">~</span>{' '}
                <span className="text-zinc-100">{isCurrent ? s.cmd.slice(0, typed) : s.cmd}</span>
                {isCurrent && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-zinc-300" />}
              </p>
              {!isCurrent && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  {s.out}
                </motion.div>
              )}
            </div>
          );
        })}
        {done && (
          <p>
            <span className="text-mint-400">➜</span> <span className="text-sky-400">~</span>{' '}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-zinc-300" />
          </p>
        )}
      </div>
    </div>
  );
}
