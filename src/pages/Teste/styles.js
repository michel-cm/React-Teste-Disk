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
  background-color: rgba(0, 128, 0, 0.479);
  border-radius: 2px;
  height: 70px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-left: 16px;
`;
