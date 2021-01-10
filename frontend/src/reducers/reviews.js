import {
  FESTIVAL_REVIEWS_LOADED,
  CREATE_REVIEW,
  ADD_LIKE,
  ADD_DISLIKE,
  LIKES_LOADED,
  DISLIKES_LOADED,
  FESTIVAL_REVIEWS_LOADING,
} from "../actions/types";

const initialState = {
  festivalReviewsLoading: false,
  festivalReviews: [],
  likes: [],
  dislikes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FESTIVAL_REVIEWS_LOADED:
      return {
        ...state,
        festivalReviews: [...state.festivalReviews, ...action.payload],
        festivalReviewsLoading: false,
      };
    case CREATE_REVIEW:
      return {
        ...state,
        festivalReviews: [...state.festivalReviews, action.payload],
      };
    case ADD_LIKE:
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case ADD_DISLIKE:
      return {
        ...state,
        dislikes: [...state.dislikes, action.payload],
      };
    case LIKES_LOADED:
      return {
          ...state,
          likes: [...state.likes, ...action.payload]
      }
    case DISLIKES_LOADED:
      return {
          ...state,
          dislikes: [...state.dislikes, ...action.payload]
      }
    case FESTIVAL_REVIEWS_LOADING:
      return {
          ...state,
          festivalReviewsLoading: true,
      }
    default:
      return state;
  }
};

export default reducer;
