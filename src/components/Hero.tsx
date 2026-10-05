import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { SiteContent } from '../types/marketing';
import { useScene } from '../hooks/useScene';

export function Hero({ content }: { content: SiteContent['hero'] }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref, true);
  return (
    <section id="inicio" ref={ref} className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-copy">
        <p className="eyebrow" data-reveal>{content.eyebrow}</p>
        <h1 id="hero-title" data-reveal>{content.title}</h1>
        <p className="hero-description" data-reveal>{content.description}</p>
        <div className="hero-actions" data-reveal>
          <a className="button button--primary" href={content.primaryAction.href}>{content.primaryAction.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
          {content.secondaryAction && <a className="text-link" href={content.secondaryAction.href}>{content.secondaryAction.label}<ArrowDown size={16} aria-hidden="true" /></a>}
        </div>
      </div>
      <figure className="hero-visual">
        <div className="visual-surface" data-parallax>
          {content.media ? <img src={content.media.src} alt={content.media.alt} width={content.media.width} height={content.media.height} decoding="async" /> : (
            <svg className="visual-placeholder" viewBox="0 0 480 480" fill="none" aria-hidden="true">
              <path d="M0 240h480M240 0v480M70 70l340 340M70 410L410 70" stroke="currentColor" opacity=".15" />
              <circle cx="240" cy="240" r="173" stroke="currentColor" strokeWidth="1" />
              <circle cx="240" cy="240" r="129" stroke="currentColor" strokeDasharray="2 7" opacity=".6" />
              <rect x="186" y="186" width="108" height="108" transform="rotate(45 240 240)" fill="currentColor" />
              <circle cx="240" cy="240" r="14" fill="var(--surface)" />
            </svg>
          )}
        </div>
        <figcaption>{content.media?.caption ?? content.visualLabel}</figcaption>
      </figure>
    </section>
  );
}
