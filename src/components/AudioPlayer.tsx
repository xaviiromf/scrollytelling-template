import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <aside
      aria-label="Reproductor de audio"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#121417]/85 backdrop-blur-md border border-white/10 shadow-2xl text-xs font-mono text-[#d1d5db]"
    >
      <div className="flex items-center gap-2">
        <Music className={`w-3.5 h-3.5 text-[#9c442b] ${isPlaying ? 'animate-pulse' : ''}`} />
        <span className="hidden sm:inline font-light tracking-wider text-[#9ca3af]">
          {isPlaying ? 'Ambiente Sonoro: Anticueca' : 'Silencio Atmosférico'}
        </span>
      </div>

      <button
        onClick={togglePlay}
        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
        title={isPlaying ? 'Silenciar ambiente' : 'Activar ambiente sonoro'}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#9c442b]" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#9ca3af]" />
        )}
      </button>
    </aside>
  );
};
