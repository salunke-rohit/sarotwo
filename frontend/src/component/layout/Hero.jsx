import "./Hero.css"
import Slogn from "../common/Slogn";
import saro from "../../assets/saro2.jpeg";
import SocialCard from "../common/SocialCard";
import SocialSection from "../common/SocialSection";
import Social from "../common/Social";

function Hero() {
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
          <button className="primary">View My Work</button>
          <button className="secondary">Downlode Resume</button>
        </div>
      </div>
      <Slogn className="webSlogn" />
      <Social/>
      <SocialSection/>
    </section>
  );
}

export default Hero;