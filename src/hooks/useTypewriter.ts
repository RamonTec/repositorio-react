import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Escribe y borra cada palabra de la lista en bucle. */
export function useTypewriter(words: string[], { typeMs = 70, deleteMs = 35, holdMs = 1800 } = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText('');
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    if (reduce) return;
    const word = words[index % words.length];
    let timeout: number;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, reduce, typeMs, deleteMs, holdMs]);

  return reduce ? words[0] : text;
}
