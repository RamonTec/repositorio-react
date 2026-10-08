import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="container-page py-20 sm:py-28">
      <motion.header
        className="mb-12 max-w-2xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p variants={reveal} className="mb-3 font-mono text-sm text-mint-400">
          <span className="text-zinc-600">{'// '}</span>
          {index} · {id}
        </motion.p>
        <motion.h2 variants={reveal} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </motion.h2>
        {lead && (
          <motion.p variants={reveal} className="mt-4 text-zinc-400">
            {lead}
          </motion.p>
        )}
      </motion.header>
      {children}
    </section>
  );
}
