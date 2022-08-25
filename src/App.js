import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { Teste } from "./pages/Teste";
import { Instrucoes } from "./pages/Intrucoes";
import { Finally } from "./pages/Finally";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ControlsQuestionsContextProvider } from "./contexts/ControlsQuestionsContext";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ControlsQuestionsContextProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/instrucoes" element={<Instrucoes />}></Route>
            <Route path="/teste" element={<Teste />}></Route>
            <Route path="/finally" element={<Finally />}></Route>
          </Routes>
        </ControlsQuestionsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
