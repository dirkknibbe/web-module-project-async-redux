import * as types from "./action-types";
import axios from "axios";

export const fetchBitcoinPrice = () => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then((res) => {
      dispatch(fetchSuccess(res.data.bpi.USD));
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};

export const fetchStart = () => {
  return { type: types.FETCH_START };
};

export const fetchSuccess = (price) => {
  return { type: types.FETCH_SUCCESS, payload: price };
};

export const fetchFail = (errorMessage) => {
  return { type: types.FETCH_FAIL, payload: errorMessage };
};
