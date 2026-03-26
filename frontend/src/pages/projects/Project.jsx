import airnb from "../../assets/airnbclone.mp4";
import darshagri from "../../assets/darshagri.mp4";
import amazonclone from "../../assets/amazonclone.mp4";
import spotifyclone from "../../assets/spotifyclone.mp4";
import "./Project.css";

const projects = [
  {
    title: "Airbnb Clone",
    video: airnb,
    description: `
         A full-stack Airbnb clone built using EJS with a primary focus on backend development. It showcases server-side rendering, routing, and dynamic data handling, reflecting real-world application architecture and scalability.
`},
  {
    title: "Darshagri Website",
    video: darshagri,
    description:
       "Darsh Agritech is a responsive web platform designed to simplify agricultural services and product access through a clean and user-friendly interface. It showcases my ability to build scalable, real-world applications with modern UI design and optimized performance."
  },
  {
    title: "Amazon Clone",
    video: amazonclone,
    description:
      "An e-commerce web application inspired by Amazon, featuring structured product listings and optimized UI performance. This project showcases scalable frontend development and clean component architecture."
  },
  {
    title: "Spotify Clone",
    video: spotifyclone,
    description:
      "A music streaming UI clone inspired by Spotify, focusing on modern design and smooth user interaction. It demonstrates my ability to build visually engaging and responsive web applications."
  }
];

export default function Project() {
  return (
    <div className="container">

      {projects.map((project, index) => (
        <div
          className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >

          {/* TEXT */}
          <div className="text-section">
            <h2>{project.title}</h2>

            <p className="description">
              {project.description}
            </p>

          </div>

          {/* VIDEO */}
          <div className="video-section">
            <video
              src={project.video}
              autoPlay
              loop
              muted

              className="video"
            />
          </div>

        </div>
      ))}

    </div>
  );
}