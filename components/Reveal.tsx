'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'scale';
  delay?: number;
};

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === 'left' ? 'reveal-left' : variant === 'scale' ? 'reveal-scale' : 'reveal';

  const style = { ['--delay']: `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} className={`${variantClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
