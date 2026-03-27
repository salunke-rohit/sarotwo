import "./About.css";
import profile from "../../assets/profile.png"; // add your image

export default function About() {
  return (
    <section className="about-hero">
      
      <div className="about-content">

        {/* LEFT SIDE */}
        <div className="about-text">
          <h1>
            Hi, I am <span className="highlight">Rohit Salunke</span>,
          </h1>

          <h2>A Passionate Full Stack Developer</h2>

          <p>
            I am a passionate Full Stack Developer specializing in the MERN stack, 
with strong problem-solving skills in Data Structures and Algorithms using Java. 
I have hands-on experience with SQL and modern development tools like Git and GitHub. 
Currently, I am focusing on AWS and cloud technologies to build scalable, 
production-ready applications. I enjoy turning complex ideas into efficient, 
user-friendly solutions.
          </p>

          <a href="/resume.pdf" download className="resume-btn" >
  Download CV 
</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">
          <img src={profile} alt="profile" />
        </div>

      </div>

    </section>
  );
}