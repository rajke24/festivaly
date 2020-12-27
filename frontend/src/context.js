import React, { useContext, useState } from "react";
import { sublinks } from "./sublinks";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ pageName: "", links: [] });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSubmenu = (text, coordinates) => {
    const curPage = sublinks.find((sublink) => sublink.page === text);
    setPage(curPage);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSubmenuOpen, location, page, isSidebarOpen, openSubmenu, closeSubmenu, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider };
