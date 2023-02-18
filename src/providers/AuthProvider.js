import React, { useEffect, useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (user, password) => {
    if (user === "hackthenorth" && password === "2023!") {
      return true;
    }

    return false;
  };

  const signOut = () => {
    setUser(null);
  };

  const isSignedIn = () => {
    if (user != null) {
      return false;
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ signOut, signIn, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );

  //screen
};
