import logo from "../../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        
        <div className="nav-left">
          <Link to="/projects" className="nav-link">Projects</Link>
           <Link to="/skills" className="nav-link">Skills</Link>
        </div>

        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

      </nav>
    </div>
  );
}