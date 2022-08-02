import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Teste } from "./pages/Teste";
import { Home } from "./pages/Home";

export const App = () => {
 



  return (
    
    <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
        </Routes>          
    </BrowserRouter>
    
  );
};
