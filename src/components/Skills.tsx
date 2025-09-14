import React, { useRef, useEffect } from "react";

const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector(".skill-progress");
            if (bar) {
              bar.classList.add("animate-progress");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 78 },
    { name: "TypeScript", level: 60 },
    { name: "JavaScript (ES6+)", level: 75 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Responsive Design", level: 75 },
    { name: "Git & GitHub", level: 50 },
    { name: "C++", level: 45 },
    { name: "C#", level: 70 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="skill-chip"
            >
              <span className="skill-name">{skill.name}</span>
              <div className="skill-progress-container">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
