import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { MarketingSection } from '../types/marketing';
import { useScene } from '../hooks/useScene';

export function StorySection({ section, index }: { section: MarketingSection; index: number }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id={section.id} className={`story-section ${index % 2 ? 'story-section--alternate' : ''}`} aria-labelledby={`${section.id}-title`} tabIndex={-1}>
      <div className="section-intro">
        <p className="eyebrow" data-reveal>{section.eyebrow}</p>
        <h2 id={`${section.id}-title`} data-reveal>{section.title}</h2>
        <p className="section-description" data-reveal>{section.description}</p>
        {section.action && <a className="text-link" data-reveal href={section.action.href}>{section.action.label}<ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>
      {section.points && section.points.length > 0 && <ol className="points">{section.points.map((point, i) => <li key={`${point.title}-${i}`} data-reveal><span className="point-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{point.title}</h3><p>{point.description}</p></div></li>)}</ol>}
      {section.media && <figure className="section-media"><img data-parallax src={section.media.src} alt={section.media.alt} width={section.media.width} height={section.media.height} loading="lazy" decoding="async" />{section.media.caption && <figcaption>{section.media.caption}</figcaption>}</figure>}
    </section>
  );
}
