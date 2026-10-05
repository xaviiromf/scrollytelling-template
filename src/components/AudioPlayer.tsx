import { useEffect, useRef, useState } from 'react';
import { Headphones, X, ArrowUpRight } from 'lucide-react';
import { ALBUMS } from '../data/media';

const EDITIONS = [
  { year: '2021', title: 'La raíz acústica', id: '1965785172', url: ALBUMS.original },
  { year: '2026', title: 'El cuerpo reconstruido', id: '2549611797', url: ALBUMS.rebuilt },
];

export function AudioPlayer() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  const [loading, setLoading] = useState(true);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const edition = EDITIONS[selected];
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  function close() { setOpen(false); trigger.current?.focus(); }
  return (
    <aside className="listening" aria-label="Escucha de Phuyu y la Fantasma">
      {open && <div id="listening-panel" className="listening-panel" role="region" aria-label="Anticuecas Subterráneas: dos versiones" data-lenis-prevent>
        <div className="listening-header"><span className="eyebrow">Anticuecas Subterráneas</span><button ref={closeButton} onClick={close} className="icon-button" aria-label="Cerrar escucha y detener el reproductor"><X size={20} aria-hidden="true" /></button></div>
        <p className="listening-title">Una raíz. Dos cuerpos.</p>
        <div className="edition-switch" role="group" aria-label="Elegir edición">{EDITIONS.map((item, i) => <button key={item.id} aria-pressed={selected === i} onClick={() => { if (selected !== i) { setLoading(true); setSelected(i); } }}><strong>{item.year}</strong><span>{item.title}</span></button>)}</div>
        <p className="player-status" role="status">{loading ? 'Cargando la escucha…' : 'Reproductor oficial / pulsa reproducir para escuchar'}</p>
        <iframe key={edition.id} title={`Escuchar Anticuecas Subterráneas, edición ${edition.year}`}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${edition.id}/size=large/bgcol=151611/linkcol=c57e60/tracklist=false/artwork=none/transparent=true/`}
          height="120" allow="autoplay" onLoad={() => setLoading(false)} />
        <a className="player-fallback" href={edition.url} target="_blank" rel="noopener noreferrer">Si no carga, escuchar en Bandcamp <ArrowUpRight size={14} aria-hidden="true" /></a>
        <p className="player-note">El sonido comienza cuando tú lo decides.</p>
      </div>}
      <button ref={trigger} className={`listen-trigger ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls={open ? 'listening-panel' : undefined}
        onClick={() => { if (open) close(); else { setLoading(true); setOpen(true); } }}><Headphones size={17} aria-hidden="true" /><span>{open ? 'Cerrar escucha' : 'Escuchar'}</span><span className="sound-lines" aria-hidden="true"><i /><i /><i /><i /><i /></span></button>
    </aside>
  );
}
