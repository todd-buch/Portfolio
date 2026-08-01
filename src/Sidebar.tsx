import { Link } from "react-router-dom";
import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";


interface SidebarProps {
  isScrolled: boolean;
}

export default function Sidebar({ isScrolled }: SidebarProps) {
  return (
    <header className={`top-sidebar ${isScrolled ? "scrolled" : ""}`}>
      <aside className="sidebar">
        {/* Top Logo Space */}
        <div className="sidebar-logo">
          <img
            src={isScrolled ? sideLogoBlk : sideLogoWht}
            alt="Todd Buch"
            className="logo-img"
          />
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item active">
            Home
          </Link>
          <Link to="/resume" className="nav-item">
            Resume
          </Link>
          <Link to="/photography" className="nav-item">
            Photography
          </Link>
          <a href="https://github.com/todd-buch" target="_blank" rel="noreferrer" className="nav-item">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/todd-buch" target="_blank" rel="noreferrer" className="nav-item">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/toddbmedia/" target="_blank" rel="noreferrer" className="nav-item">
            <FaInstagram size={20} />
          </a>
        </nav>
      </aside>
    </header>
  );
}
