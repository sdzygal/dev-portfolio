import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Skills from "./containers/skills/Skills";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import particles from "./utils/Particles";

function App() {

    const location = useLocation();

    const handleInit = async (main) => {
        await loadFull(main)
    }

    const renderParticle = location.pathname === "/";

  return (
    <div className="App">
        {
            renderParticle &&  <Particles id="particles" options={particles} init={handleInit} />
        }



        <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
