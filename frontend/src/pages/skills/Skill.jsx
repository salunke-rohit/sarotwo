import skills from "./skillsData";
import SkillCard from "./SkillCard";
import "./Skill.css";

export default function Skill() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">The Skills <i class="fa-solid fa-screwdriver-wrench"></i></h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}