import React from "react";
import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const TimerTestContext = createContext({});

export function TimerTestContextProvider(props) {
  const [timer, setTimer] = useState();

  const { user } = useAuth();

  useEffect(() => {
    if (user && !timer) {
      setTimer(user.timer - user.timerUsed);
    }
  }, [user]);

  return (
    <TimerTestContext.Provider
      value={{
        timer,
      }}
    >
      {props.children}
    </TimerTestContext.Provider>
  );
}
