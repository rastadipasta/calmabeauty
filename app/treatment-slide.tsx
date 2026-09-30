'use client';

import { useEffect, useRef, type PropsWithChildren } from 'react';
import styles from './treatment-slide.module.css';

export function TreatmentSlide({ id, children }: PropsWithChildren<{ id: string }>) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    // Tall slides must scroll fully into view before the next one covers them.
    const observer = new ResizeObserver(() => {
      element.style.setProperty('--slide-height', `${element.offsetHeight}px`);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <section ref={section} className={`treatment-detail ${styles.slide}`} id={id} aria-labelledby={`${id}-title`}>{children}</section>;
}
