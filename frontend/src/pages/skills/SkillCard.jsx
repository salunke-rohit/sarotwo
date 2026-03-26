export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <h3>{skill.name}</h3>

      <p>
        {skill.years} year{skill.years > 1 ? "s" : ""},{" "}
        <span className="projects">{skill.projects} projects</span>
      </p>

      <div className="progress-bar">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className={`block ${i < skill.level ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}