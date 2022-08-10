import { collection, getDocs } from "firebase/firestore";
import "firebase/compat/firestore";
import {firebase, database } from "../services/firebase";


export const Api = {
  getAllQuestions: async () => {
    console.log("fazendo requisicao api");
    let list = [];
    //let results = await getDocs(collection(db, "questions"));

    let results = await database.collection("questions").get();

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
