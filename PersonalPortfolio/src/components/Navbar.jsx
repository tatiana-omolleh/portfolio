import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">TO</div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
export default Navbar;