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
import NotFound from "./containers/not-found/NotFound";
import particles from "./utils/Particles";
import ReactGA from "react-ga4";

ReactGA.initialize("G-E0GZ42ZRVT");

function App() {

    const location = useLocation();

    const handleInit = async (main) => {
        await loadFull(main)
    }

    const renderParticle = location.pathname === "/";

    ReactGA._gaCommandSendPageviewParameters(window.location.pathname + window.location.search);
  return (
    <div className="App">
        {
            renderParticle &&  <Particles id="particles" options={particles} init={handleInit} />
        }

        <Navbar />
        <div className="main">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="*" component={<NotFound />} />
      </Routes>
        </div>
    </div>
  );
}

export default App;
