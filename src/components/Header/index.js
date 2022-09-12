import * as C from "./style";

import { Link } from "react-router-dom";


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
            
            {user ? user.name : ""}
            {logoutArea ? (
             <div></div>
            ) : (
              <div></div>
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
