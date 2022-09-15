import styled from "styled-components";

export const Container = styled.div`
  background-color: #3ab04d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Content = styled.div`
  color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 16px;

  p {
    font-size: 18px;
  }
`;

export const Logout = styled.div`
  cursor: pointer;
  margin-top: 32px;
  border: 1px solid #2261bc;
  padding: 8px 24px;
  color: #2261bc;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #2261bc;
    color: #f8f8f8;
  }
`;
