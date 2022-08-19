import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Api } from "../services/Api";


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
      const { displayName, uid, email } = result.user;

      if (!displayName) {
        throw new Error("Missing information from Google account.");
      }

      
      setUser({
        id: uid,
        name: displayName,       
        email: email
      });  
       
      await Api.addUser(uid, displayName); 
    }
  }

  async function logoutWithGoogle() {   
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signOut(provider);    

      setUser(
        null
      );
    }

  async function createAccount(email, senha, nome) {
   // setIsLoading(true);
   const auth = getAuth();
   createUserWithEmailAndPassword(auth, email, senha)
   .then((userCredential) => {
     const user = userCredential.user;
     Api.addUser(user.uid, nome); 
     setUser({
       id: user.uid,
       name: nome,       
       email: user.email
      });       
  })
  .catch((error) => {
   console.log(error)    
  });
    //.finally(() => setIsLoading(false));
  }
  
  async function loginWithEmail(email, senha, nome) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => { 
        const user = userCredential.user;         
        setUser({
          id: user.id,
          name: nome,       
          email: user.email
        });

             console.log('LOGADOOOOOO')
      })
      .catch((error) => {
        console.log('xiii ' +error)
      });
  }
  
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle,logoutWithGoogle, createAccount, loginWithEmail}}>
      {props.children}
    </AuthContext.Provider>
  );
}
