import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { courses, degree, type Course } from '../content/data';
import { useLanguage } from '../i18n';
import Section, { reveal } from './Section';

const COLLAPSED = 5;

export default function Education() {
  const { lang, t, ui } = useLanguage();
  const [area, setArea] = useState<Course['area']>('tech');
  const [expanded, setExpanded] = useState(false);

  const list = courses.filter((c) => c.area === area);
  const shown = expanded ? list : list.slice(0, COLLAPSED);
  const monthFormat = new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' });

  const selectArea = (next: Course['area']) => {
    setArea(next);
    setExpanded(false);
  };

  return (
    <Section id="education" index="04" title={ui.education.title} lead={ui.education.lead}>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="card relative overflow-hidden p-6"
        >
          <div aria-hidden className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mint-400/10 blur-3xl" />
          <HiOutlineAcademicCap className="h-8 w-8 text-mint-400" />
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-zinc-500">{ui.education.degree}</p>
          <h3 className="mt-1 text-2xl font-semibold text-white">{t(degree.title)}</h3>
          <p className="mt-1 font-mono text-sm text-zinc-500">{degree.period}</p>
          <p className="relative mt-4 text-zinc-400">{t(degree.description)}</p>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="card p-6"
        >
          <div role="tablist" className="mb-4 flex gap-1 border-b border-ink-700">
            {(['tech', 'english'] as const).map((a) => {
              const count = courses.filter((c) => c.area === a).length;
              return (
                <button
                  key={a}
                  role="tab"
                  aria-selected={area === a}
                  onClick={() => selectArea(a)}
                  className={`relative px-3 pb-3 text-sm transition-colors ${area === a ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}
                >
                  {ui.education[a]} <span className="font-mono text-xs text-zinc-600">({count})</span>
                  {area === a && <motion.span layoutId="edu-tab" className="absolute inset-x-0 -bottom-px h-0.5 bg-mint-400" />}
                </button>
              );
            })}
          </div>

          <motion.ul layout className="divide-y divide-ink-800">
            <AnimatePresence initial={false} mode="popLayout">
              {shown.map((c) => (
                <motion.li
                  key={area + c.title.en}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="text-zinc-200">{t(c.title)}</span>
                  <span className="shrink-0 font-mono text-xs capitalize text-zinc-500">
                    {monthFormat.format(new Date(`${c.date}-02`))}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {list.length > COLLAPSED && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 font-mono text-xs text-mint-400 hover:text-mint-300"
            >
              {expanded ? `− ${ui.education.showLess}` : `+ ${ui.education.showAll} (${list.length})`}
            </button>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
