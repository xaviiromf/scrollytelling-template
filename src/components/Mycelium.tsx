/** Deterministic engraving: no raster placeholder, canvas loop or SVG filter. */
export function Mycelium({ className = '' }: { className?: string }) {
  return (
    <svg className={`mycelium ${className}`} viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.65">
        {Array.from({ length: 22 }, (_, i) => {
          const d = i * 8;
          return <path key={i} d={`M ${75 + d} 810 C ${220 + d} ${620 - d}, ${30 + d} ${530 - d}, ${185 + d} ${380 - d} S ${585 - d} ${190 + d}, ${725 - d} -20`} />;
        })}
        <path d="M300 640Q180 590 80 490M330 540Q500 495 690 590M305 420Q170 325 35 330M370 305Q480 310 635 220M460 200Q370 110 350 10" />
        <path d="M180 590L140 660M165 580L95 580M535 525L560 625M555 535L650 490M170 325L190 245M125 330L65 255M550 265L590 345M390 115L455 75" />
        {Array.from({ length: 16 }, (_, i) => <ellipse key={i} cx="370" cy="450" rx={35 + i * 9} ry={53 + i * 12} transform="rotate(-32 370 450)" opacity="0.35" />)}
      </g>
    </svg>
  );
}

export function RootMark() {
  return <svg className="small-cross" aria-hidden="true" viewBox="0 0 40 40" width="38" height="38" fill="none"><g stroke="currentColor" strokeWidth="1"><path d="M20 2v36M2 20h36M7 7l26 26M7 33L33 7" /><circle cx="20" cy="20" r="4" /></g></svg>;
}
