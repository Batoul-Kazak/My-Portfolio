import Github from "./../assets/github.svg";
import Linkedin from "./../assets/linkedin.svg";
import Gmail from "./../assets/email.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Batoul-Kazak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/batoul-kazak-460a80304/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkedin}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
        <a href="mailto:batoulkazak297@gmail.com">
          <img src={Gmail} alt="" />
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
