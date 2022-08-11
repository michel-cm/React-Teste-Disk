import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  align-items: stretch;
  text-align: center;
  background-color: #fff;
  padding: 32px;

  box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    align-self: center;
    margin-bottom: 16px;
  }
`;

export const ButtonGoogle = styled.div`  
  height: 50px;
  border-radius: 5px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
    width: 22px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.input`
  padding: 10px;
`;

export const Email = styled.input`
  padding: 10px;
  margin: 14px 0;
`;

export const Passoword = styled.input`
  padding: 10px;
`;

export const PassowordVerificy = styled.input`
  padding: 10px;
  margin: 14px 0;
`;

export const ButtonSubmitEmail = styled.button`
  border: none;
  cursor: pointer;
  height: 50px;
  border-radius: 5px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;
  transition: filter 0.3s;
  font-size: 15px;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Ou = styled.div`
  margin: 24px 0;
`;
