import { useState, useEffect } from "react";
import * as C from "./styles";
import { ModalNumber } from "../../components/ModalNumber";
import { Valores } from "../ModalNumber/styles";
import { border } from "@mui/system";

export const Questao = ({ listQuestions, setUserAnswers }) => {
  const [inputValueA, setInputValueA] = useState("");
  const [inputValueB, setInputValueB] = useState("");
  const [inputValueC, setInputValueC] = useState("");
  const [inputValueD, setInputValueD] = useState("");
  const [position, setPosition] = useState("");
  const [modal, setModal] = useState(false);

  const handleInput = (position) => {
    setModal(true);
    setPosition(position);
  };

  let valoresInputs = [];
  useEffect(() => {
    if (position !== "") {
      valoresInputs = [inputValueA, inputValueB, inputValueC, inputValueD];
      setUserAnswers(valoresInputs);
    }
  }, [inputValueA, inputValueB, inputValueC, inputValueD]);

  

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
                  <C.ButtonOverLay onClick={() => handleInput("A")}>
                    <C.Input
                      validate={
                        inputValueA &&
                        inputValueA !== inputValueB &&
                        inputValueA !== inputValueC &&
                        inputValueA !== inputValueD
                          ? true
                          : false
                      }
                      type="number"
                      disabled
                      value={inputValueA}
                      onChange={(e) => setInputValueA(e.target.value)}
                    />
                  </C.ButtonOverLay>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.b}</span>
                  <C.ButtonOverLay onClick={() => handleInput("B")}>
                    <C.Input
                      validate={
                        inputValueB &&
                        inputValueB !== inputValueA &&
                        inputValueB !== inputValueC &&
                        inputValueB !== inputValueD
                          ? true
                          : false
                      }
                      type="number"
                      disabled
                      value={inputValueB}
                      onChange={(e) => setInputValueB(e.target.value)}
                      onClick={() => handleInput("B")}
                    />
                  </C.ButtonOverLay>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.c}</span>
                  <C.ButtonOverLay onClick={() => handleInput("C")}>
                    <C.Input
                      validate={
                        inputValueC &&
                        inputValueC !== inputValueA &&
                        inputValueC !== inputValueB &&
                        inputValueC !== inputValueD
                          ? true
                          : false
                      }
                      type="number"
                      disabled
                      value={inputValueC}
                      onChange={(e) => setInputValueC(e.target.value)}
                      onClick={() => handleInput("C")}
                    />
                  </C.ButtonOverLay>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.d}</span>
                  <C.ButtonOverLay onClick={() => handleInput("D")}>
                    <C.Input
                      validate={
                        inputValueD &&
                        inputValueD !== inputValueA &&
                        inputValueD !== inputValueB &&
                        inputValueD !== inputValueC
                          ? true
                          : false
                      }
                      disabled
                      type="number"
                      value={inputValueD}
                      onChange={(e) => setInputValueD(e.target.value)}
                      onClick={() => handleInput("D")}
                    />
                  </C.ButtonOverLay>
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
          positionInputQuestion={position}
        />
      )}
    </C.Container>
  );
};
