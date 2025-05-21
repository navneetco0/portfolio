import { Navbar } from "./@components";
import { Styles } from "./@styles";
import Contacts from "./sections/contact";
import { Hero } from "./sections/hero";
import Journal from "./sections/journal";
import Projects from "./sections/projects";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Navneet Kumar | Web Developer</title>
        <meta name="description" content="Creative web developer portfolio" />
      </Helmet>
      <Styles />
      <Navbar />
      <Hero />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
