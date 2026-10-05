import { useRef } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import type { ActItem } from '../types/scrollytelling';
import { OFFICIAL_LINKS } from '../data/media';
import { Mycelium } from './Mycelium';
import { ArchiveFigure } from './ArchiveFigure';
import { ArchiveSources } from './ArchiveSources';
import { useScene } from '../hooks/useScene';

const MEMBERS = [
  { name: 'Rodrigo Romero', role: 'Voz / guitarra / composición' },
  { name: 'Catalina Parra', role: 'Voces / piano y teclados en la formación' },
  { name: 'Ignacio Romero', role: 'Bajo / contrabajo' },
  { name: 'Óscar Hernández', role: 'Batería' },
  { name: 'José Rocandio', role: 'Colaboración / percusiones nativas, charango y quena' },
];

export function Manifesto({ act }: { act: ActItem }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id={act.id} className="manifesto" tabIndex={-1} aria-labelledby="acto-7-title">
      <Mycelium className="manifesto-engraving" />
      <div className="act-topline"><span className="eyebrow">07 / el epílogo</span><span className="eyebrow">La última palabra es de la música</span></div>
      <div className="manifesto-intro">
        <div><h2 className="act-heading" id="acto-7-title" data-reveal>Acto 7 - 2026</h2><p className="manifesto-title" data-reveal>El archivo<br /><em>sigue vivo.</em></p></div>
        <div className="manifesto-copy narrative">{act.narrative.map((text, i) => <p data-reveal key={i}>{text}</p>)}<span className="eyebrow">Manifiesto / lectura editorial</span></div>
      </div>
      <div className="manifesto-body">
        <ArchiveFigure media={act.image} className="manifesto-image" />
        <div className="members"><h3 className="eyebrow">Quienes le dan cuerpo</h3><dl>{MEMBERS.map((member, i) => <div key={member.name} data-reveal><span aria-hidden="true">0{i + 1}</span><dt>{member.name}</dt><dd>{member.role}</dd></div>)}</dl></div>
      </div>
      <nav className="official-links" aria-label="Plataformas oficiales">{OFFICIAL_LINKS.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.label}</span><ArrowUpRight size={23} aria-hidden="true" /></a>)}</nav>
      <ArchiveSources act={act} />
      <footer className="colophon"><span>Phuyu y la Fantasma<br /><span>Chillán, Ñuble, Chile / 2020 — 2026</span></span><span>Archivo editorial independiente<br /><span>Fuentes y créditos en cada acto</span></span><a href="#inicio">Volver a la superficie<ArrowUp size={18} aria-hidden="true" /></a></footer>
    </section>
  );
}
