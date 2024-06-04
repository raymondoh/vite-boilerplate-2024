import React from "react";
import { IS_LOADING } from "../actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
    //throw new Error(`No matching action type: ${action.type}`);
  }
};

export default authReducer;
