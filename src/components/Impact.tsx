import { motion } from 'framer-motion';
import { impact } from '../content/data';
import { useLanguage } from '../i18n';
import CountUp from './CountUp';
import Section, { reveal } from './Section';
import SpotlightCard from './SpotlightCard';

export default function Impact() {
  const { t, ui } = useLanguage();

  return (
    <Section id="impact" index="01" title={ui.impact.title} lead={ui.impact.lead}>
      <motion.ul
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {impact.map((item) => (
          <motion.li key={item.company} variants={reveal}>
            <SpotlightCard className="h-full">
              <div className="relative flex h-full flex-col p-6">
                <p className="bg-gradient-to-br from-mint-300 to-mint-500 bg-clip-text font-mono text-5xl font-medium tracking-tight text-transparent">
                  <CountUp to={item.value} decimals={item.decimals} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">{t(item.label)}</p>
                <p className="mt-6 border-t border-ink-700 pt-3 font-mono text-xs text-zinc-500">@ {item.company}</p>
              </div>
            </SpotlightCard>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
