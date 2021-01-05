import { FESTIVALS_LOADING, FESTIVALS_LOADED, FESTIVALS_LOAD_FAIL } from "../actions/types";

const initialState = {
  isLoading: false,
  festivals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FESTIVALS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case FESTIVALS_LOADED:
      return {
        ...state,
        isLoading: false,
        festivals: action.payload,
      };
    case FESTIVALS_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        festivals: [],
      }
    default:
      return state;
  }
};

export default reducer;
