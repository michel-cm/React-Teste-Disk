import React from "react";
import { createContext, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";

import { Api } from "../services/Api";

export const ControlsQuestionsContext = createContext({});

export const ControlsQuestionsContextProvider = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [allValues, setAllValues] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [currentTestUserBd, setCurrentTestUserBd] = useState();
  const [lastQuestion, setLastQuestion] = useState();

  const { user } = useAuth();

  const getCurrentTest = async () => {
    const testeUser = await Api.getTesteUser(user.id);
    setCurrentTestUserBd(testeUser);
  };

  useEffect(() => {
    if (user && !currentTestUserBd) {
      getCurrentTest();
    } else {
      return;
    }
  }, [user, currentQuestion]);

  useEffect(() => {
    if (currentTestUserBd) {
      const qtd = currentTestUserBd.qtdQuestions;
      setLastQuestion(qtd);
    }
  }, [currentTestUserBd]);

  return (
    <ControlsQuestionsContext.Provider
      value={{
        isDone,
        setIsDone,
        currentQuestion,
        setcurrentQuestion,
        allValues,
        setAllValues,
        currentTestUserBd,
        lastQuestion,
      }}
    >
      {props.children}
    </ControlsQuestionsContext.Provider>
  );
};
