import GlobalStyle from "./styles/global";

import { AuthContextProvider } from "./contexts/AuthContext";
import { TimerTestContextProvider } from "./contexts/TimerTestContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Instrucoes } from "./pages/Intrucoes";
import { Teste } from "./pages/Teste";
import { Finally } from "./pages/Finally";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <TimerTestContextProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/instrucoes" element={<Instrucoes />}></Route>
            <Route path="/teste" element={<Teste />}></Route>
            <Route path="/finalizado" element={<Finally />}></Route>
          </Routes>
        </TimerTestContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
