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

import { database, firebase } from "../services/firebase";

export const Api = {
  getListCandidatesPermissions: async () => {
    // USOOO
    let list = [];
    console.log("req:getListCandidatesPermissions");
    let results = await database.collection("testes").get();

    results.forEach((result) => {
      let data = result.data();
      list.push({
        email: data.email,
      });
    });
    return list;
  },

  startAccountCandidate: async (emailUser, idUser, cel,city) => {
    const candidateTestRef = doc(database, "testes", emailUser);
    await updateDoc(candidateTestRef, {      
      idUser,
      cel,
      city
    });
  },

  startTeste: async ({ email }) => {
    const created = firebase.firestore.Timestamp.fromDate(new Date()).toDate();

    const candidateTestRef = doc(database, "testes", email);
    await updateDoc(candidateTestRef, {
      tempoStart: created,
    });
  },

  updateTimer: async ({ email, timer }, timerActual) => {
    console.log("fui chamado pra update timer .... ");
    const candidateTestRef = doc(database, "testes", email);
    await updateDoc(candidateTestRef, {
      timerUsed: timer - timerActual,
    });
  },

  getTesteUser: async (userEmail) => {
    let result = await database.collection("testes").doc(userEmail).get();

    let data = result.data();
    return data;
  },

  submitAnswerValues: async (userAnswers, user) => {
    const testRef = doc(database, "testes", user.email);
    await updateDoc(testRef, {
      currentQuestion: user.currentQuestion + 1,
      valoresQuestionsUser: arrayUnion({
        title: user.currentQuestion,
        a: userAnswers[0],
        b: userAnswers[1],
        c: userAnswers[2],
        d: userAnswers[3],
      }),
    });
  },

  finallyTest: async (user, valoresTotais, predominancia) => {
    const created = firebase.firestore.Timestamp.fromDate(new Date()).toDate();

    const testRef = doc(database, "testes", user.email);
    await updateDoc(testRef, {
      tempoEnd: created,
      finalizado: true,
      predominancia: predominancia,
      totalCadaLetra: valoresTotais,
    });
  },
};
