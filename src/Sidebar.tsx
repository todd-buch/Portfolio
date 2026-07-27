import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Top Logo Space */}
      <div className="sidebar-logo">
        <img src="/src/assets/LogoBLK.png" alt="Todd Buch" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-item active">Page1</a>
        <a href="#projects" className="nav-item">Page2</a>
        <a href="#settings" className="nav-item">Page3</a>
      </nav>
    </aside>
  );
}