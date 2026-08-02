import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./useTheme";

interface SidebarProps {
  isScrolled: boolean;
}

/** Parse any CSS color the browser understands into [r, g, b] 0–255. */
function cssColorToRgb(color: string): [number, number, number] | null {
  if (!color) return null;

  // Fast path for #rgb / #rrggbb
  const hex = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) {
      h = h
        .split("")
        .map((c) => c + c)
        .join("");
    }
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  }

  // Let the browser resolve named colors, rgb(), hsl(), etc.
  const probe = document.createElement("div");
  probe.style.color = color;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  document.body.removeChild(probe);

  const match = resolved.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i,
  );
  if (!match) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

/** Relative luminance (WCAG). Higher = lighter. */
function relativeLuminance(r: number, g: number, b: number): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * True when --bg-primary is light enough that a dark (black) logo is needed
 * for contrast. Light bg → black logo; dark bg → white logo.
 */
function useIsPrimaryBgLight() {
  // Seed from data-theme set by the blocking script in index.html.
  const [isLight, setIsLight] = useState(() => {
    if (typeof document === "undefined") return true;
    return document.documentElement.getAttribute("data-theme") !== "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const bg = getComputedStyle(root).getPropertyValue("--bg-primary").trim();
      const rgb = cssColorToRgb(bg);
      if (!rgb) {
        // Fallback: only treat as dark when data-theme is explicitly dark.
        setIsLight(root.getAttribute("data-theme") !== "dark");
        return;
      }
      // 0.5 is a balanced midpoint; light cream (~0.88) and slate (~0.02) are clear.
      setIsLight(relativeLuminance(...rgb) > 0.5);
    };

    update();

    // Theme toggles flip data-theme on <html>.
    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme", "class", "style"],
    });

    // If dark mode is ever driven by prefers-color-scheme in CSS, pick that up.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", update);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);

  return isLight;
}

export default function Sidebar({ isScrolled }: SidebarProps) {
  const location = useLocation();
  const isPrimaryBgLight = useIsPrimaryBgLight();
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/" || location.pathname === "";

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
  // Everywhere else: opposite of --bg-primary so the mark stays readable
  // (light primary → black logo, dark primary → white logo).
  const overHero = isHome && !isScrolled && !menuOpen;
  const themeLogo = isPrimaryBgLight ? sideLogoBlk : sideLogoWht;
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
              href="https://www.instagram.com/toddbmedia/"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-social"
              aria-label="Instagram"
              onClick={closeMenu}
            >
              <FaInstagram size={22} />
            </a>
            <button
              type="button"
              className="nav-item nav-social theme-toggle"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? (
                <Sun size={22} strokeWidth={2.25} />
              ) : (
                <Moon size={22} strokeWidth={2.25} />
              )}
            </button>
          </div>
        </nav>

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
