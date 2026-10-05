import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { SiteContent } from '../types/marketing';
import { useScene } from '../hooks/useScene';

export function ContactSection({ content }: { content: SiteContent['contact'] }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return <section ref={ref} id={content.id} className="contact-section" aria-labelledby="contact-title" tabIndex={-1}><p className="eyebrow" data-reveal>{content.eyebrow}</p><h2 id="contact-title" data-reveal>{content.title}</h2><p data-reveal>{content.description}</p><a className="button button--primary" href={content.action.href} data-reveal>{content.action.label}<ArrowUpRight size={18} aria-hidden="true" /></a></section>;
}
