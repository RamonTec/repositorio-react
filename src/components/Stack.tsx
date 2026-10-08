import { motion } from 'framer-motion';
import { softSkills, stackGroups } from '../content/data';
import { useLanguage } from '../i18n';
import Section, { reveal } from './Section';

export default function Stack() {
  const { t, ui } = useLanguage();

  return (
    <Section id="stack" index="03" title={ui.stack.title} lead={ui.stack.lead}>
      <div className="grid gap-5 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <motion.div
            key={group.id}
            className={`card p-6 ${group.id === 'frontend' ? 'lg:row-span-2' : ''}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.04 } } }}
          >
            <motion.h3 variants={reveal} className="mb-5 font-mono text-sm text-zinc-400">
              <span className="text-mint-400">#</span> {t(group.title)}
            </motion.h3>
            <ul className="grid grid-cols-2 gap-2">
              {group.items.map(({ name, icon: Icon, color }) => (
                <motion.li
                  key={name}
                  variants={reveal}
                  className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-ink-700 hover:bg-ink-850"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--c)]"
                    style={{ '--c': color } as React.CSSProperties}
                  />
                  <span className="text-sm text-zinc-300 group-hover:text-white">{name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          className="card relative overflow-hidden p-6 lg:col-span-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        >
          <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-rose-400/10 blur-3xl" />
          <motion.h3 variants={reveal} className="mb-3 font-mono text-sm text-zinc-400">
            <span className="text-rose-400">#</span> {ui.stack.how}
          </motion.h3>
          <motion.p variants={reveal} className="relative max-w-2xl text-zinc-300">
            {ui.stack.howLead}
          </motion.p>
          <ul className="relative mt-5 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <motion.li
                key={skill.en}
                variants={reveal}
                className="rounded-full border border-ink-700 px-3 py-1 text-sm text-zinc-400 transition-colors hover:border-rose-400/50 hover:text-white"
              >
                {t(skill)}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
