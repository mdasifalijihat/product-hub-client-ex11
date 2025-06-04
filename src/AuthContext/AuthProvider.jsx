import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // new user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   social login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   logout section
  const logOut = () => {
    return signOut(auth);
  };

  // update profile
  const updateUser = (user, profile) => {
    return updateProfile(user, profile);
  };
  //   onAuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curretnUser) => {
      setUser(curretnUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    logOut,
    createUser,
    signInUser,
    googleLogin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
