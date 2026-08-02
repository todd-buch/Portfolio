import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {year} Todd Buch. All rights reserved.
        </p>
        <nav className="footer-social" aria-label="Social links">
          <a
            href="https://linkedin.com/in/todd-buch"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/todd-buch"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.instagram.com/toddbmedia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </nav>
      </div>

      <p className="footer-name" aria-hidden="true">
        Todd Buch
      </p>
    </footer>
  );
}
