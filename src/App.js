import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Teste } from "./pages/Teste";
import { Instrucoes } from "./pages/Instrucoes";

import "./styles/Global.css";


export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Instrucoes />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
        </Routes>
    </BrowserRouter>
  );
};
