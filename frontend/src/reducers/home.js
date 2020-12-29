import {
  OPEN_SUBMENU,
  OPEN_SIDEBAR,
  OPEN_LOGIN_MODAL,
  CLOSE_SUBMENU,
  CLOSE_SIDEBAR,
  CLOSE_LOGIN_MODAL,
} from "../actions/types";
import { sublinks } from "../sublinks";

const initialState = {
  isSubmenuOpen: false,
  isSidebarOpen: false,
  isLoginModalOpen: false,
  page: { pageName: "", links: [] },
  location: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SUBMENU:
      const curPage = sublinks.find(
        (sublink) => sublink.page === action.payload.page
      );
      return {
        ...state,
        page: curPage,
        location: action.payload.coordinates,
        isSubmenuOpen: true,
      };
    case CLOSE_SUBMENU:
      return {
        ...state,
        isSubmenuOpen: false,
      };
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true,
      };
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: false,
      };
  }
  return state;
};

export default reducer;
