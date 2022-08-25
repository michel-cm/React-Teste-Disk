import * as C from "./style";

import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const Header = () => {
  const { user, logoutAccount } = useAuth();

  const [logoutArea, setLogoutArea] = useState(false);

  const handleLogoutModalOpen = () => {
    setLogoutArea(!logoutArea);
  };

  const handleLogout = async () => {
    await logoutAccount();
  };

  return (
    <>
      <C.Container>
        <C.UserArea>
          <span onClick={handleLogoutModalOpen}>
            <AccountCircleOutlinedIcon
              style={{ color: "#2B6DE6", marginRight: "4px" }}
            />
            {user ? user.name : ""}
            {logoutArea ? (
              <ArrowDropDownOutlinedIcon style={{ color: "#2B6DE6" }} />
            ) : (
              <ArrowRightOutlinedIcon style={{ color: "#2B6DE6" }} />
            )}
          </span>
        </C.UserArea>
           
        <Link to={"/instrucoes"}>
          <C.Button>
            <p>Instruções</p>
          </C.Button>
        </Link>   
      </C.Container>
      {logoutArea && (
        <C.LogoutArea>
          <p>{user ? user.email : "Email ERROR"}</p>
          <button onClick={() => handleLogout()}>Sair</button>
        </C.LogoutArea>
      )}
    </>
  );
};
