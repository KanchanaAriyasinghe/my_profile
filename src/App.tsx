import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { pageSections } from './sections';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Stats />
        {pageSections.map(({ id, Component }, i) => (
          // Every second section gets the muted band, whatever the order.
          <Component key={id} id={id} muted={i % 2 === 1} />
        ))}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
