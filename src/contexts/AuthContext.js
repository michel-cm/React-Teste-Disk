import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Api } from "../services/Api";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  async function getTesteCandidate(email) {
    await Api.getTesteUser(email)
      .then(async (candidate) => {
        setUser({
          ...candidate,
        });
      })
      .catch((err) => {
        console.log("erroor" + err);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        getTesteCandidate(email);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function logoutAccount() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function loginWithEmail(email, senha) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then(async () => {
        await getTesteCandidate(email);
      })
      .catch((error) => {
        alert("Erro - Verifique seus dados de acesso!");
      });
  }

  async function createAccount(email, senha, name) {
    // setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await Api.startAccountCandidate(user.email, name, user.uid);
      })
      .then(async () => {
        await getTesteCandidate(email);
      })
      .catch((error) => {
        alert("Erro - Verifique seus dados de acesso!");
      });
    //.finally(() => setIsLoading(false));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        getTesteCandidate,

        logoutAccount,
        loginWithEmail,
        createAccount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
