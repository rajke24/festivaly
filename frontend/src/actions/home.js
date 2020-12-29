import {
  OPEN_SUBMENU,
  OPEN_SIDEBAR,
  OPEN_LOGIN_MODAL,
  CLOSE_SUBMENU,
  CLOSE_SIDEBAR,
  CLOSE_LOGIN_MODAL,
} from "./types";

export const openSubmenu = (page, coordinates) => {
  return {
    type: OPEN_SUBMENU,
    payload: {page, coordinates}
  };
};

export const closeSubmenu = () => {
  return {
    type: CLOSE_SUBMENU,
  };
};

export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};

export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};

export const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL,
  };
};


export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL,
  };
};
