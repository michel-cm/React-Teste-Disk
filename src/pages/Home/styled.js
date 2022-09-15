import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AreaAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  max-width: 480px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 10px;

  box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 24px;
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    margin-bottom: 48px;
  }

  input {
    font-size: 15px;
  }
`;

export const Name = styled.input`
  padding: 10px;
  width: 90%;
`;

export const Email = styled.input`
  padding: 10px;
  margin: 14px 0;
  width: 90%;
`;

export const Passoword = styled.input`
  padding: 10px;
  width: 90%;
`;

export const PassowordVerificy = styled.input`
  padding: 10px;
  margin: 14px 0;
  width: 90%;
`;

export const ButtonSubmitEmail = styled.button`
  border: none;
  cursor: pointer;
  height: 45px;
  border-radius: 50px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;
  transition: filter 0.3s;
  font-size: 14px;
  margin-top: 22px;
  width: 80%;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AreaSignUp = styled.div`
  margin-top: 70px;

  p {
    color: grey;
    margin-bottom: 8px;
  }

  span {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #ea4335;
    }
  }
`;
