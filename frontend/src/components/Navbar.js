import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = useGlobalContext();

  const displaySubmenu = (e) => {
    const linkName = e.target.textContent;
    const currentLink = e.target.getBoundingClientRect();
    const bottom = currentLink.bottom - 3;
    const center = (currentLink.left + currentLink.right) / 2;
    openSubmenu(linkName, { bottom, center });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src="" alt=""/> */}
          <h3>Logo</h3>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              festivals
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              concerts
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              artists
            </button>
          </li>
        </ul>
      </div>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
