import {
  FESTIVALS_LOADING,
  FESTIVALS_LOADED,
  FESTIVALS_LOAD_FAIL,
  FESTIVAL_DETAILED_LOADED
} from "../actions/types";

const initialState = {
  isLoading: false,
  festivals: [],
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
    case FESTIVALS_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        festivals: [],
      };
      case FESTIVAL_DETAILED_LOADED:
        return {
          ...state,
          detailedFestival: action.payload
        }
    // case CREATE_REVIEW:
    //   state.festivals
    //     .find((festival) => {
    //       return festival.id === action.payload.festival;
    //     })
    //     .reviews.push(action.payload);
    //   return {
    //     ...state,
    //     isLoading: false,
    //     festivals: state.festivals,
    //   };
    default:
      return state;
  }
};

export default reducer;
