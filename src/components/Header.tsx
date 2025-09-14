import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          className=" my-name text-hue"
          style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#fff" }}
        >
          Batoul Kazak
        </h2>
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2rem",
              color: "#fff",
            }}
          >
            <li>
              <a href="#summary">Summary</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#languages">Languages</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
