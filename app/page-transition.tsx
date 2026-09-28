'use client';

import { createContext, useContext, useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const NavigationContext = createContext(false);
export const useInternalNavigation = () => useContext(NavigationContext);

export function PageTransition({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const pending = useRef<{ path: string; href: string; closed: string; covered: string } | null>(null);
  const animation = useRef<Animation | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    const panel = curtain.current;
    if (!panel) return;

    function navigate(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || !['http:', 'https:'].includes(url.protocol)) return;
      if (url.pathname === location.pathname) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      event.preventDefault();
      if (pending.current || !panel) return;

      // Keyboard activation uses the viewport centre; pointer clicks retain their origin.
      const x = event.detail === 0 ? innerWidth / 2 : event.clientX;
      const y = event.detail === 0 ? innerHeight / 2 : event.clientY;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 8;
      const closed = `circle(0px at ${x}px ${y}px)`;
      const covered = `circle(${radius}px at ${x}px ${y}px)`;
      const href = url.pathname + url.search + url.hash;
      pending.current = { path: url.pathname, href, closed, covered };
      panel.hidden = false;
      panel.style.clipPath = closed;
      document.documentElement.dataset.pageTransition = 'active';
      router.prefetch(href);
      animation.current = panel.animate([{ clipPath: closed }, { clipPath: covered }], {
        duration: 500, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards',
      });
      // A failed or stalled client navigation must never leave a permanent curtain.
      timeout.current = setTimeout(() => location.assign(href), 12000);
      void animation.current.finished.then(() => {
        if (!pending.current) return;
        setHasNavigated(true);
        router.push(href);
      }).catch(() => {});
    }

    function reset() {
      pending.current = null;
      animation.current?.cancel();
      if (timeout.current) clearTimeout(timeout.current);
      if (panel) panel.hidden = true;
      delete document.documentElement.dataset.pageTransition;
    }

    document.addEventListener('click', navigate);
    window.addEventListener('popstate', reset);
    return () => {
      document.removeEventListener('click', navigate);
      window.removeEventListener('popstate', reset);
      reset();
    };
  }, [router]);

  useEffect(() => {
    const transition = pending.current;
    const panel = curtain.current;
    if (!transition || !panel || transition.path !== pathname) return;
    if (timeout.current) clearTimeout(timeout.current);
    // Wait until the destination has committed before uncovering it.
    const frame = requestAnimationFrame(() => {
      panel.style.clipPath = transition.covered;
      animation.current?.cancel();
      animation.current = panel.animate([
        { clipPath: transition.covered }, { clipPath: transition.closed },
      ], { duration: 600, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      void animation.current.finished.then(() => {
        panel.hidden = true;
        animation.current?.cancel();
        pending.current = null;
        delete document.documentElement.dataset.pageTransition;
      }).catch(() => {});
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <NavigationContext.Provider value={hasNavigated}>
      {children}
      <div ref={curtain} className="page-iris-curtain" style={{ backgroundColor: '#B68A4A' }} hidden aria-hidden="true" />
    </NavigationContext.Provider>
  );
}
