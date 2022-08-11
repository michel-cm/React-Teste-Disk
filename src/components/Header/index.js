import * as C from "./style";

import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { user } = useAuth();

  return (
    <C.Container>
      <C.UserArea>
        <AccountCircleOutlinedIcon style={{ color: "#2B6DE6" }} />
        <span>{user ? user.name : ""}</span>
      </C.UserArea>

      <Link to={"/instrucoes"}>
        <C.Button>
          <p>Instruções</p>
        </C.Button>
      </Link>
    </C.Container>
  );
};
