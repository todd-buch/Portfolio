import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";
import { FaGithub, FaLinkedin, FaInstagram, FaG, FaGit } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

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
          <a href="#" className="nav-item active">
            Home
          </a>
          <a href="#" className="nav-item">
            Photography
          </a>
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            About
          </a>
          <a href="https://github.com/todd-buch" target="_blank" rel="noreferrer" className="nav-item">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/todd-buch" target="_blank" rel="noreferrer" className="nav-item">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/toddbmedia/" target="_blank" rel="noreferrer" className="nav-item">
            <FiInstagram size={20} />
          </a>
        </nav>
      </aside>
    </header>
  );
}
