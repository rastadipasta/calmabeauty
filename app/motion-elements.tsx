'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

const luxeEase = [0.22, 1, 0.36, 1] as const;

export function PageLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 1180);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: '-100%', opacity: 0.98 }}
          transition={{ duration: reduceMotion ? 0.08 : 0.72, ease: luxeEase }}
        >
          <motion.img
            src="/images/calma-logo.png"
            alt=""
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.72, ease: luxeEase }}
          />
          <motion.svg
            className="loader-branch"
            viewBox="0 0 210 42"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M8 34C48 33 79 21 105 8M70 25c-2-11 2-17 12-21M92 14c9 1 16-2 20-10M48 31c-5-8-5-14 0-20M112 8c25 15 54 23 90 24M139 21c3-10 10-15 20-16M161 27c8-7 16-8 25-4"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: luxeEase, delay: 0.08 }}
            />
          </motion.svg>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0.05 : 1, ease: 'easeInOut' }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function PageEntrance({ children }: PropsWithChildren) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.88 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, delay = 0, className }: PropsWithChildren<{ delay?: number; className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.05 + delay, ease: luxeEase }}
    >
      {children}
    </motion.div>
  );
}

function useHeroMotion(delay: number) {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? false as const : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: reduceMotion ? 0 : 1.05 + delay, ease: luxeEase },
  };
}

export function HeroParagraph({ children, delay = 0, className = '' }: PropsWithChildren<{ delay?: number; className?: string }>) {
  return <motion.p className={className} {...useHeroMotion(delay)}>{children}</motion.p>;
}

export function HeroHeading({ children, delay = 0, id }: PropsWithChildren<{ delay?: number; id?: string }>) {
  return <motion.h1 id={id} {...useHeroMotion(delay)}>{children}</motion.h1>;
}

export function HeroBlock({ children, delay = 0, className = '' }: PropsWithChildren<{ delay?: number; className?: string }>) {
  return <motion.div className={className} {...useHeroMotion(delay)}>{children}</motion.div>;
}

export function HeroAnchor({ children, delay = 0, className = '', ...props }: MagneticLinkProps & { delay?: number }) {
  return <motion.a className={className} {...props} {...useHeroMotion(delay)}>{children}</motion.a>;
}

const revealProps = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.82, ease: luxeEase },
};

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={className} {...(reduceMotion ? {} : revealProps)}>
      {children}
    </motion.div>
  );
}

export function RevealArticle({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={className}
      {...(reduceMotion ? {} : revealProps)}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.55, ease: luxeEase }}
    >
      {children}
    </motion.article>
  );
}

export function RevealFigure({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.figure
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.78, delay: reduceMotion ? 0 : delay, ease: luxeEase }}
    >
      {children}
    </motion.figure>
  );
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const stampY = useTransform(scrollYProgress, [0, 1], ['-50%', '-26%']);

  return (
    <motion.div
      ref={ref}
      className="hero-visual"
      initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1.15, delay: reduceMotion ? 0 : 0.9, ease: luxeEase }}
    >
      <motion.img
        src="/images/hero-face.jpg"
        alt="Opuštena klijentica tijekom Calma Beauty rituala"
        width="640"
        height="640"
        loading="eager"
        fetchPriority="high"
        style={{ y: reduceMotion ? 0 : imageY }}
        initial={reduceMotion ? false : { scale: 1.1 }}
        animate={{ scale: 1.035 }}
        transition={{ duration: 1.6, delay: reduceMotion ? 0 : 0.9, ease: luxeEase }}
      />
      <div className="hero-shade" />
      <motion.div
        className="hero-stamp"
        aria-hidden="true"
        style={{ y: reduceMotion ? '-50%' : stampY }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.4 }}
      >
        <span>CALMA</span>
        <small>BEAUTY · ZAGREB</small>
      </motion.div>
      <span className="image-caption">Njega koja vraća ravnotežu</span>
    </motion.div>
  );
}

export function ImageReveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 0 18% 0)', y: 35 }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1, ease: luxeEase }}
    >
      {children}
    </motion.div>
  );
}

type MagneticLinkProps = ComponentProps<typeof motion.a>;

export function MagneticLink({ children, className = '', ...props }: MagneticLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 230, damping: 18, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 230, damping: 18, mass: 0.45 });

  return (
    <motion.a
      className={className}
      {...props}
      style={{ x: springX, y: springY }}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.975 }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children as ReactNode}
    </motion.a>
  );
}

export function MotionMarquee() {
  const reduceMotion = useReducedMotion();
  const words = 'CALMA · NJEGA · MIR · RAVNOTEŽA · ';
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <span>{words.repeat(3)}</span>
        <span>{words.repeat(3)}</span>
      </motion.div>
    </div>
  );
}
