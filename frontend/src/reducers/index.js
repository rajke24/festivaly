import { combineReducers } from "redux";
import home from "./home";
import auth from "./auth";
import festivals from "./festivals";

const appReducer = combineReducers({
  home,
  auth,
  festivals,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;