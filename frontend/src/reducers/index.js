import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import home from "./home";

const appReducer = combineReducers({
  form: formReducer,
  home,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;