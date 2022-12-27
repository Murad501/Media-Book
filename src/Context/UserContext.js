import React, { createContext } from "react";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const authContext = createContext();

const UserContext = ({ children }) => {
  const authInfo = {
    auth,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
