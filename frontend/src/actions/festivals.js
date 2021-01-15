import axios from "axios";

import {
  FESTIVALS_LOADING,
  FESTIVALS_LOADED,
  FESTIVALS_LOAD_FAIL,
  FESTIVAL_DETAILED_LOADED,
  TOP_FESTIVALS_LOADED,
  TOP_FESTIVALS_LOAD_FAIL,
  SINGLE_FESTIVAL_LOADING,
  FESTIVALS_FROM_YEAR_LOADED,
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

export const loadTopFestivals = () => async (dispatch) => {
  dispatch({ type: FESTIVALS_LOADING });

  axios
    .get(`/api/festivals/top/`)
    .then((res) => {
      dispatch({
        type: TOP_FESTIVALS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: TOP_FESTIVALS_LOAD_FAIL });
    });
};

export const loadFestival = (festivalId) => async (dispatch) => {
  dispatch({ type: SINGLE_FESTIVAL_LOADING})

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

export const loadYearFestivals = (year, country = "") => async (dispatch) => {
  console.log("Action: " + year)
  axios
    .get(`/api/festivals/calendar/?year=${year}&country=${country}`)
    .then((res) => {
      dispatch({
        type: FESTIVALS_FROM_YEAR_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};