import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { TIMELINE_ACTS } from '../data/timeline';

export function ArchiveNavigation() {
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(progress.current, { scaleX: 0, transformOrigin: 'left center' });
      const setProgress = gsap.quickSetter(progress.current, 'scaleX');
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => setProgress(self.progress), onRefresh: self => setProgress(self.progress) });
      TIMELINE_ACTS.forEach((act, i) => ScrollTrigger.create({
        trigger: `#${act.id}`, start: 'top 45%', end: 'bottom 45%',
        onEnter: () => setActive(i), onEnterBack: () => setActive(i),
        onLeaveBack: () => { if (i === 0) setActive(-1); },
      }));
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!container.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener('keydown', escape);
    window.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('keydown', escape); window.removeEventListener('pointerdown', outside); };
  }, [open]);
  function choose(id: string) {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  }
  return (
    <>
      <a className="skip-link" href="#acto-0">Ir al relato</a>
      <nav ref={container} className="archive-nav" aria-label="Navegación del archivo">
        <a className="archive-wordmark" href="#inicio" aria-label="Phuyu y la Fantasma: volver al inicio">P<span aria-hidden="true">/</span>F<span className="wordmark-name">Phuyu y la Fantasma</span></a>
        <span className="nav-period eyebrow">Archivo sonoro <span>2020 — 2026</span></span>
        <button ref={button} className="index-trigger" aria-expanded={open} aria-controls="act-index" onClick={() => setOpen(!open)}><span>Índice</span>{open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}</button>
        <div className="reading-progress" aria-hidden="true"><div ref={progress} /></div>
        <div id="act-index" className="act-index" hidden={!open} data-lenis-prevent>
          <p className="eyebrow">Ocho actos / una raíz</p>
          <ol>{TIMELINE_ACTS.map((act, i) => <li key={act.id}><a href={`#${act.id}`} onClick={() => choose(act.id)} aria-current={active === i ? 'location' : undefined}><span className="index-number">0{act.actNumber}</span><span><strong>Acto {act.actNumber} - {act.year}</strong><small>{act.label}</small></span><span aria-hidden="true">↘</span></a></li>)}</ol>
        </div>
      </nav>
      <nav className="act-rail" aria-label="Acceso rápido a los actos">{TIMELINE_ACTS.map((act, i) => <a key={act.id} href={`#${act.id}`} onClick={() => choose(act.id)} title={`Acto ${act.actNumber} - ${act.year}`} aria-label={`Acto ${act.actNumber} - ${act.year}`} aria-current={active === i ? 'location' : undefined}><span aria-hidden="true">0{act.actNumber}</span><i /></a>)}</nav>
      <div className="archive-position eyebrow" aria-hidden="true"><span>{active < 0 ? 'PYLF / introducción' : `Acto 0${active} / ${TIMELINE_ACTS[active].year}`}</span><span className="position-rule" /> Tierra / ruido / memoria</div>
    </>
  );
}
