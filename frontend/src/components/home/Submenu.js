import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Submenu = () => {
  const { pageName, links } = useSelector((state) => state.home.page);
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const location = useSelector((state) => state.home.location);
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length === 4) {
      setColumns('col-4')
    }
  }, [location]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <h4>{pageName}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <Link to={url} key={index}>
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
