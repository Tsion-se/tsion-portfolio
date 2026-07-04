import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
