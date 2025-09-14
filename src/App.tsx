import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

const App = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProfessionalSummary ref={(el) => (sectionRefs.current[0] = el)} />
      <Projects ref={(el) => (sectionRefs.current[1] = el)} />
      <Skills ref={(el) => (sectionRefs.current[2] = el)} />
      <Education ref={(el) => (sectionRefs.current[3] = el)} />
      <Languages ref={(el) => (sectionRefs.current[4] = el)} />
      <Footer />
    </div>
  );
};

export default App;
