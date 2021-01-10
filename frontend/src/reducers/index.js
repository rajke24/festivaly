import { combineReducers } from "redux";
import home from "./home";
import auth from "./auth";
import festivals from "./festivals";
import reviews from "./reviews";

const appReducer = combineReducers({
  home,
  auth,
  festivals,
  reviews,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;