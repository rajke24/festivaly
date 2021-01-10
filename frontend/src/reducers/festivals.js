import {
  FESTIVALS_LOADING,
  FESTIVALS_LOADED,
  FESTIVALS_LOAD_FAIL,
  FESTIVAL_DETAILED_LOADED,
  TOP_FESTIVALS_LOADED,
  TOP_FESTIVALS_LOAD_FAIL,
} from "../actions/types";

const initialState = {
  isLoading: false,
  festivals: [],
  topFestivals: [],
  detailedFestival: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FESTIVALS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FESTIVALS_LOADED:
      return {
        ...state,
        isLoading: false,
        festivals: action.payload,
      };
    case TOP_FESTIVALS_LOADED:
      return {
        ...state,
        isLoading: false,
        topFestivals: action.payload,
      }
    case FESTIVALS_LOAD_FAIL:
    case TOP_FESTIVALS_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        festivals: [],
        topFestivals: [],
      };
    case FESTIVAL_DETAILED_LOADED:
      return {
        ...state,
        detailedFestival: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
