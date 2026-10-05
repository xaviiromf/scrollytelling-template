import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import type { SiteContent } from '../types/marketing';

export function SiteNavigation({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const links = [...content.sections.map(section => ({ label: section.navLabel, id: section.id })), { label: content.contact.navLabel, id: content.contact.id }];
  useEffect(() => {
    const context = gsap.context(() => {
      const update = gsap.quickSetter(progress.current, 'scaleX');
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => update(self.progress), onRefresh: self => update(self.progress) });
    });
    return () => context.revert();
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!nav.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener('keydown', key);
    window.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('keydown', key); window.removeEventListener('pointerdown', outside); };
  }, [open]);
  function navigate(id: string) {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  }
  return <><a className="skip-link" href="#inicio">Ir al contenido</a><nav className="site-nav" ref={nav} aria-label="Navegación principal"><a href="#inicio" className="brand" onClick={() => navigate('inicio')}>{content.brand}<span aria-hidden="true">↗</span></a><button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="site-links" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button><div id="site-links" className={`site-links ${open ? 'is-open' : ''}`} data-lenis-prevent>{links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => navigate(link.id)}>{link.label}</a>)}</div><div className="scroll-progress" aria-hidden="true"><div ref={progress} /></div></nav></>;
}
