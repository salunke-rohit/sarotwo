import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home'
import Project from "./pages/projects/Project";
import NavBar from "./component/layout/NavBar";

function App() {
  return (
    <Router>
      <NavBar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

    </Router>
  );
}

export default App;