import * as C from "./styles";
import logo from "../../assets/Giro-Agro-logo.png";
import googleIconImg from "../../assets/google-icon.svg";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/instrucoes");
  }

  return (
    <C.Container>
      <C.AreaAccount>
        <img src={logo} alt="Giro Agro Logo"></img>
        <button onClick={handleCreateRoom}>
          <img src={googleIconImg} alt="logo do Google" />
          Entre com o Google
        </button>
      </C.AreaAccount>
    </C.Container>
  );
};
