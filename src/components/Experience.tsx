import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { jobs } from '../content/data';
import { useLanguage } from '../i18n';
import Section from './Section';

export default function Experience() {
  const { t, ui } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <Section id="experience" index="02" title={ui.experience.title} lead={ui.experience.lead}>
      <ol ref={ref} className="relative ml-2 sm:ml-0">
        {/* Línea base + línea que se "dibuja" con el scroll */}
        <div aria-hidden className="absolute bottom-0 left-0 top-2 w-px bg-ink-700 sm:left-[9.5rem]" />
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-0 top-2 w-px origin-top bg-gradient-to-b from-mint-400 to-rose-400 sm:left-[9.5rem]"
          style={{ scaleY }}
        />

        {jobs.map((job, i) => {
          const current = job.to === undefined;
          return (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[9.5rem_1fr] sm:gap-0 sm:pl-0"
            >
              <p className="font-mono text-sm text-zinc-500 sm:pr-8 sm:pt-0.5 sm:text-right">
                {job.from === job.to ? job.from : `${job.from} — ${job.to ?? ui.experience.present}`}
              </p>

              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 sm:left-[9.5rem] ${
                  current ? 'border-mint-400 bg-mint-400 shadow-[0_0_12px] shadow-mint-400' : 'border-ink-600 bg-ink-950'
                }`}
              />

              <div className="sm:pl-10">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                  {job.company}
                  {current && (
                    <span className="rounded-full border border-mint-400/30 bg-mint-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mint-300">
                      {ui.experience.present}
                    </span>
                  )}
                </h3>
                <ul className="mt-4 space-y-4">
                  {job.roles.map((role) => (
                    <li key={t(role.title)} className="border-l-2 border-ink-700 pl-4 transition-colors hover:border-mint-400/60">
                      <p className="font-medium text-zinc-100">{t(role.title)}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{t(role.description)}</p>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
