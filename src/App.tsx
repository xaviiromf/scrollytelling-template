import { SmoothScroll } from './components/SmoothScroll';
import { SiteNavigation } from './components/SiteNavigation';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ContactSection } from './components/ContactSection';
import { SITE } from './data/site';

export default function App() {
  return <SmoothScroll><SiteNavigation content={SITE} /><main><Hero content={SITE.hero} />{SITE.sections.map((section, index) => <StorySection key={section.id} section={section} index={index} />)}<ContactSection content={SITE.contact} /></main><footer className="site-footer"><a href="#inicio" className="brand">{SITE.brand}</a><p>{SITE.footer}</p><a href="#inicio">Volver al inicio ↑</a></footer></SmoothScroll>;
}
