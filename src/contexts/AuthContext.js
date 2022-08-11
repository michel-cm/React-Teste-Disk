import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid,email } = user;

        if (!displayName) {
          throw new Error("Missing information from Google account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {   
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName) {
        throw new Error("Missing information from Google account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email
      });
    }
  }

  async function logoutWithGoogle() {   
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signOut(provider);    

      setUser(
        null
      );
    }
  
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle,logoutWithGoogle}}>
      {props.children}
    </AuthContext.Provider>
  );
}
