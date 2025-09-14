import React from "react";

const Languages = () => {
  const languages = [
    { name: "Arabic", proficiency: "Fluent" },
    { name: "English", proficiency: "Upper Intermediate" },
    { name: "German", proficiency: "Elementary" },
  ];

  return (
    <section id="languages" className="section">
      <div className="container">
        <h2>LANGUAGES</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            margin: "2rem 0",
          }}
        >
          {languages.map((lang, index) => (
            <span key={index} className="language-badge">
              {lang.name} — {lang.proficiency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
