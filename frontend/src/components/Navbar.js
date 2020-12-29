import React from "react";
import { FaBars } from "react-icons/fa";
import {
  openSubmenu,
  openLoginModal,
  openSidebar,
  closeSubmenu,
} from "../actions/home";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const displaySubmenu = (e) => {
    const linkName = e.target.textContent;
    const curLink = e.target.getBoundingClientRect();
    const center = (curLink.left + curLink.right) / 2;
    const bottom = curLink.bottom - 3;
    dispatch(openSubmenu(linkName, { center, bottom }));
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src="" alt=""/> */}
          <h3>Logo</h3>
          <button
            className="btn toggle-btn"
            onClick={() => dispatch(openSidebar())}
          >
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
      <button
        className="btn signin-btn"
        onClick={() => dispatch(openLoginModal())}
      >
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
