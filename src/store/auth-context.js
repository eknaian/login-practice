import React from "react";
import { useState, useEffect } from "react/cjs/react.production.min";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, passowrd) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}
  >
    {props.children}
  </AuthContext.Provider>;
};

export default AuthContext;
