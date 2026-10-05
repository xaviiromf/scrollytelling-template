import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { MEDIA, ALBUMS } from '../data/media';
import { ArchiveFigure } from './ArchiveFigure';
import { Mycelium, RootMark } from './Mycelium';
import { useScene } from '../hooks/useScene';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useScene(ref, true);
  return (
    <header ref={ref} className="hero" id="inicio" tabIndex={-1}>
      <Mycelium className="hero-engraving" />
      <ArchiveFigure media={MEDIA.live} className="hero-image" priority showCaption={false} />
      <div className="hero-content">
        <p className="eyebrow hero-kicker" data-reveal><span className="signal-mark" /> Un archivo de tierra & ruido <span className="hero-kicker-location">Chillán, Chile</span></p>
        <h1 className="hero-title" data-reveal><span>Phuyu</span><em>y la Fantasma</em></h1>
        <div className="hero-story" data-reveal>
          <RootMark />
          <p>La raíz se mueve.<br />La anticueca se electrifica.<br /><span>Una historia para escuchar con el cuerpo.</span></p>
        </div>
        <div className="hero-bottom" data-reveal>
          <a className="enter-link" href="#acto-0"><span>Entrar al archivo<small>Ocho actos / 2020 — 2026</small></span><ArrowDown size={22} aria-hidden="true" /></a>
          <a className="release-link" href={ALBUMS.rebuilt} target="_blank" rel="noopener noreferrer"><span className="eyebrow">01.10.2026 / nueva edición</span><span>Anticuecas Subterráneas<ArrowUpRight size={16} aria-hidden="true" /></span></a>
        </div>
      </div>
      <div className="hero-photo-credit"><a href={MEDIA.live.source.url} target="_blank" rel="noopener noreferrer">Archivo fotográfico / Wavromance ↗</a></div>
    </header>
  );
}
