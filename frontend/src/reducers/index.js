import { combineReducers } from "redux";
import home from "./home";
import auth from "./auth";

const appReducer = combineReducers({
  home,
  auth,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;