import { useRef, type CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ActItem } from '../types/scrollytelling';
import { ArchiveFigure } from './ArchiveFigure';
import { ArchiveSources } from './ArchiveSources';
import { Mycelium, RootMark } from './Mycelium';
import { useScene } from '../hooks/useScene';
import { LIVE_SESSIONS } from '../data/timeline';

export function ActSection({ act, index }: { act: ActItem; index: number }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id={act.id} tabIndex={-1} aria-labelledby={`${act.id}-title`}
      className={`act act--${act.motif} ${index % 2 ? 'act--reverse' : ''}`}
      style={{ '--act-accent': act.accentColor } as CSSProperties}>
      <div className="act-topline"><span className="eyebrow">{String(act.actNumber).padStart(2, '0')} / {act.label}</span><span className="eyebrow">Chillán · {act.year}</span></div>
      <Mycelium className="act-engraving" />
      <span className="act-watermark" aria-hidden="true">{act.year}</span>
      <div className="act-layout">
        <div className="act-copy">
          <h2 id={`${act.id}-title`} className="act-heading" data-reveal>Acto {act.actNumber} - {act.year}</h2>
          <p className="act-tagline" data-reveal>{act.tagline}</p>
          <div className="narrative">{act.narrative.map((paragraph, i) => <p key={i} data-reveal>{paragraph}</p>)}</div>
          {act.quote && <blockquote className="pull-quote" data-reveal><p>«{act.quote.text}»</p><cite><a href={act.quote.source.url} target="_blank" rel="noopener noreferrer">{act.quote.author} ↗</a></cite></blockquote>}
          {act.albumOrWork && <a className="work-link" data-reveal href={act.albumOrWork.url} target="_blank" rel="noopener noreferrer"><span className="record-grooves" aria-hidden="true" /><span><small>{act.albumOrWork.releaseDate} / edición</small><strong>{act.albumOrWork.title}</strong><span>{act.albumOrWork.format}</span></span><ArrowUpRight size={20} aria-hidden="true" /></a>}
          {act.motif === 'live' && <div className="live-sessions" data-reveal><p className="eyebrow">Ver el registro / Equal Music Sessions</p>{LIVE_SESSIONS.map(session => <a key={session.url} href={session.url} target="_blank" rel="noopener noreferrer"><span>{session.label}</span><ArrowUpRight size={18} aria-hidden="true" /></a>)}</div>}
          <ArchiveSources act={act} />
        </div>
        <div className={`act-visual ${act.companionImage ? 'act-visual--pair' : ''}`}>
          <ArchiveFigure media={act.image} />
          {act.companionImage && <ArchiveFigure media={act.companionImage} className="companion-figure" />}
          <span className="visual-registration" aria-hidden="true">+ &nbsp; PYLF / {String(act.actNumber).padStart(2, '0')} &nbsp; +</span>
        </div>
      </div>
      {act.motif === 'electric' && <p className="electric-type" aria-hidden="true">Zapateo <em>&</em> distorsión</p>}
      {act.motif === 'roots' && <div className="chapter-break"><span className="eyebrow">La misma raíz. Otro cuerpo.</span><p>Lo que nace bajo tierra<br /><em>también puede hacer ruido.</em></p><RootMark /></div>}
    </section>
  );
}
