import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

interface SidebarProps {
  isScrolled: boolean;
}

export default function Sidebar({ isScrolled }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize up to desktop, and lock body scroll while open
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  // Solid bar when scrolled or when the mobile menu is open
  const showSolidBar = isScrolled || menuOpen;
  const logoSrc = showSolidBar ? sideLogoBlk : sideLogoWht;

  return (
    <header
      className={`top-sidebar ${showSolidBar ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <aside className="sidebar">
        <div className="sidebar-logo">
          <Link to="/" onClick={closeMenu} aria-label="Home">
            <img src={logoSrc} alt="Todd Buch" className="logo-img" />
          </Link>
        </div>

        <button
          type="button"
          className="sidebar-menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          {menuOpen ? (
            <X size={28} strokeWidth={2.25} />
          ) : (
            <Menu size={28} strokeWidth={2.25} />
          )}
        </button>

        <nav
          id="primary-nav"
          className={`sidebar-nav ${menuOpen ? "open" : ""}`}
        >
          <Link to="/" className="nav-item active" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/resume" className="nav-item" onClick={closeMenu}>
            Resume
          </Link>
          <Link to="/photography" className="nav-item" onClick={closeMenu}>
            Photography
          </Link>

          <div className="nav-socials">
            <a
              href="https://github.com/todd-buch"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-social"
              aria-label="GitHub"
              onClick={closeMenu}
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/todd-buch"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-social"
              aria-label="LinkedIn"
              onClick={closeMenu}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/toddbmedia/"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-social"
              aria-label="Instagram"
              onClick={closeMenu}
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </nav>
      </aside>

      {menuOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
