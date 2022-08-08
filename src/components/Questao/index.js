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

  const [state, setState] = useState("");

  const handler = (event) => {
    // changing the state to the name of the key
    // which is pressed
    setState(event.key);
  };

  console.log(state);

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
                  <input
                    type="number"
                    value={inputValueA}
                    onChange={(e) => setInputValueD(e.target.value)}
                    onClick={(e) => handleInput("A")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.b}</span>
                  <input
                    type="number"
                    value={inputValueB}
                    onChange={(e) => setInputValueD(e.target.value)}
                    onClick={(e) => handleInput("B")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.c}</span>
                  <input
                    type="number"
                    value={inputValueC}
                    onChange={(e) => setInputValueD(e.target.value)}
                    onClick={(e) => handleInput("C")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.d}</span>
                  <input
                    type="number"
                    value={inputValueD}
                    onChange={(e) => setInputValueD(e.target.value)}
                    onClick={(e) => handleInput("D")}
                  />
                </td>
              </tr>
            </tbody>
          </C.ContainerTabela>
        </div>
      ))}
      {modal === true && (
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
