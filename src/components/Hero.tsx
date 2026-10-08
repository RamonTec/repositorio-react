import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2';
import { jobs, profile, projects, yearsOfExperience } from '../content/data';
import { useLanguage } from '../i18n';
import { useTypewriter } from '../hooks/useTypewriter';
import CountUp from './CountUp';
import Socials from './Socials';
import Terminal from './Terminal';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t, ui } = useLanguage();
  const role = useTypewriter(ui.hero.roles);

  const stats = [
    { value: yearsOfExperience, suffix: '+', label: ui.hero.stats.years },
    { value: jobs.length, suffix: '', label: ui.hero.stats.companies },
    { value: projects.length, suffix: '', label: ui.hero.stats.projects },
  ];

  return (
    <section id="top" className="container-page relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.available && (
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/5 px-3 py-1 text-xs text-mint-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
              </span>
              {ui.hero.available}
            </motion.div>
          )}

          <motion.p variants={item} className="font-mono text-sm text-zinc-500">
            {ui.hero.hello}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 h-8 font-mono text-lg text-mint-400 sm:text-xl" aria-label={ui.hero.roles.join(', ')}>
            <span className="text-zinc-600">{'> '}</span>
            {role}
            <span className="ml-0.5 inline-block h-5 w-2.5 translate-y-1 animate-pulse bg-mint-400" />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {ui.hero.pitch.replace('{years}', String(yearsOfExperience))}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              {ui.hero.ctaWork}
              <HiArrowDown className="h-4 w-4" />
            </a>
            <a href={t(profile.cv)} download="CV Elias Estrabao.pdf" className="btn-ghost">
              <HiArrowDownTray className="h-4 w-4" />
              {ui.hero.ctaCv}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <Socials />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-16 grid grid-cols-3 gap-4 border-t border-ink-800 pt-8 sm:max-w-xl"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-semibold text-white sm:text-4xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </dd>
            <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
