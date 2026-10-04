import React from 'react';
import { ExternalLink, Disc, Heart } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const members = [
    { name: 'Rodrigo Romero', role: 'Voz, Guitarra & Composición' },
    { name: 'Catalina Parra', role: 'Voz, Piano & Arreglos Polifónicos' },
    { name: 'Ignacio Romero', role: 'Bajo' },
    { name: 'Óscar Hernández', role: 'Batería' },
    { name: 'José Rocandio', role: 'Percusiones Nativas (Reconstituidas)' },
  ];

  return (
    <footer className="relative py-28 px-6 bg-[#08090a] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl font-editorial font-light text-white mb-6">
          La Memoria Sigue Ardiendo
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-[#9ca3af] font-light leading-relaxed mb-16">
          Phuyu y la Fantasma no busca complacer la nostalgia folclórica ni someterse a las fórmulas del rock convencional. Es un testimonio vivo del sur de Chile: un espacio donde el duelo de la tierra y la furia eléctrica encuentran su cauce.
        </p>

        {/* Band Members Grid */}
        <div className="w-full max-w-3xl mb-20">
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#9c442b] mb-8">
            Formación y Colectivo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {members.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <p className="font-editorial text-lg text-white">{m.name}</p>
                <p className="text-xs font-mono text-[#9ca3af] mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links & Discography Platforms */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href="https://registromovil.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Disc className="w-3.5 h-3.5 text-[#9c442b]" />
            <span>Sello Registro Móvil</span>
            <ExternalLink className="w-3 h-3 text-[#9ca3af]" />
          </a>

          <a
            href="https://www.youtube.com/results?search_query=phuyu+y+la+fantasma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <span>Sesiones en Vivo (YouTube)</span>
            <ExternalLink className="w-3 h-3 text-[#9ca3af]" />
          </a>
        </div>

        <p className="mt-20 text-[11px] font-mono text-[#6b7280] flex items-center gap-1.5">
          <span>Chillán, Chile • Creado con devoción artística</span>
          <Heart className="w-3 h-3 text-[#9c442b] inline fill-[#9c442b]" />
          <span>por y para la anticueca</span>
        </p>
      </div>
    </footer>
  );
};
