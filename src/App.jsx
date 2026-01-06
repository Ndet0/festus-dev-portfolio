import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import HowIWork from "./HowIWork.jsx";
import Skills from "./Skills.jsx";
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';


function App() {
  return (
    <>
      {/* Skip navigation link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <HowIWork />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

