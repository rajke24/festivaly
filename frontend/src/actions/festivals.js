import axios from "axios";

import { FESTIVALS_LOADING, FESTIVALS_LOADED, FESTIVALS_LOAD_FAIL } from "./types";

export const loadFestivals = (festivalName="") => async (dispatch) => {
  dispatch({ type: FESTIVALS_LOADING})
    
  axios
    .get(`api/festivals/list?festival=${festivalName}`)
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
