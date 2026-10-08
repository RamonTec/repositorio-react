import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { jobs } from '../content/data';
import { useLanguage } from '../i18n';
import Section from './Section';

/** Renderiza el texto resaltando lo que va entre **asteriscos**. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-medium text-mint-300">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function Experience() {
  const { lang, t, ui } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  const month = new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' });
  const formatDate = (ym?: string) => (ym ? month.format(new Date(`${ym}-02`)) : ui.experience.present);

  return (
    <Section id="experience" index="03" title={ui.experience.title} lead={ui.experience.lead}>
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
              className="relative grid gap-2 pb-14 pl-8 last:pb-0 sm:grid-cols-[9.5rem_1fr] sm:gap-0 sm:pl-0"
            >
              <p className="font-mono text-xs capitalize leading-relaxed text-zinc-500 sm:pr-8 sm:pt-1 sm:text-right">
                {formatDate(job.from)} —<br className="hidden sm:block" /> {formatDate(job.to)}
              </p>

              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 sm:left-[9.5rem] ${
                  current || i === 0 ? 'border-mint-400 bg-mint-400 shadow-[0_0_12px] shadow-mint-400' : 'border-ink-600 bg-ink-950'
                }`}
              />

              <div className="sm:pl-10">
                <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                <p className="mt-1 font-mono text-sm text-mint-400">{t(job.role)}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h.en} className="relative pl-5 text-sm leading-relaxed text-zinc-400">
                      <span aria-hidden className="absolute left-0 top-0 font-mono text-zinc-600">
                        ›
                      </span>
                      <Rich text={t(h)} />
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
