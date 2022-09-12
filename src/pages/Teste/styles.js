import styled from "styled-components";

export const Container = styled.div``;

export const TesteContainer = styled.div`
  margin: auto;
  max-width: 1032px;
  padding: 40px 16px 80px 16px;
`;

export const InfoTesteArea = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 20px;
    font-weight: 600;
    padding: 0px 8px;
  }
`;

export const InfoQuestaoAtual = styled.div`
  outline: 1px solid #2b6de6;
  border-radius: 2px;
  height: 70px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2b6de6;
  margin-right: 16px;
`;

export const InfoTempo = styled.div` 
  height: 70px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
  font-size: 18px;
  font-weight: bold;
  margin-left: 48px;
`;

export const Button = styled.button`
  background-color: #5a9bfc;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  color: #fff;
  font-weight: 500;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background-color: #ccc;
    filter: none;
    cursor: no-drop;
  }
`;
