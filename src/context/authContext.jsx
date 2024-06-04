import { createContext, useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/authReducer"; // Import the authReducer function
import { IS_LOADING } from "../actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false
};

// 1. Create a context
const AuthContext = createContext();

// 2. Create a provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // set loading
  const setLoading = value => {
    dispatch({
      type: IS_LOADING,
      payload: value
    });
  };

  return <AuthContext.Provider value={{ ...state, setLoading }}>{children}</AuthContext.Provider>;
};

// 3. Create a custom hook
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
