import * as C from "./styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export const ModalNumber = ({
  setModal,
  setInputValueA,
  setInputValueB,
  setInputValueC,
  setInputValueD,
  positionInputQuestion,
}) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleButtonValueInsert = (positionInputQuestion, value) => {
    if (positionInputQuestion === "A") {
      setInputValueA(value);
      handleCloseModal();
    }
    if (positionInputQuestion === "B") {
      setInputValueB(value);
      handleCloseModal();
    }
    if (positionInputQuestion === "C") {
      setInputValueC(value);
      handleCloseModal();
    }
    if (positionInputQuestion === "D") {
      setInputValueD(value);
      handleCloseModal();
    }
  };

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <CloseOutlinedIcon onClick={handleCloseModal}></CloseOutlinedIcon>
        </C.AreaClose>
        <p>Selecione o valor</p>
        <C.Valores>
          <C.Button
            onClick={() => handleButtonValueInsert(positionInputQuestion, 1)}
          >
            1
          </C.Button>
          <C.Button
            onClick={() => handleButtonValueInsert(positionInputQuestion, 2)}
          >
            2
          </C.Button>
          <C.Button
            onClick={() => handleButtonValueInsert(positionInputQuestion, 3)}
          >
            3
          </C.Button>
          <C.Button
            onClick={() => handleButtonValueInsert(positionInputQuestion, 4)}
          >
            4
          </C.Button>
        </C.Valores>
      </C.Modal>
    </C.Container>
  );
};
