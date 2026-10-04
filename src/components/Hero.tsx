import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.85, y: 0, duration: 1.8, delay: 0.6, ease: 'power2.out' }
      );

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0.2,
        y: -60,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-radial from-[#181a1d] via-[#0c0d0e] to-[#0a0b0c]"
    >
      {/* Background mist glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#9c442b]/20 rounded-full blur-[140px] animate-fog-flow" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[350px] bg-[#324035]/25 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono tracking-widest text-[#9ca3af] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#9c442b]" />
          <span>Chillán • Folclor Experimental • 2020 — 2026</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-editorial font-normal tracking-tight text-[#f3f4f6] leading-[0.95]"
        >
          Phuyu y la Fantasma
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-[#9ca3af] max-w-2xl font-light tracking-wide leading-relaxed"
        >
          De la bruma cordillerana y la herida de Violeta Parra a la anticueca eléctrica, el zapateo y el mosh.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#9ca3af]">Desliza para adentrarte</span>
        <ChevronDown className="w-4 h-4 text-[#9c442b] animate-bounce" />
      </div>
    </header>
  );
};
