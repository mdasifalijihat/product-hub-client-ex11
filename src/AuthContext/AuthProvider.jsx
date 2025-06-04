import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
  // new user create
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   social login
const googleLogin = ()=>{
    return signInWithPopup(auth, provider); 
}


  const userInfo = {
    createUser,
    signInUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
