import { useState, useEffect } from "react";
import * as C from "./styles";
import { ModalNumber } from "../../components/ModalNumber";


export const Questao = ({ listQuestions }) => {
  const [inputValueA, setInputValueA] = useState();
  const [inputValueB, setInputValueB] = useState();
  const [inputValueC, setInputValueC] = useState();
  const [inputValueD, setInputValueD] = useState();
  const [position, setPosition] = useState("");
  const [modal, setModal] = useState(false);

  const handleInput = (position) => {
    setModal(true);
    setPosition(position);
  };

 
  return (
    <C.Container>
      {listQuestions.map((item, key) => (
        <div key={key} className="questao-item">
          <C.ContainerTituloPergunta>
            <h1 className="titulo"> {item.title} </h1>
          </C.ContainerTituloPergunta>

          <C.ContainerTabela>
            <tbody>
              <tr>
                <td>
                  <span>{item.a}</span>
                  <C.Input                     
                    validate={(inputValueA ? true : false)}
                    type="number"
                    disabled={modal}
                    value={inputValueA}
                    onChange={(e) => setInputValueA(e.target.value)}
                    onClick={() => handleInput("A")}
                    min={1}
                    max={4}
                  />                  
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.b}</span>
                  <C.Input
                    validate={(inputValueB ? true : false)}
                    type="number"
                    disabled={modal}
                    value={inputValueB}
                    onChange={(e) => setInputValueB(e.target.value)}
                    onClick={() => handleInput("B")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.c}</span>
                  <C.Input
                    validate={(inputValueC ? true : false)}
                    type="number"
                    disabled={modal}
                    value={inputValueC}
                    onChange={(e) => setInputValueC(e.target.value)}
                    onClick={() => handleInput("C")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.d}</span>
                  <C.Input
                    validate={(inputValueD ? true : false)}
                    disabled={modal}
                    type="number"
                    value={inputValueD}
                    onChange={(e) => setInputValueD(e.target.value)}
                    onClick={() => handleInput("D")}
                  />
                </td>
              </tr>
            </tbody>
          </C.ContainerTabela>
        </div>
      ))}
      {modal && (
        <ModalNumber
          setModal={setModal}
          setInputValueA={setInputValueA}
          setInputValueB={setInputValueB}
          setInputValueC={setInputValueC}
          setInputValueD={setInputValueD}
          position={position}
        />
      )}
    </C.Container>
  );
};
