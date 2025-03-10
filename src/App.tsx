import { Navbar } from "./@components";
import { Styles } from "./@styles";
import Contacts from "./sections/contact";
import { Hero } from "./sections/hero";
import Journal from "./sections/journal";
import Projects from "./sections/projects";

function App() {
  return (
    <div className="App">
      <Styles />
      <Navbar />
      <Hero />
      <Projects />
      <Journal />
      <Contacts />
    </div>
  );
}

export default App;
