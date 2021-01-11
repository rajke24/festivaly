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
    case FESTIVAL_REVIEWS_LOADING:
      return {
        ...state,
        festivalReviewsLoading: true,
      };
    case FESTIVAL_REVIEWS_LOADED:
      const reviewsLoaded = action.payload
      let found = reviewsLoaded.length > 0 && state.festivalReviews.some(item => item.id === reviewsLoaded[0].id )

      if (found) {
          return {
          ...state,
          festivalReviewsLoading: false
      }}
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
      const likesLoaded = action.payload;
      found =
        likesLoaded.length > 0 &&
        state.likes.some((item) => item.id === likesLoaded[0].id);

      if (found) {
        return {
          ...state,
          festivalReviewsLoading: false,
        };
      }
      return {
        ...state,
        likes: [...state.likes, ...action.payload],
      };
    case DISLIKES_LOADED:
      const dislikesLoaded = action.payload;
      found =
        dislikesLoaded.length > 0 &&
        state.dislikes.some((item) => item.id === dislikesLoaded[0].id);

      if (found) {
        return {
          ...state,
          festivalReviewsLoading: false,
        };
      }
      return {
        ...state,
        dislikes: [...state.dislikes, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
