import React from "react";

const Education = () => {
  const degrees = [
    {
      college: "Damascus University",
      degree: "B.Sc. Computer Science",
      year: "2022 – 2025",
    },
    {
      college: "Damascus University",
      degree: "Institute of Computer Science",
      year: "2020 – 2022",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>EDUCATION</h2>
        <div className="timeline">
          {degrees.map((edu, index) => (
            <div key={index} className="timeline-item">
              <h3>{edu.degree}</h3>
              <p
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  margin: "0.5rem 0",
                }}
              >
                {edu.school}
              </p>
              <p
                style={{
                  color: "#94a1b2",
                  fontStyle: "italic",
                  margin: "0.5rem 0",
                }}
              >
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
