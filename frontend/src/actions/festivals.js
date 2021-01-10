import axios from "axios";

import {
  FESTIVALS_LOADING,
  FESTIVALS_LOADED,
  FESTIVALS_LOAD_FAIL,
  FESTIVAL_DETAILED_LOADED,
} from "./types";

export const loadFestivals = (festivalName = "") => async (dispatch) => {
  dispatch({ type: FESTIVALS_LOADING });

  axios
    .get(`/api/festivals/?festival=${festivalName}`)
    .then((res) => {
      dispatch({
        type: FESTIVALS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: FESTIVALS_LOAD_FAIL });
    });
};

export const loadFestival = (festivalId) => async (dispatch) => {
  axios
    .get(`/api/festivals/${festivalId}`)
    .then((res) => {
      dispatch({
        type: FESTIVAL_DETAILED_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};