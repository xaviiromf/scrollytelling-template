import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { NoiseOverlay } from './components/NoiseOverlay';
import { Hero } from './components/Hero';
import { ActSection } from './components/ActSection';
import { Manifesto } from './components/Manifesto';
import { AudioPlayer } from './components/AudioPlayer';
import { TIMELINE_ACTS } from './data/timeline';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0a0b0c] text-[#e5e7eb] selection:bg-[#9c442b] selection:text-white">
        <NoiseOverlay />

        {/* Global minimal navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto">
            <span className="font-editorial text-lg tracking-wider text-[#f3f4f6]">
              Phuyu y la Fantasma
            </span>
          </div>
          <div className="pointer-events-auto text-[11px] font-mono tracking-widest text-[#9ca3af] uppercase">
            <span>2020 — 2026</span>
          </div>
        </nav>

        <main>
          <Hero />

          <div className="relative">
            {TIMELINE_ACTS.map((act, index) => (
              <ActSection key={act.id} act={act} index={index} />
            ))}
          </div>

          <Manifesto />
        </main>

        <AudioPlayer />
      </div>
    </SmoothScroll>
  );
};

export default App;
