import { style } from "@mui/system";
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
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  img {
    width: 100px;
    align-self: center;
  }

  button {
    margin-top: 40px;
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
  }
`;
