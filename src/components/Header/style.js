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
    display: flex;
    align-items: center;
  }

  button {
    border: none;
  }
  -webkit-touch-callout: none;  /* iPhone OS, Safari */
    -webkit-user-select: none;    /* Chrome, Safari 3 */
    -khtml-user-select: none;     /* Safari 2 */
    -moz-user-select: none;       /* Firefox */
    -ms-user-select: none;        /* IE10+ */
    user-select: none;            /* Possível implementação no futuro */
    /* cursor: default; */
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

export const LogoutArea = styled.div`
  background-color: #FFF;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 260px;
  border-radius:  0px 5px 5px 0px;
  position: top;
  z-index: 99;  

  button {    
    border: 0;
    background-color: #FFF;
    margin-top: 18px;
    cursor: pointer;
    font-weight: 500;
    height: 30px;
    width: 60px;
    display: flex;    
    font-size: 16px;     
    font-family: 'Roboto', 'sans-serif';

    &:hover {
      color: #2b6de6 ;
      
    }
  }
`;