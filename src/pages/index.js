import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About id="about" />
      <Projects id="projects" />
      <Services id="services" />
      <Contact id="contact" />
    </div>
  );
}