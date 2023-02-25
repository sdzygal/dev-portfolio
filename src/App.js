import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Skills from "./containers/skills/Skills";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
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
