import "./Sidebar.css";
import sideLogo from '/src/assets/LogoWHT.png';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Top Logo Space */}
      <div className="sidebar-logo">
        <img src={sideLogo} alt="Todd Buch" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">Home</a>
        <a href="#" className="nav-item">Photography</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
      </nav>
    </aside>
  );
}