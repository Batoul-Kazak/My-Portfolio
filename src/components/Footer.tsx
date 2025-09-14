import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Batoul-Kazak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/batoul-kazak-460a80304/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="" alt="linkedin" />
        </a>
        <a href="mailto:batoulkazak297@gmail.com">
          <img src="" alt="gmail" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Batoul Kazak. Built with React, TypeScript
        & Pure CSS.
      </p>
    </footer>
  );
};

export default Footer;
