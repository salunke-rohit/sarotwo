import logo from "../../assets/logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        
        <div className="nav-left">
          <span>Project</span>
          <span>Service</span>
        </div>

        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-right">
          <span>About Us</span>
          <span>Contact</span>
        </div>

      </nav>
    </div>
  );
}