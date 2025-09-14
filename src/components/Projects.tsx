import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Engineers' Mathematical Guide",
      description:
        "AI-powered math learning platform for engineers, featuring adaptive assessments, real-world theory links, and intuitive UI to help students master concepts faster. I was a member of the team that develops this platform.",
      tech: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
        "Nest.js",
        "Node.js",
        "MathJax",
      ],
      link: "https://github.com/AshameTheDestroyer/Engineers-Mathematical-Guide",
    },
    {
      title: "Essenlieferung (Online Food Delivery Platform)",
      description:
        "A React-based restaurant website currently under development, helping users discover and order recipes.",
      tech: ["React", "Javascript"],
      link: "https://github.com/Batoul-Kazak/Essenslieferung",
    },
    {
      title: "Moving Ball (Unity Game)",
      description:
        "A simple Unity game where player controls a ball; the player loses if the ball falls off the screen.",
      tech: ["C#", "Unity"],
      link: "https://github.com/Batoul-Kazak/Moving-Ball-Game",
    },
    {
      title: "The Furniture Gallery",
      description:
        "A responsive online furniture store built with HTML, CSS and Javascript.",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://github.com/Batoul-Kazak/The-Furniture-Gallery",
    },
    {
      title: "Physical Equations",
      description:
        "A desktop simulation app built with C# and Windows Forms, designed to help students and enthusiasts visualize and explore basic physics experiments",
      tech: ["C#", "Windows Form"],
      link: "https://github.com/Batoul-Kazak/Physical-Equations",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>PROJECTS</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-skills-container">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{
                      backgroundColor: tech.includes("React")
                        ? "rgba(167, 139, 250, 0.1)"
                        : tech.includes("TypeScript")
                          ? "rgba(96, 165, 250, 0.1)"
                          : tech.includes("Chart.js")
                            ? "rgba(251, 113, 133, 0.1)"
                            : "rgba(255, 255, 255, 0.05)",
                      color: tech.includes("React")
                        ? "#a78bfa"
                        : tech.includes("TypeScript")
                          ? "#60a5fa"
                          : tech.includes("Chart.js")
                            ? "#fb7185"
                            : "#60a5fa",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
