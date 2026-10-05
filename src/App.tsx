import { SmoothScroll } from './components/SmoothScroll';
import { NoiseOverlay } from './components/NoiseOverlay';
import { Hero } from './components/Hero';
import { ActSection } from './components/ActSection';
import { Manifesto } from './components/Manifesto';
import { AudioPlayer } from './components/AudioPlayer';
import { ArchiveNavigation } from './components/ArchiveNavigation';
import { TIMELINE_ACTS } from './data/timeline';

export default function App() {
  return <SmoothScroll><NoiseOverlay /><ArchiveNavigation /><main><Hero />{TIMELINE_ACTS.slice(0, -1).map((act, index) => <ActSection key={act.id} act={act} index={index} />)}<Manifesto act={TIMELINE_ACTS[TIMELINE_ACTS.length - 1]} /></main><AudioPlayer /></SmoothScroll>;
}
