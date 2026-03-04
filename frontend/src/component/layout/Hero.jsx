import "./Hero.css"
import Slogn from "../common/Slogn";
import saro from "../../assets/saro2.jpeg";

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
          <button className="primary">Let's Explore</button>
          <button className="secondary">Contact Us</button>
        </div>
      </div>
      <Slogn className="webSlogn" />
    </section>
  );
}

export default Hero;