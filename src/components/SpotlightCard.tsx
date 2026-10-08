import { useRef } from 'react';

/** Tarjeta con un halo que sigue al cursor. */
export default function SpotlightCard({ className = '', children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty('--x', `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/70 transition-colors duration-300 hover:border-ink-600 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(78, 236, 185, 0.09), transparent 60%)',
        }}
      />
      {children}
    </div>
  );
}
