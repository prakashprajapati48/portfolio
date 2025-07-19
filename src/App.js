import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import './Style/Style.css'
import About from './Component/About';
import Project from './Component/Project';
import { Element } from 'react-scroll';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <section>
          <Home />
        </section>
      </Element>

      <Element name="about">
        <section>
          <About />
        </section>
      </Element>

      <Element name="project">
        <section >
          <Project />
        </section>
      </Element>

      <Element name="contact">
        <section >
          <Contact />
        </section>
      </Element>
    </div>
  );
}

export default App;
