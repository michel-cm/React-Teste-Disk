import * as C from "./styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const ModalNumber = ({
  setModal,
  setInputValueA,
  setInputValueB,
  setInputValueC,
  setInputValueD,
  position,
}) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleButtonValueInsert = (position, value) => {
    if (position === "A") {
        setInputValueA(value)
        handleCloseModal();
    }
    if (position === "B") {
        setInputValueB(value)
        handleCloseModal();
    }
    if (position === "C") {
        setInputValueC(value)
        handleCloseModal();
    }
    if (position === "D") {
        setInputValueD(value)
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
          <C.Button onClick={() => handleButtonValueInsert(position, 1)}>1</C.Button>
          <C.Button onClick={() => handleButtonValueInsert(position, 2)}>2</C.Button>
          <C.Button onClick={() => handleButtonValueInsert(position, 3)}>3</C.Button>
          <C.Button onClick={() => handleButtonValueInsert(position, 4)}>4</C.Button>
        </C.Valores>
      </C.Modal>
    </C.Container>
  );
};
