import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { References } from './components/sections/References';
import { Research } from './components/sections/Research';
import { Resume } from './components/sections/Resume';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Stats } from './components/sections/Stats';

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
        <Services />
        <Skills />
        <Resume />
        <Projects />
        <Research />
        <References />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
