import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid #c9c9c9;

  Link {
    background-color: red;
    font-weight: bold;
    font-size: 28px;
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgba(92, 85, 85, 0.726);
  }

  span {
    padding-left: 4px;
  }
`;

export const Button = styled.div`
  padding: 8px 18px;
  color: #2b6de6;
  border-radius: 2px;
  outline: 1px solid #2b6de6;
  transition: 0.3s;

  &:hover {
    background-color: #2b6de6;

    p {
        color: #FFF;
    }
  }
`;
