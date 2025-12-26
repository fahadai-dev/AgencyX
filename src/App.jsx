import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;