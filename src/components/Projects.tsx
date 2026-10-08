import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import { projects, type Project, type ProjectKind } from '../content/data';
import { useLanguage } from '../i18n';
import Section, { reveal } from './Section';
import SpotlightCard from './SpotlightCard';

const kindColor: Record<ProjectKind, string> = {
  client: '#4eecb9',
  frontend: '#61dafb',
  backend: '#f472b6',
  mobile: '#a78bfa',
  learning: '#fbbf24',
};

function hostOf(url?: string) {
  if (!url) return '';
  return new URL(url).host.replace(/^www\./, '');
}

function Links({ project }: { project: Project }) {
  const { ui } = useLanguage();
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-zinc-200 transition-colors hover:text-mint-400"
        >
          {ui.work.demo}
          <HiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-mint-400"
        >
          <FaGithub className="h-3.5 w-3.5" />
          {ui.work.code}
        </a>
      )}
    </div>
  );
}

/** Vista previa generada: una ventana de navegador con la "firma" del proyecto. */
function Preview({ project, large }: { project: Project; large?: boolean }) {
  const { t } = useLanguage();
  const color = kindColor[project.kind];
  const title = t(project.title);

  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
      <div className="flex items-center gap-1.5 border-b border-ink-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-600" />
        <span className="h-2 w-2 rounded-full bg-ink-600" />
        <span className="h-2 w-2 rounded-full bg-ink-600" />
        <span className="ml-2 truncate rounded bg-ink-850 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
          {hostOf(project.demo ?? project.repo)}
        </span>
      </div>
      <div className={`relative flex items-end p-5 ${large ? 'h-56 sm:h-72' : 'h-40'}`}>
        <div
          className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${color}33, transparent 55%), radial-gradient(circle at 10% 90%, ${color}1a, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${color}22 1px, transparent 1px), linear-gradient(90deg, ${color}22 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to top, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to top, transparent, black)',
          }}
        />
        <span
          aria-hidden
          className="absolute -right-2 -top-6 select-none font-mono font-semibold leading-none transition-transform duration-700 group-hover:-translate-x-2"
          style={{ color: `${color}26`, fontSize: large ? '11rem' : '7rem' }}
        >
          {title.charAt(0)}
        </span>
        <div className="relative font-mono text-xs">
          <p style={{ color }}>{'<' + project.stack[0].replace(/\s/g, '') + ' />'}</p>
          <p className="mt-1 text-zinc-600">{project.stack.slice(1).join(' · ')}</p>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ project, wide }: { project: Project; wide?: boolean }) {
  const { t, ui } = useLanguage();
  return (
    <motion.div variants={reveal} className={wide ? 'md:col-span-2' : ''}>
      <SpotlightCard className="h-full">
        <div className={`relative grid h-full gap-6 p-5 sm:p-6 ${wide ? 'md:grid-cols-[1.3fr_1fr] md:items-center' : ''}`}>
          <Preview project={project} large={wide} />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: kindColor[project.kind] }}>
                {ui.work.kinds[project.kind]}
              </span>
              <span className="text-ink-600">/</span>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">{ui.work.featured}</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">{t(project.title)}</h3>
            <p className="text-zinc-400">{t(project.description)}</p>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
            <Links project={project} />
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

// forwardRef: AnimatePresence en modo popLayout necesita medir el elemento.
const CompactCard = forwardRef<HTMLLIElement, { project: Project }>(function CompactCard({ project }, ref) {
  const { t, ui } = useLanguage();
  return (
    <motion.li
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
    >
      <SpotlightCard className="h-full">
        <div className="relative flex h-full flex-col gap-3 p-5">
          <div className="flex items-center justify-between">
            <span className="h-2 w-2 rounded-full" style={{ background: kindColor[project.kind] }} title={ui.work.kinds[project.kind]} />
            <span className="font-mono text-[11px] text-zinc-600">{hostOf(project.demo ?? project.repo)}</span>
          </div>
          <h3 className="text-lg font-medium text-white">{t(project.title)}</h3>
          <p className="flex-1 text-sm text-zinc-400">{t(project.description)}</p>
          <p className="font-mono text-xs text-zinc-500">{project.stack.join(' · ')}</p>
          <Links project={project} />
        </div>
      </SpotlightCard>
    </motion.li>
  );
});

export default function Projects() {
  const { ui } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const kinds = [...new Set(rest.map((p) => p.kind))];
  const [filter, setFilter] = useState<ProjectKind | 'all'>('all');
  const visible = filter === 'all' ? rest : rest.filter((p) => p.kind === filter);

  return (
    <Section id="work" index="01" title={ui.work.title} lead={ui.work.lead}>
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} project={p} wide={i === 0} />
        ))}
      </motion.div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-mono text-sm text-zinc-400">
          <span className="text-mint-400">$</span> ls {ui.work.more.toLowerCase().replace(/\s/g, '-')}/
        </h3>
        <div role="tablist" className="flex flex-wrap gap-1 rounded-lg border border-ink-700 bg-ink-900 p-1">
          {(['all', ...kinds] as const).map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={filter === k}
              onClick={() => setFilter(k)}
              className={`relative rounded-md px-3 py-1 text-xs transition-colors ${
                filter === k ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {filter === k && (
                <motion.span layoutId="project-filter" className="absolute inset-0 rounded-md bg-ink-700" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{k === 'all' ? ui.work.all : ui.work.kinds[k]}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.ul layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <CompactCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
