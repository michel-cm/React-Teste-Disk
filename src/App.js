import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';

import { Teste } from "./pages/Teste";
import { Instrucoes } from "./pages/Intrucoes";
import { Home } from "./pages/Home";
import { AuthContextProvider } from './contexts/AuthContext';

export const App = () => {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/instrucoes" element={<Instrucoes />}></Route>
        <Route path="/teste" element={<Teste />}></Route>
      </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  );
};
