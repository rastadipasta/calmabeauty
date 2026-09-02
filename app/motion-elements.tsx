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
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
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
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 3200);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.08 : 0.82, ease: luxeEase }}
        >
          <motion.div
            className="loader-video-wrap"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: luxeEase }}
          >
            <video
              className="loader-video"
              src="/video/calma-lotus-loader.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setVisible(false)}
              onError={() => setVisible(false)}
            />
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0.05 : 2, ease: 'linear' }}
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

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const iconTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 360, damping: 27, mass: 0.55 };

  return (
    <div className={`mobile-menu${open ? ' is-open' : ''}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? 'Zatvori izbornik' : 'Otvori izbornik'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">
          <motion.span animate={{ y: open ? 0 : -6, rotate: open ? 45 : 0 }} transition={iconTransition} />
          <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={iconTransition} />
          <motion.span animate={{ y: open ? 0 : 6, rotate: open ? -45 : 0 }} transition={iconTransition} />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="mobile-menu-nav"
            id="mobile-navigation"
            aria-label="Mobilna navigacija"
            initial={reduceMotion ? false : { opacity: 0, y: -12, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: reduceMotion ? 0 : 0.42, ease: luxeEase }}
          >
            <a href="#intro" onClick={() => setOpen(false)}>O nama</a>
            <a href="#usluge" onClick={() => setOpen(false)}>Tretmani</a>
            <a href="#recenzije" onClick={() => setOpen(false)}>Recenzije</a>
            <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 720);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          className="back-to-top"
          href="#top"
          aria-label="Povratak na vrh stranice"
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.94 }}
          transition={{ duration: reduceMotion ? 0 : 0.38, ease: luxeEase }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          whileTap={reduceMotion ? undefined : { scale: 0.93 }}
          onClick={(event) => {
            if (reduceMotion) return;
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ArrowUp aria-hidden="true" size={17} strokeWidth={1.5} />
        </motion.a>
      ) : null}
    </AnimatePresence>
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

  return (
    <motion.div ref={ref} className="hero-visual">
      <motion.div
        className="hero-image-mask image-noise"
        initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.15, delay: reduceMotion ? 0 : 0.9, ease: luxeEase }}
      >
        <motion.img
          src="/images/hero-face.jpg"
          alt="Opuštena klijentica tijekom Calma Beauty rituala"
          width="1800"
          height="3200"
          loading="eager"
          fetchPriority="high"
          style={{ y: reduceMotion ? 0 : imageY }}
          initial={reduceMotion ? false : { scale: 1.1 }}
          animate={{ scale: 1.035 }}
          transition={{ duration: 1.6, delay: reduceMotion ? 0 : 0.9, ease: luxeEase }}
        />
        <div className="hero-shade" />
      </motion.div>
    </motion.div>
  );
}

export function HorizontalIntro() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.45,
    restDelta: 0.001,
  });
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-74.36%']);

  return (
    <section
      className={`horizontal-intro${reduceMotion ? ' horizontal-intro-reduced' : ''}`}
      id="intro"
      ref={ref}
      aria-labelledby="intro-title"
    >
      <div className="horizontal-sticky">
        <motion.div className="horizontal-track" style={{ x: reduceMotion ? 0 : x }}>
          <p className="horizontal-label">Tvoj Calma trenutak</p>

          <h2 className="horizontal-quote" id="intro-title">
            Ovdje ljepota nije žurba. Ona je osjećaj da si viđena, njegovana i ponovno svoja.
          </h2>

          <div className="horizontal-story">
            <Sparkles aria-hidden="true" size={20} strokeWidth={1.4} />
            <p>
              Calma Beauty je salon za žene u kojem svaki dolazak počinje razgovorom,
              a svaki tretman prati miran, individualan pristup. Ne tražimo prečace —
              biramo ono što tvojoj koži i tijelu u tom trenutku stvarno treba.
            </p>
            <a className="text-link" href="tel:+385916015254">
              Pronađimo tvoj Calma ritual <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="horizontal-photo">
            <span>Preciznost u svakom dodiru.</span>
            <img
              src="/images/piling.jpg"
              alt="Nježna pjena tijekom čišćenja kože lica"
              width="1200"
              height="1500"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
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
