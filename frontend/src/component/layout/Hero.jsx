import "./Hero.css"
import Slogn from "../common/Slogn";
import saro from "../../assets/saro2.jpeg";
import SocialCard from "../common/SocialCard";
import SocialSection from "../common/SocialSection";
import Social from "../common/Social";
import { Link } from "react-router-dom";

function Hero() {

  const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";  // path from public folder
  link.download = "My_Resume.pdf"; // file name after download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="hero">
      <div className="hero-image">
        <img src= {saro} alt="sarotwo" />
      </div>

      <div className="hero-content">
        <h1>
          Let's Build Together <br />
          with <span>Rohit Salunke</span>
        </h1>

        <div className="hero-buttons">
          <Link to="/projects">
          <button  className="primary">View My Work</button>
          </Link>
          <button onClick={downloadResume} className="secondary">Downlode Resume</button>
        </div>
      </div>
      <Slogn className="webSlogn" />
      <Social/>
      <SocialSection/>
    </section>
  );
}

export default Hero;