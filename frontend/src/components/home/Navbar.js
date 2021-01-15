import React from "react";
import { FaBars } from "react-icons/fa";
import {
  openSubmenu,
  openLoginModal,
  openSidebar,
  closeSubmenu,
} from "../../actions/home";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch();
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const displaySubmenu = (e) => {
    const linkName = e.target.textContent;
    const curLink = e.target.getBoundingClientRect();
    const center = (curLink.left + curLink.right) / 2;
    const bottom = curLink.bottom - 3;
    dispatch(openSubmenu(linkName, { center, bottom }));
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn") && isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu} style={{background: "#000"}}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src="" alt=""/> */}
          <Link to="/">
            <h3>Logo</h3>
          </Link>
          <button
            className="btn home-btn toggle-btn"
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
      {isAuthenticated ? (
        <button className="btn home-btn" onClick={() => dispatch(logout())}>
          Log out
        </button>
      ) : (
        <button
          className="btn home-btn"
          onClick={() => dispatch(openLoginModal())}
        >
          Sign in
        </button>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Navbar;
