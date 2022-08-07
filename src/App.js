import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Teste } from "./pages/Teste";
import { Instrucoes } from "./pages/Intrucoes";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Instrucoes />}></Route>
        <Route path="/teste" element={<Teste />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
