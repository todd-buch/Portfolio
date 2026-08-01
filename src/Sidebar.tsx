import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

interface SidebarProps {
  isScrolled: boolean;
}

function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const attr = root.getAttribute("data-theme");
      if (attr === "dark") {
        setIsDark(true);
        return;
      }
      if (attr === "light") {
        setIsDark(false);
        return;
      }
      // No explicit theme attribute — follow system preference
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", update);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);

  return isDark;
}

export default function Sidebar({ isScrolled }: SidebarProps) {
  const location = useLocation();
  const isDark = useIsDarkTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome =
    location.pathname === "/" || location.pathname === "";

  // Close mobile menu on resize up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1225) setMenuOpen(false);
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

  // Close menu when navigating between pages
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  // Solid bar (bg + shadow) only after scroll, or while the mobile menu is open.
  const showSolidBar = isScrolled || menuOpen;

  // White logo only when floating over the dark home hero.
  // Everywhere else (other pages, or home after scroll): theme-aware logo.
  const overHero = isHome && !isScrolled && !menuOpen;
  const themeLogo = isDark ? sideLogoWht : sideLogoBlk;
  const logoSrc = overHero ? sideLogoWht : themeLogo;

  return (
    <header
      className={`top-sidebar ${showSolidBar ? "scrolled" : ""} ${overHero ? "over-hero" : ""} ${menuOpen ? "menu-open" : ""}`}
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
          <Link
            to="/"
            className={`nav-item ${isHome ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/resume"
            className={`nav-item ${location.pathname.startsWith("/resume") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Resume
          </Link>
          <Link
            to="/photography"
            className={`nav-item ${location.pathname.startsWith("/photography") ? "active" : ""}`}
            onClick={closeMenu}
          >
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
