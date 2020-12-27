import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const [numColumns, setNumColumns] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    setNumColumns('col-2')
    if (links.length === 3) {
        setNumColumns('col-3')
    }
    if (links.length === 4) {
        setNumColumns('col-4')
    }
  }, [location]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${numColumns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
