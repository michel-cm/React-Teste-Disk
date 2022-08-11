import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  padding: 60px 0px 60px 0px;

  @media (max-width: 460px) {   
    padding: 60px 0px 24px 0px;
  }
  
`;

export const ContainerInstrucoes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 1100px;
  padding: 24px;
`;

export const TituloArea = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  padding-bottom: 48px;

  span {
    color: #ed3237;
  }
`;

export const AreaInstrucoes = styled.div`
  color: #7a7a7a;
`;

export const P1 = styled.p`
  line-height: 24px;
`;

export const P2 = styled.p`
  padding: 16px 0px;
`;

export const AreaExemploPergunta = styled.div`
  background-color: #f2f2f2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 64px 0px 64px;

  ol {
    padding-top: 8px;
  }

  li {
    padding-bottom: 4px;
  }

  @media (max-width: 460px) {
    margin: 10px 14px 0px 14px;
  }
`;

export const AreaExemplosResposta = styled.div`
  display: flex;
  margin: 32px 64px 48px 64px;
  gap: 32px;

  @media (max-width: 460px) {   
    margin : 24px 0px 24px 0px ;
    gap: 16px;
  }
`;

export const AreaRespostaIncorreta = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  flex: 1;

  ol {
    padding-left: 20px;
    padding-top: 16px;
  }

  span {
    font-weight: 500;
    color: #ed3237;
  }
  @media (max-width: 460px) {   
    padding: 16px;
  }
  
`;

export const AreaRespostaCorreta = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  flex: 1;

  ol {
    padding-left: 20px;
    padding-top: 16px;
  }

  span {
    font-weight: 500;
    color: #39b54a;
  }
  @media (max-width: 460px) {   
    padding: 18px 25px 18px 25px;
  }
  
`;

export const AreaLembrete = styled.div`
  p {
    padding-bottom: 12px;
  }
`;

export const Button = styled.button`
  background-color: #5a9bfc;
  padding: 12px 16px;
  border: none;
  color: #fff;
  font-weight: 800;
  width: 320px;
  margin-top: 24px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AreaTempo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  span {
    color: #39b54a;
    font-weight: 500;
  }
`;
