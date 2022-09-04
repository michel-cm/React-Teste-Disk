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


  startTeste: async (id,name,email, listQuestions) => {
    const testeUser = await database.collection("testes").doc(id).get();

    let currentTime;
    let time = await database.collection("timeTeste").get();    
    
    time.forEach((time) => {
      let data = time.data();
      currentTime = data
    });
   

    if (testeUser.exists) {
      return;
    } else {
      await database
        .collection("testes")
        .doc(id)
        .set(
          { 
            nome: name,
            email,
            currentQuestion: 0,
            questionsList: [...listQuestions],
            valoresQuestionsUser: [],            
            qtdQuestions: listQuestions.length,
            idUser: id,
            finalizado: false,
            tempoExcedido: false,
            totalCadaLetra: [],
            predominancia: "",
            tempoStart: new Date(),
          },
          { merge: true }
        );
    }
  },

  getTesteUser: async (idUser) => {
    console.log('reqqqqq')
    let result = await database.collection("testes").doc(idUser).get();

    let data = result.data();
    return data;
  },

  submitAnswerValues: async (
    idTeste,
    valoresUser,
    currentQuestion,
    finalizado,
    
  ) => {
    console.log(valoresUser);
    const testRef = doc(database, "testes", idTeste);
    await updateDoc(testRef, {      
      currentQuestion: currentQuestion + 1,
      finalizado,      
      valoresQuestionsUser: arrayUnion({
        title: currentQuestion,
        a: valoresUser[0],
        b: valoresUser[1],
        c: valoresUser[2],
        d: valoresUser[3],
      }),      
    });
  },

  finallyTest: async (idTeste, valoresTotais, predominancia, tempoExcedido) => {
    await database.collection("testes").doc(idTeste).set(
      {
        tempoEnd: new Date(),        
        predominancia: predominancia,
        totalCadaLetra: valoresTotais,
      },
      { merge: true }
    );
  },
};
