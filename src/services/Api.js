import {
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import "firebase/compat/firestore";
import { database } from "../services/firebase";

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

  addUser: async (id, name) => {
    await database.collection("users").doc(id).set(
      {
        idUser: id,
        name: name,
      },
      { merge: true }
    );
  },

  getUser: async (id) => {
    let user = await database.collection("users").doc(id).get();
    let userData = user.data();
    return userData;
  },

  startTeste: async (id, listQuestions) => {
    await database
      .collection("testes")
      .doc(id)
      .set(
        {
          questionsList: [...listQuestions],
          valoresQuestionsUser: [],
          tempo: 1200,
          qtdQuestions: listQuestions.length  ,
          idUser: id,
          finalizado: false,
          tempoExcedido: false,
          totalCadaLetra: { a: 0, b: 0, c: 0, d: 0 },
          predominancia: "",
        },
        { merge: true }
      );
  },

  getTesteUser: async (idUser) => {
    let result = await database.collection("testes").doc(idUser).get();

    let data = result.data();   
    return data;
  },

  submitAnswerValues: async (idTeste, valoresUser, currentQuestion) => {
    console.log(valoresUser);
    const testRef = doc(database, "testes", idTeste);
    await updateDoc(testRef, {
      valoresQuestionsUser: arrayUnion({
        a: valoresUser[0],
        b: valoresUser[1],
        c: valoresUser[2],
        d: valoresUser[3],
      }),
    });
  },

  finallyTest: async (idTeste, idUser, valoresTotais, predominancia, tempoExcedido) => {
   
    console.log(valoresTotais);

    await database.collection("testes").doc(idTeste).set(
      {
        tempo: 6000,
        finalizado: true,
        predominancia: "Dominante",
        totalCadaLetra: {}
      },
      { merge: true }
    );
  },
};
