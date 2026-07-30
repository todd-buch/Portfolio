import "./Sidebar.css";
import sideLogoWht from "/src/assets/LogoWHT.png";
import sideLogoBlk from "/src/assets/LogoBLK.png";

interface SidebarProps {
  isScrolled: boolean;
}

export default function Sidebar({ isScrolled }: SidebarProps) {
  return (
    <header className={`top-sidebar ${isScrolled ? "scrolled" : ""}`}>
      <aside className="sidebar">
        {/* Top Logo Space */}
        <div className="sidebar-logo">
          <img src={isScrolled ? sideLogoBlk : sideLogoWht} alt="Todd Buch" className="logo-img" />
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
        </nav>
      </aside>
    </header>
  );
}
