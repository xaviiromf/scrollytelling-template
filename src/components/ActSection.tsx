import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ActItem } from '../types/scrollytelling';
import { Disc3, Quote } from 'lucide-react';

interface ActSectionProps {
  act: ActItem;
  index: number;
}

export const ActSection: React.FC<ActSectionProps> = ({ act, index }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { y: 50, scale: 0.96 },
          {
            y: -50,
            scale: 1.02,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // Smooth text reveal
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textContentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={act.id}
      className="relative min-h-screen py-24 sm:py-32 px-6 flex items-center justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Subtle atmospheric ambient glow matching act's theme */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
        style={{
          backgroundColor: act.accentColor,
          left: isEven ? '10%' : '60%',
          top: '25%',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Narrative Column */}
        <div
          ref={textContentRef}
          className={`lg:col-span-6 flex flex-col justify-center ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Strictly formatted Act title as requested: Acto X — 202X */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: act.accentColor }}
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-light tracking-wide text-[#f3f4f6]">
              Acto {act.actNumber} — {act.year}
            </h2>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#9ca3af] mb-8 pb-4 border-b border-white/[0.08]">
            {act.tagline}
          </p>

          {/* Editorial paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#d1d5db] font-light leading-relaxed">
            {act.narrative.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Pull Quote if available */}
          {act.quote && (
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border-l-2 border-[#9c442b]/60 relative backdrop-blur-sm">
              <Quote className="w-5 h-5 text-[#9c442b]/50 mb-2" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#e5e7eb] leading-snug">
                "{act.quote.text}"
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#9ca3af]">
                — {act.quote.author}
              </p>
            </div>
          )}

          {/* Album or work badge */}
          {act.albumOrWork && (
            <div className="mt-8 inline-flex items-center gap-3 self-start px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#cbd5e1]">
              <Disc3 className="w-4 h-4 text-[#9c442b] animate-spin-slow" />
              <div>
                <span className="font-semibold text-white">{act.albumOrWork.title}</span>
                {act.albumOrWork.format && (
                  <span className="text-[#9ca3af] ml-2">({act.albumOrWork.format})</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Artistic Blended Image Column */}
        <div
          ref={imageContainerRef}
          className={`lg:col-span-6 flex flex-col items-center ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-w-md lg:max-w-none flex items-center justify-center">
            {/* Ambient soft backlight behind the picture */}
            <div
              className="absolute inset-0 rounded-3xl opacity-30 blur-2xl transition-all duration-700"
              style={{ backgroundColor: act.accentColor }}
            />

            {/* Organic blended image canvas */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#121417]">
              <img
                src={act.image.url}
                alt={act.image.caption}
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out image-organic-blend opacity-90"
              />

              {/* Tint / Duotone overlay layer */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
                style={{ backgroundColor: act.accentColor }}
              />

              {/* Vignette edge mask */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0b0c] via-transparent to-[#0a0b0c]/60" />
            </div>
          </div>

          <p className="mt-4 text-xs font-mono text-center tracking-widest text-[#9ca3af] opacity-75">
            {act.image.caption}
          </p>
        </div>
      </div>
    </section>
  );
};
