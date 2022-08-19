import { doc, setDoc, collection, getDocs, addDoc } from "firebase/firestore";
import "firebase/compat/firestore";
import { firebase, database } from "../services/firebase";

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

  addUser:async (id, name) => {
    await database.collection('users').doc(id).set({
      id,
      name,
    }, {merge:true});
  },

  getNameUser: async (id) => {
    let user = await database.collection('users').doc(id).get();
    let userData = user.data();
    return userData.name;
  },

  createDefaultCollectionAnswerUser: async (
    user,
    listQuestions,
    collectionDefaultUserAnswerCreated
  ) => {
    if (collectionDefaultUserAnswerCreated) {
      return;
    }
    if (user && listQuestions) {
      localStorage.setItem("collectionDefaultUserAnswerCreated", {id: user.id, create:true});
      let questaoA,
        questaoB,
        questaoC,
        questaoD = "";
      const docData = {
        data: new Date(),
        finalizado: false,
        idUser: user.id,
        predominancia: "",
        tempoExcedido: false,
        resultadoFinal: {
          totalA: 0,
          totalB: 0,
          totalC: 0,
          totalD: 0,
        },
      };

      await addDoc(collection(database, "respostas"), docData);
    }
  },
};
