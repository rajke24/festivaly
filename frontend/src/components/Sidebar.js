import React from "react";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../sublinks";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../actions/home";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.home.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={() => dispatch(closeSidebar())}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
