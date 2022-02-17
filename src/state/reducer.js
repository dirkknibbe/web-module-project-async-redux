import * as types from "./action-types";

const initialState = {
  price: {},
  isFetching: false,
  error: "",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        price: {},
        isFetching: true,
        error: "",
      };
    case types.FETCH_FAIL:
      return {
        ...state,
        price: {},
        isFetching: false,
        error: action.payload,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        price: action.payload,
        isFetching: false,
        error: "",
      };
    default:
      return state;
  }
};
