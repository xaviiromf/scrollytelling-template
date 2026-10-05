import { useState } from 'react';
import type { ArchiveImage } from '../types/scrollytelling';

export function ArchiveFigure({ media, className = '', priority = false, showCaption = true }: {
  media: ArchiveImage;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`archive-figure ${className}`}>
      <div className="figure-surface" data-parallax>
        {!failed ? (
          <img src={media.src} srcSet={media.srcSet}
            sizes={priority ? '(max-width: 700px) 100vw, 75vw' : '(max-width: 700px) 100vw, 55vw'}
            width={media.width} height={media.height} alt={media.alt}
            loading={priority ? 'eager' : 'lazy'} decoding="async" {...{ fetchpriority: priority ? 'high' : 'auto' }}
            style={{ objectPosition: media.position, mixBlendMode: media.blendMode }}
            onError={() => setFailed(true)} />
        ) : <p className="image-fallback">El archivo continúa en su fuente original.</p>}
        <span className="figure-tint" aria-hidden="true" />
      </div>
      {showCaption && (
        <figcaption>
          <span>{media.caption}</span>
          <a href={media.source.url} target="_blank" rel="noopener noreferrer">Fuente ↗</a>
          <a href={media.originalUrl} target="_blank" rel="noopener noreferrer">Original ↗</a>
        </figcaption>
      )}
    </figure>
  );
}
