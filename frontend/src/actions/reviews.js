import axios from "axios";

import {
  FESTIVAL_REVIEWS_LOADED,
  FESTIVAL_REVIEWS_LOADING,
  CREATE_REVIEW,
  ADD_LIKE,
  ADD_DISLIKE,
  LIKES_LOADED,
  DISLIKES_LOADED,
  USER_ALREADY_LIKED,
} from "./types";

import { tokenConfig } from "./auth"

export const loadFestivalReviews = (festivalId) => (dispatch) => {
  dispatch({ type: FESTIVAL_REVIEWS_LOADING})

  axios
    .get(`/api/reviews/${festivalId}`)
    .then((res) => {
      dispatch({
        type: FESTIVAL_REVIEWS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createReview = (review) => async (dispatch, getState) => {
  const config = tokenConfig(getState);

  const body = JSON.stringify({ ...review });

  axios
    .post("/api/reviews/create/", body, config)
    .then((res) => {
      dispatch({
        type: CREATE_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addLike = (like) => async (dispatch, getState) => {
  const config = tokenConfig(getState);

  const body = JSON.stringify({ ...like });

  axios
    .post("/api/reviews/likes/create/", body, config)
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: ADD_LIKE,
          payload: res.data,
        });
      }
      console.log(res);
    })
    .catch((err) => {
      if (err.status === 409) {
        dispatch({ type: USER_ALREADY_LIKED });
      }
    });
};

export const loadLikes = (festivalId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .get(`/api/reviews/likes/${festivalId}`, config)
    .then((res) => {
      dispatch({
        type: LIKES_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addDislike = (dislike) => async (dispatch, getState) => {
  const config = tokenConfig(getState);

  const body = JSON.stringify({ ...dislike });

  axios
    .post("/api/reviews/dislikes/create/", body, config)
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: ADD_DISLIKE,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const loadDislikes = (festivalId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .get(`/api/reviews/dislikes/${festivalId}`, config)
    .then((res) => {
      dispatch({
        type: DISLIKES_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
