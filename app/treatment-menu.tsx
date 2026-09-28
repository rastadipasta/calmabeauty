'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { services } from './treatments';

export function TreatmentMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);

  return (
    <div className="treatment-menu" ref={root}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          trigger.current?.focus();
        }
      }}>
      <button className="treatment-menu-trigger" type="button" ref={trigger}
        aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        Tretmani <ChevronDown size={13} aria-hidden="true" />
      </button>
      <div className="treatment-menu-panel" id={id} hidden={!open}>
        {services.map((service) => (
          <a key={service.slug} href={`/tretmani/${service.slug}`}
            aria-current={pathname === `/tretmani/${service.slug}` ? 'page' : undefined}
            onClick={() => { setOpen(false); onNavigate?.(); }}>
            <span>{service.title}</span><ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
