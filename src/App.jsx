import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'; // ✅ Import Contact


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact /> {/* ✅ Add Contact section */}
    </>
  );
}

export default App;
