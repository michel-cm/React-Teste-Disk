import * as C from "./style";

import { Link, Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const Header = ({ fnUpdateTimer, setModalInstrucoes }) => {
  const { user, logoutAccount } = useAuth();

  const [logoutArea, setLogoutArea] = useState(false);

  const handleLogoutModalOpen = () => {
    setLogoutArea(!logoutArea);
  };

  const handleLogout = async () => {
    await logoutAccount();
  };

  const handleUpdateTimer = async () => {
    setModalInstrucoes(true);
    await fnUpdateTimer();
  };

  return (
    <>
      <C.Container>
        <C.UserArea>
          <span onClick={handleLogoutModalOpen}>
            {user ? user.name : ""}
            {logoutArea ? <div></div> : <div></div>}
          </span>
        </C.UserArea>

        <C.Button onClick={handleUpdateTimer}>
          <p>Instruções</p>
        </C.Button>
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
