import React from "react";
import { createContext, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/Api";

export const ControlsQuestionsContext = createContext({});

export const ControlsQuestionsContextProvider = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [allValues, setAllValues] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [currentTestUserBd, setCurrentTestUserBd] = useState();
  const [lastQuestion, setLastQuestion] = useState();

  const navigate = useNavigate();

  const { user } = useAuth();

  const getCurrentTest = async (userId) => {
    const testeUser = await Api.getTesteUser(userId);
    setCurrentTestUserBd(testeUser);
  };

  useEffect(() => {
    if (user && !currentTestUserBd) {
      getCurrentTest(user.id);
    } else {
      return;
    }
  }, [user, currentQuestion]);

  useEffect(() => {
    if (currentTestUserBd) {
      const qtd = currentTestUserBd.qtdQuestions;
      setLastQuestion(qtd);
      setcurrentQuestion(currentTestUserBd.currentQuestion)
    }
  }, [currentTestUserBd]);

  useEffect(() => {
    if(isDone) {
      navigate('/finally')
    }
  },[isDone])
 

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
        getCurrentTest
      }}
    >
      {props.children}
    </ControlsQuestionsContext.Provider>
  );
};
