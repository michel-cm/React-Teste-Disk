import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;
`;

export const Modal = styled.div`
  background-color: #f2f2f2;
  padding: 24px 32px;
  border-radius: 10px;
`;

export const Valores = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  gap: 40px;
`;

export const Button = styled.button`
  border: none;
  padding: 16px;
  border-radius: 10%;
  background-color: #5a9bfc;
  color: #fff;
  font-family: "Poppins", "sans-serif";
  width: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
    filter: none;
  }
`;

export const AreaClose = styled.div`
  text-align: end;
  padding-bottom: 8px;

  svg {
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #ed3237;
    }
  }
`;
