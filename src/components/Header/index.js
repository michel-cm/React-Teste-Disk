import * as C from "./style";

import { Link } from "react-router-dom";
import { Instrucoes } from "../../pages/Intrucoes";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Header = () => {
  return (
    <C.Container>
      <C.UserArea>
        <AccountCircleOutlinedIcon style={{ color: "#2B6DE6" }} />
        <span>Michel Corrêa Martins</span>
      </C.UserArea>
      
        <Link to={"/"}><C.Button><p>Instruções</p>
          </C.Button></Link>
    
    </C.Container>
  );
};
