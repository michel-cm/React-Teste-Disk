import GlobalStyle from "./styles/global";

import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Instrucoes } from "./pages/Intrucoes";
import { Teste } from "./pages/Teste";


function App() {
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
  )
}

export default App;
