import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
`;

export const ContainerTituloPergunta = styled.div`
  border-radius: 6px 6px 0 0;
  background-color: #2b6de6;
  border-radius: 1px;
  padding: 20px 16px;

  h1 {
    color: #fff;
    font-size: 17px;
    font-weight: 300;
  }
`;

export const ContainerTabela = styled.table`
  box-sizing: border-box;
  width: 100%;
  font-family: "Poppins";
  box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.19);

  span {
    font-weight: 300;
    font-size: 15x;
    margin-right: 24px;
  }

  td {
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.418);
    border-top: none;
    border-right: none;
    border-left: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
`;

export const ButtonOverLay = styled.button`
  border: none;
`;

export const Input = styled.input`
  border: none;
  background-color: #f7f7f7;
  border: ${(props) =>
    props.validate
      ? " 2px solid rgba(35,142,35)"
      : " 2px solid rgba(255, 0, 0, 0.438)"};
  width: 60px;
  height: 45px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #444;
  cursor: pointer;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
