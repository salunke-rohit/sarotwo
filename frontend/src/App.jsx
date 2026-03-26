import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import Skill from "./pages/skills/Skill";
import NavBar from "./component/layout/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;