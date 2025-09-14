import React, { useRef } from "react";

const ProfessionalSummary = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="summary" className="section" ref={ref}>
      <div className="container">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p className="typewriter">
          Passionate and self-taught Front-End Developer with a strong eye for
          beautiful, logical UI design and project management. Eager to grow
          professionally while empowering my community through technology
          especially by teaching others the power of programming. Fast learner,
          deeply motivated, and committed to turning complex ideas into clean,
          user-friendly interface.
        </p>
        <p>
          With a keen eye for detail and deep understanding of UI/UX principles,
          I turn complex requirements into intuitive interfaces. My goal? To
          build digital products that don’t just work they delight.
        </p>
      </div>
    </section>
  );
});

export default ProfessionalSummary;
