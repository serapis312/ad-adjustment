import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingCTA from './components/common/FloatingCTA';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Specialties from './components/sections/Specialties';
import Process from './components/sections/Process';
import Cases from './components/sections/Cases';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <Process />
        <Cases />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
