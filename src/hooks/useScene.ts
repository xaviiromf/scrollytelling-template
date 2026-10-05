import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScene(ref: RefObject<HTMLElement>, hero = false) {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 800px)', mobile: '(max-width: 799px)', reduce: '(prefers-reduced-motion: reduce)' }, context => {
      if (context.conditions?.reduce || !ref.current) return;
      const scope = ref.current;
      const amount = context.conditions?.desktop ? 48 : 16;
      scope.querySelectorAll('[data-parallax]').forEach(target => {
        gsap.fromTo(target, { y: amount }, {
          y: -amount, ease: 'none',
          scrollTrigger: { trigger: scope, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        });
      });
      const elements = scope.querySelectorAll('[data-reveal]');
      if (hero) {
        gsap.from(elements, { y: 24, opacity: 0, duration: 1.15, stagger: 0.1, ease: 'power3.out', clearProps: 'all' });
      } else {
        elements.forEach(target => gsap.from(target, {
          y: 22, opacity: 0, duration: 0.85, ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: target, start: 'top 93%', once: true },
        }));
      }
    }, ref);
    return () => mm.revert();
  }, [ref, hero]);
}
