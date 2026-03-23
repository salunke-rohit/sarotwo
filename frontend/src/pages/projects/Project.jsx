import airnb from "../../assets/airnbclone.mp4";
import "./Project.css";

export default function Project() {
  return (
    <div className="container">

      {/* ROW 1 */}
      <div className="row">
        <div className="video-box">
          <video
            src={airnb}
            autoPlay
            loop
            muted
            controls
            className="video"
          />
        </div>

        <div className="card">
          <h2>Project 1</h2>
          <p>
            This is a modern React-based project showcasing a dynamic video layout
            with a responsive UI.
          </p>

          <ul>
            <li>🚀 Built using EJS</li>
            <li>🎨 Clean UI Design</li>
            <li>⚡ Fast Performance</li>
          </ul>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row">
        <div className="video-box">
          <video
            src={airnb}
            autoPlay
            loop
            muted
            controls
            className="video"
          />
        </div>

        <div className="card">
          <h2>Project 2</h2>
          <p>
            This is another project with similar structure and responsive layout.
          </p>

          <ul>
            <li>🚀 Built using React</li>
            <li>🎨 Responsive UI</li>
            <li>⚡ Optimized performance</li>
          </ul>
        </div>
      </div>

    </div>
  );
}