import { collection, getDocs } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import firebaseConfig from "./firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const Api = {
  getAllQuestions: async () => {
    console.log("fazendo requisicao api");
    let list = [];
    //let results = await getDocs(collection(db, "questions"));

    let results = await db.collection("questions").get();

    results.forEach((result) => {
      let data = result.data();
      list.push({
        title: data.title,
        a: data.a,
        b: data.b,
        c: data.c,
        d: data.d,
      });
    });
    return list;
  },
};
