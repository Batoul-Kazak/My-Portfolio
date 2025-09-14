import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Responsive Design", level: 90 },
    { name: "Git & GitHub", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Testing (Jest)", level: 75 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>SKILLS</h2>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontWeight: "600", color: "#fff" }}>
                {skill.name}
              </span>
              <span style={{ color: "#60a5fa", fontWeight: "500" }}>
                {skill.level}%
              </span>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${skill.level}%` }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
