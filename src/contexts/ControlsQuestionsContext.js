import React from "react";
import { createContext, useEffect, useState } from "react";

import { Api } from "../services/Api";

export const ControlsQuestionsContext = createContext({});

export const ControlsQuestionsContextProvider = (props) => { 

  const [isDone, setIsDone] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState();


  return (
    <ControlsQuestionsContext.Provider
      value={{
        isDone,        
        currentQuestion,       
        lastQuestion,
        setcurrentQuestion,
        setLastQuestion
      }}
    >
      {props.children}
    </ControlsQuestionsContext.Provider>
  );
};
