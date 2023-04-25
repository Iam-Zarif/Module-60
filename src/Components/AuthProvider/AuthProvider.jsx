import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    signOut
}
    const [user, setUser] = useState(null);
    

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
return () =>{
    unsubscribe();
}
    },[])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading
  };
  return (
  <authContext.Provider value={authInfo}>
    {children}
    </authContext.Provider>);
};

export default AuthProvider;
